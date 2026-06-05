import type { Metadata } from 'next';
import Image from 'next/image';
import {
  BadgeCheck,
  Clock,
  FileCheck2,
  Lightbulb,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Scale,
  Target,
  Trophy,
  Users,
} from 'lucide-react';

const foundations = [
  {
    title: 'Vision',
    description:
      'To be the engineering firm of choice for clients who desire a close relationship with, and the highest quality and service from, their civil and structural engineering consultant.',
    icon: Lightbulb,
  },
  {
    title: 'Mission',
    description:
      'To provide high quality, personalized civil and structural engineering design services and to satisfy clients needs by leveraging highly skilled staff, strong relationships, and cost-effective solutions in an atmosphere that fosters collaboration and creativity.',
    icon: Target,
  },
  {
    title: 'Objectives',
    description:
      'To combine all applicable problem solving skills in providing solutions that are functionally sound, economically feasible, and practical, while maintaining a commensurate standard of technical excellence.',
    icon: Trophy,
  },
];

const reasons = [
  {
    title: 'Trusted Expertise',
    description: 'An experienced, fully qualified team that delivers peace of mind.',
    icon: Users,
  },
  {
    title: 'Guaranteed Protection',
    description: 'Fully insured services for safety and confidence.',
    icon: ShieldCheck,
  },
  {
    title: 'Precision & Quality',
    description: 'High-standard drawings and calculations you can rely on.',
    icon: BadgeCheck,
  },
  {
    title: 'Smarter Designs',
    description: 'Value-engineered solutions that save time and money.',
    icon: Sparkles,
  },
  {
    title: 'Clear Communication',
    description: 'Friendly, straightforward updates at every stage.',
    icon: MessageSquare,
  },
  {
    title: 'Fast Turnaround',
    description: 'Efficient processes that keep your project moving.',
    icon: Clock,
  },
];

const stats = [
  { value: '2012', label: 'Established' },
  { value: '$100M+', label: 'Portfolio value' },
  { value: 'EA', label: 'Regional focus' },
];

const platforms = ['Revit', 'SAP2000', 'Civil 3D', 'InfraWorks 360', '3ds Max', 'Robot Structural Analysis'];

const standards = [
  'Eurocodes',
  'British Standards',
  'Kenyan standards',
  'Project-specific international codes',
];

const processSteps = [
  'Define design assumptions and client requirements',
  'Coordinate civil, structural, architectural, and services inputs',
  'Review calculations, drawings, and model outputs before issue',
  'Respond to site feedback, approvals, and construction-stage queries',
];

export const metadata: Metadata = {
  title: 'About Masfy Consulting Engineers | Structural Engineering Consultants in Kenya',
  description:
    'Learn about Masfy Consulting Engineers, a civil and structural engineering consultancy in Kenya founded in 2012 and led by Eng. Daniel K. Manza.',
};

export default function AboutPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-500">
              About Us
            </p>
            <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-slate-950 sm:text-5xl">
              A civil and structural engineering consultancy shaping East Africa&apos;s built environment.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
              Established in 2012, Masfy Consulting Engineers provides civil
              and structural engineering services for residential, commercial,
              hospitality, industrial, and infrastructure projects. The firm has
              supported a Kenyan property portfolio exceeding USD 100 million.
            </p>
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-5 text-white shadow-2xl shadow-slate-950/10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Company profile
            </p>
            <div className="mt-4 grid gap-2 min-[380px]:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.07] p-3 sm:p-4"
                >
                  <p className="text-xl font-extrabold sm:text-2xl">{stat.value}</p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="/company-profile.pdf"
              download
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Download Company Profile
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-8 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[0.42fr_1fr]">
            <div className="bg-slate-950 p-6 text-white sm:p-8">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.07]">
                <Image
                  src="/founder.jpeg"
                  alt="Eng. Daniel K. Manza, founder of Masfy Consulting Engineers"
                  fill
                  sizes="(min-width: 1024px) 380px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-500">
                Founder
              </p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-950">
                Eng. Daniel K. Manza
              </h2>
              <p className="mt-2 text-sm font-bold text-brand-700">
                Founder and Registered Consulting Engineer (E640)
              </p>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                Masfy is led by Eng. Daniel K. Manza, whose work combines
                technical design, practical site experience, and collaborative
                delivery. The focus is simple: safe, economical, and buildable
                engineering decisions.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  'Professional oversight',
                  'Constructability judgement',
                  'Clear project coordination',
                ].map((point) => (
                  <div key={point} className="rounded-2xl border border-border bg-surface p-4">
                    <BadgeCheck className="h-5 w-5 text-brand-500" />
                    <p className="mt-3 text-sm font-semibold leading-6 text-slate-700">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
        <div className="rounded-[2rem] border border-border bg-surface p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-500">
            How We Work
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight text-slate-950">
            Clear standards, careful review, and coordinated delivery.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            Masfy uses recognized design standards, modern analysis platforms,
            and structured QA/QC reviews to reduce risk before drawings reach
            site.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <article className="rounded-3xl border border-border bg-white p-6 shadow-sm">
              <Scale className="h-6 w-6 text-brand-500" />
              <h3 className="mt-5 text-lg font-extrabold text-slate-950">
                Standards
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {standards.map((standard) => (
                  <span
                    key={standard}
                    className="rounded-full bg-surface px-3 py-1.5 text-xs font-semibold text-slate-700"
                  >
                    {standard}
                  </span>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-border bg-white p-6 shadow-sm">
              <FileCheck2 className="h-6 w-6 text-brand-500" />
              <h3 className="mt-5 text-lg font-extrabold text-slate-950">
                Review
              </h3>
              <ul className="mt-4 space-y-3">
                {processSteps.slice(0, 3).map((step) => (
                  <li key={step} className="flex gap-3 text-sm leading-6 text-slate-600">
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-3xl border border-border bg-white p-6 shadow-sm">
              <BadgeCheck className="h-6 w-6 text-brand-500" />
              <h3 className="mt-5 text-lg font-extrabold text-slate-950">
                Tools
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {platforms.map((platform) => (
                  <span
                    key={platform}
                    className="rounded-full bg-surface px-3 py-1.5 text-xs font-semibold text-slate-700"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
        <div className="rounded-[2rem] border border-border bg-surface p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-500">
            Our Foundations
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight text-slate-950">
            These foundations guide our engineering approach.
          </h2>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {foundations.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-border bg-white p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-extrabold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 pb-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-500">
              Why Clients Choose Us
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-950">
              Professional engineering support clients can trust.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Masfy combines qualified expertise, rigorous delivery standards,
              practical communication, and value-focused design decisions.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <article
                  key={reason.title}
                  className="rounded-3xl border border-border bg-white p-5 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-slate-950">
                        {reason.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
