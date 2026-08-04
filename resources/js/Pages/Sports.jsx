import PageShell from '../Components/PageShell';
import RemoteImage from '../Components/RemoteImage';
import { sports, imagePool } from '../Components/siteData';

export default function Sports() {
  return (
    <PageShell title="SPORTA VEIDI" subtitle="Iepazīsties ar disciplīnām un pasākuma nolikumu.">
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
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {sports.map(([title, text], index) => (
          <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/[.06]" key={title}>
            <RemoteImage src={imagePool[index % imagePool.length]} className="h-36 rounded-none border-0" />
            <div className="p-5">
              <h2 className="text-xl font-bold">{title}</h2>
              <p className="mt-2 text-slate-300">{text}</p>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
