'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Building2, Gauge, MapPinned, Route, Zap } from 'lucide-react';

const projects = [
  {
    title: 'Manufacturing Plant Expansion',
    category: 'Industrial',
    detail: 'Process, utility and delivery engineering for a high-capacity facility.',
    metric: '32 MW',
    metricLabel: 'Capacity',
    image:
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80',
    href: '/projects',
    icon: Building2,
    accent: 'from-amber-400 to-orange-600',
    location: 'Integrated process works',
  },
  {
    title: 'Renewable Power Campus',
    category: 'Energy',
    detail: 'Energy systems, controls integration and sustainability planning.',
    metric: '65 MW',
    metricLabel: 'Output',
    image:
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=900&q=80',
    href: '/projects',
    icon: Zap,
    accent: 'from-emerald-400 to-teal-700',
    location: 'Utility-scale generation',
  },
  {
    title: 'Urban Mobility Infrastructure',
    category: 'Transport',
    detail:
      'Traffic, civil engineering and infrastructure coordination for mobility hubs.',
    metric: '12 km',
    metricLabel: 'Network',
    image:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=900&q=80',
    href: '/projects',
    icon: Route,
    accent: 'from-sky-400 to-blue-700',
    location: 'City access corridor',
  },
];

const stats = [
  { value: '3', label: 'Featured sectors' },
  { value: '100+', label: 'Coordinated packages' },
  { value: '0', label: 'Loose handovers' },
];

export function ProjectsPreview() {
  const [featured, ...rest] = projects;
  const FeaturedIcon = featured.icon;

  return (
    <section className="mx-auto max-w-6xl">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.25fr] lg:items-end">
        <div className="lg:pb-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-500"
          >
            Projects
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-3 max-w-xl text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl"
          >
            Built work with measurable engineering outcomes.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="mt-4 max-w-lg text-sm leading-7 text-slate-600 sm:text-base"
          >
            A closer look at projects where planning, technical design and
            delivery coordination had to work together from day one.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 grid max-w-xl grid-cols-3 overflow-hidden rounded-2xl border border-border bg-white shadow-sm"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="border-r border-border p-4 last:border-r-0">
                <p className="text-2xl font-extrabold text-slate-950">{stat.value}</p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="relative min-h-[440px]"
        >
          <div className="absolute left-5 right-5 top-7 h-[calc(100%-2rem)] rounded-[2rem] bg-slate-950" />
          <Link
            href={featured.href}
            className="group absolute inset-x-0 top-0 block overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl shadow-slate-950/20"
          >
            <div className="relative h-[360px] overflow-hidden sm:h-[420px]">
              <img
                src={featured.image}
                alt={featured.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                    <FeaturedIcon className="h-3.5 w-3.5" />
                    {featured.category}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/85 backdrop-blur-md">
                    <MapPinned className="h-3.5 w-3.5" />
                    {featured.location}
                  </span>
                </div>

                <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h3 className="max-w-md text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                      {featured.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-6 text-slate-200">
                      {featured.detail}
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-3 text-white backdrop-blur-md">
                    <Gauge className="h-5 w-5 text-brand-100" />
                    <div>
                      <p className="text-2xl font-extrabold leading-none">{featured.metric}</p>
                      <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-slate-300">
                        {featured.metricLabel}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link
            href="/projects"
            className="group absolute bottom-0 right-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-500 text-white shadow-xl shadow-brand-500/30 transition hover:-translate-y-1 hover:bg-brand-700 sm:right-8"
            aria-label="View all projects"
          >
            <ArrowUpRight className="h-6 w-6 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        {rest.map((project, index) => {
          const ProjectIcon = project.icon;

          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.12 + index * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <Link href={project.href} className="grid h-full sm:grid-cols-[180px_1fr]">
                <div className="relative min-h-[190px] overflow-hidden sm:min-h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className={`absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t ${project.accent} opacity-70`} />
                </div>

                <div className="flex min-h-[220px] flex-col justify-between p-5">
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-700">
                        <ProjectIcon className="h-3.5 w-3.5 text-brand-500" />
                        {project.category}
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-slate-300 transition group-hover:text-brand-500" />
                    </div>

                    <h3 className="mt-5 text-xl font-extrabold leading-tight text-slate-950">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {project.detail}
                    </p>
                  </div>

                  <div className="mt-6 flex items-end justify-between border-t border-border pt-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                        {project.metricLabel}
                      </p>
                      <p className="mt-1 text-2xl font-extrabold text-brand-500">
                        {project.metric}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-slate-900">
                      View case study
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
