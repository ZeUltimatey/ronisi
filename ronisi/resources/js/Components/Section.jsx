export default function Section({ eyebrow, title, children }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      {eyebrow && <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-orange-300">{eyebrow}</p>}
      <h2 className="max-w-3xl text-3xl font-black tracking-tight md:text-5xl">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}
