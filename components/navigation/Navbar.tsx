'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About us' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/careers', label: 'Careers' },
  { href: '/insights', label: 'Insights' },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-0 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex min-w-0 items-center gap-3 py-3" onClick={() => setMenuOpen(false)}>
          <span className="relative h-14 w-16 shrink-0 overflow-hidden" aria-hidden="true">
            <img
              src="/Masfy Logo 2025_New_Version.png"
              alt=""
              className="absolute left-1/2 top-1/2 h-16 w-auto max-w-none -translate-x-1/2 -translate-y-1/2 object-contain"
            />
          </span>
          <span className="flex flex-col">
            <span className="text-xs font-extrabold leading-tight text-slate-950 sm:text-base sm:leading-none">
              Masfy Consulting Engineers
            </span>
            <span className="mt-1 hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-500 sm:block">
              Safe, efficient and buildable projects
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((item) => {
            const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-[1.35rem] text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-brand-500'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
                {/* active underline */}
                {isActive && (
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-brand-500" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/company-profile.pdf"
            download
            className="rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-brand-500/40 hover:text-slate-950"
          >
            Company Profile
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-brand-500/20 transition hover:bg-brand-700"
          >
            Talk to us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-slate-600 transition hover:bg-surface lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-border bg-white px-6 pb-5 pt-3 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((item) => {
              const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-50 text-brand-500'
                      : 'text-slate-600 hover:bg-surface hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-4 grid gap-3 border-t border-border pt-4">
            <a
              href="/company-profile.pdf"
              download
              onClick={() => setMenuOpen(false)}
              className="block w-full rounded-full border border-border bg-white px-5 py-2.5 text-center text-sm font-semibold text-slate-700 transition hover:border-brand-500/40 hover:text-slate-950"
            >
              Download Company Profile
            </a>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block w-full rounded-full bg-brand-500 px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              Talk to us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
