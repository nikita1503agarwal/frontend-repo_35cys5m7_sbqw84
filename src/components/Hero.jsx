export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] min-h-[560px] w-full overflow-hidden bg-slate-950">
      {/* Lightweight background: layered gradients + soft blobs (CSS only) */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(37,99,235,0.18),transparent_70%),radial-gradient(800px_400px_at_10%_20%,rgba(59,130,246,0.14),transparent_60%),radial-gradient(900px_500px_at_90%_30%,rgba(15,23,42,0.6),transparent_60%)]" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Soft floating blobs - CSS only animations (very light) */}
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute right-[-4rem] bottom-10 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl animate-pulse" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight"
            style={{ fontFamily: 'Montserrat, Inter, sans-serif' }}
          >
            Capturing Moments, One Frame at a Time
          </h1>
          <p
            className="mt-4 max-w-2xl text-gray-300"
            style={{ fontFamily: 'Open Sans, Inter, sans-serif' }}
          >
            A curated gallery of portraits, nature, and events. Explore, favorite, and purchase high‑resolution imagery.
          </p>

          <div className="mt-8 flex gap-3">
            <a href="#gallery" className="px-5 py-3 rounded-md bg-blue-500/90 hover:bg-blue-400 text-white shadow-lg shadow-blue-500/20 transition-colors">Browse Gallery</a>
            <a href="#contact" className="px-5 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors">Contact</a>
          </div>
        </div>
      </div>

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(30,58,138,0.22),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(2,6,23,0.9),transparent_60%)]" />
    </section>
  )
}
