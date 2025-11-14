import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ZoomIn } from 'lucide-react'

const sampleImages = [
  { id: 1, url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop', title: 'Neon Reflections', category: 'events', price: 29 },
  { id: 2, url: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1600&auto=format&fit=crop', title: 'Emerald Silence', category: 'nature', price: 24 },
  { id: 3, url: 'https://images.unsplash.com/photo-1495480137268-3df3a5a89d6b?q=80&w=1600&auto=format&fit=crop', title: 'Urban Muse', category: 'portrait', price: 35 },
  { id: 4, url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop', title: 'Blue Gaze', category: 'portrait', price: 32 },
  { id: 5, url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop', title: 'Highland Breath', category: 'nature', price: 28 },
  { id: 6, url: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?q=80&w=1600&auto=format&fit=crop', title: 'Quiet Stage', category: 'events', price: 22 },
]

const categories = ['all', 'portrait', 'nature', 'events']

export default function Gallery({ onAddToCart }) {
  const [filter, setFilter] = useState('all')
  const [lightbox, setLightbox] = useState(null)

  const images = useMemo(() => {
    return filter === 'all' ? sampleImages : sampleImages.filter(i => i.category === filter)
  }, [filter])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setLightbox(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section id="gallery" className="relative py-16 bg-gradient-to-b from-slate-950 via-slate-950 to-[#0B1223]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl text-white font-semibold" style={{ fontFamily: 'Montserrat, Inter, sans-serif' }}>Featured Gallery</h2>
          <div className="flex gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-md text-sm transition-all border ${filter === cat ? 'bg-blue-500/90 border-blue-400 text-white' : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'}`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-xl bg-slate-900/40 border border-white/10"
            >
              <img
                src={`${img.url}`}
                alt={img.title}
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 inset-x-0 p-4 flex items-end justify-between">
                <div>
                  <p className="text-white font-medium">{img.title}</p>
                  <p className="text-blue-300 text-sm">${img.price}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setLightbox(img)} className="p-2 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors" aria-label="Zoom image"><ZoomIn className="h-4 w-4" /></button>
                  <button onClick={() => onAddToCart && onAddToCart(img)} className="px-3 py-2 rounded-md bg-blue-500 hover:bg-blue-400 text-white text-sm transition-colors">Add to Cart</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 14 }}
              src={lightbox.url}
              alt={lightbox.title}
              className="max-h-[80vh] w-auto rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
