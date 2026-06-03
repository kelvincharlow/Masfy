'use client';

import { BadgeCheck, Cpu, ShieldCheck, Users } from 'lucide-react';

const points = [
  {
    title: 'Technical depth',
    description: 'Civil, structural and auxiliary expertise coordinated under one team.',
    icon: BadgeCheck,
  },
  {
    title: 'Digital precision',
    description: 'Modern design tools and BIM workflows reduce rework and uncertainty.',
    icon: Cpu,
  },
  {
    title: 'Quality control',
    description: 'Peer reviews, compliance checks and disciplined documentation.',
    icon: ShieldCheck,
  },
  {
    title: 'Client clarity',
    description: 'Practical communication around scope, risk, cost and delivery choices.',
    icon: Users,
  },
];

export function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-6xl">
      <div className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-sm">
        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[0.82fr_1.18fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-500">
              Why choose us
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl">
              Practical engineering confidence before construction starts.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              We help teams reduce ambiguity, coordinate decisions and move
              forward with designs that are buildable, reviewed and practical.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {points.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-border bg-surface p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-700 shadow-sm ring-1 ring-border">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-500">
                        0{index + 1}
                      </p>
                      <h3 className="mt-1 font-extrabold text-slate-950">
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
      </div>
    </section>
  );
}
