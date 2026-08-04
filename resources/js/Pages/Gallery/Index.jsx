import { useMemo, useState } from 'react';
import MainLayout from '../../Layouts/MainLayout';
import Carousel from '../../shared/components/Carousel';
import PageHeader from '../../shared/components/PageHeader';
import { galleryAlbums, highlightedGallery } from '../../shared/data/media';
import { useAccessibility } from '../../Contexts/AccessibilityContext';
import { localize } from '../../i18n';

const copy = {
  eyebrow: { lv: 'PAR MUMS', en: 'ABOUT US' },
  title: { lv: 'Galerija', en: 'Gallery' },
  description: { lv: 'Izcelti mirkļi un albumi, kurus var atlasīt pēc gada un fotogrāfa.', en: 'Highlighted moments and albums that can be filtered by year and photographer.' },
  carousel: { lv: 'Izcelto galerijas attēlu karuselis', en: 'Highlighted gallery image carousel' },
  year: { lv: 'Gads', en: 'Year' },
  allYears: { lv: 'Visi gadi', en: 'All years' },
  photographer: { lv: 'Fotogrāfs', en: 'Photographer' },
  allPhotographers: { lv: 'Visi fotogrāfi', en: 'All photographers' },
  images: { lv: 'attēli', en: 'images' },
  photoAlt: { lv: 'gada foto', en: 'photo from' },
  empty: { lv: 'Šādai filtru kombinācijai albumu nav.', en: 'No albums match this filter combination.' },
};

export default function GalleryIndex() {
  const { language } = useAccessibility();
  const text = (value) => localize(value, language);
  const [year, setYear] = useState('all');
  const [photographer, setPhotographer] = useState('all');

  const years = [...new Set(galleryAlbums.map((album) => album.year))];
  const photographers = [...new Set(galleryAlbums.map((album) => album.photographer))];
  const albums = useMemo(
    () => galleryAlbums.filter((album) => (year === 'all' || album.year === Number(year)) && (photographer === 'all' || album.photographer === photographer)),
    [photographer, year],
  );

  return (
    <MainLayout>
      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <PageHeader eyebrow={text(copy.eyebrow)} title={text(copy.title)} description={text(copy.description)} />
        <div className="mt-10">
          <Carousel
            items={highlightedGallery}
            ariaLabel={text(copy.carousel)}
            renderItem={(item) => (
              <figure className="relative">
                <img src={item.src} alt={text(item.title)} className="aspect-[16/7] w-full object-cover" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-6 pt-20">
                  <p className="text-2xl font-black">{text(item.title)}</p>
                  <p className="mt-1 text-white/70">{item.meta}</p>
                </figcaption>
              </figure>
            )}
          />
        </div>
        <div className="mt-12 grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 md:grid-cols-2">
          <label className="font-bold">{text(copy.year)}<select value={year} onChange={(event) => setYear(event.target.value)} className="mt-2 w-full rounded-xl border-white/20 bg-slate-900 text-white"><option value="all">{text(copy.allYears)}</option>{years.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
          <label className="font-bold">{text(copy.photographer)}<select value={photographer} onChange={(event) => setPhotographer(event.target.value)} className="mt-2 w-full rounded-xl border-white/20 bg-slate-900 text-white"><option value="all">{text(copy.allPhotographers)}</option>{photographers.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
        </div>
        <div className="mt-8 grid gap-8">
          {albums.map((album) => (
            <article key={album.id} className="rounded-3xl border border-white/10 bg-white/[.04] p-5">
              <div className="mb-5 flex flex-wrap items-end justify-between gap-3"><div><p className="text-sm font-black tracking-widest text-cyan-300">{album.year}</p><h2 className="mt-1 text-2xl font-black">{album.photographer}</h2></div><span className="text-sm text-white/60">{album.images.length} {text(copy.images)}</span></div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {album.images.map((src, index) => <a key={src} href={src} target="_blank" rel="noreferrer" className="group overflow-hidden rounded-2xl border border-white/10"><img src={src} alt={`${album.year} ${text(copy.photoAlt)}, ${album.photographer}, ${index + 1}`} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-105" /></a>)}
              </div>
            </article>
          ))}
          {albums.length === 0 && <p className="rounded-3xl border border-white/10 p-8 text-center text-white/70">{text(copy.empty)}</p>}
        </div>
      </section>
    </MainLayout>
  );
}
