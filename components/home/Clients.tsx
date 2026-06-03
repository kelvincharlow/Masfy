'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, Building2, Handshake } from 'lucide-react';
import { useEffect, useState } from 'react';

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

const successSignals = [
  {
    value: '80+',
    label: 'Partner companies',
    icon: Handshake,
  },
  {
    value: '$100M+',
    label: 'Portfolio supported',
    icon: Building2,
  },
  {
    value: '2012',
    label: 'Trusted since',
    icon: BadgeCheck,
  },
];

const marqueeClients = [...clients, ...clients];

export function Clients() {
  const [shouldAnimatePartners, setShouldAnimatePartners] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(
      '(min-width: 768px) and (prefers-reduced-motion: no-preference)',
    );
    const update = () => setShouldAnimatePartners(media.matches);

    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  const visibleClients = shouldAnimatePartners ? marqueeClients : clients.slice(0, 4);

  return (
    <section className="mx-auto max-w-6xl">
      <div className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-sm">
        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-500"
            >
              Client Success & Partners
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl"
            >
              Trusted engineering support for ambitious project teams.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base"
            >
              Masfy works with developers, contractors and institutions that
              need clear technical direction and dependable engineering delivery.
            </motion.p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:self-end">
            {successSignals.map((signal) => {
              const Icon = signal.icon;

              return (
                <div
                  key={signal.label}
                  className="rounded-3xl border border-border bg-surface p-5"
                >
                  <Icon className="h-5 w-5 text-brand-500" />
                  <p className="mt-4 text-2xl font-extrabold text-slate-950">
                    {signal.value}
                  </p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                    {signal.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative overflow-hidden border-y border-border bg-surface py-5">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-surface to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-surface to-transparent" />

          <motion.div
            className="grid gap-3 px-5 sm:grid-cols-2 md:flex md:gap-4 md:px-0"
            animate={shouldAnimatePartners ? { x: ['0%', '-50%'] } : undefined}
            transition={
              shouldAnimatePartners
                ? { duration: 34, repeat: Infinity, ease: 'linear' }
                : undefined
            }
          >
            {visibleClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex min-w-0 items-center gap-4 rounded-2xl border border-border bg-white px-5 py-4 shadow-sm md:min-w-[230px]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-xs font-extrabold text-brand-700">
                  {client.initials}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-950">
                    {client.name}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{client.industry}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex flex-col gap-4 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-2xl text-sm leading-7 text-slate-600">
            From early design decisions to delivery support, we help partners
            move with greater technical confidence.
          </p>
          <Link
            href="/contact"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:bg-brand-700 md:hover:-translate-y-0.5"
          >
            Start a partnership
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
