import MainLayout from '../Layouts/MainLayout';
import { Link } from '@inertiajs/react';
import { pageImages } from '../Components/siteImages';

export default function Home(){
 return <MainLayout>
  <section className="home-hero relative overflow-hidden">
    <div className="home-hero-background absolute inset-0 bg-[radial-gradient(circle_at_top_left,#22d3ee33,transparent_35%),linear-gradient(135deg,#020617,#0f172a)]" />
    <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 lg:px-8 lg:py-28">
      <div><p className="font-bold tracking-[0.35em] text-cyan-300">RTU RUDENS SPORTA SPĒLES</p><h1 className="mt-6 text-5xl font-black leading-tight md:text-7xl">RONĪŠI 2026</h1><p className="mt-6 max-w-xl text-lg text-white/75">Sporta sacensības, komandas gars, atpūta pie jūras un studentu kopiena vienā pasākumā.</p><div className="mt-8 flex flex-wrap gap-4"><Link href="/pieteiksanas/dalibnieks" className="rounded-xl bg-cyan-300 px-6 py-3 font-bold text-slate-950">Pieteikties</Link><Link href="/ka-sagatavoties" className="rounded-xl border border-white/20 px-6 py-3 font-bold">Kā sagatavoties?</Link></div></div>
      <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6 shadow-2xl"><img src={pageImages.home} alt="Ronīši plakāts" className="aspect-video w-full rounded-2xl object-cover" loading="lazy"/><div className="mt-6 grid gap-4 sm:grid-cols-3"><Info n="01" t="Piesakies" href="/pieteiksanas/dalibnieks"/><Info n="02" t="Nolikums" href="/sporta-veidi"/><Info n="03" t="Galerija" href="/galerija"/></div></div>
    </div>
  </section>
  <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8"><div className="grid gap-6 md:grid-cols-3"><Card title="Pieteikšanās" text="Aizpildi formu un reģistrē komandu vai dalībniekus."/><Card title="Norise" text="Apskati programmu, sporta veidus un teritorijas informāciju."/><Card title="BUJ" text="Atbildes uz praktiskajiem jautājumiem vienā vietā."/></div></section>
 </MainLayout>
}
function Info({n,t,href}){return <Link href={href} className="block rounded-xl bg-white/10 p-4 transition hover:-translate-y-0.5 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-cyan-300"><b className="text-cyan-300">{n}</b><p className="mt-1 font-bold">{t}</p></Link>}
function Card({title,text}){return <div className="rounded-3xl border border-white/10 bg-white/5 p-6"><h2 className="text-2xl font-bold">{title}</h2><p className="mt-3 text-white/70">{text}</p></div>}
