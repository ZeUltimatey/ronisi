import PageShell from '../Components/PageShell';
import { pages } from '../Components/siteData';
import { useAccessibility } from '../Contexts/AccessibilityContext';
import { localize } from '../i18n';

export default function ContentPage({ pageKey }) {
  const { language } = useAccessibility();
  const page = pages[pageKey] ?? pages.about;
  const text = (value) => localize(value, language);

  return (
    <PageShell title={page.title} subtitle={page.subtitle}>
      <div className="grid gap-5 md:grid-cols-2">
        {page.blocks.map((block, index) => (
          <article key={`${pageKey}-${index}`} className="rounded-3xl border border-white/10 bg-white/[.06] p-6 shadow-xl">
            <span className="text-sm font-black text-cyan-300">{String(index + 1).padStart(2, '0')}</span>
            <h2 className="mt-3 text-2xl font-bold">{text(block.title)}</h2>
            <p className="mt-3 leading-7 text-slate-300">{text(block.text)}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
