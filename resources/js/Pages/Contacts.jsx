import PageShell from '../Components/PageShell';
import { contacts, pageLabels } from '../Components/siteData';
import { useAccessibility } from '../Contexts/AccessibilityContext';
import { localize } from '../i18n';

export default function Contacts() {
  const { language } = useAccessibility();
  const text = (value) => localize(value, language);

  return (
    <PageShell title={pageLabels.contactsTitle} subtitle={pageLabels.contactsSubtitle}>
      <p className="mb-8 max-w-3xl text-slate-300">{text(pageLabels.contactsIntro)}</p>
      <div className="grid gap-5 md:grid-cols-3">
        {contacts.map((contact) => (
          <article key={contact.name} className="rounded-3xl border border-white/10 bg-white/[.06] p-6">
            <p className="text-cyan-300">{text(contact.role)}</p>
            <h2 className="mt-2 text-2xl font-bold">{contact.name}</h2>
            <p className="mt-3 text-slate-300">
              {contact.email && <><a href={`mailto:${contact.email}`} className="hover:text-cyan-300">{contact.email}</a><br /></>}
              <a href={`tel:+371${contact.phone}`} className="hover:text-cyan-300">+371 {contact.phone}</a>
            </p>
          </article>
        ))}
      </div>
      <div className="mt-8 rounded-3xl border border-white/10 bg-white/[.06] p-6">
        <h2 className="text-2xl font-bold">{text(pageLabels.locationTitle)}</h2>
        <p className="mt-3 text-slate-300">{text(pageLabels.location)}</p>
      </div>
    </PageShell>
  );
}
