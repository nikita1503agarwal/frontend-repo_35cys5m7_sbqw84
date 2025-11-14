import { ArrowUp, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative bg-[#0B1223] text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h5 className="text-white font-semibold mb-3">BlueFrame Studio</h5>
          <p className="text-sm text-gray-400">Minimal, modern photography crafted with care.</p>
        </div>
        <div>
          <h6 className="text-white font-semibold mb-3">Company</h6>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>
        <div>
          <h6 className="text-white font-semibold mb-3">Follow</h6>
          <div className="flex gap-3">
            {[Instagram, Twitter, Facebook, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="p-2 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors" aria-label="Social link">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-end justify-end">
          <button onClick={scrollTop} className="flex items-center gap-2 px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white text-sm">
            <ArrowUp className="h-4 w-4" /> Back to top
          </button>
        </div>
      </div>
      <div className="fixed bottom-0 inset-x-0 h-12 bg-[#08101F] border-t border-white/10 flex items-center justify-center text-xs text-gray-400">© {new Date().getFullYear()} BlueFrame Studio. All rights reserved.</div>
    </footer>
  )
}
