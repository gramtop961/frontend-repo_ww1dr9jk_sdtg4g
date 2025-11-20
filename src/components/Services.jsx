import { motion } from 'framer-motion'
import { Sparkles, Rocket, Smartphone, Gauge, Settings, Search, Bot, Calendar, Mail } from 'lucide-react'

const services = [
  { title: 'Website design', icon: Sparkles, desc: 'Clean, modern designs with storytelling and motion.' },
  { title: 'Responsive development', icon: Smartphone, desc: 'Looks perfect on mobile, tablet, and desktop.' },
  { title: 'Fast performance', icon: Gauge, desc: 'Optimized for speed and smooth interactions.' },
  { title: 'SEO basics', icon: Search, desc: 'Metadata, sitemaps, and structure that Google loves.' },
  { title: 'Custom animations', icon: Rocket, desc: 'Scroll-based scenes, micro-interactions, and SVG motion.' },
  { title: 'AI automation setup', icon: Bot, desc: 'Workflows that handle intake, bookings, and follow-ups.' },
  { title: 'Booking systems', icon: Calendar, desc: 'Calendars, reminders, and confirmations.' },
  { title: 'Automatic emails', icon: Mail, desc: 'Lead responses and customer updates, hands-free.' },
]

function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,_rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Websites that work. Automations that work even harder.</h2>
          <p className="mt-3 text-blue-200/80">Professional design • Mobile-friendly • Fast • SEO basics • Custom motion</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center mb-3">
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="text-white font-semibold">{s.title}</h3>
              <p className="text-blue-200/80 text-sm mt-1">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
