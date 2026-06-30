<?php

namespace App\Http\Controllers;

use App\Models\PageView;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageViewController extends Controller
{
    public function home(Request $request)
    {
        $this->track($request);
        return Inertia::render('Home');
    }

    protected function track(Request $request): void
    {
        PageView::create([
            'path' => $request->path() === '/' ? '/' : '/' . $request->path(),
            'ip_hash' => hash('sha256', (string) $request->ip()),
            'user_agent' => substr((string) $request->userAgent(), 0, 500),
            'referer' => substr((string) $request->headers->get('referer'), 0, 500),
            'viewed_at' => now(),
        ]);
    }
}
