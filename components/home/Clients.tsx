import { BadgeCheck, Building2, Handshake } from 'lucide-react';

const audiences = [
  'Developers',
  'Architects',
  'Contractors',
  'Institutions',
  'Industrial clients',
  'Hospitality teams',
];

const partners = [
  {
    name: 'Dunhill Building Contractors Ltd',
    logo: '/patners/Duhill.jpeg',
  },
  {
    name: 'Kayvee Construction Ltd',
    detail: 'Building & general contractors',
    logo: '/patners/Kayvee%20Construction%20Ltd.jpeg',
  },
  {
    name: 'Fisic Designs',
    logo: '/patners/Fisic%20Designs.jpeg',
  },
  {
    name: 'Studio Infinity LLP Architects',
    logo: '/patners/Studio%20Infinity.jpeg',
  },
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

        <div className="border-t border-border bg-surface/70 p-6 sm:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-500">
              Selected collaborators
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
              A sample of project teams and consultants Masfy has worked with
              across building and development work.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="rounded-2xl border border-border bg-white p-4 shadow-sm"
                >
                  <div className="flex h-16 items-center justify-center rounded-xl bg-surface p-3">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <p className="mt-3 text-sm font-extrabold leading-tight text-slate-950">
                    {partner.name}
                  </p>
                  {partner.detail && (
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {partner.detail}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
