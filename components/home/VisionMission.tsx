'use client';

import { motion } from 'framer-motion';
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
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-500"
          >
            Vision & Mission
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl"
          >
            Engineering leadership shaped around clarity, durability, and trust.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base"
          >
            We turn ambitious project requirements into practical engineering
            decisions, coordinated documentation, and delivery paths that teams
            can stand behind.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-8 grid gap-3 sm:grid-cols-3"
          >
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
          </motion.div>
        </div>

        <div className="grid border-t border-border bg-surface/70 sm:grid-cols-3">
          {pillars.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
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
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
