import PageShell from '../Components/PageShell';
import RemoteImage from '../Components/RemoteImage';
import { sports, imagePool, pageLabels } from '../Components/siteData';
import { useAccessibility } from '../Contexts/AccessibilityContext';
import { localize } from '../i18n';

export default function Sports() {
  const { language } = useAccessibility();
  const text = (value) => localize(value, language);

  return (
    <PageShell title={pageLabels.regulationsTitle} subtitle={pageLabels.regulationsSubtitle}>
      <div className="mb-8 flex flex-wrap gap-3">
        <a
          href="https://ej.uz/ronisi2026_nolikums"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-cyan-300 px-5 py-3 font-bold text-slate-950"
        >
          {text(pageLabels.regulationsLv)} ↗
        </a>
        <a
          href="https://ej.uz/ronisi2026_regulations"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-white/20 px-5 py-3 font-bold hover:bg-white/10"
        >
          {text(pageLabels.regulationsEn)} ↗
        </a>
      </div>
      <section className="mt-10" aria-labelledby="sports-heading">
        <h2 id="sports-heading" className="text-3xl font-black">{text(pageLabels.sportsTitle)}</h2>
        <p className="mt-3 max-w-3xl text-slate-300">{text(pageLabels.sportsIntro)}</p>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sports.map((sport, index) => (
            <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/[.06]" key={text(sport.title)}>
              <RemoteImage className="h-36 rounded-none border-0" />
              <div className="p-5">
                <h3 className="text-xl font-bold">{text(sport.title)}</h3>
                <p className="mt-2 text-slate-300">{text(sport.text)}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
