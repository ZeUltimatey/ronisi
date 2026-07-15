<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Throwable;

class PublicSheetController extends Controller
{
    public function show(string $kind): JsonResponse
    {
        abort_unless(in_array($kind, ['results', 'judges'], true), 404);

        $url = config("public_sheets.{$kind}_url");
        if (! $url) {
            return response()->json([
                'configured' => false,
                'headers' => [],
                'rows' => [],
                'message' => 'Google Sheets CSV saite vēl nav konfigurēta.',
            ]);
        }

        try {
            $data = Cache::remember(
                "public-sheet:{$kind}",
                config('public_sheets.cache_seconds', 60),
                fn () => $this->loadCsv($url)
            );

            return response()->json(['configured' => true, ...$data]);
        } catch (Throwable $exception) {
            report($exception);

            return response()->json([
                'configured' => true,
                'headers' => [],
                'rows' => [],
                'message' => 'Datus pašlaik neizdevās ielādēt. Pārbaudi publicētās Google Sheets CSV saites pieejamību.',
            ], 503);
        }
    }

    private function loadCsv(string $url): array
    {
        $response = Http::timeout(10)->retry(2, 250)->get($url)->throw();
        $stream = fopen('php://temp', 'r+');
        fwrite($stream, $response->body());
        rewind($stream);

        $records = [];
        while (($row = fgetcsv($stream)) !== false) {
            if (count(array_filter($row, fn ($cell) => trim((string) $cell) !== '')) > 0) {
                $records[] = array_map(fn ($cell) => trim((string) $cell), $row);
            }
        }
        fclose($stream);

        if ($records === []) {
            return ['headers' => [], 'rows' => [], 'updatedAt' => now()->toIso8601String()];
        }

        $headers = array_shift($records);
        $width = count($headers);
        $rows = array_map(function (array $row) use ($width) {
            return array_slice(array_pad($row, $width, ''), 0, $width);
        }, $records);

        return ['headers' => $headers, 'rows' => $rows, 'updatedAt' => now()->toIso8601String()];
    }
}
