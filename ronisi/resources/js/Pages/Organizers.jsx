import MainLayout from '../Layouts/MainLayout';
import Section from '../Components/Section';

export default function Organizers() {
  return (
    <MainLayout>
      <Section eyebrow="Organizatori" title="Komanda aiz pasākuma">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            Šeit būs organizatoru saraksts, pienākumi un kontaktinformācija.
          </p>
        </div>
      </Section>
    </MainLayout>
  );
}
