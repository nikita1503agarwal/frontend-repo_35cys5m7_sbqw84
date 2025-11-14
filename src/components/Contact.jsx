export default function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-950/95">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-3xl text-white font-semibold mb-4" style={{ fontFamily: 'Montserrat, Inter, sans-serif' }}>Contact</h3>
          <p className="text-gray-300 mb-6">Questions, bookings, or collaborations? Send a message and I’ll get back to you.</p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Name</label>
              <input className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/60" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Email</label>
              <input type="email" className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/60" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Message</label>
              <textarea rows="4" className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/60" placeholder="Tell me a bit about your project..." />
            </div>
            <button className="px-5 py-3 rounded-md bg-blue-500/90 hover:bg-blue-400 text-white shadow-lg shadow-blue-500/20 transition-transform duration-150 active:scale-95 hover:scale-[1.02]">Submit</button>
          </form>

          <div className="mt-10 aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 opacity-0 animate-[fadeIn_.5s_ease-out_.1s_forwards]">
            <iframe
              title="Studio Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.084540579107!2d-122.4194153846792!3d37.77492977975998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c1b1b1b1b%3A0x123456789abcdef!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="relative">
          <div className="sticky top-24 p-6 rounded-xl bg-gradient-to-br from-slate-900/60 to-slate-900/30 border border-white/10 text-gray-200 opacity-0 animate-[fadeIn_.6s_ease-out_.2s_forwards]">
            <h4 className="text-xl text-white font-semibold">Direct Inquiries</h4>
            <p className="mt-2">Email: <a href="mailto:studio@example.com" className="text-blue-300 hover:underline">studio@example.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="text-blue-300 hover:underline">+1 (234) 567‑890</a></p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
      `}</style>
    </section>
  )
}
