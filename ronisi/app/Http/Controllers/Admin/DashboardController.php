<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\EventRegistration;
use App\Models\PageView;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $views = PageView::query()->count();
        $uniqueVisitors = PageView::query()->distinct('ip_hash')->count('ip_hash');
        $signups = EventRegistration::query()->count();
        $participants = EventRegistration::query()->sum('participants_count');

        $popularPages = PageView::query()
            ->selectRaw('path, count(*) as total')
            ->groupBy('path')
            ->orderByDesc('total')
            ->limit(10)
            ->get();

        $latestRegistrations = EventRegistration::query()
            ->latest()
            ->limit(8)
            ->get(['id','name','team_name','organization','participants_count','sports','created_at']);

        return Inertia::render('Admin/Dashboard', compact('views','uniqueVisitors','signups','participants','popularPages','latestRegistrations'));
    }
}
