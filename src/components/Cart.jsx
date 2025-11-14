export default function Cart({ open, items = [], onClose, onRemove }) {
  const total = items.reduce((sum, i) => sum + (i.price || 0), 0)

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50" aria-modal="true" role="dialog">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
        onClick={onClose}
        style={{ animation: 'fadeIn 200ms ease-out' }}
      />

      <aside
        className="absolute right-0 top-0 h-full w-full sm:w-[420px] bg-slate-950 border-l border-white/10 shadow-2xl flex flex-col"
        style={{ animation: 'slideIn 260ms ease-out' }}
      >
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <h3 className="text-white text-lg font-semibold" style={{ fontFamily: 'Montserrat, Inter, sans-serif' }}>Your Cart</h3>
          <button onClick={onClose} className="text-sm text-gray-300 hover:text-white px-2 py-1 rounded-md hover:bg-white/10">Close</button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 && (
            <p className="text-gray-400 text-sm">Your cart is empty.</p>
          )}
          {items.map((item) => (
            <div key={item.id} className="flex gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
              <img src={item.url} alt={item.title} className="h-16 w-16 object-cover rounded-md" loading="lazy" />
              <div className="flex-1 min-w-0">
                <p className="text-white truncate">{item.title}</p>
                <p className="text-blue-300 text-sm">${item.price}</p>
              </div>
              <button onClick={() => onRemove && onRemove(item.id)} className="text-xs px-2 py-1 rounded-md border border-white/10 text-gray-200 hover:bg-white/10">Remove</button>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-white/10">
          <div className="flex items-center justify-between text-white mb-3">
            <span>Total</span>
            <span className="font-semibold">${total.toFixed(2)}</span>
          </div>
          <button className="w-full px-4 py-3 rounded-md bg-blue-500/90 hover:bg-blue-400 text-white transition-transform duration-150 active:scale-95">Checkout</button>
        </div>
      </aside>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideIn { from { transform: translateX(100%) } to { transform: translateX(0) } }
      `}</style>
    </div>
  )
}
