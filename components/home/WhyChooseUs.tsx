'use client';

import { motion } from 'framer-motion';
import {
  BadgeCheck,
  BarChart3,
  ClipboardCheck,
  Cpu,
  Layers3,
  ShieldCheck,
  Users,
} from 'lucide-react';

const points = [
  {
    title: 'Proven engineering expertise',
    description:
      'Multidisciplinary engineers who understand structures, civil works, services, and site realities.',
    icon: Layers3,
  },
  {
    title: 'Technology-driven solutions',
    description:
      'BIM, Revit, Civil 3D, SAP2000, and digital coordination workflows used where they actually improve delivery.',
    icon: Cpu,
  },
  {
    title: 'Quality assurance',
    description:
      'Peer reviews, compliance checks, and documentation discipline are built into every milestone.',
    icon: ShieldCheck,
  },
  {
    title: 'Client-focused delivery',
    description:
      'Clear options, practical trade-offs, and technical decisions shaped around budget and long-term value.',
    icon: Users,
  },
];

const deliverySteps = [
  'Early risk mapping',
  'Design coordination',
  'Independent reviews',
  'Handover-ready records',
];

export function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-6xl">
      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/15 sm:p-8"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-500 via-sky-300 to-emerald-400" />
          <div className="absolute right-[-5rem] top-[-5rem] h-56 w-56 rounded-full border border-white/10" />
          <div className="absolute bottom-[-7rem] left-[-5rem] h-72 w-72 rounded-full border border-white/10" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-100">
              Why choose us
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl">
              Engineering judgement you can feel before construction starts.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300 sm:text-base">
              We reduce ambiguity early, keep decisions visible, and give teams
              the technical confidence to move from concept to handover.
            </p>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                    Delivery confidence
                  </p>
                  <p className="mt-2 text-4xl font-extrabold">98%</p>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/20 text-brand-100">
                  <BarChart3 className="h-7 w-7" />
                </div>
              </div>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '98%' }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.9, delay: 0.2 }}
                  className="h-full rounded-full bg-gradient-to-r from-brand-500 to-emerald-400"
                />
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {deliverySteps.map((step) => (
                  <div key={step} className="flex items-center gap-2 text-sm text-slate-200">
                    <BadgeCheck className="h-4 w-4 shrink-0 text-emerald-300" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {points.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-500 to-sky-300 opacity-0 transition group-hover:opacity-100" />
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-500">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-extrabold leading-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center gap-2 border-t border-border pt-4 text-sm font-semibold text-brand-500">
                  <ClipboardCheck className="h-4 w-4" />
                  <span>Built into delivery</span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
