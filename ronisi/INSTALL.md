# Ronīši pro drop-in install

1. Copy files into Laravel root.
2. Rename `routes_web.php` to `routes/web.php` or copy its contents into your current `routes/web.php`.
3. Copy `resources/css_app.css` into `resources/css/app.css`.
4. Run:

```powershell
composer require laravel/breeze --dev
php artisan breeze:install react
npm install --legacy-peer-deps
php artisan migrate
npm run build
php artisan serve --host=127.0.0.1 --port=3006
```

Admin panel uses Laravel Breeze auth:

```text
/register
/login
/admin
/admin/registrations
```

For Docker/MySQL:

```powershell
copy .env.docker.example .env
php artisan key:generate
npm run build
docker compose up -d --build
docker compose exec app composer install --no-dev --optimize-autoloader
docker compose exec app php artisan migrate
```

Cloudflare Tunnel target:

```text
http://localhost:3006
```
