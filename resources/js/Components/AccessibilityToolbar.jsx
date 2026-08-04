import { useEffect, useRef, useState } from 'react';
import { useAccessibility } from '../Contexts/AccessibilityContext';

export default function AccessibilityToolbar() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const {
    zoom,
    language,
    theme,
    highContrast,
    setLanguage,
    setTheme,
    increaseZoom,
    decreaseZoom,
    toggleContrast,
    resetSettings,
    t,
  } = useAccessibility();

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', closeOnEscape);
    panelRef.current?.focus();

    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  return (
    <div className="fixed bottom-5 right-5 z-[100] flex flex-col items-end gap-3 print:hidden">
      {open && (
        <section
          ref={panelRef}
          tabIndex={-1}
          aria-label={t('accessibility')}
          className="accessibility-panel w-[min(22rem,calc(100vw-2.5rem))] rounded-2xl border border-white/20 bg-slate-900 p-5 text-white shadow-2xl shadow-black/40 outline-none"
        >
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-lg font-black">{t('accessibility')}</h2>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t('closeAccessibility')}
              className="rounded-lg border border-white/20 px-3 py-1.5 font-bold hover:bg-white/10"
            >
              ×
            </button>
          </div>

          <div className="mt-5 space-y-5">
            <fieldset>
              <legend className="text-sm font-bold text-white/75">{t('language')}</legend>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <SettingButton active={language === 'lv'} onClick={() => setLanguage('lv')}>
                  LV · {t('latvian')}
                </SettingButton>
                <SettingButton active={language === 'en'} onClick={() => setLanguage('en')}>
                  EN · {t('english')}
                </SettingButton>
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-sm font-bold text-white/75">{t('textSize')}</legend>
              <div className="mt-2 grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                <button
                  type="button"
                  onClick={decreaseZoom}
                  disabled={zoom <= 90}
                  aria-label={t('decreaseText')}
                  className="rounded-xl border border-white/20 px-4 py-3 text-xl font-black hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  A−
                </button>
                <output aria-live="polite" className="min-w-16 text-center font-black">
                  {zoom}%
                </output>
                <button
                  type="button"
                  onClick={increaseZoom}
                  disabled={zoom >= 140}
                  aria-label={t('increaseText')}
                  className="rounded-xl border border-white/20 px-4 py-3 text-xl font-black hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  A+
                </button>
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-sm font-bold text-white/75">{t('appearance')}</legend>
              <div className="mt-2 grid grid-cols-3 gap-2">
                <SettingButton active={theme === 'light'} onClick={() => setTheme('light')}>
                  ☀ {t('lightTheme')}
                </SettingButton>
                <SettingButton active={theme === 'dark'} onClick={() => setTheme('dark')}>
                  ◐ {t('darkTheme')}
                </SettingButton>
                <SettingButton active={theme === 'system'} onClick={() => setTheme('system')}>
                  ◉ {t('systemTheme')}
                </SettingButton>
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-sm font-bold text-white/75">{t('contrast')}</legend>
              <button
                type="button"
                aria-pressed={highContrast}
                onClick={toggleContrast}
                className={`mt-2 w-full rounded-xl border px-4 py-3 text-left font-bold transition ${
                  highContrast
                    ? 'border-yellow-300 bg-black text-yellow-300'
                    : 'border-white/20 bg-white/5 hover:bg-white/10'
                }`}
              >
                <span className="mr-3 inline-block rounded border border-current px-2 py-0.5">Aa</span>
                {highContrast ? t('highContrast') : t('normalContrast')}
              </button>
            </fieldset>

            <button
              type="button"
              onClick={resetSettings}
              className="w-full rounded-xl border border-white/20 px-4 py-3 font-bold hover:bg-white/10"
            >
              {t('reset')}
            </button>
          </div>
        </section>
      )}

      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? t('closeAccessibility') : t('openAccessibility')}
        onClick={() => setOpen((current) => !current)}
        className="flex h-14 min-w-14 items-center justify-center rounded-full border-2 border-white bg-cyan-300 px-4 text-lg font-black text-slate-950 shadow-xl shadow-black/40 focus:outline-none focus:ring-4 focus:ring-cyan-200/50"
      >
        Aa
      </button>
    </div>
  );
}

function SettingButton({ active, onClick, children }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`rounded-xl border px-2 py-2.5 text-sm font-bold transition ${
        active
          ? 'border-cyan-300 bg-cyan-300 text-slate-950'
          : 'border-white/20 bg-white/5 hover:bg-white/10'
      }`}
    >
      {children}
    </button>
  );
}
