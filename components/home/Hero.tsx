












































































































































"use client";

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';

const slides = [
  { image: '/hero.png',  label: 'Structural Engineering' },
  { image: '/hero1.jpg', label: 'Civil Infrastructure'   },
  { image: '/hero2.png', label: 'BIM & Digital Delivery'  },
  { image: '/hero3.jpg', label: 'Industrial Projects'     },
];

const stats = [
  { value: '12+',  label: 'Years of experience' },
  { value: '200+', label: 'Projects delivered'  },
  { value: '80+',  label: 'Partner companies'   },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused,  setPaused]  = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);
  const goTo = useCallback((i: number) => setCurrent(i), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section className="relative w-full">
      <div
        className="relative overflow-hidden rounded-[2rem] shadow-2xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* ── Crossfade images ── */}
        <div className="pointer-events-none absolute inset-0">
          <AnimatePresence initial={false}>
            <motion.img
              key={slides[current].image}
              src={slides[current].image}
              alt={slides[current].label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </AnimatePresence>
          {/* overlays */}
          <div className="absolute inset-0 bg-slate-950/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-950/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950/60 to-transparent" />
        </div>

        {/* ── Content ── */}
        <div className="relative flex min-h-[62vh] flex-col justify-between px-8 py-10 sm:px-12 lg:min-h-[68vh] lg:px-16 lg:py-14">

          {/* Top row — badge + slide label */}
          <div className="flex items-start justify-between">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-500" />
              Multidisciplinary engineering consultancy
            </motion.span>

            {/* Current slide label */}
            <AnimatePresence mode="wait">
              <motion.span
                key={current}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.35 }}
                className="hidden rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm sm:inline-block"
              >
                {slides[current].label}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Middle — heading + text + CTAs */}
          <div className="max-w-2xl space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Your gateway to{' '}
              <span className="text-brand-500">engineering</span>{' '}
              excellence.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-xl text-base leading-relaxed text-slate-300"
            >
              Delivering structural, civil, and BIM engineering solutions with
              clear technical leadership since 2012.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-700"
              >
                Start a project
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                View projects
              </Link>
            </motion.div>
          </div>

          {/* Bottom — stats + controls */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          >
            {/* Stats bar */}
            <div className="flex gap-px overflow-hidden rounded-2xl border border-white/10">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-1 flex-col items-center gap-0.5 bg-white/5 px-5 py-4 backdrop-blur-sm"
                >
                  <span className="text-2xl font-bold text-white">{stat.value}</span>
                  <span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-widest text-slate-400">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Slide controls */}
            <div className="flex items-center gap-3">
              {/* Prev */}
              <button
                onClick={prev}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
                aria-label="Previous slide"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className="relative h-1.5 overflow-hidden rounded-full transition-all duration-300"
                    style={{ width: i === current ? 28 : 8, background: i === current ? '#2563EB' : 'rgba(255,255,255,0.35)' }}
                  >
                    {i === current && !paused && (
                      <motion.span
                        className="absolute inset-y-0 left-0 rounded-full bg-white/40"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 5, ease: 'linear' }}
                        key={current}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Next */}
              <button
                onClick={next}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
                aria-label="Next slide"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
