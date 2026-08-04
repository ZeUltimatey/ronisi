import MainLayout from '../Layouts/MainLayout';
import { Link } from '@inertiajs/react';
import { pageImages } from '../Components/siteImages';
import { homeCopy } from '../Components/siteData';
import { useAccessibility } from '../Contexts/AccessibilityContext';
import { localize } from '../i18n';

export default function Home() {
  const { language } = useAccessibility();
  const text = (value) => localize(value, language);

  return (
    <MainLayout>
      <section className="home-hero relative overflow-hidden">
        <div className="home-hero-background absolute inset-0 bg-[radial-gradient(circle_at_top_left,#22d3ee33,transparent_35%),linear-gradient(135deg,#020617,#0f172a)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <p className="font-bold tracking-[0.35em] text-cyan-300">{text(homeCopy.eyebrow)}</p>
            <h1 className="mt-6 text-5xl font-black leading-tight md:text-7xl">{text(homeCopy.title)}</h1>
            <p className="mt-4 font-bold text-cyan-200">{text(homeCopy.eventDate)}</p>
            <p className="mt-6 max-w-xl text-lg text-white/75">{text(homeCopy.intro)}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/pieteiksanas/dalibnieks" className="rounded-xl bg-cyan-300 px-6 py-3 font-bold text-slate-950">
                {text(homeCopy.apply)}
              </Link>
              <Link href="/ka-sagatavoties" className="rounded-xl border border-white/20 px-6 py-3 font-bold">
                {text(homeCopy.prepare)}
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6 shadow-2xl">
            <img src={pageImages.home} alt={text(homeCopy.posterAlt)} className="aspect-video w-full rounded-2xl object-cover" loading="lazy" />
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {homeCopy.highlights.map((item) => (
                <Info key={item.number} n={item.number} t={text(item.title)} href={item.href} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {homeCopy.cards.map((card) => (
            <Card key={text(card.title)} title={text(card.title)} text={text(card.text)} href={card.href} />
          ))}
        </div>
      </section>
    </MainLayout>
  );
}

function Info({ n, t, href }) {
  return (
    <Link href={href} className="block rounded-xl bg-white/10 p-4 transition hover:-translate-y-0.5 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-cyan-300">
      <b className="text-cyan-300">{n}</b>
      <p className="mt-1 font-bold">{t}</p>
    </Link>
  );
}

function Card({ title, text, href }) {
  return (
    <Link href={href} className="block rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-300/40">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-3 text-white/70">{text}</p>
    </Link>
  );
}
