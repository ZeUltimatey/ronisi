import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'ronisi-accessibility-settings-v1';
const DEFAULT_SETTINGS = {
  zoom: 100,
  language: 'lv',
  highContrast: false,
  theme: 'system',
};

const messages = {
  lv: {
    openAccessibility: 'Atvērt piekļūstamības iestatījumus',
    closeAccessibility: 'Aizvērt piekļūstamības iestatījumus',
    accessibility: 'Piekļūstamība',
    language: 'Valoda',
    latvian: 'Latviešu',
    english: 'English',
    textSize: 'Teksta izmērs',
    decreaseText: 'Samazināt teksta izmēru',
    increaseText: 'Palielināt teksta izmēru',
    appearance: 'Vietnes izskats',
    lightTheme: 'Gaišs',
    darkTheme: 'Tumšs',
    systemTheme: 'Sistēmas',
    contrast: 'Kontrasts',
    highContrast: 'Augsts kontrasts',
    normalContrast: 'Standarta kontrasts',
    reset: 'Atiestatīt',
    openMenu: 'Atvērt izvēlni',
    closeMenu: 'Aizvērt izvēlni',
    menu: 'Izvēlne',
    mainNavigation: 'Galvenā navigācija',
    mobileNavigation: 'Mobilā navigācija',
    footerEvent: 'Ronīši 2026',
    footerEventText: 'RTU rudens sporta spēles, komandas gars un sacensības pie jūras.',
    contact: 'Sazinies',
    venue: 'Norises vieta',
    venueName: 'RTU Konferenču un sporta centrs “Ronīši”',
    venueLocation: 'Klapkalnciems, Latvija',
    carousel: 'karuselis',
    previousImage: 'Iepriekšējais attēls',
    nextImage: 'Nākamais attēls',
    slideSelection: 'Slaidu izvēle',
    showSlide: 'Rādīt slaidu',
    participantForm: 'Dalībnieku pieteikums',
    judgeForm: 'Piesakies par disciplīnas tiesnesi',
    participantFormOpening: 'Pieteikuma anketa tiks atvērta 04.09.2026. plkst. 12.00 un būs pieejama līdz 09.09.2026. plkst. 17.00, ja maksimālais komandu skaits netiks sasniegts agrāk.',
    applications: 'Pieteikumi',
    chooseApplication: 'Izvēlies pieteikuma veidu un aizpildi atbilstošo Google formu.',
    participant: 'Dalībnieks',
    judge: 'Tiesnesis',
    openFormNewTab: 'Atvērt formu jaunā cilnē',
    formUnavailable: 'Pieteikuma forma pašlaik nav pieejama. Lūdzu, sazinies ar organizatoriem.',
    embeddedFormTitle: 'Google pieteikuma forma',
    googleFormNotice: 'Forma tiek ielādēta no Google Forms.',
  },
  en: {
    openAccessibility: 'Open accessibility settings',
    closeAccessibility: 'Close accessibility settings',
    accessibility: 'Accessibility',
    language: 'Language',
    latvian: 'Latviešu',
    english: 'English',
    textSize: 'Text size',
    decreaseText: 'Decrease text size',
    increaseText: 'Increase text size',
    appearance: 'Website appearance',
    lightTheme: 'Light',
    darkTheme: 'Dark',
    systemTheme: 'System',
    contrast: 'Contrast',
    highContrast: 'High contrast',
    normalContrast: 'Standard contrast',
    reset: 'Reset',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    menu: 'Menu',
    mainNavigation: 'Main navigation',
    mobileNavigation: 'Mobile navigation',
    footerEvent: 'Ronīši 2026',
    footerEventText: 'RTU autumn sports games, team spirit and competitions by the sea.',
    contact: 'Contact',
    venue: 'Venue',
    venueName: 'RTU Conference and Sports Centre “Ronīši”',
    venueLocation: 'Klapkalnciems, Latvia',
    carousel: 'carousel',
    previousImage: 'Previous image',
    nextImage: 'Next image',
    slideSelection: 'Slide selection',
    showSlide: 'Show slide',
    participantForm: 'Participant application',
    judgeForm: 'Apply to become a discipline judge',
    participantFormOpening: 'The application form will open on 4 September 2026 at 12:00 and remain available until 9 September 2026 at 17:00, unless the maximum number of teams is reached earlier.',
    applications: 'Applications',
    chooseApplication: 'Choose an application type and complete the corresponding Google Form.',
    participant: 'Participant',
    judge: 'Judge',
    openFormNewTab: 'Open form in a new tab',
    formUnavailable: 'The application form is currently unavailable. Please contact the organisers.',
    embeddedFormTitle: 'Google application form',
    googleFormNotice: 'The form is loaded from Google Forms.',
  },
};

const AccessibilityContext = createContext(null);

function readStoredSettings() {
  if (typeof window === 'undefined') {
    return DEFAULT_SETTINGS;
  }

  try {
    const stored = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? '{}');

    return {
      zoom: [90, 100, 110, 120, 130, 140].includes(stored.zoom)
        ? stored.zoom
        : DEFAULT_SETTINGS.zoom,
      language: stored.language === 'en' ? 'en' : 'lv',
      highContrast: Boolean(stored.highContrast),
      theme: ['light', 'dark', 'system'].includes(stored.theme)
        ? stored.theme
        : DEFAULT_SETTINGS.theme,
    };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function AccessibilityProvider({ children }) {
  const [settings, setSettings] = useState(readStoredSettings);

  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applySettings = () => {
      const resolvedTheme = settings.theme === 'system'
        ? (mediaQuery.matches ? 'dark' : 'light')
        : settings.theme;

      root.lang = settings.language;
      root.style.fontSize = `${settings.zoom}%`;
      root.dataset.theme = resolvedTheme;
      root.dataset.themePreference = settings.theme;
      root.style.colorScheme = settings.highContrast ? 'dark' : resolvedTheme;
      root.classList.toggle('accessibility-high-contrast', settings.highContrast);

      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    };

    applySettings();
    mediaQuery.addEventListener('change', applySettings);

    return () => mediaQuery.removeEventListener('change', applySettings);
  }, [settings]);

  const value = useMemo(() => ({
    ...settings,
    setLanguage: (language) => {
      setSettings((current) => ({
        ...current,
        language: language === 'en' ? 'en' : 'lv',
      }));
    },
    setTheme: (theme) => {
      setSettings((current) => ({
        ...current,
        theme: ['light', 'dark', 'system'].includes(theme) ? theme : 'system',
      }));
    },
    increaseZoom: () => {
      setSettings((current) => ({
        ...current,
        zoom: Math.min(140, current.zoom + 10),
      }));
    },
    decreaseZoom: () => {
      setSettings((current) => ({
        ...current,
        zoom: Math.max(90, current.zoom - 10),
      }));
    },
    toggleContrast: () => {
      setSettings((current) => ({
        ...current,
        highContrast: !current.highContrast,
      }));
    },
    resetSettings: () => setSettings(DEFAULT_SETTINGS),
    t: (key) => messages[settings.language]?.[key] ?? messages.lv[key] ?? key,
  }), [settings]);

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);

  if (!context) {
    throw new Error('useAccessibility must be used inside AccessibilityProvider');
  }

  return context;
}
