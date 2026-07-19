export default function PageHeader({ eyebrow, title, description }) {
  return (
    <header className="max-w-3xl">
      {eyebrow && <p className="font-bold tracking-[0.35em] text-cyan-300">{eyebrow}</p>}
      <h1 className="mt-5 text-4xl font-black sm:text-5xl">{title}</h1>
      {description && <p className="mt-5 text-lg leading-8 text-white/70">{description}</p>}
    </header>
  );
}
