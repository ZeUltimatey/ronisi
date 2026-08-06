import MainLayout from '../Layouts/MainLayout';
import { winners } from '../ronisiContent';
import { useAccessibility } from '../Contexts/AccessibilityContext';
import { localize } from '../i18n';

export default function Winners() {
  const { language } = useAccessibility();
  const text = (value) => localize(value, language);

  return <MainLayout><section className="mx-auto max-w-6xl px-4 py-14 lg:px-8">
    <p className="font-bold uppercase tracking-[.3em] text-cyan-300">{text({ lv: 'Ronīšu vēsture', en: 'Ronīši history' })}</p><h1 className="mt-4 text-4xl font-black md:text-6xl">{text({ lv: 'Uzvarētāji pa gadiem', en: 'Winners by year' })}</h1>
    <p className="mt-5 max-w-3xl text-lg text-slate-300">{text({ lv: 'Gadu griezumā līderu saraksts.', en: 'A year-by-year list of leaders.' })}</p>
    <div className="mt-10 grid gap-5 md:grid-cols-2">{winners.map(item => <article key={item.year} className="rounded-3xl border border-white/10 bg-white/5 p-6"><div className="text-5xl font-black text-cyan-300">{item.year}</div>{item.note ? <p className="mt-4 text-lg text-slate-300">{text(item.note)}</p> : null}{item.sections ? <div className="mt-4 space-y-4">{item.sections.map((section, sectionIndex) => <div key={`${item.year}-${sectionIndex}`}><h2 className="text-2xl font-bold">{text(section.title)}</h2><ul className="mt-2 space-y-1 text-slate-400">{section.items.map((line, index) => <li key={`${item.year}-${sectionIndex}-${index}`}>{text(line)}</li>)}</ul></div>)}</div> : null}</article>)}</div>
  </section></MainLayout>;
}
