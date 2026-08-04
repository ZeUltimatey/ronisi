import MainLayout from '../Layouts/MainLayout';
import RemoteImage from './RemoteImage';
import { imagePool, pageLabels } from './siteData';
import { useAccessibility } from '../Contexts/AccessibilityContext';
import { localize } from '../i18n';

export default function PageShell({ title, subtitle, children, image = 0 }) {
  const { language } = useAccessibility();
  const src = imagePool[image % imagePool.length];
  const resolvedTitle = localize(title, language);
  const resolvedSubtitle = localize(subtitle, language);

  return (
    <MainLayout>
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[.35em] text-cyan-300">
            {localize(pageLabels.eventEyebrow, language)}
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">{resolvedTitle}</h1>
          {resolvedSubtitle && <p className="mt-5 max-w-2xl text-xl text-slate-300">{resolvedSubtitle}</p>}
        </div>
        <a href={src} target="_blank" rel="noreferrer" className="block">
          <RemoteImage src={src} alt={resolvedTitle} className="min-h-72" />
        </a>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-16">{children}</section>
    </MainLayout>
  );
}
