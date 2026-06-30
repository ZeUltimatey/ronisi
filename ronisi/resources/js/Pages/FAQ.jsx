import PageShell from '../Components/PageShell';
import { faq } from '../Components/siteData';
export default function FAQ(){return <PageShell title="BIEŽĀK UZDOTIE JAUTĀJUMI" subtitle="Šeit atradīsi atbildes uz svarīgākajiem jautājumiem.">
  <div className="space-y-4">{faq.map(([q,a])=><details key={q} className="rounded-2xl border border-white/10 bg-white/[.06] p-5"><summary className="cursor-pointer text-lg font-bold text-cyan-200">{q}</summary><p className="mt-3 leading-7 text-slate-300">{a}</p></details>)}</div>
</PageShell>}
