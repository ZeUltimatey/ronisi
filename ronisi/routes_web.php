<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\RegistrationAdminController;
use App\Http\Controllers\EventRegistrationController;
use App\Http\Controllers\PageViewController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('web')->group(function () {
    Route::get('/', [PageViewController::class, 'home'])->name('home');
    Route::get('/aktualais', fn () => Inertia::render('InfoPage', ['slug' => 'aktualais']))->name('news');
    Route::get('/ka-sagatavoties', fn () => Inertia::render('InfoPage', ['slug' => 'ka-sagatavoties']))->name('prepare');
    Route::get('/par-mums', fn () => Inertia::render('InfoPage', ['slug' => 'par-mums']))->name('about');
    Route::get('/atbalstitaji', fn () => Inertia::render('InfoPage', ['slug' => 'atbalstitaji']))->name('supporters');
    Route::get('/organizatori', fn () => Inertia::render('InfoPage', ['slug' => 'organizatori']))->name('organizers');
    Route::get('/galerija', fn () => Inertia::render('Gallery'))->name('gallery');
    Route::get('/pieteiksanas', [EventRegistrationController::class, 'create'])->name('registration.create');
    Route::post('/pieteiksanas', [EventRegistrationController::class, 'store'])->name('registration.store');
    Route::get('/norise', fn () => Inertia::render('InfoPage', ['slug' => 'norise']))->name('schedule');
    Route::get('/sporta-veidi', fn () => Inertia::render('InfoPage', ['slug' => 'sporta-veidi']))->name('sports');
    Route::get('/teritorija', fn () => Inertia::render('InfoPage', ['slug' => 'teritorija']))->name('area');
    Route::get('/buj', fn () => Inertia::render('InfoPage', ['slug' => 'buj']))->name('faq');
    Route::get('/kontakti', fn () => Inertia::render('InfoPage', ['slug' => 'kontakti']))->name('contacts');

    Route::middleware(['auth', 'verified'])->prefix('admin')->name('admin.')->group(function () {
        Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
        Route::get('/registrations', [RegistrationAdminController::class, 'index'])->name('registrations');
        Route::get('/registrations.csv', [RegistrationAdminController::class, 'csv'])->name('registrations.csv');
    });
});
