export default function RemoteImage({ src, alt = '', className = '' }) {
  return (
    <div className={`overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/20 to-blue-900/40 ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover"
          onError={(event) => {
            event.currentTarget.style.display = 'none';
          }}
        />
      ) : null}
    </div>
  );
}
