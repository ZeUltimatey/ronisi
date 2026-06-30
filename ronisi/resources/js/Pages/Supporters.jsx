import MainLayout from '../Layouts/MainLayout';
import Section from '../Components/Section';

export default function Supporters() {
  return (
    <MainLayout>
      <Section eyebrow="Atbalstītāji" title="Mūsu atbalstītāji">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            Šeit būs organizāciju, partneru un sponsoru sadaļa ar logotipiem.
          </p>
        </div>
      </Section>
    </MainLayout>
  );
}
