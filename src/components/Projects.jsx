import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Collaboration Dashboard',
    description:
      'A Next.js + NestJS platform with websockets for live updates, featuring role-based access and analytics.',
    tags: ['Next.js', 'NestJS', 'PostgreSQL', 'WebSockets', 'Docker'],
    link: '#',
  },
  {
    title: 'Cross‑platform Fitness App',
    description:
      'Flutter mobile app paired with a Node/Express API. Offline-first syncing, push notifications, and Stripe billing.',
    tags: ['Flutter', 'Node', 'Express', 'MongoDB', 'Stripe'],
    link: '#',
  },
  {
    title: 'React Native Delivery Client',
    description:
      'Location tracking, background tasks, and camera scanning with a React Native frontend and secure API.',
    tags: ['React Native', 'TypeScript', 'REST', 'Maps'],
    link: '#',
  },
];

function ProjectCard({ title, description, tags, link }) {
  return (
    <div className="group flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
      <div>
        <div className="h-36 w-full rounded-lg bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20" />
        <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-white/70">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <a
          href={link}
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
          target="_blank"
          rel="noreferrer"
        >
          View Project <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">Featured Projects</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          A selection of work spanning product MVPs, mobile apps, and scalable backend services.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
