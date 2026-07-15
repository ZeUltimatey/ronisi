npm run build
php artisan serve --host=127.0.0.1 --port=3006

Open http://localhost:3006

## Publiskās sadaļas un Google Sheets

Publiski pieejamie maršruti ir definēti `routes/web.php`, tostarp:

- `/uzvaretaji`
- `/karte`
- `/laika-plans`
- `/rezultati`
- `/tiesnesi`
- `/pieteiksanas`

Rezultātu un tiesnešu dati tiek lasīti no publicēta Google Sheets CSV caur Laravel endpointu (`/dati/results` un `/dati/judges`). `.env` failā norādi:

```env
GOOGLE_SHEET_RESULTS_CSV_URL="https://docs.google.com/spreadsheets/d/e/.../pub?output=csv"
GOOGLE_SHEET_JUDGES_CSV_URL="https://docs.google.com/spreadsheets/d/e/.../pub?output=csv"
GOOGLE_SHEET_CACHE_SECONDS=60
```

Google Sheets izvēlnē izmanto **File → Share → Publish to web**, izvēlies vajadzīgo lapu un CSV formātu. Pirmajai CSV rindai jābūt kolonnu virsrakstiem.

## Pārbaude

```bash
composer install
npm ci
php artisan migrate
npm run build
php artisan serve
```
