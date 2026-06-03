import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Building2,
  CalendarDays,
  DraftingCompass,
  Leaf,
  Lightbulb,
  Newspaper,
} from 'lucide-react';

const featuredInsights = [
  {
    title: 'What Makes a Building Structurally Efficient?',
    category: 'Technical Notes',
    description:
      'A practical look at how load paths, material choices, grids, and coordination decisions shape structural performance.',
    icon: Building2,
  },
  {
    title: 'Using BIM to Reduce Rework Before Construction',
    category: 'Digital Delivery',
    description:
      'How model-led coordination helps project teams identify clashes, clarify assumptions, and improve approval workflows.',
    icon: DraftingCompass,
  },
  {
    title: 'Sustainability in Civil and Structural Design',
    category: 'Sustainable Design',
    description:
      'Where lifecycle thinking, efficient materials, drainage planning, and maintainability create long-term value.',
    icon: Leaf,
  },
];

const insightTypes = [
  'Engineering explainers',
  'Project lessons',
  'Design coordination notes',
  'Sustainability perspectives',
  'Company updates',
  'Graduate learning resources',
];

export default function InsightsPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-500">
              Insights
            </p>
            <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-slate-950 sm:text-5xl">
              Engineering thinking for better project decisions.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
              A future home for Masfy&apos;s technical articles, project lessons,
              digital delivery notes, sustainability perspectives, and company
              updates.
            </p>
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-5 text-white shadow-2xl shadow-slate-950/10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Content focus
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {insightTypes.map((type) => (
                <div
                  key={type}
                  className="rounded-2xl border border-white/10 bg-white/[0.07] p-3 text-sm font-semibold text-slate-200"
                >
                  {type}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-border bg-surface p-6 sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-500">
                Featured topics
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight text-slate-950">
                Start with practical knowledge your clients can understand.
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-700 md:hover:-translate-y-0.5"
            >
              Suggest a topic
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {featuredInsights.map((insight) => {
              const Icon = insight.icon;

              return (
                <article
                  key={insight.title}
                  className="group rounded-3xl border border-border bg-white p-6 shadow-sm transition hover:shadow-xl md:hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      Planned
                    </span>
                  </div>
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.24em] text-brand-500">
                    {insight.category}
                  </p>
                  <h3 className="mt-2 text-xl font-extrabold leading-tight text-slate-950">
                    {insight.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {insight.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 pb-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/10 sm:p-8">
            <Newspaper className="h-8 w-8 text-brand-100" />
            <h2 className="mt-5 text-3xl font-extrabold leading-tight">
              When Sanity is ready, this becomes your article hub.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              The page is structured so future posts can include title,
              category, summary, author, publish date, cover image, and article
              body.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: 'Technical articles',
                description: 'Explain engineering concepts in plain, useful language.',
                icon: BookOpen,
              },
              {
                title: 'Company updates',
                description: 'Share milestones, new projects, team news, and announcements.',
                icon: CalendarDays,
              },
              {
                title: 'Client education',
                description: 'Help developers and project teams understand better decisions.',
                icon: Lightbulb,
              },
              {
                title: 'Project learning',
                description: 'Turn completed work into lessons, outcomes, and credibility.',
                icon: DraftingCompass,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-border bg-white p-5 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-extrabold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
