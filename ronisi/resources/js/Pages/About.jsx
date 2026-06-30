import MainLayout from '../Layouts/MainLayout';
import Section from '../Components/Section';

export default function About() {
  return (
    <MainLayout>
      <Section eyebrow="Par mums" title="Kas ir Ronīši?">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            Ronīši ir rudens sporta spēles ar sacensībām, sadarbību un pasākuma atmosfēru.
          </p>
        </div>
      </Section>
    </MainLayout>
  );
}
