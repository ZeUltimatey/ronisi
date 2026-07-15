import MainLayout from '../Layouts/MainLayout';
import Section from '../Components/Section';

export default function Area() {
  return (
    <MainLayout>
      <Section eyebrow="Teritorija" title="Pasākuma teritorija">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            Šeit būs karte, zonas un norādes dalībniekiem.
          </p>
        </div>
      </Section>
    </MainLayout>
  );
}
