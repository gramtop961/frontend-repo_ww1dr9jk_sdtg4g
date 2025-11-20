import { motion } from 'framer-motion'

const projects = [
  { name: 'Crimson Landscaping', tag: 'Landscaping • Design • Install • Maintenance' },
  { name: 'MDN Lawn & Landscape', tag: 'Lawn maintenance and landscaping' },
  { name: 'Modern Horse Sales', tag: 'Equestrian sales platform' },
  { name: 'Crimson Clean', tag: 'Pressure washing and cleaning services' },
]

function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_right,_rgba(14,165,233,0.12),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Recent demo projects</h2>
            <p className="text-blue-200/80 mt-2">Your business could be featured next.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex px-5 py-2 rounded-xl bg-white/10 border border-white/10 text-white hover:bg-white/15">Request a free demo</a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6"
            >
              <div className="aspect-video rounded-xl bg-[linear-gradient(135deg,rgba(255,255,255,0.1),transparent)] border border-white/10 mb-4 flex items-center justify-center text-white/70 text-lg group-hover:shadow-[0_0_60px_rgba(59,130,246,0.25)] transition-shadow">
                {p.name}
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold">{p.name}</h3>
                  <p className="text-blue-200/80 text-sm">{p.tag}</p>
                </div>
                <span className="text-white/70 text-sm">Demo</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
