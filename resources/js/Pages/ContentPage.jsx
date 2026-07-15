import PageShell from '../Components/PageShell';
import { pages } from '../Components/siteData';
export default function ContentPage({ pageKey }){
  const page = pages[pageKey] ?? pages.about;
  return <PageShell title={page.title} subtitle={page.subtitle}>
    <div className="grid gap-5 md:grid-cols-2">
      {page.blocks.map(([h,t],i)=><article key={h} className="rounded-3xl border border-white/10 bg-white/[.06] p-6 shadow-xl">
        <span className="text-sm font-black text-cyan-300">{String(i+1).padStart(2,'0')}</span>
        <h2 className="mt-3 text-2xl font-bold">{h}</h2>
        <p className="mt-3 leading-7 text-slate-300">{t}</p>
      </article>)}
    </div>
  </PageShell>
}
