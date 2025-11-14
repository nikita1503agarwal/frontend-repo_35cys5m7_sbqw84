import { useState } from 'react'

export default function Login({ onClose, open, onSubmit }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  if (!open) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit && onSubmit({ email, password })
  }

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} style={{ animation: 'fadeIn 200ms ease-out' }} />
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-gradient-to-b from-slate-950 to-slate-900 p-6 text-gray-200 shadow-2xl" style={{ animation: 'scaleIn 220ms ease-out' }}>
          <h3 className="text-xl text-white font-semibold mb-2" style={{ fontFamily: 'Montserrat, Inter, sans-serif' }}>Login</h3>
          <p className="text-sm text-gray-400 mb-4">Access your client area to view purchases and downloads.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/60" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/60" placeholder="••••••••" />
            </div>
            <button className="w-full px-4 py-2.5 rounded-md bg-blue-500/90 hover:bg-blue-400 text-white transition-transform duration-150 active:scale-95">Sign in</button>
          </form>
          <button onClick={onClose} className="mt-4 w-full text-center text-xs text-gray-400 hover:text-gray-200">Cancel</button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(.96) } to { opacity: 1; transform: scale(1) } }
      `}</style>
    </div>
  )
}
