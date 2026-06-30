<?php
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn () => Inertia::render('Home'));
Route::get('/aktualais', fn () => Inertia::render('ContentPage', ['pageKey' => 'news']));
Route::get('/ka-sagatavoties', fn () => Inertia::render('ContentPage', ['pageKey' => 'preparation']));
Route::get('/par-mums', fn () => Inertia::render('ContentPage', ['pageKey' => 'about']));
Route::get('/atbalstitaji', fn () => Inertia::render('ContentPage', ['pageKey' => 'supporters']));
Route::get('/organizatori', fn () => Inertia::render('ContentPage', ['pageKey' => 'organizers']));
Route::get('/galerija', fn () => Inertia::render('Gallery'));
Route::get('/pieteiksanas/sporta-speles', fn () => Inertia::render('ContentPage', ['pageKey' => 'registration']));
Route::get('/pieteiksanas/pusdienas', fn () => Inertia::render('ContentPage', ['pageKey' => 'lunch']));
Route::get('/pieteiksanas/naktsmitnes', fn () => Inertia::render('ContentPage', ['pageKey' => 'lodging']));
Route::get('/norise', fn () => Inertia::render('ContentPage', ['pageKey' => 'schedule']));
Route::get('/sporta-veidi', fn () => Inertia::render('Sports'));
Route::get('/teritorija', fn () => Inertia::render('ContentPage', ['pageKey' => 'area']));
Route::get('/buj', fn () => Inertia::render('FAQ'));
Route::get('/kontakti', fn () => Inertia::render('Contacts'));
