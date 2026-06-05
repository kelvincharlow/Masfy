'use client';

import { useMemo, useState } from 'react';
import {
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
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
  'Churches',
  'Factories',
  'Warehouses',
  'Structural Assessments',
  'Mixed Development',
  'Civil Works',
  'Townhouses',
];

export function ProjectsExplorer({ projects }: ProjectsExplorerProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const categories = useMemo(() => {
    const hiddenCategories = new Set(['Infrastructure', 'Renovations']);
    const projectCategories = projects
      .map((project) => project.industry)
      .filter((industry) => !hiddenCategories.has(industry));
    return Array.from(new Set([...preferredCategories, ...projectCategories]));
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((project) => project.industry === activeCategory);
  }, [activeCategory, projects]);

  const closeProject = () => {
    setSelectedProject(null);
    setGalleryIndex(null);
  };

  const showPreviousImage = () => {
    if (!selectedProject || galleryIndex === null) return;
    setGalleryIndex(
      (galleryIndex - 1 + selectedProject.gallery.length) %
        selectedProject.gallery.length,
    );
  };

  const showNextImage = () => {
    if (!selectedProject || galleryIndex === null) return;
    setGalleryIndex((galleryIndex + 1) % selectedProject.gallery.length);
  };

  const handleGalleryTouchEnd = (x: number) => {
    if (touchStartX === null) return;

    const difference = touchStartX - x;
    setTouchStartX(null);

    if (Math.abs(difference) < 40) return;
    if (difference > 0) {
      showNextImage();
    } else {
      showPreviousImage();
    }
  };

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
                  onClick={closeProject}
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
                      {selectedProject.gallery.map((image, index) => (
                        <button
                          key={image}
                          type="button"
                          onClick={() => setGalleryIndex(index)}
                          className="group relative overflow-hidden rounded-2xl bg-slate-100 text-left"
                        >
                          <img
                            src={image}
                            alt={`${selectedProject.title} gallery ${index + 1}`}
                            className="aspect-[4/3] w-full object-cover transition duration-500 md:group-hover:scale-105"
                          />
                          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent p-3 text-xs font-semibold text-white opacity-100 md:opacity-0 md:transition md:group-hover:opacity-100">
                            View image
                          </span>
                        </button>
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

      {selectedProject && galleryIndex !== null && (
        <div className="fixed inset-0 z-[90] flex flex-col bg-slate-950/95 px-3 py-4 text-white sm:px-6">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-100">
                Project gallery
              </p>
              <h3 className="mt-1 text-lg font-extrabold leading-tight sm:text-2xl">
                {selectedProject.title}
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setGalleryIndex(null)}
              aria-label="Close gallery image"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-slate-950 transition hover:bg-slate-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div
            className="mx-auto mt-4 flex min-h-0 w-full max-w-6xl flex-1 items-center justify-center"
            onTouchStart={(event) => setTouchStartX(event.touches[0].clientX)}
            onTouchEnd={(event) =>
              handleGalleryTouchEnd(event.changedTouches[0].clientX)
            }
          >
            {selectedProject.gallery.length > 1 && (
              <button
                type="button"
                onClick={showPreviousImage}
                aria-label="Previous gallery image"
                className="mr-2 hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition hover:bg-white/20 sm:flex"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}

            <img
              src={selectedProject.gallery[galleryIndex]}
              alt={`${selectedProject.title} gallery enlarged ${galleryIndex + 1}`}
              className="max-h-full max-w-full rounded-2xl object-contain shadow-2xl"
            />

            {selectedProject.gallery.length > 1 && (
              <button
                type="button"
                onClick={showNextImage}
                aria-label="Next gallery image"
                className="ml-2 hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition hover:bg-white/20 sm:flex"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}
          </div>

          <div className="mx-auto mt-4 flex w-full max-w-6xl items-center justify-between gap-4 text-sm text-slate-300">
            <button
              type="button"
              onClick={showPreviousImage}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 font-semibold text-white ring-1 ring-white/15 sm:hidden"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </button>
            <p className="mx-auto font-semibold">
              {galleryIndex + 1} / {selectedProject.gallery.length}
            </p>
            <button
              type="button"
              onClick={showNextImage}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 font-semibold text-white ring-1 ring-white/15 sm:hidden"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
