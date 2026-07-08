import MainLayout from '../Layouts/MainLayout';
import { pages } from '../ronisiContent';
import { imagePool } from '../Components/siteImages';

export default function InfoPage({ slug }){
 const page = pages[slug] ?? pages['par-mums'];
 const image = imagePool[Math.abs(String(slug ?? '').length) % imagePool.length];
 return <MainLayout>
  <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">
    <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
      <div><p className="font-bold tracking-[0.35em] text-cyan-300 uppercase">{page.eyebrow}</p><h1 className="mt-5 text-4xl font-black md:text-6xl">{page.title}</h1><p className="mt-6 max-w-3xl text-lg text-white/75">{page.intro}</p></div>
      <a href={image} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-3xl border border-cyan-300/20 bg-white/5"><img src={image} alt={page.title} className="min-h-56 w-full object-cover" loading="lazy" /></a>
    </div>
    <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {page.cards.map((card, i)=><article key={card[0]} className="rounded-3xl border border-white/10 bg-white/5 p-7"><div className="text-sm font-black text-cyan-300">{String(i+1).padStart(2,'0')}</div><h2 className="mt-5 text-2xl font-bold">{card[0]}</h2><p className="mt-4 leading-7 text-white/75">{card[1]}</p></article>)}
    </div>
  </section>
 </MainLayout>
}
