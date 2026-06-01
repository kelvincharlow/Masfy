import Link from 'next/link';
import { ArrowRight, CalendarCheck, FileText, MessageSquare } from 'lucide-react';

const steps = [
  { label: 'Share the brief', icon: MessageSquare },
  { label: 'Review the scope', icon: FileText },
  { label: 'Plan next steps', icon: CalendarCheck },
];

export function CTA() {
  return (
    <section className="mx-auto max-w-6xl">
      <div className="relative overflow-hidden rounded-[2rem] bg-brand-500 px-6 py-8 text-white shadow-2xl shadow-brand-500/20 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.32),transparent_48%),radial-gradient(circle_at_88%_18%,rgba(255,255,255,0.22),transparent_28%)]" />
        <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full border border-white/15" />
        <div className="absolute -right-16 top-8 h-40 w-40 rounded-full border border-white/15" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-brand-100">
              Ready to start?
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">
              Bring us your project challenge. We will help shape the engineering path.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-blue-50 sm:text-base">
              Tell us what you are planning, what is uncertain, and what needs
              to move. We will help turn it into a clear technical scope.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-brand-700 shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Contact us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                View project work
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
            <p className="px-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-100">
              What happens next
            </p>
            <div className="mt-4 grid gap-3">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.label}
                    className="flex items-center gap-4 rounded-2xl bg-white/12 p-4 ring-1 ring-white/10"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-100">
                        0{index + 1}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        {step.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
