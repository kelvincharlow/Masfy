'use client';

import Link from 'next/link';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
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
    title: 'Crescent Pearl',
    note: 'Residential apartment development in Westlands, Nairobi.',
  },
];

const stats = [
  { value: '12+', label: 'Years of practice' },
  { value: '200+', label: 'Projects delivered' },
  { value: '80+', label: 'Partner companies' },
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + slides.length) % slides.length),
    [],
  );
  const goTo = useCallback((i: number) => setCurrent(i), []);

  useEffect(() => {
    const id = setInterval(next, 5500);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="relative w-full">
      <div className="relative min-h-[430px] overflow-hidden rounded-[1.5rem] bg-slate-950 shadow-2xl shadow-slate-950/20 sm:min-h-[470px] sm:rounded-[2rem] lg:min-h-[560px]">
        {slides.map((slide, index) => (
          <img
            key={slide.image}
            src={slide.image}
            alt={slide.label}
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding="async"
            className={`absolute inset-0 h-full w-full object-cover md:transition-opacity md:duration-700 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-slate-950/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/45 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-slate-950/75 to-transparent" />

        <div className="relative flex min-h-[430px] flex-col justify-between gap-6 px-5 py-6 sm:min-h-[470px] sm:px-8 sm:py-7 lg:min-h-[560px] lg:px-12 lg:py-10">
          <div className="max-w-3xl py-2 lg:py-0">
            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your Gateway to Engineering Excellence.
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-200 sm:mt-6 sm:text-lg sm:leading-8">
              We help developers, contractors, and organizations plan, design,
              coordinate, and deliver structural, civil, industrial, and digital
              engineering work with fewer blind spots.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-700 md:hover:-translate-y-0.5"
              >
                Start a project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20 md:hover:-translate-y-0.5"
              >
                Explore work
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="grid w-full max-w-[330px] grid-cols-3 gap-2 rounded-2xl border border-white/10 bg-white/[0.07] p-2 backdrop-blur-md sm:w-fit sm:max-w-none">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl bg-white/[0.06] px-3 py-2.5">
                  <p className="text-lg font-extrabold leading-none text-white sm:text-xl">{stat.value}</p>
                  <p className="mt-1 text-[9px] font-semibold uppercase tracking-widest text-slate-300">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex w-full max-w-xs items-center justify-between gap-2 rounded-full border border-white/15 bg-white/10 p-1.5 backdrop-blur-md sm:w-auto sm:min-w-[260px]">
              <button
                onClick={prev}
                className="flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:bg-white/15"
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
                    className="relative h-1.5 overflow-hidden rounded-full transition-all duration-300"
                    style={{
                      width: i === current ? 32 : 8,
                      background:
                        i === current ? '#2563EB' : 'rgba(255,255,255,0.35)',
                    }}
                  >
                    {i === current && (
                      <span className="absolute inset-y-0 left-0 w-full rounded-full bg-white/45" />
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={next}
                className="flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:bg-white/15"
                aria-label="Next slide"
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
