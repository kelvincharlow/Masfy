import Link from 'next/link';
import { ArrowRight, BadgeCheck, Building2, Factory, Handshake } from 'lucide-react';

const audiences = [
  'Developers',
  'Architects',
  'Contractors',
  'Institutions',
  'Industrial clients',
  'Hospitality teams',
];

const sectors = [
  { name: 'Residential', detail: 'Apartments, townhouses and private residences' },
  { name: 'Commercial', detail: 'Offices, mixed-use assets and urban developments' },
  { name: 'Hospitality', detail: 'Hotels, resorts and destination properties' },
  { name: 'Industrial', detail: 'Factories, warehouses and production facilities' },
  { name: 'Institutional', detail: 'Schools, hospitals and worship centres' },
  { name: 'Infrastructure', detail: 'Civil works, drainage, roads and assessments' },
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

export function Clients() {
  return (
    <section className="mx-auto max-w-6xl">
      <div className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-sm">
        <div className="grid gap-7 p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-500">
              Client Success & Partners
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl">
              Trusted by project teams across Kenya and the region.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Masfy Consulting Engineers supports developers, architects,
              contractors, institutions and industrial clients with practical
              civil and structural engineering input.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {audiences.map((audience) => (
                <span
                  key={audience}
                  className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-slate-700"
                >
                  {audience}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:self-end">
            {successSignals.map((signal) => {
              const Icon = signal.icon;

              return (
                <div
                  key={signal.label}
                  className="rounded-2xl border border-border bg-surface p-5"
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

        <div className="border-y border-border bg-surface px-6 py-6 sm:px-8">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector) => (
              <div
                key={sector.name}
                className="rounded-2xl border border-border bg-white p-4 shadow-sm"
              >
                <Factory className="h-5 w-5 text-brand-500" />
                <p className="mt-3 text-sm font-extrabold text-slate-950">
                  {sector.name}
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  {sector.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-2xl text-sm leading-7 text-slate-600">
            Real logos and client names can be added here once approved for
            public display.
          </p>
          <Link
            href="/projects"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:bg-brand-700 md:hover:-translate-y-0.5"
          >
            View project evidence
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
