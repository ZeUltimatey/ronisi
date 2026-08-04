import MainLayout from '../Layouts/MainLayout';
import { pageLabels } from '../Components/siteData';
import { useAccessibility } from '../Contexts/AccessibilityContext';
import { localize } from '../i18n';

export default function Timetable() {
  const { language } = useAccessibility();
  const text = (value) => localize(value, language);

  return (
    <MainLayout>
      <section className="mx-auto max-w-6xl px-4 py-14 lg:px-8">
        <p className="font-bold uppercase tracking-[.3em] text-cyan-300">{text(pageLabels.scheduleEyebrow)}</p>
        <h1 className="mt-4 text-4xl font-black md:text-6xl">{text(pageLabels.scheduleTitle)}</h1>
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="text-xl font-bold">{text(pageLabels.inDevelopment)}</p>
          <p className="mt-3 text-slate-300">{text(pageLabels.scheduleLater)}</p>
        </div>
      </section>
    </MainLayout>
  );
}
