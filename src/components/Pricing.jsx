import { motion } from 'framer-motion'
import { CheckCircle2, Sparkles, Rocket, Bot } from 'lucide-react'

const tiers = [
  {
    name: 'Starter Website',
    price: 'from $999',
    popular: false,
    color: 'from-slate-800 to-slate-900',
    icon: Rocket,
    features: [
      'Modern, responsive design',
      '3-5 pages (Home, About, Services, Contact)',
      'Basic SEO setup',
      'Contact form + email notifications',
      '1 round of revisions',
    ],
  },
  {
    name: 'Business Website',
    price: 'from $2,499',
    popular: true,
    color: 'from-blue-700 to-blue-900',
    icon: Sparkles,
    features: [
      'Premium design with animations',
      '6-10 pages + blog or portfolio',
      'Advanced SEO + performance',
      'CMS or headless content setup',
      '2 rounds of revisions',
    ],
  },
  {
    name: 'AI Automations',
    price: 'from $1,200/mo',
    popular: false,
    color: 'from-emerald-700 to-emerald-900',
    icon: Bot,
    features: [
      'Lead capture → onboarding flows',
      'Auto emails, scheduling, follow-ups',
      'AI assistants for FAQs & intake',
      'CRM integrations (Zapier/Make)',
      'Monthly optimization + reporting',
    ],
  },
]

function TierCard({ tier, index }) {
  const Icon = tier.icon
  return (
    <motion.div
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className={`relative rounded-2xl border ${tier.popular ? 'border-white/20' : 'border-white/10'} bg-gradient-to-br ${tier.color} p-6`}
    >
      {tier.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs bg-white/10 backdrop-blur px-3 py-1 rounded-full border border-white/20 text-white">
          Most popular
        </div>
      )}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-white/10 text-white flex items-center justify-center">
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-white font-semibold">{tier.name}</h3>
          <p className="text-blue-200/80 text-sm">{tier.price}</p>
        </div>
      </div>
      <ul className="mt-4 space-y-2">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-blue-100/90">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5" />
            <span className="text-sm">{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <a href="#contact" className={`inline-flex items-center justify-center w-full px-4 py-2 rounded-lg text-sm font-medium text-white ${tier.popular ? 'bg-white/20 hover:bg-white/25' : 'bg-white/10 hover:bg-white/15'} border border-white/20 transition`}>Get started</a>
      </div>
    </motion.div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,_rgba(99,102,241,0.12),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Packages & Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 max-w-2xl mx-auto text-blue-200/80"
          >
            Clear, flexible options for where you are today — and room to scale.
          </motion.p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <TierCard key={t.name} tier={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
