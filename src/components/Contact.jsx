import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Let’s build something great</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            I’m open to freelance work, product engineering, and collaborations.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="mailto:hello@yourdomain.dev"
              className="inline-flex items-center gap-2 rounded-md bg-cyan-500 px-4 py-2 font-medium text-slate-900 transition hover:bg-cyan-400"
            >
              <Mail className="h-4 w-4" /> Email Me
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-white transition hover:bg-white/10"
            >
              <Github className="h-5 w-5" /> GitHub
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-white transition hover:bg-white/10"
            >
              <Linkedin className="h-5 w-5" /> LinkedIn
            </a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </section>
  );
}
