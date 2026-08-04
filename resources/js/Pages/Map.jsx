import MainLayout from '../Layouts/MainLayout';

export default function Map() {
  return (
    <MainLayout>
      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <p className="font-bold uppercase tracking-[.3em] text-cyan-300">Orientēšanās Ronīšos</p>
        <h1 className="mt-4 text-4xl font-black md:text-6xl">Teritorijas karte</h1>
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="text-xl font-bold">Sadaļa ir izstrādes procesā.</p>
          <p className="mt-3 text-slate-300">Pasākuma teritorijas karte tiks publicēta vēlāk.</p>
        </div>
      </section>
    </MainLayout>
  );
}
