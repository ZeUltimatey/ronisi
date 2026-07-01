import PageShell from '../Components/PageShell';
import RemoteImage from '../Components/RemoteImage';
import { sports, imagePool } from '../Components/siteData';
export default function Sports(){return <PageShell title="SPORTA VEIDI" subtitle="Pirms dodies uz sporta spēlēm, iepazīsties ar noteikumiem.">
  <p className="mb-8 text-slate-300">Vairāk informācijas: https://ej.uz/ronīši2026_nolikums | More information: https://ej.uz/ronisi2026_regulation</p>
  <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{sports.map(([h,t],i)=><article className="overflow-hidden rounded-3xl border border-white/10 bg-white/[.06]" key={h}><RemoteImage src={imagePool[i%imagePool.length]} className="h-36 rounded-none border-0"/><div className="p-5"><h2 className="text-xl font-bold">{h}</h2><p className="mt-2 text-slate-300">{t}</p></div></article>)}</div>
</PageShell>}
