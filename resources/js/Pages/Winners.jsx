import MainLayout from '../Layouts/MainLayout';
import { winners } from '../ronisiContent';

export default function Winners() {
  return <MainLayout><section className="mx-auto max-w-6xl px-4 py-14 lg:px-8">
    <p className="font-bold uppercase tracking-[.3em] text-cyan-300">Ronīšu vēsture</p><h1 className="mt-4 text-4xl font-black md:text-6xl">Uzvarētāji pa gadiem</h1>
    <p className="mt-5 max-w-3xl text-lg text-slate-300">Gadu griezuma līderu saraksts. Neapstiprinātus komandu nosaukumus neizdomāju, jo vēsture nav vieta radošai grāmatvedībai.</p>
    <div className="mt-10 grid gap-5 md:grid-cols-2">{winners.map(item => <article key={item.year} className="rounded-3xl border border-white/10 bg-white/5 p-6"><div className="text-5xl font-black text-cyan-300">{item.year}</div><h2 className="mt-4 text-2xl font-bold">{item.team}</h2><p className="mt-2 text-slate-400">{item.note}</p></article>)}</div>
  </section></MainLayout>;
}
