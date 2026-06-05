import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ClipboardCheck,
  DraftingCompass,
  Leaf,
  Map,
  Ruler,
  SearchCheck,
  Workflow,
} from 'lucide-react';

const serviceAreas = [
  {
    id: 'civil',
    number: '01',
    title: 'Civil Engineering Services',
    eyebrow: 'Civil Engineering',
    description:
      'Infrastructure systems designed for function, resilience, efficiency, and long-term value.',
    icon: DraftingCompass,
    when: [
      'Stormwater drainage design and drainage design in Nairobi',
      'Sewer and water reticulation',
      'Roads, parking and external works',
      'Site grading, levels and access planning',
      'County approval support and technical documentation',
    ],
    items: [
      'Master planning for urban and rural infrastructure',
      'Site and service scheme design optimized for space and cost',
      'Water systems planning including abstraction, treatment, storage and distribution',
      'Sewage and industrial effluent drainage and treatment',
      'Stormwater and land drainage management',
      'Traffic engineering for roads and smart parking systems',
      'Infrastructure rehabilitation and preventive maintenance',
      'Traffic impact assessments for urban development',
    ],
  },
  {
    id: 'structural',
    number: '02',
    title: 'Structural Engineering Services',
    eyebrow: 'Structural Engineering',
    description:
      'Safe, durable, and efficient structural solutions for modern developments and specialist assets.',
    icon: Building2,
    when: [
      'Developing apartments, offices, factories or homes',
      'Structural design for apartments in Nairobi',
      'Adding another floor to an existing building',
      'Changing use from residential to office or commercial',
      'Seeing cracks, settlement or structural distress and needing building structural assessment in Kenya',
      'Constructing steel structures, tanks, retaining walls or foundations',
    ],
    items: [
      'Multi-storey residential and commercial buildings from low-rise to high-rise',
      'Industrial plants, factories and production facilities',
      'Private residences and custom swimming pools',
      'Institutional buildings including hospitals, schools and worship centres',
      'Hospitality developments such as hotels, resorts and luxury retreats',
      'Recreational and sports facilities',
      'Bridges, culverts and retaining walls',
      'Retaining wall design Kenya and foundation design Kenya',
      'Dams, marine structures and river protection works',
      'Water storage systems including reservoirs, underground tanks and elevated tanks',
      'Structural audits, surveys and appraisal reports',
    ],
  },
  {
    id: 'auxiliary',
    number: '03',
    title: 'Auxiliary Services',
    eyebrow: 'Auxiliary Services',
    description:
      'Investigations, testing, surveying, and technical support for informed engineering decisions.',
    icon: SearchCheck,
    when: [
      'You need soil investigation before foundation design',
      'You require site levels, boundaries or earthworks quantities',
      'You need due diligence before purchase or development',
      'A slope, foundation or existing structure needs technical review',
      'Design assumptions need field data before approvals or tender',
    ],
    groups: [
      {
        title: 'Geotechnical Engineering',
        items: [
          'Subsurface geotechnical investigations',
          'Slope stability and risk assessment',
          'Due diligence and feasibility evaluation',
          'In-situ soil and rock testing',
          'Geophysical mapping for foundation design',
        ],
      },
      {
        title: 'Surveying',
        items: [
          'Cadastral and title deed surveys',
          'Topographical and hydrographical surveys',
          'Road and land cross-sectioning and profiling',
          'Earthworks volume calculations',
        ],
      },
    ],
  },
];

const whyMasfy = [
  {
    title: 'Precision-led delivery',
    description:
      'Advanced engineering tools reduce risk, improve constructability, and support better decisions.',
    icon: Ruler,
  },
  {
    title: 'Integrated coordination',
    description:
      'Civil, structural, and support services are aligned into one reliable delivery flow.',
    icon: Workflow,
  },
  {
    title: 'Sustainable thinking',
    description:
      'Performance, durability, and environmental impact are evaluated for long-term asset value.',
    icon: Leaf,
  },
  {
    title: 'Client-focused execution',
    description:
      'We work closely with developers, consultants, and contractors to keep projects clear and practical.',
    icon: ClipboardCheck,
  },
];

