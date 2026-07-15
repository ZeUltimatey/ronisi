<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\RegistrationAdminController;
use App\Http\Controllers\EventRegistrationController;
use App\Http\Controllers\PublicSheetController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn () => Inertia::render('Home'))->name('home');

Route::get('/aktualais', fn () => Inertia::render('ContentPage', ['pageKey' => 'news']))->name('news');
Route::get('/ka-sagatavoties', fn () => Inertia::render('ContentPage', ['pageKey' => 'preparation']))->name('preparation');
Route::get('/par-mums', fn () => Inertia::render('ContentPage', ['pageKey' => 'about']))->name('about');
Route::get('/atbalstitaji', fn () => Inertia::render('ContentPage', ['pageKey' => 'supporters']))->name('supporters');
Route::get('/organizatori', fn () => Inertia::render('ContentPage', ['pageKey' => 'organizers']))->name('organizers');
Route::get('/galerija', fn () => Inertia::render('Gallery'))->name('gallery');
Route::get('/sporta-veidi', fn () => Inertia::render('Sports'))->name('sports');
Route::get('/buj', fn () => Inertia::render('FAQ'))->name('faq');
Route::get('/kontakti', fn () => Inertia::render('Contacts'))->name('contacts');

Route::get('/pieteiksanas', [EventRegistrationController::class, 'create'])->name('registration.create');
Route::post('/pieteiksanas', [EventRegistrationController::class, 'store'])
    ->middleware('throttle:10,1')
    ->name('registration.store');
Route::redirect('/pieteiksanas/sporta-speles', '/pieteiksanas', 301);
Route::get('/pieteiksanas/pusdienas', fn () => Inertia::render('ContentPage', ['pageKey' => 'lunch']))->name('registration.lunch');
Route::get('/pieteiksanas/naktsmitnes', fn () => Inertia::render('ContentPage', ['pageKey' => 'lodging']))->name('registration.lodging');

Route::get('/laika-plans', fn () => Inertia::render('Timetable'))->name('timetable');
Route::redirect('/norise', '/laika-plans', 301);
Route::get('/karte', fn () => Inertia::render('Map'))->name('map');
Route::redirect('/teritorija', '/karte', 301);
Route::get('/uzvaretaji', fn () => Inertia::render('Winners'))->name('winners');
Route::get('/rezultati', fn () => Inertia::render('SheetTable', [
    'kind' => 'results',
    'title' => 'Rezultāti',
    'subtitle' => 'Komandu punkti un vietu sadalījums',
]))->name('results');
Route::get('/tiesnesi', fn () => Inertia::render('SheetTable', [
    'kind' => 'judges',
    'title' => 'Tiesnešu sadaļa',
    'subtitle' => 'Disciplīnu vērtējumi un piešķirtie punkti',
]))->name('judges');
Route::get('/dati/{kind}', [PublicSheetController::class, 'show'])
    ->whereIn('kind', ['results', 'judges'])
    ->middleware('throttle:60,1')
    ->name('public-data.show');

Route::get('/dashboard', fn () => redirect()->route('admin.dashboard'))
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::middleware(['auth', 'verified'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/registrations', [RegistrationAdminController::class, 'index'])->name('registrations');
    Route::get('/registrations.csv', [RegistrationAdminController::class, 'csv'])->name('registrations.csv');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
