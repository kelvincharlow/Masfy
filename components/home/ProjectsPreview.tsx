import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Building2, Hotel, MapPinned, Warehouse } from 'lucide-react';
import { getFeaturedProjects } from '@/lib/projects';
import type { Project } from '@/lib/projects';

const projectIcons = {
  Apartments: Warehouse,
  Commercial: Building2,
  Hospitality: Hotel,
};

function getProjectIcon(project: Project) {
  return projectIcons[project.industry as keyof typeof projectIcons] || Building2;
}

export async function ProjectsPreview() {
  const projects = await getFeaturedProjects(3);

  return (
    <section className="mx-auto max-w-6xl">
      <div className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-sm">
        <div className="flex flex-col gap-5 p-6 sm:p-8 lg:flex-row lg:items-end lg:justify-between lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-500">
              Projects
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl">
              Featured project work.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              A selection of Masfy projects across commercial, hospitality and
              residential developments.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:bg-brand-700 md:hover:-translate-y-0.5"
          >
            View all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid border-t border-border bg-surface/70 lg:grid-cols-3">
          {projects.map((project) => {
            const ProjectIcon = getProjectIcon(project);

            return (
              <article
                key={project.title}
                className="group border-b border-border bg-white last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <Link href="/projects" className="block h-full">
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="eager"
                      decoding="async"
                      className="h-full w-full object-cover transition duration-700 md:group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-800">
                      <ProjectIcon className="h-3.5 w-3.5 text-brand-500" />
                      {project.industry}
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-extrabold leading-tight text-slate-950">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-slate-300 transition group-hover:text-brand-500" />
                    </div>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {project.summary}
                    </p>

                    <div className="mt-5 flex items-center gap-2 border-t border-border pt-4 text-sm font-semibold text-brand-500">
                      <MapPinned className="h-4 w-4" />
                      {project.location}
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
