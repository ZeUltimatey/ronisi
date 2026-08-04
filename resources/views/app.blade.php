<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <script>
            // Apply saved accessibility settings before React loads to avoid a theme flash.
            (() => {
                const storageKey = 'ronisi-accessibility-settings-v1';

                try {
                    const settings = JSON.parse(localStorage.getItem(storageKey) || '{}');
                    const preference = ['light', 'dark', 'system'].includes(settings.theme)
                        ? settings.theme
                        : 'system';
                    const resolvedTheme = preference === 'system'
                        ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
                        : preference;

                    document.documentElement.dataset.theme = resolvedTheme;
                    document.documentElement.dataset.themePreference = preference;
                    document.documentElement.style.colorScheme = settings.highContrast
                        ? 'dark'
                        : resolvedTheme;

                    if ([90, 100, 110, 120, 130, 140].includes(settings.zoom)) {
                        document.documentElement.style.fontSize = `${settings.zoom}%`;
                    }

                    if (settings.language === 'en' || settings.language === 'lv') {
                        document.documentElement.lang = settings.language;
                    }

                    if (settings.highContrast) {
                        document.documentElement.classList.add('accessibility-high-contrast');
                    }
                } catch {
                    document.documentElement.dataset.theme = window.matchMedia('(prefers-color-scheme: dark)').matches
                        ? 'dark'
                        : 'light';
                }
            })();
        </script>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
