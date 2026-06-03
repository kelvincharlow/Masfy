'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, DraftingCompass, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: 'Civil Engineering',
    desc: 'Infrastructure, water, drainage, planning and transport systems.',
    href: '/services#civil',
    icon: DraftingCompass,
  },
  {
    title: 'Structural Engineering',
    desc: 'Buildings, bridges, tanks, audits and resilient load-bearing systems.',
    href: '/services#structural',
    icon: Building2,
  },
  {
    title: 'Auxiliary Services',
    desc: 'Geotechnical, surveying, investigations and diagnostic support.',
    href: '/services#auxiliary',
    icon: ShieldCheck,
  },
];

export function ServicesPreview() {
  return (
    <section className="mx-auto max-w-6xl">
      <div className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-sm">
        <div className="flex flex-col gap-5 p-6 sm:p-8 lg:flex-row lg:items-end lg:justify-between lg:p-10">
          <div>
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
              className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl"
            >
              Engineering services from concept to delivery.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base"
            >
              A focused preview of Masfy&apos;s civil, structural and auxiliary
              engineering capabilities.
            </motion.p>
          </div>

          <Link
            href="/services"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:bg-brand-700 md:hover:-translate-y-0.5"
          >
            See all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid border-t border-border bg-surface/70 sm:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="border-b border-border p-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
              >
                <Link href={service.href} className="group flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-700 shadow-sm ring-1 ring-border">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-500">
                      0{index + 1}
                    </p>
                    <h3 className="mt-1 text-lg font-extrabold text-slate-950">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {service.desc}
                    </p>
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
