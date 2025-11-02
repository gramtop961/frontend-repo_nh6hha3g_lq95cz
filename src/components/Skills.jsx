import { Code, Cpu, Server, Smartphone, Wrench } from 'lucide-react';

const skills = [
  {
    title: 'Frontend',
    icon: Code,
    items: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
  },
  {
    title: 'Backend',
    icon: Server,
    items: ['Node', 'Express', 'NestJS', 'REST APIs'],
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    items: ['Flutter', 'React Native'],
  },
  {
    title: 'DevOps',
    icon: Wrench,
    items: ['Docker', 'CI/CD', 'Cloud', 'Monitoring'],
  },
  {
    title: 'Core',
    icon: Cpu,
    items: ['JavaScript', 'TypeScript', 'Git', 'Testing'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">Skills & Toolkit</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          A balanced stack across web, backend, mobile, and deployment — optimized for velocity and reliability.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ title, icon: Icon, items }) => (
            <div
              key={title}
              className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-cyan-500/10 p-2 text-cyan-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium text-white">{title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
