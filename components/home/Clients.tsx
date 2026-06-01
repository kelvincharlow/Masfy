"use client";

import { motion } from 'framer-motion';

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

const marqueeClients = [...clients, ...clients];

export function Clients() {
  return (
    <section className="mx-auto max-w-6xl">
      <div className="rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-border shadow-lg">

        {/* Header */}
        <div className="px-8 pt-8 pb-4 sm:px-12">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
              className="text-sm uppercase tracking-widest text-brand-500 font-semibold"
            >
              Trusted Partners
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="mt-3 text-4xl font-extrabold text-slate-900"
            >
              Built by 80+ leading organizations
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600"
            >
              From industrial powerhouses to innovative energy firms, we partner with leaders across sectors who trust us to deliver excellence.
            </motion.p>
          </div>
        </div>

        {/* Marquee strip */}
        <div className="relative overflow-hidden py-8 border-t border-b border-border bg-white/50">
          {/* fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white/50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white/50 to-transparent" />

          <motion.div
            className="flex gap-5"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          >
            {marqueeClients.map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className="group flex min-w-[240px] items-center gap-4 rounded-2xl border border-border bg-white px-6 py-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand-500/50"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-100 to-brand-50 text-xs font-bold text-brand-700 transition duration-300 group-hover:from-brand-600 group-hover:to-brand-500 group-hover:text-white">
                  {client.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="whitespace-nowrap text-sm font-semibold text-slate-900 truncate">{client.name}</p>
                  <p className="text-xs text-slate-500">{client.industry}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col items-center justify-center gap-5 px-8 py-8 sm:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-xl"
          >
            <p className="text-slate-600 mb-4 text-sm">Join the growing network of forward-thinking organizations partnering with Masfy.</p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/30 transition hover:bg-slate-800"
            >
              Become a partner
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
