import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-950/70 to-slate-950" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 h-full flex items-center"
      >
        <div className="mx-auto max-w-7xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight"
            style={{ fontFamily: 'Montserrat, Inter, sans-serif' }}
          >
            Capturing Moments, One Frame at a Time
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-4 max-w-2xl text-gray-300"
            style={{ fontFamily: 'Open Sans, Inter, sans-serif' }}
          >
            A curated gallery of portraits, nature, and events. Explore, favorite, and purchase high‑resolution imagery.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 flex gap-3"
          >
            <a href="#gallery" className="px-5 py-3 rounded-md bg-blue-500/90 hover:bg-blue-400 text-white shadow-lg shadow-blue-500/20 transition-colors">Browse Gallery</a>
            <a href="#contact" className="px-5 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors">Contact</a>
          </motion.div>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(30,58,138,0.35),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(2,6,23,0.8),transparent_60%)]" />
    </section>
  )
}
