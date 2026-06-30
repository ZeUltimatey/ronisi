import MainLayout from '../Layouts/MainLayout';
import Section from '../Components/Section';

export default function Schedule() {
  return (
    <MainLayout>
      <Section eyebrow="Norise" title="Pasākuma norise">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            Šeit būs pilna programma pa dienām, laikiem un disciplīnām.
          </p>
        </div>
      </Section>
    </MainLayout>
  );
}
