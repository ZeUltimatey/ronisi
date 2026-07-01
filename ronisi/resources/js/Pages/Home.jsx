import MainLayout from '../Layouts/MainLayout';
import { Link } from '@inertiajs/react';

export default function Home(){
 return <MainLayout>
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#22d3ee33,transparent_35%),linear-gradient(135deg,#020617,#0f172a)]" />
    <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 lg:px-8 lg:py-28">
      <div><p className="font-bold tracking-[0.35em] text-cyan-300">RTU RUDENS SPORTA SPĒLES</p><h1 className="mt-6 text-5xl font-black leading-tight md:text-7xl">RONĪŠI 2026</h1><p className="mt-6 max-w-xl text-lg text-white/75">Sporta sacensības, komandas gars, atpūta pie jūras un studentu kopiena vienā pasākumā.</p><div className="mt-8 flex flex-wrap gap-4"><Link href="/pieteiksanas" className="rounded-xl bg-cyan-300 px-6 py-3 font-bold text-slate-950">Pieteikties</Link><Link href="/ka-sagatavoties" className="rounded-xl border border-white/20 px-6 py-3 font-bold">Kā sagatavoties?</Link></div></div>
      <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6 shadow-2xl"><div className="aspect-video rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-700/30"/><div className="mt-6 grid gap-4 sm:grid-cols-3"><Info n="01" t="Sports"/><Info n="02" t="Komandas"/><Info n="03" t="Atpūta"/></div></div>
    </div>
  </section>
  <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8"><div className="grid gap-6 md:grid-cols-3"><Card title="Pieteikšanās" text="Aizpildi formu un reģistrē komandu vai dalībniekus."/><Card title="Norise" text="Apskati programmu, sporta veidus un teritorijas informāciju."/><Card title="BUJ" text="Atbildes uz praktiskajiem jautājumiem vienā vietā."/></div></section>
 </MainLayout>
}
function Info({n,t}){return <div className="rounded-xl bg-white/10 p-4"><b className="text-cyan-300">{n}</b><p className="mt-1 font-bold">{t}</p></div>}
function Card({title,text}){return <div className="rounded-3xl border border-white/10 bg-white/5 p-6"><h2 className="text-2xl font-bold">{title}</h2><p className="mt-3 text-white/70">{text}</p></div>}
