'use client';

import { Lightbulb, Target, Workflow } from 'lucide-react';

const pillars = [
  {
    title: 'Vision',
    description:
      'To be the trusted engineering partner behind smarter, safer, and more sustainable communities.',
    icon: Lightbulb,
  },
  {
    title: 'Mission',
    description:
      'Deliver integrated civil, structural, and infrastructure solutions with precision and long-term value.',
    icon: Target,
  },
  {
    title: 'Approach',
    description:
      'Blend technical excellence, collaboration, and digital workflows so teams can move with clarity.',
    icon: Workflow,
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
            Engineering leadership shaped around clarity, durability, and trust.
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            We turn ambitious project requirements into practical engineering
            decisions, coordinated documentation, and delivery paths that teams
            can stand behind.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {['Plan clearly', 'Design precisely', 'Deliver responsibly'].map(
              (item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-border bg-surface p-4"
                >
                  <p className="text-xs font-bold text-brand-500">0{index + 1}</p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">
                    {item}
                  </p>
                </div>
              ),
            )}
          </div>
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
