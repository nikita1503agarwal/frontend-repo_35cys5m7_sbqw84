import { Instagram, Twitter, Facebook, Linkedin } from 'lucide-react'

export default function About() {
  const socials = [
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ]

  const testimonials = [
    { quote: 'A master of light and emotion. The portraits feel alive.', author: 'Elena R.' },
    { quote: 'Captured our day perfectly. Every frame tells a story.', author: "Marcus & Lea" },
    { quote: 'Stunning color work and impeccable composition.', author: 'Devon K.' },
  ]

  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-[#0B1223] to-slate-950">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="opacity-0 translate-x-[-8px] animate-[slideInLeft_.6s_ease-out_forwards]">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop"
            alt="Photographer"
            className="w-full h-80 object-cover rounded-xl border border-white/10 shadow-2xl"
            loading="lazy"
          />
        </div>

        <div className="opacity-0 translate-x-[8px] animate-[slideInRight_.6s_ease-out_forwards]">
          <h3 className="text-3xl text-white font-semibold mb-4" style={{ fontFamily: 'Montserrat, Inter, sans-serif' }}>About the Photographer</h3>
          <p className="text-gray-300 leading-relaxed">
            I believe in the power of images to preserve feeling. My approach blends documentary honesty with cinematic styling, creating work that is timeless yet contemporary. Whether it's a quiet portrait or a sprawling landscape, I aim to reveal the story within.
          </p>
          <div className="mt-6 flex gap-4">
            {socials.map(({ name, icon: Icon, href }) => (
              <a key={name} href={href} className="p-2 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors" aria-label={name}>
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <div className="mt-10">
            <div className="overflow-x-auto no-scrollbar">
              <div className="flex gap-6">
                {testimonials.map((t, i) => (
                  <blockquote
                    key={i}
                    className="min-w-[260px] max-w-sm p-5 rounded-xl bg-slate-900/40 border border-white/10 text-gray-200 opacity-0 translate-y-2"
                    style={{ animation: `fadeInUp .6s ease-out forwards`, animationDelay: `${i * 120}ms` }}
                  >
                    “{t.quote}”
                    <footer className="mt-3 text-sm text-blue-300">— {t.author}</footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-8px) } to { opacity: 1; transform: translateX(0) } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(8px) } to { opacity: 1; transform: translateX(0) } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>
    </section>
  )
}
