import {
  BadgeCheck,
  Building2,
  Clock,
  Lightbulb,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Users,
  WalletCards,
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
              Masfy Consulting Engineers is a distinguished civil and structural
              engineering consultancy at the forefront of East Africa&apos;s
              construction industry. Established in 2012, the firm has
              contributed to the development of a high-value Kenyan property
              portfolio exceeding USD 100 million.
            </p>
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-5 text-white shadow-2xl shadow-slate-950/10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Company profile
            </p>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.07] p-4"
                >
                  <p className="text-2xl font-extrabold">{stat.value}</p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.07] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-100">
                Founder
              </p>
              <p className="mt-2 text-2xl font-extrabold">Eng. Daniel K. Manza</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[2rem] border border-border bg-white p-6 shadow-sm sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
              <Building2 className="h-7 w-7" />
            </div>
            <h2 className="mt-6 text-3xl font-extrabold leading-tight text-slate-950">
              Our Company
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              The firm delivers engineering solutions that embody quality,
              innovation, and integrity. Our multidisciplinary in-house team
              provides fully integrated structural and civil engineering services
              that align seamlessly with architectural and construction
              processes.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Sustainability forms a central pillar of our design philosophy. We
              consistently evaluate environmental impact and adopt green
              technologies and resource-efficient materials to support
              responsible and enduring development.
            </p>
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/10 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-100">
              Design platforms
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight">
              Precision, efficiency, and value across every project stage.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              We employ advanced design platforms to strengthen analysis,
              documentation, coordination, and decision-making.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {platforms.map((platform) => (
                <span
                  key={platform}
                  className="rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-xs font-semibold text-slate-200"
                >
                  {platform}
                </span>
              ))}
            </div>
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

      <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-brand-500 p-6 text-white shadow-2xl shadow-brand-500/20 sm:p-8 lg:p-10">
          <div className="grid gap-5 lg:grid-cols-[1fr_0.45fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-brand-100">
                Built on value
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">
                Functionally sound, economically feasible, and technically excellent.
              </h2>
            </div>
            <div className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur">
              <div className="flex items-center gap-3">
                <WalletCards className="h-6 w-6 text-brand-100" />
                <p className="text-sm font-semibold leading-6">
                  Value-engineered solutions that protect budget, quality, and
                  long-term performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
