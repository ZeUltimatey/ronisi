import { useEffect, useMemo, useState } from 'react';

export default function Carousel({ items, renderItem, ariaLabel, autoPlay = true, interval = 5000 }) {
  const safeItems = useMemo(() => items ?? [], [items]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [safeItems]);

  useEffect(() => {
    if (!autoPlay || safeItems.length < 2) return undefined;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % safeItems.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [autoPlay, interval, safeItems.length]);

  if (safeItems.length === 0) return null;

  const move = (step) => {
    setIndex((current) => (current + step + safeItems.length) % safeItems.length);
  };

  return (
    <div className="relative" aria-label={ariaLabel} aria-roledescription="carousel">
      <div className="overflow-hidden rounded-3xl">{renderItem(safeItems[index], index)}</div>

      {safeItems.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => move(-1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-slate-950/80 px-4 py-3 font-black backdrop-blur hover:bg-slate-900"
            aria-label="Iepriekšējais attēls"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-slate-950/80 px-4 py-3 font-black backdrop-blur hover:bg-slate-900"
            aria-label="Nākamais attēls"
          >
            →
          </button>
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2" aria-label="Slaidu izvēle">
            {safeItems.map((item, dotIndex) => (
              <button
                key={item.id ?? dotIndex}
                type="button"
                onClick={() => setIndex(dotIndex)}
                className={`h-2.5 rounded-full transition-all ${dotIndex === index ? 'w-8 bg-cyan-300' : 'w-2.5 bg-white/60 hover:bg-white'}`}
                aria-label={`Rādīt ${dotIndex + 1}. slaidu`}
                aria-current={dotIndex === index}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
