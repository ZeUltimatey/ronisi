import { Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { navGroups } from '../ronisiContent';

export default function MainLayout({ children }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const { url } = usePage();

  useEffect(() => {
    setOpen(false);
    setActive(null);
  }, [url]);

  const isCurrent = (href) => href === '/' ? url === '/' : url.startsWith(href);

  return <div className="min-h-screen bg-slate-950 text-white flex flex-col">
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 shadow-lg shadow-black/20 backdrop-blur-xl">
      <div className="mx-auto flex min-h-20 max-w-[90rem] items-center justify-between gap-5 px-4 lg:px-8">
        <Link href="/" className="shrink-0 text-lg font-black tracking-[0.16em] text-cyan-300 md:text-xl">RONĪŠI <span className="text-white">2026</span></Link>
        <button type="button" aria-label="Atvērt izvēlni" aria-expanded={open} className="rounded-xl border border-white/20 px-4 py-2 font-bold lg:hidden" onClick={() => setOpen(v => !v)}>{open ? 'Aizvērt' : 'Izvēlne'}</button>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Galvenā navigācija">
          {navGroups.map((group, index) => group.items ? <div key={group.label} className="relative" onMouseEnter={() => setActive(index)} onMouseLeave={() => setActive(null)}>
            <button type="button" aria-expanded={active === index} onClick={() => setActive(active === index ? null : index)} className={`rounded-lg px-3 py-2 text-sm font-bold transition ${group.items.some(item => isCurrent(item.href)) ? 'bg-cyan-300/15 text-cyan-300' : 'text-white/80 hover:bg-white/5 hover:text-white'}`}>{group.label} <span aria-hidden>⌄</span></button>
            {active === index && <div className="absolute right-0 top-full min-w-60 pt-2">
              <div className="rounded-2xl border border-white/10 bg-slate-900 p-2 shadow-2xl">
                {group.items.map(item => <Link key={item.href} href={item.href} className={`block rounded-xl px-4 py-3 text-sm font-semibold ${isCurrent(item.href) ? 'bg-cyan-300 text-slate-950' : 'text-white/85 hover:bg-white/10'}`}>{item.label}</Link>)}
              </div>
            </div>}
          </div> : <Link key={group.href} href={group.href} className={`rounded-lg px-3 py-2 text-sm font-bold transition ${isCurrent(group.href) ? 'bg-cyan-300/15 text-cyan-300' : 'text-white/80 hover:bg-white/5 hover:text-white'}`}>{group.label}</Link>)}
        </nav>
      </div>
      {open && <nav className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-white/10 px-4 py-3 lg:hidden" aria-label="Mobilā navigācija">
        {navGroups.map(group => <div key={group.label} className="py-1">
          {group.href ? <Link href={group.href} className={`block rounded-xl px-4 py-3 font-bold ${isCurrent(group.href) ? 'bg-cyan-300 text-slate-950' : 'hover:bg-white/10'}`}>{group.label}</Link> : <details open={group.items.some(item => isCurrent(item.href))} className="rounded-xl bg-white/[.03] px-4 py-3"><summary className="cursor-pointer font-bold">{group.label}</summary><div className="mt-2 border-l border-white/10 pl-3">{group.items.map(item => <Link key={item.href} href={item.href} className={`block rounded-lg px-3 py-2 ${isCurrent(item.href) ? 'text-cyan-300' : 'text-white/75'}`}>{item.label}</Link>)}</div></details>}
        </div>)}
      </nav>}
    </header>
    <main className="flex-1">{children}</main>
    <footer className="mt-24 border-t border-white/10 bg-slate-900/80">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-3 lg:px-8">
        <div><h3 className="font-bold text-cyan-300">Ronīši 2026</h3><p className="mt-3 text-white/70">RTU rudens sporta spēles, komandas gars un sacensības pie jūras.</p></div>
        <div><h3 className="font-bold text-cyan-300">Sazinies</h3><p className="mt-3 text-white/70">sportaspeles.ronisi@rtusp.lv<br/>+371 25650190</p></div>
        <div><h3 className="font-bold text-cyan-300">Norises vieta</h3><p className="mt-3 text-white/70">RTU Konferenču un sporta centrs “Ronīši”<br/>Klapkalnciems, Latvija</p></div>
      </div>
    </footer>
  </div>;
}
