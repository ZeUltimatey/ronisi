import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'ronisi-accessibility-settings-v1';
const DEFAULT_SETTINGS = {
  zoom: 100,
  language: 'lv',
  highContrast: false,
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
    participantForm: 'Dalībnieku pieteikums',
    judgeForm: 'Piesakies par disciplīnas tiesnesi',
    participantFormOpening: 'Pieteikuma anketa tiks atvērta 04.09.2026. plkst. 12.00.',
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
    participantForm: 'Participant application',
    judgeForm: 'Apply to become a discipline judge',
    participantFormOpening: 'The application form will open on 4 September 2026 at 12:00.',
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
    };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function AccessibilityProvider({ children }) {
  const [settings, setSettings] = useState(readStoredSettings);

  useEffect(() => {
    const root = document.documentElement;

    root.lang = settings.language;
    root.style.fontSize = `${settings.zoom}%`;
    root.classList.toggle('accessibility-high-contrast', settings.highContrast);

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }, [settings]);

  const value = useMemo(() => ({
    ...settings,
    setLanguage: (language) => {
      setSettings((current) => ({
        ...current,
        language: language === 'en' ? 'en' : 'lv',
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
