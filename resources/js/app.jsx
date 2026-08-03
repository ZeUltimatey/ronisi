import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import AccessibilityToolbar from './Components/AccessibilityToolbar';
import { AccessibilityProvider } from './Contexts/AccessibilityContext';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <AccessibilityProvider>
                <App {...props} />
                <AccessibilityToolbar />
            </AccessibilityProvider>,
        );
    },
    progress: {
        color: '#4B5563',
    },
});
