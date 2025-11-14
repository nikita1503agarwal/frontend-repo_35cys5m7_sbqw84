import { useMemo, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Cart from '../components/Cart'
import Login from '../components/Login'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  const [cart, setCart] = useState([])
  const [search, setSearch] = useState('')
  const [cartOpen, setCartOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)

  const addToCart = (item) => {
    setCart((prev) => [...prev, item])
    setCartOpen(true)
  }

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id))
  }

  const cartCount = useMemo(() => cart.length, [cart])

  const handleLogin = ({ email }) => {
    console.log('Login attempt:', email)
    setLoginOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1022] via-[#0a1331] to-[#0b1223] text-gray-100">
      <Header onSearch={setSearch} onOpenCart={() => setCartOpen(true)} onOpenLogin={() => setLoginOpen(true)} cartCount={cartCount} />
      <main className="pt-16">
        <Outlet context={{ addToCart, search }} />
      </main>
      <Footer />

      <Cart open={cartOpen} items={cart} onClose={() => setCartOpen(false)} onRemove={removeFromCart} />
      <Login open={loginOpen} onClose={() => setLoginOpen(false)} onSubmit={handleLogin} />
    </div>
  )
}
