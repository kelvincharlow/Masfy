'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Factory, Landmark, PlugZap } from 'lucide-react';

const clients = [
  { name: 'Atlas Engineering', industry: 'Structural', initials: 'AE' },
  { name: 'Vertex Systems', industry: 'Industrial', initials: 'VS' },
  { name: 'Harbor Renewables', industry: 'Energy', initials: 'HR' },
  { name: 'Prime Logistics', industry: 'Transport', initials: 'PL' },
  { name: 'Lumen Infrastructure', industry: 'Civil', initials: 'LI' },
  { name: 'Skyline Developments', industry: 'Built Environment', initials: 'SD' },
  { name: 'Meridian Works', industry: 'Industrial', initials: 'MW' },
  { name: 'Apex Civils', industry: 'Civil', initials: 'AC' },
];

const sectors = [
  { label: 'Developers', icon: Building2 },
  { label: 'Industrial teams', icon: Factory },
  { label: 'Public works', icon: Landmark },
  { label: 'Energy firms', icon: PlugZap },
];

const marqueeClients = [...clients, ...clients];

export function Clients() {
  return (
    <section className="mx-auto max-w-6xl">
      <div className="overflow-hidden rounded-[2rem] border border-border bg-slate-950 text-white shadow-2xl shadow-slate-950/10">
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-100"
            >
              Trusted by partners
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="mt-4 max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl"
            >
              Engineering support for teams that cannot afford uncertainty.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="flex flex-col justify-between gap-6"
          >
            <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Developers, industrial operators, energy teams, and infrastructure
              partners rely on Masfy for clear reviews, coordinated design, and
              practical delivery advice.
            </p>

            <div className="grid gap-2 sm:grid-cols-4">
              {sectors.map((sector) => {
                const Icon = sector.icon;

                return (
                  <div
                    key={sector.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.07] p-3"
                  >
                    <Icon className="h-5 w-5 text-brand-100" />
                    <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-300">
                      {sector.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="relative overflow-hidden border-y border-white/10 bg-white/[0.04] py-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-950 to-transparent" />

          <motion.div
            className="flex gap-4"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
          >
            {marqueeClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="group flex min-w-[250px] items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.08] px-5 py-4 backdrop-blur transition hover:border-brand-100/40 hover:bg-white/[0.12]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-xs font-extrabold text-slate-950">
                  {client.initials}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-white">
                    {client.name}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">{client.industry}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex flex-col gap-5 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">
          <div className="grid grid-cols-3 gap-3 sm:max-w-lg">
            {[
              { value: '80+', label: 'Partners' },
              { value: '5', label: 'Core sectors' },
              { value: '12+', label: 'Years' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-white/[0.07] p-4">
                <p className="text-2xl font-extrabold">{stat.value}</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-slate-100"
          >
            Become a partner
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
