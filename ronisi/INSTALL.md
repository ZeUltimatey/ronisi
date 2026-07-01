# Ronīši GitHub-ready drop-in

Copy these files into your Laravel root: `C:\Users\eaizgirevics\PhpstormProjects\Ronisi\ronisi`.

## Local install

```powershell
copy routes_web.php routes\web.php
copy resources\css_app.css resources\css\app.css
composer require laravel/breeze --dev
php artisan breeze:install react
npm install --legacy-peer-deps
php artisan migrate
npm run build
php artisan serve --host=127.0.0.1 --port=3006
```

Admin:

```text
/register
/login
/admin
/admin/registrations
```

Register your admin user at `/register`, then open `/admin`.

## Docker / MySQL

```powershell
copy .env.docker.example .env
php artisan key:generate
npm run build
docker compose up -d --build
docker compose exec app composer install --no-dev --optimize-autoloader
docker compose exec app php artisan migrate --force
```

Cloudflare tunnel target:

```text
http://localhost:3006
```

## Google Sites images

1. Open your Google Sites editor or published page.
2. Press `F12` -> Console.
3. Paste `tools/extract-google-sites-images.js` content.
4. It downloads `ronisi-google-sites-images.json`.
5. Put the JSON in your Laravel root.
6. Run:

```powershell
.\tools\download-images-from-json.ps1
```

Images go to:

```text
public/images/google-sites
```

Then update `resources/js/ronisiContent.js` gallery images if you want exact captions/order.

## Push to GitHub

```powershell
git add .
git commit -m "Build Ronisi event platform"
git push
```
