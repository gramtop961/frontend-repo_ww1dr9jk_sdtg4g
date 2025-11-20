import { motion } from 'framer-motion'
import { Layers, Hammer, Rocket, Bot, TrendingUp } from 'lucide-react'

const steps = [
  { title: 'Plan', icon: Layers, desc: 'We define goals, content, and brand direction.' },
  { title: 'Build', icon: Hammer, desc: 'Design and develop a modern, responsive site.' },
  { title: 'Launch', icon: Rocket, desc: 'Go live with SEO basics and performance tuned.' },
  { title: 'Automate', icon: Bot, desc: 'Add AI-driven workflows to save hours weekly.' },
  { title: 'Grow', icon: TrendingUp, desc: 'Iterate on conversions and content over time.' },
]

function Workflow() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(34,197,94,0.12),transparent_60%)]" />
      <div className="relative max-w-5xl mx-auto px-6">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-white">Plan → Build → Launch → Automate → Grow</h2>

        <div className="mt-12 grid md:grid-cols-5 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 text-center"
            >
              <div className="mx-auto w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center mb-3">
                <s.icon className="w-6 h-6" />
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

export default Workflow
