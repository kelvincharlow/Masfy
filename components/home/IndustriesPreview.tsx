import Link from 'next/link';

export function IndustriesPreview() {
  const industries = ['Manufacturing', 'Energy', 'Infrastructure', 'Commercial'];

  return (
    <section className="mx-auto max-w-6xl">
      <div className="rounded-3xl border border-border bg-surface p-8 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-brand-500">Industries</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Solutions for strategic markets</h2>
          </div>
          <Link href="/industries" className="text-sm font-semibold text-brand-500 hover:text-brand-700">
            Explore industries →
          </Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-4">
          {industries.map((industry) => (
            <article key={industry} className="rounded-3xl border border-border bg-white p-6 text-center shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{industry}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
