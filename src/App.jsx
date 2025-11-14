import { useMemo, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [cart, setCart] = useState([])
  const [search, setSearch] = useState('')

  const addToCart = (item) => {
    setCart((prev) => [...prev, item])
  }

  const onSearch = (q) => setSearch(q)

  const cartCount = useMemo(() => cart.length, [cart])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1022] via-[#0a1331] to-[#0b1223] text-gray-100">
      <Header onSearch={onSearch} onOpenCart={() => alert('Cart coming soon')} cartCount={cartCount} />
      <main className="pt-16">
        <Hero />
        <Gallery onAddToCart={addToCart} search={search} />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
