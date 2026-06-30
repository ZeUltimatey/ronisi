<?php

namespace App\Http\Controllers;

use App\Models\EventRegistration;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EventRegistrationController extends Controller
{
    public function create()
    {
        return Inertia::render('Registration');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required','string','max:160'],
            'email' => ['required','email','max:190'],
            'phone' => ['nullable','string','max:60'],
            'team_name' => ['nullable','string','max:160'],
            'organization' => ['nullable','string','max:160'],
            'sports' => ['required','array','min:1'],
            'sports.*' => ['string','max:80'],
            'participants_count' => ['required','integer','min:1','max:200'],
            'notes' => ['nullable','string','max:2000'],
        ]);

        $validated['ip_address'] = $request->ip();
        $validated['user_agent'] = substr((string) $request->userAgent(), 0, 500);

        EventRegistration::create($validated);

        return back()->with('success', 'Pieteikums saņemts. Tiekamies Ronīšos!');
    }
}
