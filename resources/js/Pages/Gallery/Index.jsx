import { useMemo, useState, useEffect } from 'react';
import MainLayout from '../../Layouts/MainLayout';
import Carousel from '../../shared/components/Carousel';
import PageHeader from '../../shared/components/PageHeader';
import { galleryAlbums, highlightedGallery, videosByYear, videoRecaps } from '../../shared/data/media';
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
  highlights: { lv: 'Ieskats pasākumā', en: 'Event highlights' },
  photographers: { lv: 'Fotogrāfi', en: 'Photographers' },
  viewAlbum: { lv: 'Skatīt albumu', en: 'View album' },
};

export default function GalleryIndex() {
  const { language } = useAccessibility();
  const text = (value) => localize(value, language);
  const [photographer, setPhotographer] = useState('all');

  // combine years from gallery albums, videosByYear and videoRecaps so video-only years are also selectable
  const yearsSet = new Set([
    ...galleryAlbums.map((album) => album.year),
    ...Object.keys(videosByYear).map((y) => Number(y || 0)),
    ...videoRecaps.map((r) => r.year),
  ]);
  const years = Array.from(yearsSet).sort((a, b) => b - a);

  // initial year default to latest year if available
  const initialYear = years.length > 0 ? String(years[0]) : 'all';
  const [year, setYear] = useState(initialYear);

  // Get years filtered by selected photographer
  const availableYears = photographer === 'all'
    ? years
    : [...new Set(galleryAlbums.filter((a) => a.photographer === photographer).map((a) => a.year))].sort((a, b) => b - a);

  // Get photographers filtered by selected year
  const availablePhotographers = year === 'all'
    ? [...new Set(galleryAlbums.map((a) => a.photographer))]
    : [...new Set(galleryAlbums.filter((a) => a.year === Number(year)).map((a) => a.photographer))];

  // Final filtered albums (albums are only from galleryAlbums)
  const albums = useMemo(
    () => galleryAlbums.filter((album) => (year === 'all' || album.year === Number(year)) && (photographer === 'all' || album.photographer === photographer)),
    [photographer, year],
  );

  // Build carousel items dynamically from selected year (or latest year)
  const latestYear = years[0];
  const yearForCarousel = year === 'all' ? latestYear : (Number(year) || latestYear);
  const carouselItems = useMemo(() => {
    const items = galleryAlbums.filter((a) => a.year === yearForCarousel && a.cover).map((a) => ({ id: a.id, src: a.cover, title: { lv: a.photographer, en: a.photographer }, meta: a.photographer }));
    if (items.length > 0) return items;
    // fallback to highlightedGallery
    return highlightedGallery;
  }, [yearForCarousel]);

  const videosForSelectedYear = videosByYear[yearForCarousel] || [];

  useEffect(() => {
    if (window.flickrEmbed?.process) {
      window.flickrEmbed.process();
    }
  }, [albums, carouselItems]);

  return (
    <MainLayout>
      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <PageHeader eyebrow={text(copy.eyebrow)} title={text(copy.title)} description={text(copy.description)} />
        <div className="mt-10">
          <Carousel
            items={carouselItems}
            ariaLabel={text(copy.carousel)}
            renderItem={(item) => (
              <figure className="relative">
                <img src={item.src} alt={text(item.title)} className="aspect-[16/7] w-full object-cover" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-6 pt-20">
                  <p className="text-2xl font-black">{item.title?.lv || item.title || item.meta}</p>
                  <p className="mt-1 text-white/70">{item.meta}</p>
                </figcaption>
              </figure>
            )}
          />
        </div>
        <div className="mt-12 grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 md:grid-cols-2">
          <label className="font-bold">
            {text(copy.year)}
            <select value={year} onChange={(e)=>setYear(e.target.value)} className="mt-2 w-full rounded-xl border border-white/20 bg-slate-900 text-white px-3 py-2">
              <option value="all">{text(copy.allYears)}</option>
              {availableYears.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </label>
          <label className="font-bold">
            {text(copy.photographer)}
            <select value={photographer} onChange={(e)=>setPhotographer(e.target.value)} className="mt-2 w-full rounded-xl border border-white/20 bg-slate-900 text-white px-3 py-2">
              <option value="all">{text(copy.allPhotographers)}</option>
              {availablePhotographers.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </label>
        </div>

        <div className="mt-8 grid gap-8">
          {(photographer !== 'all' || year !== 'all') ? (
            albums.length > 0 ? (
              albums.map((album) => (
                <article key={album.id} className="rounded-3xl border border-white/10 bg-white/[.04] p-5">
                  <div className="flex gap-4">
                    <img
                      src={album.cover}
                      alt={album.photographer}
                      className="h-32 w-32 rounded-lg border border-white/10 object-cover flex-shrink-0"
                      loading="lazy"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-black tracking-widest text-cyan-300">{album.year}</p>
                      <h2 className="mt-1 text-2xl font-black">{album.photographer}</h2>
                      <div className="mt-4 flex gap-3">
                        <a
                          href={album.flickrAlbum}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block rounded-lg bg-cyan-300 px-4 py-2 text-sm font-bold text-slate-950 hover:bg-cyan-200"
                        >
                          Skatīt albumu →
                        </a>
                        {album.instagramProfile && (
                          <a
                            href={album.instagramProfile}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block rounded-lg bg-pink-500 px-4 py-2 text-sm font-bold text-white hover:bg-pink-600"
                          >
                            Instagram
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <p className="rounded-3xl border border-white/10 p-8 text-center text-white/70">{text(copy.empty)}</p>
            )
          ) : null}
        </div>


        {/* Videos for selected year */}
        {videosForSelectedYear.length > 0 && (
          <div className="mt-16 border-t border-white/10 pt-12">
            <h2 className="text-3xl font-black mb-8">Video — {yearForCarousel}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {videosForSelectedYear.map((v) => {
                const youtubeIdMatch = v.url.match(/[?&]v=([^&]+)/);
                const ytId = youtubeIdMatch ? youtubeIdMatch[1] : null;
                return (
                  <div key={v.id} className="rounded-3xl border border-white/10 bg-white/[.04] overflow-hidden">
                    {v.source === 'youtube' && ytId ? (
                      <a href={`https://www.youtube.com/watch?v=${ytId}`} target="_blank" rel="noopener noreferrer">
                        <img src={`https://img.youtube.com/vi/${ytId}/hqdefault.jpg`} alt={ytId} className="w-full object-cover h-48" />
                      </a>
                    ) : (
                      <a href={v.url} target="_blank" rel="noopener noreferrer" className="block p-4">Open video</a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>

      <script async src="//embedr.flickr.com/assets/client-code.js" charSet="utf-8" />
    </MainLayout>
  );
}
