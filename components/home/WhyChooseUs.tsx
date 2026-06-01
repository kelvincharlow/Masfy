export function WhyChooseUs() {
  const points = [
    {
      title: 'Proven engineering expertise',
      description: 'A multidisciplinary team with strong experience across structural, civil, and infrastructure projects.',
      icon: 'M12 2L2 7l10 5 10-5-10-5Zm0 7l-9-4.5V18l9 4.5L21 18V4.5L12 9Zm0 1.5l6-3v8.25L12 20.5l-6-4.75V7.5l6 3Z',
    },
    {
      title: 'Technology-driven solutions',
      description: 'We leverage BIM, Revit, Civil 3D, SAP2000 and modern digital design workflows.',
      icon: 'M6 3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Zm0 2a1 1 0 0 0-1 1v2h14V6a1 1 0 0 0-1-1H6Zm-1 5v6a1 1 0 0 0 1 1h2v-4H5V10Zm4 0v4h6v-4H9Zm8 0h-2v4h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z',
    },
    {
      title: 'Quality assurance',
      description: 'Rigorous reviews, compliance checks, and industry best practices are built into every delivery.',
      icon: 'M12 1.5 8.5 5.5 4.5 6.5 4.5 12c0 4.7 3.8 8.5 8.5 8.5 4.7 0 8.5-3.8 8.5-8.5V6.5l-4-1-3.5-4Zm-.5 10.6-3-3 1.4-1.4 1.6 1.6 4.8-4.8 1.4 1.4-6.2 6.2Z',
    },
    {
      title: 'Client-focused delivery',
      description: 'Solutions are tailored to your objectives, budget, and long-term value.',
      icon: 'M12 2a5 5 0 0 0-5 5v3H5a2 2 0 0 0-2 2v2h18v-2a2 2 0 0 0-2-2h-2V7a5 5 0 0 0-5-5Zm-2 8V7a2 2 0 1 1 4 0v3h-4Zm-7 7v-1a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v1H3Z',
    },
  ];

  return (
    <section className="mx-auto max-w-6xl">
      <div className="rounded-3xl border border-border bg-surface p-8 shadow-sm">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.24em] text-brand-500">Why choose us</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">Engineering expertise built for your most demanding projects.</h2>
          <p className="mt-4 text-slate-600">From concept to completion, we combine technical precision, modern tools, and collaborative delivery to reduce risk, accelerate decision-making, and keep projects aligned with business goals.</p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {points.map((item) => (
            <div key={item.title} className="rounded-3xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d={item.icon} />
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
