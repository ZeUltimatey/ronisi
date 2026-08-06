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

        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-F858X66XS8"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          // Consent mode default: deny analytics and ad storage until user grants consent
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied'
          });

          // Prevent automatic page_view until consent decision
          gtag('config', 'G-F858X66XS8', { 'send_page_view': false });
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

        <!-- Consent banner for Google Tag (basic CMP) -->
        <div id="consent-banner" style="position:fixed;left:0;right:0;bottom:14px;z-index:60;display:none;justify-content:center;padding:12px;">
          <div style="max-width:1100px;background:rgba(0,0,0,0.8);color:#fff;padding:16px;border-radius:12px;display:flex;gap:12px;align-items:center;justify-content:space-between;">
            <div style="flex:1;min-width:0">
              <strong>We use Google Analytics</strong>
              <div style="margin-top:6px;color:#ddd;font-size:13px;">To improve the site we use Google Analytics. Allow analytics to enable page metrics. No personal data is collected without consent.</div>
            </div>
            <div style="display:flex;gap:8px;align-items:center;margin-left:12px">
              <button id="consent-accept" style="background:#0ea5a4;color:#001; border:none;padding:8px 12px;border-radius:8px;font-weight:700;">Accept</button>
              <button id="consent-deny" style="background:transparent;color:#fff;border:1px solid rgba(255,255,255,0.2);padding:8px 12px;border-radius:8px;">Deny</button>
            </div>
          </div>
        </div>

        <script>
          (function(){
            try {
              var key = 'gtag_consent_v1';
              var stored = localStorage.getItem(key);

              function applyConsent(decision){
                if (!window.gtag) return;
                if (decision === 'granted'){
                  // update consent and enable analytics
                  gtag('consent','update',{'ad_storage':'granted','analytics_storage':'granted'});
                  // send initial page_view now that consent is granted
                  gtag('event','page_view');
                } else {
                  gtag('consent','update',{'ad_storage':'denied','analytics_storage':'denied'});
                }
              }

              if (stored === 'granted'){
                // already granted
                applyConsent('granted');
              } else if (stored === 'denied'){
                applyConsent('denied');
              } else {
                // show banner
                var banner = document.getElementById('consent-banner');
                banner.style.display = 'flex';

                document.getElementById('consent-accept').addEventListener('click', function(){
                  localStorage.setItem(key,'granted');
                  banner.style.display = 'none';
                  applyConsent('granted');
                });
                document.getElementById('consent-deny').addEventListener('click', function(){
                  localStorage.setItem(key,'denied');
                  banner.style.display = 'none';
                  applyConsent('denied');
                });
              }
            } catch (e) {
              // fail silently
              console.warn('Consent banner error', e);
            }
          })();
        </script>
    </body>
</html>
