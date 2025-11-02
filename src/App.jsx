import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Subtle background accents */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,197,94,0.08),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.08),transparent_40%)]" />

      <header className="relative mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center justify-between">
          <a href="#" className="text-lg font-semibold tracking-tight">
            <span className="text-cyan-400">Dev</span>Portfolio
          </a>
          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="relative">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
