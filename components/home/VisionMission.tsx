'use client';

import { Lightbulb, Target, Trophy } from 'lucide-react';

const pillars = [
  {
    title: 'Vision',
    description:
      'To be the engineering firm of choice for clients who desire a close relationship with, and the highest quality and service from, their civil and structural engineering consultant.',
    icon: Lightbulb,
  },
  {
    title: 'Mission',
    description:
      'To provide high quality, personalized civil and structural engineering design services and to satisfy clients needs by leveraging highly skilled staff, strong relationships, and cost-effective solutions in an atmosphere that fosters collaboration and creativity.',
    icon: Target,
  },
  {
    title: 'Objectives',
    description:
      'To combine all applicable problem solving skills in providing solutions that are functionally sound, economically feasible, and practical, while maintaining a commensurate standard of technical excellence.',
    icon: Trophy,
  },
];

export function VisionMission() {
  return (
    <section className="mx-auto max-w-6xl">
      <div className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-sm">
        <div className="p-6 sm:p-8 lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-500">
            Vision & Mission
          </p>

          <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl">
            These foundations guide our engineering approach.
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Masfy engineering is grounded in close client relationships,
            technical excellence, practical solutions, and collaborative design
            delivery.
          </p>
        </div>

        <div className="grid border-t border-border bg-surface/70 sm:grid-cols-3">
          {pillars.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="border-b border-border p-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-700 shadow-sm ring-1 ring-border">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
