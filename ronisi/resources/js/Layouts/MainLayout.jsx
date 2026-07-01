import { Link } from '@inertiajs/react';
import { useState } from 'react';
import { navGroups } from '../ronisiContent';
import '../../css/app.css';

export default function MainLayout({ children }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  return <div className="min-h-screen bg-slate-950 text-white flex flex-col">
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <Link href="/" className="font-black tracking-[0.22em] text-cyan-300">RONĪŠI 2026</Link>
        <button className="rounded-lg border border-white/20 px-3 py-2 lg:hidden" onClick={() => setOpen(!open)}>Menu</button>
        <nav className="hidden items-center gap-1 lg:flex">
          {navGroups.map((g, i) => g.items ? <div key={g.label} className="relative" onMouseEnter={() => setActive(i)} onMouseLeave={() => setActive(null)}>
            <button className="px-3 py-2 text-sm font-semibold text-white/85 hover:text-cyan-300">{g.label} ▾</button>
            {active === i && <div className="absolute left-0 top-full min-w-56 rounded-xl border border-white/10 bg-black/95 p-3 shadow-2xl">
              {g.items.map(item => <Link key={item.href} href={item.href} className="block rounded-lg px-4 py-3 text-base hover:bg-white/10">{item.label}</Link>)}
            </div>}
          </div> : <Link key={g.href} href={g.href} className="px-3 py-2 text-sm font-semibold text-white/85 hover:text-cyan-300">{g.label}</Link>)}
        </nav>
      </div>
      {open && <nav className="border-t border-white/10 px-4 pb-4 lg:hidden">
        {navGroups.map(g => <div key={g.label} className="py-1">
          {g.href ? <Link href={g.href} className="block rounded-lg px-3 py-3 font-semibold hover:bg-white/10">{g.label}</Link> : <details className="rounded-lg px-3 py-2 hover:bg-white/5"><summary className="font-semibold">{g.label}</summary>{g.items.map(item => <Link key={item.href} href={item.href} className="ml-3 block py-2 text-white/80">{item.label}</Link>)}</details>}
        </div>)}
      </nav>}
    </header>
    <main className="flex-1">{children}</main>
    <footer className="mt-24 border-t border-white/10 bg-slate-900/80">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-3 lg:px-8">
        <div><h3 className="font-bold text-cyan-300">Seko līdzi</h3><p className="mt-3 text-white/75">RTU Rudens sporta spēļu “Ronīši” 2026 nolikums un aktualitātes.</p></div>
        <div><h3 className="font-bold text-cyan-300">Sazinies</h3><p className="mt-3 text-white/75">Santa Ābele<br/>sportaspeles.ronisi@rtusp.lv<br/>+371 26678395</p></div>
        <div><h3 className="font-bold text-cyan-300">Brauc ciemos</h3><p className="mt-3 text-white/75">RTU Konferenču un sporta centrs “Ronīši”<br/>Klapkalnciems, Latvija</p></div>
      </div>
    </footer>
  </div>
}
