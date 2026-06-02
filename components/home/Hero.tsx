'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  DraftingCompass,
  Layers3,
  Pause,
  Play,
  ShieldCheck,
} from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

const slides = [
  {
    image: '/projects/Jubilee Isurance.jpg',
    label: 'Commercial',
    title: 'Jubilee Insurance HQ',
    note: 'Commercial headquarters project in Nairobi, Kenya.',
  },
  {
    image: '/projects/Ritz Carlton.jpeg',
    label: 'Hospitality',
    title: 'Ritz Carlton Maasai Mara Safari',
    note: 'Luxury hospitality project set within the Maasai Mara.',
  },
  {
    image: '/projects/Crescent Pearl.JPG',
    label: 'Apartments',
    title: 'Cresent Pearl',
    note: 'Residential apartment development in Westlands, Nairobi.',
  },
];

const stats = [
  { value: '12+', label: 'Years of practice' },
  { value: '200+', label: 'Projects delivered' },
  { value: '80+', label: 'Partner companies' },
];

const capabilities = [
  { label: 'Design reviews', icon: ClipboardCheck },
  { label: 'BIM coordination', icon: Layers3 },
  { label: 'Risk control', icon: ShieldCheck },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + slides.length) % slides.length),
    [],
  );
  const goTo = useCallback((i: number) => setCurrent(i), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5500);
    return () => clearInterval(id);
  }, [paused, next]);

  const activeSlide = slides[current];

  return (
    <section
      className="relative w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative min-h-[560px] overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl shadow-slate-950/20 sm:min-h-[580px] lg:min-h-[600px]">
        <AnimatePresence initial={false}>
          <motion.img
            key={activeSlide.image}
            src={activeSlide.image}
            alt={activeSlide.label}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-slate-950/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-slate-950/10" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-slate-950 to-transparent" />

        <div className="relative grid min-h-[560px] gap-8 px-5 py-5 sm:min-h-[580px] sm:px-8 sm:py-7 lg:min-h-[600px] lg:grid-cols-[1.08fr_0.92fr] lg:px-12 lg:py-8">
          <div className="flex flex-col justify-between">
            <div className="flex flex-wrap items-center gap-3">
              <motion.span
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-300" />
                Masfy Consultants
              </motion.span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeSlide.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium text-white/85 backdrop-blur-md"
                >
                  {activeSlide.label}
                </motion.span>
              </AnimatePresence>
            </div>

            <div className="max-w-3xl py-7 lg:py-0">
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.26em] text-brand-100"
              >
                <DraftingCompass className="h-4 w-4" />
                Engineering strategy & delivery
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.14 }}
                className="max-w-3xl text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl"
              >
                Your Gateway to Engineering Excellence.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.22 }}
                className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg"
              >
                We help developers, contractors, and organizations plan,
                design, coordinate, and deliver structural, civil, industrial,
                and digital engineering work with fewer blind spots.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.3 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:-translate-y-0.5 hover:bg-brand-700"
                >
                  Start a project
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/20"
                >
                  Explore work
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid gap-2 rounded-3xl border border-white/10 bg-white/[0.07] p-2 backdrop-blur-md sm:grid-cols-3"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white/[0.06] px-4 py-4">
                  <p className="text-2xl font-extrabold text-white">{stat.value}</p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-slate-300">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex flex-col justify-end gap-4 lg:items-end">
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.26 }}
              className="w-full max-w-md rounded-[1.75rem] border border-white/15 bg-white/12 p-4 text-white shadow-2xl shadow-slate-950/20 backdrop-blur-xl"
            >
              <div className="relative overflow-hidden rounded-3xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${activeSlide.image}-card`}
                    src={activeSlide.image}
                    alt=""
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.55 }}
                    className="h-52 w-full object-cover sm:h-60"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-100">
                    Active capability
                  </p>
                  <AnimatePresence mode="wait">
                    <motion.h2
                      key={activeSlide.title}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 text-2xl font-extrabold leading-tight"
                    >
                      {activeSlide.title}
                    </motion.h2>
                  </AnimatePresence>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={activeSlide.note}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 text-sm leading-6 text-slate-200"
                >
                  {activeSlide.note}
                </motion.p>
              </AnimatePresence>

              <div className="mt-5 grid gap-2">
                {capabilities.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium text-slate-100"
                    >
                      <Icon className="h-4 w-4 text-brand-100" />
                      {item.label}
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.42 }}
              className="flex w-full max-w-md items-center justify-between gap-3 rounded-full border border-white/15 bg-white/10 p-2 backdrop-blur-md"
            >
              <button
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/15"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex flex-1 items-center justify-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className="relative h-2 overflow-hidden rounded-full transition-all duration-300"
                    style={{
                      width: i === current ? 34 : 8,
                      background:
                        i === current ? '#2563EB' : 'rgba(255,255,255,0.35)',
                    }}
                  >
                    {i === current && !paused && (
                      <motion.span
                        key={current}
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 5.5, ease: 'linear' }}
                        className="absolute inset-y-0 left-0 rounded-full bg-white/45"
                      />
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setPaused((value) => !value)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/15"
                aria-label={paused ? 'Play slides' : 'Pause slides'}
              >
                {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
              </button>

              <button
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/15"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
