"use client";

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Testimonials() {
  const items = [
    {
      quote: 'Masfy delivered exceptional technical leadership and kept our schedule on track during a complex plant upgrade.',
      name: 'Aisha Rahman',
      role: 'Head of Engineering, Atlas Engineering',
      initials: 'AR',
      rating: 5,
    },
    {
      quote: 'Their collaborative approach and clear documentation reduced our review cycles substantially.',
      name: 'Marco Li',
      role: 'Program Manager, Harbor Renewables',
      initials: 'ML',
      rating: 5,
    },
    {
      quote: 'Practical, dependable and focused on outcomes — a valuable partner for large infrastructure programs.',
      name: 'Sinead O\'Connell',
      role: 'Director, Skyline Developments',
      initials: 'SO',
      rating: 5,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % items.length), [items.length]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + items.length) % items.length), [items.length]);
  const goTo = useCallback((i: number) => setCurrent(i), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section className="mx-auto max-w-6xl">
      <div className="rounded-3xl border border-border bg-gradient-to-b from-white to-slate-50 p-3 sm:p-5 shadow-lg" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div className="mx-auto max-w-3xl text-center mb-2">
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-xs uppercase tracking-widest text-brand-500 font-semibold mb-2">
            Client Success & Partners
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.08 }} className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Trusted by Leading <span className="text-brand-500">African Organizations</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.16 }} className="mt-2 text-slate-600 max-w-2xl mx-auto text-xs">
            From successful project deliveries to strategic partnerships, discover why clients choose Masfy for their engineering transformation journey.
          </motion.p>
        </div>

        <div className="relative mt-4">
          <div className="overflow-hidden rounded-3xl bg-white border border-border shadow-md">
            <AnimatePresence mode="wait">
              <motion.div key={current} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="px-8 py-7 sm:px-12 sm:py-8 text-center">
                <div className="text-6xl sm:text-7xl font-black text-slate-200 mb-1">"</div>
                <div className="flex items-center justify-center gap-1 mb-3">
                  {Array.from({ length: items[current].rating }).map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg sm:text-xl font-medium text-slate-700 italic max-w-2xl mx-auto leading-8">
                  "{items[current].quote}"
                </p>
                <div className="mt-6 flex items-center justify-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-100 to-brand-50 text-sm font-bold text-brand-700">
                    {items[current].initials}
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-slate-900">{items[current].name}</p>
                    <p className="text-xs text-slate-500">{items[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <button onClick={prev} className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition hover:bg-slate-100">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              {items.map((_, i) => (
                <button key={i} onClick={() => goTo(i)} className={`h-2 rounded-full transition-all ${i === current ? 'w-8 bg-brand-600' : 'w-2 bg-slate-300'}`} />
              ))}
            </div>
            <button onClick={next} className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition hover:bg-slate-100">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
