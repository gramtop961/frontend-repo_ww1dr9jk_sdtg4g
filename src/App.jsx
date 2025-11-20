import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Workflow from './components/Workflow'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative">
      {/* Subtle background particles/gradients are embedded per-section */}
      <header className="sticky top-0 z-50 backdrop-blur bg-slate-950/40 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight">Porter Robertson</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-blue-200/80">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium">Request Demo</a>
        </div>
      </header>

      <main id="top">
        <Hero />
        <Services />
        <Portfolio />
        <Workflow />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-10 text-center text-blue-200/70">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-center justify-center mb-3">
            <a href="#top" className="hover:text-white">Home</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <p>© 2025 Porter Robertson. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
