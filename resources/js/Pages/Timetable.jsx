import MainLayout from '../Layouts/MainLayout';
import { timetable } from '../ronisiContent';

export default function Timetable() {
  return <MainLayout><section className="mx-auto max-w-6xl px-4 py-14 lg:px-8">
    <p className="font-bold uppercase tracking-[.3em] text-cyan-300">Pasākuma norise</p>
    <h1 className="mt-4 text-4xl font-black md:text-6xl">Laika plāns</h1>
    <p className="mt-5 max-w-3xl text-lg text-slate-300">Provizoriskais dienas sadalījums. Organizatori var precizēt laikus pirms pasākuma.</p>
    <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
      {timetable.map((item, index) => <article key={`${item.time}-${item.title}`} className={`grid gap-3 p-5 md:grid-cols-[11rem_1fr_15rem] md:items-center ${index ? 'border-t border-white/10' : ''}`}>
        <time className="font-black text-cyan-300">{item.time}</time><h2 className="text-xl font-bold">{item.title}</h2><p className="text-slate-400 md:text-right">{item.place}</p>
      </article>)}
    </div>
  </section></MainLayout>;
}