const approach = [
  {
    title: 'Precision That Saves Time and Money',
    description:
      'Revit, SAP2000, Civil 3D, InfraWorks 360, 3DS Max, and Robot Structural Analysis help model, test, and optimize designs before construction begins.',
  },
  {
    title: 'Design That Is Future-Ready',
    description:
      'BIM-supported workflows improve collaboration, coordination, approvals, and project risk control.',
  },
  {
    title: 'Sustainability Without Compromise',
    description:
      'We prioritize green technologies, low-impact materials, and lifecycle value where they improve the project.',
  },
  {
    title: 'Engineering Excellence. Delivered.',
    description:
      'Whether you are a developer, architect, contractor, or institution, Masfy helps you build smarter and stronger.',
  },
];

export const metadata: Metadata = {
  title: 'Services | Civil and Structural Engineering Consultants in Kenya',
  description:
    'Masfy provides structural design, civil engineering, drainage design, foundation design, retaining wall design, steel structure design, and construction supervision support in Kenya.',
};

function CheckItem({ children, boxed = false }: { children: React.ReactNode; boxed?: boolean }) {
  return (
    <li
      className={`flex gap-3 text-sm leading-6 text-slate-600 ${
        boxed ? 'rounded-2xl border border-border bg-surface p-4' : ''
      }`}
    >
      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
      <span>{children}</span>
    </li>
  );
}

