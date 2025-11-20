import { useState } from 'react'
import { motion } from 'framer-motion'

function Contact() {
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    const form = new FormData(e.currentTarget)
    const payload = {
      full_name: form.get('full_name'),
      email: form.get('email'),
      phone: form.get('phone') || undefined,
      message: form.get('message'),
      source: 'portfolio'
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus('Thanks! I\'ll reach out shortly.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.12),transparent_60%)]" />
      <div className="relative max-w-3xl mx-auto px-6">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-white">Request a quote or free demo</h2>
        <p className="text-center text-blue-200/80 mt-2">Tell me about your business and website needs.</p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-blue-200/80 mb-1">Full name</label>
              <input required name="full_name" className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder-blue-200/50 outline-none focus:ring-2 focus:ring-blue-500" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm text-blue-200/80 mb-1">Email</label>
              <input required type="email" name="email" className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder-blue-200/50 outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
            </div>
          </div>

          <div>
            <label className="block text-sm text-blue-200/80 mb-1">Phone (optional)</label>
            <input name="phone" className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder-blue-200/50 outline-none focus:ring-2 focus:ring-blue-500" placeholder="(555) 555-5555" />
          </div>

          <div>
            <label className="block text-sm text-blue-200/80 mb-1">Message</label>
            <textarea required name="message" rows="5" className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder-blue-200/50 outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell me about your business and website needs." />
          </div>

          <button disabled={loading} className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 disabled:opacity-60 text-white font-semibold">
            {loading ? 'Sending...' : 'Send request'}
          </button>

          {status && <p className="text-blue-100/90">{status}</p>}

          <div className="text-sm text-blue-200/70 mt-2">
            Or reach me directly: porter.j.robertson+website@gmail.com • (580) 504-6396 • Norman, Oklahoma
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
