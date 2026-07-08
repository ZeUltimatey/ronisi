import MainLayout from '../Layouts/MainLayout';
import { migratedImages } from '../Components/siteImages';

export default function Gallery() {
  return (
    <MainLayout>
      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <p className="font-bold tracking-[0.35em] text-cyan-300">PAR MUMS</p>
        <h1 className="mt-5 text-5xl font-black">Galerija</h1>
        <p className="mt-5 text-white/70">
          Google Sites attēli ir pārlikti Laravel public/images mapē un šeit piesaistīti React galerijai.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {migratedImages.map((src, index) => (
            <a
              key={src}
              href={src}
              target="_blank"
              rel="noreferrer"
              className="group block overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >
              <img
                src={src}
                alt={`Ronīši attēls ${index + 1}`}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </a>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}
