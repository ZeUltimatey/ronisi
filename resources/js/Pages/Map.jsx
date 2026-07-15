import MainLayout from '../Layouts/MainLayout';

const zones = ['Informācijas punkts', 'Galvenā skatuve', 'Sporta laukumi', 'Ēdināšanas zona', 'Naktsmītnes', 'Medicīnas punkts'];

export default function Map() {
  return <MainLayout><section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
    <p className="font-bold uppercase tracking-[.3em] text-cyan-300">Orientēšanās Ronīšos</p>
    <h1 className="mt-4 text-4xl font-black md:text-6xl">Teritorijas karte</h1>
    <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_20rem]">
      <a href="/images/map.jpg" target="_blank" rel="noreferrer" className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
        <img src="/images/map.jpg" alt="Ronīšu teritorijas karte" className="h-auto w-full rounded-2xl object-contain transition group-hover:scale-[1.01]" />
        <p className="px-2 pb-1 pt-3 text-sm text-slate-400">Atvērt karti pilnā izmērā</p>
      </a>
      <aside className="rounded-3xl border border-white/10 bg-white/5 p-6"><h2 className="text-2xl font-bold">Svarīgās zonas</h2><ol className="mt-5 space-y-3">{zones.map((zone, i) => <li key={zone} className="flex gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-300 font-black text-slate-950">{i + 1}</span><span className="pt-0.5 text-slate-200">{zone}</span></li>)}</ol><p className="mt-6 text-sm leading-6 text-slate-400">Kartes marķējumus nepieciešams saskaņot ar organizatoru gala teritorijas plānu.</p></aside>
    </div>
  </section></MainLayout>;
}
