import MainLayout from '../Layouts/MainLayout';

export default function Timetable() {
  return (
    <MainLayout>
      <section className="mx-auto max-w-6xl px-4 py-14 lg:px-8">
        <p className="font-bold uppercase tracking-[.3em] text-cyan-300">Pasākuma norise</p>
        <h1 className="mt-4 text-4xl font-black md:text-6xl">Laika plāns</h1>
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="text-xl font-bold">Sadaļa ir izstrādes procesā.</p>
          <p className="mt-3 text-slate-300">Detalizēts pasākuma laika plāns tiks publicēts vēlāk.</p>
        </div>
      </section>
    </MainLayout>
  );
}
