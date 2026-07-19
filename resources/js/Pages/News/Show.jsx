import { Head, Link } from '@inertiajs/react';
import MainLayout from '../../Layouts/MainLayout';
import { newsPosts } from '../../shared/data/media';

export default function NewsShow({ slug }) {
  const post = newsPosts.find((item) => item.slug === slug);

  if (!post) {
    return <MainLayout><section className="mx-auto max-w-3xl px-4 py-20"><h1 className="text-4xl font-black">Publikācija nav atrasta</h1><Link href="/aktualais" className="mt-6 inline-block font-bold text-cyan-300">← Atpakaļ uz aktualitātēm</Link></section></MainLayout>;
  }

  return (
    <MainLayout>
      <Head title={post.title} />
      <article className="mx-auto max-w-4xl px-4 py-14 lg:px-8">
        <Link href="/aktualais" className="font-bold text-cyan-300">← Visas aktualitātes</Link>
        <time className="mt-8 block text-sm font-bold uppercase tracking-widest text-white/55" dateTime={post.date}>{new Intl.DateTimeFormat('lv-LV', { dateStyle: 'long' }).format(new Date(post.date))}</time>
        <h1 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">{post.title}</h1>
        <p className="mt-6 text-xl leading-9 text-white/70">{post.excerpt}</p>
        <img src={post.image} alt="" className="mt-10 aspect-[16/9] w-full rounded-3xl object-cover" />
        <div className="mt-10 space-y-6 text-lg leading-9 text-slate-300">
          {post.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </article>
    </MainLayout>
  );
}
