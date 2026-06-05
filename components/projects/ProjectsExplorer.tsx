'use client';

import { useMemo, useState } from 'react';
import {
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  Image as ImageIcon,
  MapPinned,
  X,
} from 'lucide-react';
import type { Project } from '@/lib/projects';

type ProjectsExplorerProps = {
  projects: Project[];
};

const preferredCategories = [
  'All',
  'Residential',
  'Apartments',
  'Commercial',
  'Hospitality',
  'Industrial',
  'Institutional',
  'Infrastructure',
  'Churches',
  'Factories',
  'Warehouses',
  'Renovations',
  'Structural Assessments',
  'Mixed Development',
  'Civil Works',
  'Townhouses',
];

export function ProjectsExplorer({ projects }: ProjectsExplorerProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = useMemo(() => {
    const projectCategories = projects.map((project) => project.industry);
    return Array.from(new Set([...preferredCategories, ...projectCategories]));
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((project) => project.industry === activeCategory);
  }, [activeCategory, projects]);

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-500">
              Projects
            </p>
            <h1 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight text-slate-950 sm:text-5xl">
              Real project work across Kenya&apos;s built environment.
            </h1>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Browse Masfy project work by sector. Select a project image to view
            the full description, location, client sector, Masfy scope,
            structural or civil systems, challenges, solution, outcome, and
            gallery.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeCategory === category
                  ? 'bg-slate-950 text-white shadow-lg shadow-slate-950/15'
                  : 'border border-border bg-white text-slate-600 hover:border-brand-500/40 hover:text-slate-950'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition hover:shadow-xl md:hover:-translate-y-1"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="block w-full text-left"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 md:group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-900 backdrop-blur">
                    {project.industry}
                  </div>
                  <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-brand-500 text-white shadow-lg shadow-brand-500/25">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>

                <div className="p-5">
                  <h2 className="text-xl font-extrabold leading-tight text-slate-950">
                    {project.title}
                  </h2>
                  <div className="mt-3 flex items-center gap-2 text-sm font-medium text-slate-500">
                    <MapPinned className="h-4 w-4 text-brand-500" />
                    {project.location}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {project.summary}
                  </p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    {project.clientSector}
                  </p>
                </div>
              </button>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="mt-8 rounded-[2rem] border border-dashed border-border bg-surface p-8 text-center">
            <h2 className="text-xl font-extrabold text-slate-950">
              No published projects in {activeCategory} yet.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              More project case studies will be added as details, photos, and
              approvals are prepared.
            </p>
          </div>
        )}
      </section>

      {selectedProject && (
        <div className="fixed inset-0 z-[80] overflow-y-auto bg-slate-950/70 px-3 py-4 sm:px-6 sm:py-6">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[1.5rem] bg-white shadow-2xl sm:rounded-[2rem]">
              <div className="relative h-[280px] overflow-hidden sm:h-[420px]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-950 shadow-lg transition hover:bg-slate-100"
                  aria-label="Close project details"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-100">
                    {selectedProject.industry}
                  </p>
                  <h2 className="mt-2 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_0.45fr]">
                <div>
                  <section>
                    <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-slate-400">
                      Full description
                    </h3>
                    <p className="mt-3 text-base leading-8 text-slate-700">
                      {selectedProject.fullDescription}
                    </p>
                  </section>

                  <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    <section className="rounded-3xl border border-border bg-surface p-5">
                      <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-slate-400">
                        Masfy scope
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {selectedProject.masfyScope}
                      </p>
                    </section>
                    <section className="rounded-3xl border border-border bg-surface p-5">
                      <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-slate-400">
                        Engineering solution
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {selectedProject.solution}
                      </p>
                    </section>
                    <section className="rounded-3xl border border-border bg-surface p-5">
                      <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-slate-400">
                        Challenges
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {selectedProject.challenges}
                      </p>
                    </section>
                    <section className="rounded-3xl border border-border bg-surface p-5">
                      <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-slate-400">
                        Outcome
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {selectedProject.outcome}
                      </p>
                    </section>
                  </div>

                  <section className="mt-8">
                    <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-slate-400">
                      <ImageIcon className="h-4 w-4" />
                      Gallery images
                    </h3>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {selectedProject.gallery.map((image) => (
                        <img
                          key={image}
                          src={image}
                          alt={`${selectedProject.title} gallery`}
                          className="aspect-[4/3] rounded-2xl object-cover"
                        />
                      ))}
                    </div>
                  </section>
                </div>

                <aside className="space-y-4">
                  <div className="rounded-3xl bg-slate-950 p-5 text-white">
                    <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                      <MapPinned className="h-5 w-5 text-brand-100" />
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                          Location
                        </p>
                        <p className="mt-1 font-semibold">{selectedProject.location}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-3 border-b border-white/10 pb-4">
                      <Calendar className="h-5 w-5 text-brand-100" />
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                          Year / Status
                        </p>
                        <p className="mt-1 font-semibold">{selectedProject.status}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                        Client / Sector
                      </p>
                      <p className="mt-1 font-semibold">{selectedProject.clientSector}</p>
                    </div>
                  </div>

                  {selectedProject.systems.length > 0 && (
                    <div className="rounded-3xl border border-border bg-white p-5 shadow-sm">
                      <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-slate-400">
                        Structural / civil systems
                      </h3>
                      <div className="mt-4 space-y-3">
                        {selectedProject.systems.map((system) => (
                          <div
                            key={system}
                            className="flex items-center gap-2 text-sm font-medium text-slate-700"
                          >
                            <CheckCircle2 className="h-4 w-4 text-brand-500" />
                            {system}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="rounded-3xl border border-border bg-white p-5 shadow-sm">
                    <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-slate-400">
                      Services provided
                    </h3>
                    <div className="mt-4 space-y-3">
                      {selectedProject.services.map((service) => (
                        <div
                          key={service}
                          className="flex items-center gap-2 text-sm font-medium text-slate-700"
                        >
                          <CheckCircle2 className="h-4 w-4 text-brand-500" />
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>
                </aside>
              </div>
          </div>
        </div>
      )}
    </>
  );
}
