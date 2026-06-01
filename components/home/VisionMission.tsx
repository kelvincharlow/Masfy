'use client';

export function VisionMission() {
  const pillars = [
    {
      title: 'Our vision',
      description: 'To be the trusted partner for ambitious engineering programs that shape smarter, more sustainable communities.',
    },
    {
      title: 'Our mission',
      description: 'Deliver integrated infrastructure, structural, and civil engineering solutions with precision, clarity, and long-term value.',
    },
    {
      title: 'Our approach',
      description: 'Combine technical excellence, collaborative delivery, and digital workflows to keep projects on time and aligned with client goals.',
    },
  ];

  return (
    <section className="mx-auto max-w-6xl">
      <div className="rounded-3xl border border-border bg-surface p-8 shadow-sm">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.24em] text-brand-500">Vision & Mission</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">Engineering leadership for projects that matter.</h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-600">We empower teams with forward-thinking engineering strategy, resilient design, and practical execution plans that improve performance, usability, and long-term asset value.</p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((item) => (
            <div key={item.title} className="flex flex-col items-start gap-4 rounded-3xl border border-border bg-white p-6 shadow-sm">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d={item.title === 'Our vision' ? 'M12 2L2 7l10 5 10-5-10-5Zm0 7l-9-4.5V18l9 4.5L21 18V4.5L12 9Z' : item.title === 'Our mission' ? 'M6 3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Zm0 2a1 1 0 0 0-1 1v2h14V6a1 1 0 0 0-1-1H6Zm-1 5v6a1 1 0 0 0 1 1h2v-4H5V10Zm4 0v4h6v-4H9Zm8 0h-2v4h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z' : 'M12 1.5 8.5 5.5 4.5 6.5 4.5 12c0 4.7 3.8 8.5 8.5 8.5 4.7 0 8.5-3.8 8.5-8.5V6.5l-4-1-3.5-4Zm-.5 10.6-3-3 1.4-1.4 1.6 1.6 4.8-4.8 1.4 1.4-6.2 6.2Z'} /></svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{item.title.replace('Our ', '')}</h3>
              <p className="text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
