import Spline from '@splinetool/react-spline';
import { Rocket, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <Rocket className="h-3.5 w-3.5 text-cyan-400" />
              <span>Developer Portfolio</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              Hi, I’m <span className="text-cyan-400">a full‑stack engineer</span> with 1.5 years of hands‑on experience
            </h1>
            <p className="max-w-xl text-base text-white/70 md:text-lg">
              I build modern web and mobile applications with React, Next.js, Node, Express, NestJS, Flutter, and React Native — and ship them reliably with DevOps best practices.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-cyan-500 px-4 py-2 font-medium text-slate-900 transition hover:bg-cyan-400"
              >
                <Rocket className="h-4 w-4" /> Explore Projects
              </a>
              <a
                href="mailto:hello@yourdomain.dev"
                className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 font-medium text-white transition hover:bg-white/10"
              >
                <Mail className="h-4 w-4" /> Contact Me
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white transition hover:bg-white/10"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white transition hover:bg-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                'React',
                'Next.js',
                'Node',
                'Express',
                'NestJS',
                'Flutter',
                'React Native',
                'DevOps',
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative h-[60vh] w-full md:h-[70vh]">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* Decorative gradient that does not block the 3D scene */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
