import { motion } from 'framer-motion'
import { Calendar, Mail, Settings2, ArrowRight, Bot, MessageSquare, Zap } from 'lucide-react'

const nodes = [
  { id: 'lead', label: 'Lead Captured', icon: MessageSquare, color: 'from-cyan-500/30 to-cyan-400/10' },
  { id: 'schedule', label: 'Auto-Schedule', icon: Calendar, color: 'from-blue-500/30 to-blue-400/10' },
  { id: 'email', label: 'Warm Email', icon: Mail, color: 'from-indigo-500/30 to-indigo-400/10' },
  { id: 'automation', label: 'Workflow', icon: Settings2, color: 'from-violet-500/30 to-violet-400/10' },
  { id: 'ai', label: 'AI Assistant', icon: Bot, color: 'from-emerald-500/30 to-emerald-400/10' },
  { id: 'convert', label: 'Conversion', icon: Zap, color: 'from-amber-500/30 to-amber-400/10' },
]

function Connector({ className = '' }) {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`h-0.5 bg-gradient-to-r from-white/0 via-white/40 to-white/0 ${className}`}
      style={{ transformOrigin: 'left center' }}
    />
  )
}

function Node({ item, delay = 0 }) {
  const Icon = item.icon
  return (
    <motion.div
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay }}
      className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4"
    >
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} border border-white/10 flex items-center justify-center text-white`}> 
        <Icon className="w-6 h-6" />
      </div>
      <div className="mt-3">
        <p className="text-white font-medium leading-tight">{item.label}</p>
        <p className="text-blue-200/70 text-xs">Hands-off steps that save hours weekly.</p>
      </div>
    </motion.div>
  )
}

export default function AutomationFlow() {
  return (
    <section id="automation" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(56,189,248,0.12),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Automation Workflows
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 max-w-2xl text-blue-200/80"
          >
            From first message to booked call and follow-ups — visualize the high-impact automations powering your growth.
          </motion.p>
        </div>

        {/* Desktop flow */}
        <div className="mt-12 hidden md:block">
          <div className="grid grid-cols-6 gap-4 items-center">
            {nodes.map((n, i) => (
              <div key={n.id} className="flex items-center">
                <div className="flex-1">
                  <Node item={n} delay={i * 0.05} />
                </div>
                {i < nodes.length - 1 && (
                  <div className="w-8">
                    <Connector />
                    <ArrowRight className="w-4 h-4 text-white/60 mx-auto mt-1" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile flow - stacked */}
        <div className="mt-10 space-y-4 md:hidden">
          {nodes.map((n, i) => (
            <div key={n.id}>
              <Node item={n} delay={i * 0.05} />
              {i < nodes.length - 1 && (
                <div className="my-2">
                  <Connector className="w-full" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
