import { Link } from '@inertiajs/react';
import MainLayout from '../../Layouts/MainLayout';
import PageHeader from '../../shared/components/PageHeader';
import { newsPosts } from '../../shared/data/media';

export default function NewsIndex() {
  return (
    <MainLayout>
      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <PageHeader eyebrow="AKTUĀLAIS" title="Jaunumi un publikācijas" description="Katrs bloks ved uz savu pilno publikācijas lapu, nevis izliekas par rakstu un pēc klikšķa nedara neko." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newsPosts.map((post) => (
            <Link key={post.slug} href={`/aktualais/${post.slug}`} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-cyan-300/40">
              <img src={post.image} alt="" className="aspect-[16/10] w-full object-cover" />
              <article className="p-6">
                <time className="text-sm font-bold text-cyan-300" dateTime={post.date}>{new Intl.DateTimeFormat('lv-LV', { dateStyle: 'long' }).format(new Date(post.date))}</time>
                <h2 className="mt-3 text-2xl font-black group-hover:text-cyan-300">{post.title}</h2>
                <p className="mt-3 leading-7 text-white/70">{post.excerpt}</p>
                <span className="mt-6 inline-flex font-bold">Lasīt publikāciju →</span>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}
