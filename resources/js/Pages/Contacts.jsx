import PageShell from '../Components/PageShell';
import { contacts } from '../Components/siteData';

export default function Contacts() {
  return (
    <PageShell title="KONTAKTI" subtitle="Sazinies ar mums.">
      <p className="mb-8 max-w-3xl text-slate-300">
        Jautājumu gadījumā sazinies ar atbildīgo personu.
      </p>
      <div className="grid gap-5 md:grid-cols-3">
        {contacts.map(([role, name, email, phone]) => (
          <article key={role} className="rounded-3xl border border-white/10 bg-white/[.06] p-6">
            <p className="text-cyan-300">{role}</p>
            <h2 className="mt-2 text-2xl font-bold">{name}</h2>
            <p className="mt-3 text-slate-300">
              {email && <><a href={`mailto:${email}`} className="hover:text-cyan-300">{email}</a><br /></>}
              <a href={`tel:+371${phone}`} className="hover:text-cyan-300">{phone}</a>
            </p>
          </article>
        ))}
      </div>
      <div className="mt-8 rounded-3xl border border-white/10 bg-white/[.06] p-6">
        <h2 className="text-2xl font-bold">KUR MĒS ATRODAMIES</h2>
        <p className="mt-3 text-slate-300">
          RTU Konferenču un sporta centrs “Ronīši”, Tukuma novads, Engures pagasts, Klapkalnciems, Latvija
        </p>
      </div>
    </PageShell>
  );
}
