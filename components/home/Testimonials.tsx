"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

const items = [
  {
    quote:
      'Masfy delivered exceptional technical leadership and kept our schedule on track during a complex plant upgrade.',
    name: 'Aisha Rahman',
    role: 'Head of Engineering, Atlas Engineering',
    initials: 'AR',
  },
  {
    quote:
      'Their collaborative approach and clear documentation reduced our review cycles substantially.',
    name: 'Marco Li',
    role: 'Program Manager, Harbor Renewables',
    initials: 'ML',
  },
  {
    quote:
      'Practical, dependable and focused on outcomes - a valuable partner for large infrastructure programs.',
    name: "Sinead O'Connell",
    role: 'Director, Skyline Developments',
    initials: 'SO',
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % items.length), []);
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + items.length) % items.length),
    [],
  );
  const goTo = useCallback((i: number) => setCurrent(i), []);

  useEffect(() => {
    const id = setInterval(next, 6500);
    return () => clearInterval(id);
  }, [next]);

  const active = items[current];

  return (
    <section className="mx-auto max-w-6xl">
      <div className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-sm">
        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[0.78fr_1.22fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-500">
              Client voices
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl">
              Clear communication clients can feel through the process.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Practical feedback from teams who value coordinated engineering,
              reliable documentation and steady project support.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-surface p-4 sm:p-5">
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-border">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="p-5 sm:p-7"
                >
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>

                  <p className="mt-5 text-base font-medium leading-8 text-slate-700 sm:text-lg">
                    &quot;{active.quote}&quot;
                  </p>

                  <div className="mt-6 flex items-center gap-4 border-t border-border pt-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-sm font-extrabold text-brand-700">
                      {active.initials}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-slate-950">{active.name}</p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {active.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-slate-600 transition hover:bg-surface"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2">
                {items.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      i === current ? 'w-8 bg-brand-500' : 'w-2 bg-slate-300'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-slate-600 transition hover:bg-surface"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
