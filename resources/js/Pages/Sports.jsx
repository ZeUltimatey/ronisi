import PageShell from '../Components/PageShell';
import RemoteImage from '../Components/RemoteImage';
import { sports, imagePool } from '../Components/siteData';

export default function Sports() {
  return (
    <PageShell title="NOLIKUMS" subtitle="Iepazīsties ar pasākuma nolikumu un sporta veidiem.">
      <div className="mb-8 flex flex-wrap gap-3">
        <a
          href="https://ej.uz/ronisi_nolikums2026"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-cyan-300 px-5 py-3 font-bold text-slate-950"
        >
          Nolikums latviešu valodā ↗
        </a>
        <a
          href="https://ej.uz/ronisi_regulations2026"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-white/20 px-5 py-3 font-bold hover:bg-white/10"
        >
          Regulations in English ↗
        </a>
      </div>
      <section className="mt-10" aria-labelledby="sports-heading">
        <h2 id="sports-heading" className="text-3xl font-black">Sporta veidi</h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          Komandu sastāva prasības katrai disciplīnai. Detalizēti noteikumi pieejami pasākuma nolikumā.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sports.map(([title, text], index) => (
            <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/[.06]" key={title}>
              <RemoteImage className="h-36 rounded-none border-0" />
              <div className="p-5">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-2 text-slate-300">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
