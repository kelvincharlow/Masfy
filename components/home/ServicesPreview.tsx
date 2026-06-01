'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  DraftingCompass,
  Layers3,
  Ruler,
  ShieldCheck,
} from 'lucide-react';

const services = [
  {
    title: 'Civil Engineering',
    desc: 'Roads, drainage, utilities, and site works designed for practical construction and long-term resilience.',
    bullets: ['Infrastructure planning', 'Earthworks & drainage', 'Site supervision'],
    href: '/services#civil',
    icon: DraftingCompass,
    accent: 'bg-sky-500',
  },
  {
    title: 'Structural Engineering',
    desc: 'Optimised concrete and steel systems balancing safety, performance, buildability, and cost.',
    bullets: ['Concrete & steel design', 'Seismic checks', 'Retrofit solutions'],
    href: '/services#structural',
    icon: Building2,
    accent: 'bg-indigo-500',
  },
  {
    title: 'Auxiliary Services',
    desc: 'Testing, surveys, inspections, and independent technical advisory that keep delivery decisions grounded.',
    bullets: ['Geotechnical testing', 'Material inspection', 'Forensic review'],
    href: '/services#auxiliary',
    icon: ShieldCheck,
    accent: 'bg-emerald-500',
  },
];

const process = [
  { label: 'Scope', icon: Ruler },
  { label: 'Design', icon: Layers3 },
  { label: 'Verify', icon: BadgeCheck },
];

export function ServicesPreview() {
  return (
    <section className="mx-auto max-w-6xl">
      <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-500"
          >
            Services
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-4 max-w-xl text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl"
          >
            Engineering services that move cleanly from brief to build.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-5 max-w-lg text-sm leading-7 text-slate-600 sm:text-base"
          >
            From feasibility to handover, we combine technical design,
            coordination, review, and site support so engineering decisions stay
            visible and useful.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-7 rounded-3xl border border-border bg-slate-950 p-5 text-white shadow-xl shadow-slate-950/10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Delivery rhythm
            </p>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {process.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.07] p-3 text-center"
                  >
                    <Icon className="mx-auto h-5 w-5 text-brand-100" />
                    <p className="mt-2 text-xs font-semibold text-slate-200">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <Link
            href="/services"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:-translate-y-0.5 hover:bg-brand-700"
          >
            See all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <Link href={service.href} className="grid gap-0 sm:grid-cols-[150px_1fr]">
                  <div className="relative min-h-[150px] bg-slate-950 p-5 text-white sm:min-h-full">
                    <div className={`absolute inset-x-0 top-0 h-1 ${service.accent}`} />
                    <div className="flex h-full flex-col justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                        <Icon className="h-7 w-7" />
                      </div>
                      <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                        0{index + 1}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-extrabold leading-tight text-slate-950">
                          {service.title}
                        </h3>
                        <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
                          {service.desc}
                        </p>
                      </div>
                      <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-slate-300 transition group-hover:translate-x-1 group-hover:text-brand-500" />
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.bullets.map((bullet) => (
                        <span
                          key={bullet}
                          className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-slate-600"
                        >
                          {bullet}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