export default function ServicesPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-500">
              What We Do
            </p>
            <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-slate-950 sm:text-5xl">
              Engineering services built for performance, safety, and long-term value.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              At Masfy Consulting Engineers, we do not just solve engineering
              problems. We anticipate them. As civil and structural engineers
              in Nairobi, our civil, structural, and auxiliary services help
              developers, contractors, institutions, and governments across
              Kenya turn vision into reality with confidence.
            </p>
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-5 text-white shadow-2xl shadow-slate-950/10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Masfy engineering services
            </p>
            <div className="mt-4 grid gap-2">
              {serviceAreas.map((service) => {
                const Icon = service.icon;

                return (
                  <a
                    key={service.id}
                    href={`#${service.id}`}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition hover:bg-white/[0.1]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-100">
                        {service.number}
                      </p>
                      <p className="font-semibold text-white">{service.eyebrow}</p>
                    </div>
                    <ArrowRight className="ml-auto h-4 w-4 text-slate-400 transition md:group-hover:translate-x-1 md:group-hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-700 md:hover:-translate-y-0.5"
          >
            Explore Services
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-7 py-3 text-sm font-semibold text-slate-900 transition hover:border-brand-500/40 md:hover:-translate-y-0.5"
          >
            View Projects
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-border bg-surface p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-500">
            Core Service Areas
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight text-slate-950">
            Integrated engineering support from concept to delivery.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            We combine technical depth, field understanding, and modern design
            tools to provide well-coordinated engineering solutions across a
            wide range of developments, from structural engineering consultancy
            in Kenya to civil engineering consultancy for infrastructure,
            external works, and approvals.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {serviceAreas.map((service) => {
              const Icon = service.icon;

              return (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="group rounded-3xl border border-border bg-white p-6 shadow-sm transition hover:shadow-xl md:hover:-translate-y-1"
                >
                  <div className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.24em] text-brand-500">
                    {service.number}
                  </p>
                  <h3 className="mt-2 text-xl font-extrabold text-slate-950">
                    {service.eyebrow}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-6 py-8 lg:px-8">
        {serviceAreas.map((service) => {
          const Icon = service.icon;

          return (
            <article
              key={service.id}
              id={service.id}
              className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-border bg-white shadow-sm"
            >
              <div className="grid lg:grid-cols-[0.42fr_1fr]">
                <div className="bg-slate-950 p-5 text-white sm:p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                    <Icon className="h-7 w-7" />
                  </div>
                  <p className="mt-6 text-sm font-bold uppercase tracking-[0.28em] text-brand-100">
                    {service.number} - {service.eyebrow}
                  </p>
                  <h2 className="mt-3 text-2xl font-extrabold leading-tight">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {service.description}
                  </p>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="mb-5 rounded-3xl border border-border bg-surface p-5">
                    <h3 className="text-lg font-extrabold text-slate-950">
                      Use this when you need:
                    </h3>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {service.when.slice(0, 3).map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-6 text-slate-600"
                        >
                          <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {service.when.length > 3 && (
                      <details className="group mt-4">
                        <summary className="cursor-pointer list-none text-sm font-extrabold text-brand-500 transition hover:text-brand-700">
                          <span className="group-open:hidden">See more</span>
                          <span className="hidden group-open:inline">Show less</span>
                        </summary>
                        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                          {service.when.slice(3).map((item) => (
                            <CheckItem key={item}>{item}</CheckItem>
                          ))}
                        </ul>
                      </details>
                    )}
                  </div>

                  {'groups' in service && service.groups ? (
                    <div className="grid gap-5 sm:grid-cols-2">
                      {service.groups.map((group) => (
                        <div
                          key={group.title}
                          className="rounded-3xl border border-border bg-surface p-5"
                        >
                          <h3 className="text-lg font-extrabold text-slate-950">
                            {group.title}
                          </h3>
                          <ul className="mt-4 space-y-3">
                            {group.items.slice(0, 2).map((item) => (
                              <CheckItem key={item}>{item}</CheckItem>
                            ))}
                          </ul>
                          {group.items.length > 2 && (
                            <details className="group mt-4">
                              <summary className="cursor-pointer list-none text-sm font-extrabold text-brand-500 transition hover:text-brand-700">
                                <span className="group-open:hidden">See more</span>
                                <span className="hidden group-open:inline">Show less</span>
                              </summary>
                              <ul className="mt-4 space-y-3">
                                {group.items.slice(2).map((item) => (
                                  <CheckItem key={item}>{item}</CheckItem>
                                ))}
                              </ul>
                            </details>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      <ul className="grid gap-3 sm:grid-cols-2">
                        {service.items.slice(0, 2).map((item) => (
                          <CheckItem key={item} boxed>
                            {item}
                          </CheckItem>
                        ))}
                      </ul>
                      {service.items.length > 2 && (
                        <details className="group mt-4">
                          <summary className="inline-flex cursor-pointer list-none items-center justify-center rounded-full border border-border bg-white px-5 py-2.5 text-sm font-extrabold text-brand-500 transition hover:border-brand-500/40 hover:text-brand-700">
                            <span className="group-open:hidden">
                              See more services
                            </span>
                            <span className="hidden group-open:inline">
                              Show fewer services
                            </span>
                          </summary>
                          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                            {service.items.slice(2).map((item) => (
                              <CheckItem key={item} boxed>
                                {item}
                              </CheckItem>
                            ))}
                          </ul>
                        </details>
                      )}
                    </>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-500">
              Why Masfy
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-950">
              Why clients work with us.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              We bring together engineering rigor, responsive collaboration, and
              efficient digital workflows to deliver solutions that are
              practical, buildable, and sustainable.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {whyMasfy.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-border bg-white p-5 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-extrabold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-2xl shadow-slate-950/10">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-100">
                Our Approach
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
                How we deliver engineering excellence.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Since 2012, Masfy Consulting Engineers has partnered with
                visionary developers to deliver complex engineering solutions
                across Kenya and the wider region with confidence, clarity, and
                precision.
              </p>
            </div>

            <div className="grid gap-3">
              {approach.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.07] p-5"
                >
                  <div className="flex items-start gap-4">
                    <p className="text-sm font-extrabold text-brand-100">
                      0{index + 1}
                    </p>
                    <div>
                      <h3 className="font-extrabold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 pb-16 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-500 p-6 text-white shadow-2xl shadow-brand-500/20 sm:p-8 lg:p-10">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.28),transparent_48%),radial-gradient(circle_at_88%_18%,rgba(255,255,255,0.2),transparent_28%)]" />
          <div className="relative grid gap-6 lg:grid-cols-[1fr_0.55fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-brand-100">
                Let us build together
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">
                Talk to Masfy Consulting Engineers about your next project.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-50">
                Reach out for project consultations, engineering support, and
                tailored solutions for residential, commercial, hospitality, and
                infrastructure developments.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-brand-700 shadow-lg shadow-slate-950/10 transition hover:bg-slate-100 md:hover:-translate-y-0.5"
              >
                Contact us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://www.google.com/maps/search/?api=1&query=The+Crescent+Pearl+Crescent+Road+Westlands+Nairobi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 md:hover:-translate-y-0.5"
              >
                <Map className="h-4 w-4" />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
