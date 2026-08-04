import { Link } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';
import { useAccessibility } from '../Contexts/AccessibilityContext';

const KNOWN_GOOGLE_FORM_URLS = {
  'https://forms.gle/QbMi7hHMTENi6LWV7': 'https://docs.google.com/forms/d/e/1FAIpQLSfUYhxAu5_3v8S6iO71yQO7rtpNs720TPXIBkAH2t7-l3ieZA/viewform',
};

function getEmbeddableGoogleFormUrl(formUrl, language) {
  if (!formUrl) {
    return null;
  }

  try {
    const resolvedFormUrl = KNOWN_GOOGLE_FORM_URLS[formUrl] ?? formUrl;
    const url = new URL(resolvedFormUrl);
    const isGoogleForm = url.hostname === 'docs.google.com' && url.pathname.includes('/forms/');

    if (!isGoogleForm) {
      return null;
    }

    url.searchParams.set('embedded', 'true');
    url.searchParams.set('hl', language === 'en' ? 'en' : 'lv');
    return url.toString();
  } catch {
    return null;
  }
}

export default function Registration({ formType, formUrl }) {
  const { language, t } = useAccessibility();
  const isJudge = formType === 'tiesnesis';
  const embedUrl = getEmbeddableGoogleFormUrl(formUrl, language);
  const title = isJudge ? t('judgeForm') : t('participantForm');

  return (
    <MainLayout>
      <section className="mx-auto max-w-6xl px-4 py-14 lg:px-8">
        <p className="font-bold uppercase tracking-[0.35em] text-cyan-300">
          {t('applications')}
        </p>
        <h1 className="mt-5 text-4xl font-black sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg text-white/70">
          {t('chooseApplication')}
        </p>

        <div className="mt-8 flex flex-wrap gap-3" aria-label={t('applications')}>
          <Link
            href="/pieteiksanas/dalibnieks"
            className={`rounded-xl border px-5 py-3 font-bold transition ${
              !isJudge
                ? 'border-cyan-300 bg-cyan-300 text-slate-950'
                : 'border-white/20 hover:bg-white/10'
            }`}
          >
            {t('participant')}
          </Link>
          <Link
            href="/pieteiksanas/tiesnesis"
            className={`rounded-xl border px-5 py-3 font-bold transition ${
              isJudge
                ? 'border-cyan-300 bg-cyan-300 text-slate-950'
                : 'border-white/20 hover:bg-white/10'
            }`}
          >
            {t('judge')}
          </Link>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
          {!isJudge ? (
            <div className="p-8 text-center sm:p-12">
              <h2 className="text-2xl font-black">{t('participantFormOpening')}</h2>
            </div>
          ) : embedUrl ? (
            <>
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
                <p className="text-sm text-white/65">{t('googleFormNotice')}</p>
                <a
                  href={formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/20 px-4 py-2 text-sm font-bold hover:bg-white/10"
                >
                  {t('openFormNewTab')} ↗
                </a>
              </div>
              <iframe
                src={embedUrl}
                title={`${title} — ${t('embeddedFormTitle')}`}
                className="min-h-[75rem] w-full bg-white"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              >
                {title}
              </iframe>
            </>
          ) : formUrl ? (
            <div className="p-8 text-center sm:p-12">
              <h2 className="text-2xl font-black">{title}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-white/70">
                {t('googleFormNotice')}
              </p>
              <a
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex rounded-xl bg-cyan-300 px-6 py-3 font-black text-slate-950"
              >
                {t('openFormNewTab')} ↗
              </a>
            </div>
          ) : (
            <div className="p-8 text-center sm:p-12">
              <h2 className="text-2xl font-black">{title}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-white/70">
                {t('formUnavailable')}
              </p>
              <a
                href="mailto:sportaspeles.ronisi@rtusp.lv"
                className="mt-7 inline-flex rounded-xl border border-white/20 px-6 py-3 font-bold hover:bg-white/10"
              >
                sportaspeles.ronisi@rtusp.lv
              </a>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}
