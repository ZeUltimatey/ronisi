import PageShell from '../Components/PageShell';
import { faq, pageLabels } from '../Components/siteData';
import { useAccessibility } from '../Contexts/AccessibilityContext';
import { localize } from '../i18n';

export default function FAQ() {
  const { language } = useAccessibility();
  const text = (value) => localize(value, language);

  return (
    <PageShell title={pageLabels.faqTitle} subtitle={pageLabels.faqSubtitle}>
      <div className="space-y-4">
        {faq.map((item, index) => (
          <details key={index} className="rounded-2xl border border-white/10 bg-white/[.06] p-5">
            <summary className="cursor-pointer text-lg font-bold text-cyan-200">{text(item.question)}</summary>
            <p className="mt-3 leading-7 text-slate-300">{text(item.answer)}</p>
          </details>
        ))}
      </div>
    </PageShell>
  );
}
