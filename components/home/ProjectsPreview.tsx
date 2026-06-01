'use client';

import Link from 'next/link';

export function ProjectsPreview() {
  const items = [
    {
      title: 'Manufacturing plant expansion',
      category: 'Industrial',
      detail: 'Process, utility and delivery engineering for a high-capacity facility.',
      metric: '32 MW',
      image: 'https://images.unsplash.com/photo-1581091870627-3c77b1914f7f?auto=format&fit=crop&w=1200&q=80',
      href: '/projects',
    },
    {
      title: 'Renewable power campus',
      category: 'Energy',
      detail: 'Energy systems, controls integration and sustainability planning.',
      metric: '65 MW',
      image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80',
      href: '/projects',
    },
    {
      title: 'Urban mobility infrastructure',
      category: 'Transport',
      detail: 'Traffic, civil engineering and infrastructure coordination for mobility hubs.',
      metric: '12 km',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
      href: '/projects',
    },
  ];

  return (
    <section className="mx-auto max-w-6xl">
      <div className="space-y-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-brand-500">Projects</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Selected engineering case studies</h2>
          </div>
          <Link href="/projects" className="text-sm font-semibold text-brand-500 hover:text-brand-700">
            View all projects →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((project) => (
            <article key={project.title} className="group overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
              <Link href={project.href} className="block">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <span className="absolute left-4 bottom-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900">{project.category}</span>
                  <span className="absolute right-4 top-4 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{project.metric}</span>
                  <h3 className="absolute left-4 bottom-12 text-lg font-semibold text-white drop-shadow">{project.title}</h3>
                </div>
              </Link>
              <div className="p-6">
                <p className="text-slate-600">{project.detail}</p>
                <div className="mt-4 flex items-center justify-between text-sm font-semibold text-brand-500">
                  <Link href={project.href} className="transition group-hover:text-brand-700">View details →</Link>
                  <span className="text-xs text-slate-500">Case study</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
