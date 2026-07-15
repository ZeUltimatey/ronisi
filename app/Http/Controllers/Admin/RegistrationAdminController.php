<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\EventRegistration;
use Inertia\Inertia;

class RegistrationAdminController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Registrations', [
            'registrations' => EventRegistration::latest()->paginate(30),
        ]);
    }

    public function csv()
    {
        $rows = EventRegistration::latest()->get();
        $headers = ['Content-Type' => 'text/csv', 'Content-Disposition' => 'attachment; filename="ronisi-registrations.csv"'];

        return response()->stream(function () use ($rows) {
            $out = fopen('php://output', 'w');
            fputcsv($out, ['Name','Email','Phone','Team','Organization','Sports','Participants','Notes','Created']);
            foreach ($rows as $row) {
                fputcsv($out, [$row->name,$row->email,$row->phone,$row->team_name,$row->organization,implode(', ', $row->sports ?? []),$row->participants_count,$row->notes,$row->created_at]);
            }
            fclose($out);
        }, 200, $headers);
    }
}
