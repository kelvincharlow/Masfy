import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  GraduationCap,
  HardHat,
  HeartHandshake,
  Lightbulb,
  Mail,
  MapPinned,
  Users,
} from 'lucide-react';

const culture = [
  {
    title: 'Meaningful project exposure',
    description:
      'Work on real civil, structural, hospitality, commercial, and residential developments with practical site realities.',
    icon: HardHat,
  },
  {
    title: 'Mentorship from engineers',
    description:
      'Learn through review sessions, technical guidance, and close collaboration with experienced professionals.',
    icon: Users,
  },
  {
    title: 'Digital design workflows',
    description:
      'Grow your confidence using modern engineering tools, BIM coordination, and disciplined documentation.',
    icon: Lightbulb,
  },
];

const openings = [
  {
    role: 'Civil / Structural Engineer',
    type: 'Future opening',
    location: 'Westlands, Nairobi',
    description:
      'For engineers interested in design coordination, structural analysis, infrastructure design, and project documentation.',
  },
  {
    role: 'BIM / CAD Technician',
    type: 'Future opening',
    location: 'Westlands, Nairobi',
    description:
      'For detail-oriented technical talent supporting drawings, models, revisions, and coordinated project deliverables.',
  },
  {
    role: 'Site / Project Support',
    type: 'Future opening',
    location: 'Project-based',
    description:
      'For team members who can support inspections, site reporting, coordination, and practical delivery follow-up.',
  },
];

const programs = [
  {
    title: 'Graduate Engineer Program',
    description:
      'A structured entry pathway for recent graduates to build technical judgement, documentation discipline, and project confidence.',
    icon: GraduationCap,
  },
  {
    title: 'Internship Program',
    description:
      'A learning-focused opportunity for students to understand consultancy work, engineering workflows, and professional expectations.',
    icon: BookOpenCheck,
  },
];

export default function CareersPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-500">
              Careers
            </p>
            <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-slate-950 sm:text-5xl">
              Build engineering judgement on projects that shape real places.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
              Masfy Consulting Engineers is a place for curious, disciplined,
              and practical people who want to grow through meaningful project
              work, technical mentorship, and modern engineering delivery.
            </p>
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-5 text-white shadow-2xl shadow-slate-950/10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Talent focus
            </p>
            <div className="mt-4 grid gap-3">
              {['Engineers', 'BIM / CAD talent', 'Graduates & interns'].map(
                (item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.07] p-4"
                  >
                    <p className="text-sm font-extrabold text-brand-100">
                      0{index + 1}
                    </p>
                    <p className="font-semibold">{item}</p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-8 lg:px-8">
        <div className="rounded-[2rem] border border-border bg-surface p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-500">
            Life at Masfy
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight text-slate-950">
            A practical engineering environment with room to learn.
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {culture.map((item) => {
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

      <section className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-500">
              Open positions
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-950">
              Current and future roles.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              If no role is actively open, strong candidates can still share
              their profile for future consideration.
            </p>
          </div>

          <div className="grid gap-4">
            {openings.map((opening) => (
              <article
                key={opening.role}
                className="rounded-3xl border border-border bg-white p-5 shadow-sm"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <BriefcaseBusiness className="h-5 w-5 text-brand-500" />
                      <h3 className="text-xl font-extrabold text-slate-950">
                        {opening.role}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {opening.description}
                    </p>
                  </div>
                  <span className="w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                    {opening.type}
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-2 border-t border-border pt-4 text-sm font-medium text-slate-500">
                  <MapPinned className="h-4 w-4 text-brand-500" />
                  {opening.location}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-2">
          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <article
                key={program.title}
                className="rounded-[2rem] border border-border bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <h2 className="mt-6 text-2xl font-extrabold text-slate-950">
                  {program.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {program.description}
                </p>
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-brand-500">
                  <BadgeCheck className="h-4 w-4" />
                  Portfolio, CV, and interest area recommended
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 pb-16 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-500 p-6 text-white shadow-2xl shadow-brand-500/20 sm:p-8 lg:p-10">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.28),transparent_48%),radial-gradient(circle_at_88%_18%,rgba(255,255,255,0.2),transparent_28%)]" />
          <div className="relative grid gap-6 lg:grid-cols-[1fr_0.52fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-brand-100">
                Join the team
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">
                Interested in growing with Masfy?
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-50">
                Send your CV, portfolio where relevant, and a short note about
                the kind of engineering work you want to grow into.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-brand-700 shadow-lg shadow-slate-950/10 transition hover:bg-slate-100 md:hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              Contact Masfy
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
