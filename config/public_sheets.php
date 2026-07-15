<?php

return [
    'results_url' => env('GOOGLE_SHEET_RESULTS_CSV_URL'),
    'judges_url' => env('GOOGLE_SHEET_JUDGES_CSV_URL'),
    'cache_seconds' => (int) env('GOOGLE_SHEET_CACHE_SECONDS', 60),
];
