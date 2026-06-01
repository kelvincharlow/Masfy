import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border bg-slate-950 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-8 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.8fr_1fr_1fr]">
          <div className="space-y-3">
            <p className="text-lg font-semibold text-white">Masfy Consulting Engineers</p>
            <p className="max-w-md text-sm leading-6 text-slate-300">
              We love what we do. Allow us to help transform your vision into reality.
            </p>
          </div>

          <div className="space-y-2 text-sm text-slate-300">
            <p className="font-semibold text-white">Navigation</p>
            <div className="flex flex-col gap-2">
              <Link href="/" className="transition hover:text-white">Home</Link>
              <Link href="/about" className="transition hover:text-white">About</Link>
              <Link href="/projects" className="transition hover:text-white">Projects</Link>
              <Link href="/services" className="transition hover:text-white">Services</Link>
              <Link href="/contact" className="transition hover:text-white">Contact</Link>
            </div>
          </div>

          <div className="space-y-2 text-sm text-slate-300">
            <p className="font-semibold text-white">Contact</p>
            <p className="leading-6">The Crescent Pearl, 1st Floor, Crescent Road, Westlands</p>
            <a href="mailto:manza@masfyconsultants.com" className="block transition hover:text-white">manza@masfyconsultants.com</a>
            <a href="tel:+254726365516" className="block transition hover:text-white">+254 726 365 516</a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 text-center text-sm text-slate-500">
          © 2026 Masfy Consulting Engineers. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
