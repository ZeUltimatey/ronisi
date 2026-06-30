Drop this ZIP into your Laravel project root and overwrite routes/resources files.
Then run:
  npm run build
  php artisan serve --host=127.0.0.1 --port=3006

Images from Google Sites are referenced remotely because Google blocks direct server-side downloading in this environment.
If any remote Google image does not load, download it manually from the Google Site and put it in public/images, then replace imagePool URLs in resources/js/Components/siteData.js.
