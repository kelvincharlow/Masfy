import Link from 'next/link';

export function CTA() {
  return (
    <section className="mx-auto max-w-6xl rounded-3xl bg-brand-500 px-8 py-12 text-white shadow-2xl">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-brand-100">Ready to start?</p>
          <h2 className="mt-3 text-3xl font-semibold">Get a custom engineering solution for your next project.</h2>
        </div>
        <Link href="/contact" className="inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-brand-700 transition hover:bg-slate-100">
          Contact us
        </Link>
      </div>
    </section>
  );
}
