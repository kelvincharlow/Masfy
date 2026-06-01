import Link from 'next/link';

export function ServicesPreview() {
  const services = [
    {
      title: 'Civil Engineering',
      desc: 'Roads, drainage and site works built for longevity and resilience.',
      bullets: ['Infrastructure planning', 'Earthworks & drainage', 'Site supervision'],
      bgFrom: 'rgba(14, 165, 233, 1)',
      bgTo: 'rgba(37, 99, 235, 1)',
      href: '/services#civil',
    },
    {
      title: 'Structural Engineering',
      desc: 'Optimised structural systems balancing performance and cost.',
      bullets: ['Concrete & steel design', 'Seismic checks', 'Retrofit solutions'],
      bgFrom: 'rgba(124, 58, 237, 1)',
      bgTo: 'rgba(79, 70, 229, 1)',
      href: '/services#structural',
    },
    {
      title: 'Auxiliary Services',
      desc: 'Site testing, surveys and independent technical advisory.',
      bullets: ['Geotechnical testing', 'Material inspection', 'Forensic review'],
      bgFrom: 'rgba(20, 184, 166, 1)',
      bgTo: 'rgba(6, 95, 70, 1)',
      href: '/services#auxiliary',
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="rounded-3xl bg-gradient-to-b from-white/60 to-white/40 p-8 shadow-lg border border-border">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-widest text-brand-500">Services</p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900">End-to-end engineering, executed with excellence</h2>
          <p className="mt-3 text-sm text-slate-600">From feasibility to handover — practical designs, clear reporting, and measurable outcomes.</p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group relative block overflow-hidden rounded-2xl shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(180deg, ${s.bgFrom}, ${s.bgTo})` }}
                aria-hidden
              />
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" aria-hidden />

              <div className="relative z-10 flex min-h-[220px] flex-col justify-between p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/80 text-brand-700 shadow-md">
                    {s.title.includes('Civil') && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 18V11l4-2 4 2 4-2 4 2v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}

                    {s.title.includes('Structural') && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3v18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 7h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}

                    {s.title.includes('Auxiliary') && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5 9.5l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.5 13.5l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>

                  <div>
                    <h3 className="text-2xl font-extrabold text-white drop-shadow">{s.title}</h3>
                    <p className="mt-1 text-sm text-white/90">{s.desc}</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <ul className="flex flex-col gap-1">
                    {s.bullets.map((b) => (
                      <li key={b} className="text-xs text-white/90">• {b}</li>
                    ))}
                  </ul>

                  <div className="ml-4 flex flex-col items-end">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800">Trusted</span>
                    <span className="mt-2 inline-flex items-center rounded-md bg-white/10 px-3 py-1 text-xs font-medium text-white/90 opacity-90 group-hover:bg-white/20">Explore →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_45px_-20px_rgba(15,23,42,0.45)] ring-1 ring-white/10 transition hover:bg-slate-800"
          >
            See all services
          </Link>
        </div>
      </div>
    </section>
  );
}
