import { useState, useEffect } from 'react'
import { Menu, X, Search, ShoppingCart, Camera, LogIn } from 'lucide-react'

export default function Header({ onSearch, onOpenCart, onOpenLogin, cartCount = 0 }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = 'text-gray-200/90 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium'

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch && onSearch(query)
  }

  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-all ${scrolled ? 'backdrop-blur-md bg-slate-950/60 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-white">
            <Camera className="h-6 w-6" />
            <span className="font-semibold tracking-wide" style={{ fontFamily: 'Montserrat, Inter, sans-serif' }}>BlueFrame Studio</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            <a href="/gallery" className={linkClass}>Gallery</a>
            <a href="/about" className={linkClass}>About</a>
            <a href="/contact" className={linkClass}>Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <form onSubmit={handleSubmit} className="relative">
              <Search className="h-4 w-4 text-gray-300 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search images"
                className="pl-9 pr-3 py-2 rounded-md bg-white/10 border border-white/10 text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/60"
              />
            </form>
            <button onClick={onOpenCart} className="relative p-2 rounded-md hover:bg-white/10 text-gray-100">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 text-[10px] bg-blue-500 text-white rounded-full px-1.5 py-0.5">
                  {cartCount}
                </span>
              )}
            </button>
            <button onClick={onOpenLogin} className="flex items-center gap-1 text-xs px-3 py-2 rounded-md border border-white/10 text-gray-100 hover:bg-white/10">
              <LogIn className="h-4 w-4" /> Login
            </button>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 rounded-md text-white hover:bg-white/10">
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 animate-in">
            <form onSubmit={handleSubmit} className="relative mb-3">
              <Search className="h-4 w-4 text-gray-300 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search images"
                className="w-full pl-9 pr-3 py-2 rounded-md bg-white/10 border border-white/10 text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/60"
              />
            </form>
            <div className="flex flex-col gap-1">
              <a href="/gallery" className={linkClass}>Gallery</a>
              <a href="/about" className={linkClass}>About</a>
              <a href="/contact" className={linkClass}>Contact</a>
              <button onClick={onOpenCart} className="text-left text-gray-200/90 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">Cart</button>
              <button onClick={onOpenLogin} className="text-left text-gray-200/90 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">Login</button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
