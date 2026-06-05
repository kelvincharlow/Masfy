import Link from 'next/link';

const socials = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/masfy.consultants?rdid=Zkoi3yc7eaF4cUy7&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DjdZUvMge%2F#',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M14 8.5V6.75c0-.5.4-.75.86-.75H17V2.2A19 19 0 0 0 13.9 2C10.82 2 8.7 3.88 8.7 7.3v1.2H5.25v4.25H8.7V22h4.55v-9.25h3.46l.54-4.25H13.25V7.72c0-.8.22-1.22.75-1.22Z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/masfy_consultants/',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/108871497/admin/dashboard/',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M6.94 8.95H3.25V21h3.69ZM5.1 3a2.14 2.14 0 1 0 0 4.28A2.14 2.14 0 0 0 5.1 3M20.75 14.4c0-3.66-1.95-5.36-4.56-5.36a3.92 3.92 0 0 0-3.53 1.94V8.95H9.12V21h3.69v-5.96c0-1.57.3-3.08 2.24-3.08 1.9 0 1.92 1.78 1.92 3.18V21h3.78Z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@masfyconsultingengineers-ke?si=XKXEuCl0eH12vrwC',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M21.58 7.19a2.75 2.75 0 0 0-1.94-1.95C17.93 4.78 12 4.78 12 4.78s-5.93 0-7.64.46a2.75 2.75 0 0 0-1.94 1.95A28.8 28.8 0 0 0 1.96 12c0 1.67.16 3.34.46 4.81a2.75 2.75 0 0 0 1.94 1.95c1.71.46 7.64.46 7.64.46s5.93 0 7.64-.46a2.75 2.75 0 0 0 1.94-1.95c.3-1.47.46-3.14.46-4.81s-.16-3.34-.46-4.81M10 15.26V8.74L15.67 12Z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-slate-950 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-8 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.7fr_0.8fr_1.1fr_0.8fr]">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white">
                <img
                  src="/Masfy Logo 2025_New_Version.png"
                  alt=""
                  className="h-12 w-auto max-w-none object-contain"
                />
              </span>
              <p className="text-lg font-semibold leading-tight text-white">
                Masfy Consulting Engineers
              </p>
            </div>
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
              <a href="/Masfy%20Profile%202025.pdf" download className="transition hover:text-white">
                Company Profile
              </a>
            </div>
          </div>

          <div className="space-y-3 text-sm text-slate-300">
            <p className="font-semibold text-white">Contact</p>
            <ul className="space-y-2">
              <li className="leading-6">
                <span className="block text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Office
                </span>
                The Crescent Pearl, 1st Floor, Crescent Road, Westlands
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Email
                </span>
                <a href="mailto:manza@masfyconsultants.com" className="transition hover:text-white">
                  manza@masfyconsultants.com
                </a>
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Phone
                </span>
                <a href="tel:+254726365516" className="transition hover:text-white">
                  +254 726 365 516
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3 text-sm text-slate-300">
            <p className="font-semibold text-white">Socials</p>
            <div className="flex flex-wrap gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-slate-300 transition hover:border-brand-100/40 hover:bg-brand-500 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 text-center text-sm text-slate-500">
          &copy; 2026 Masfy Consulting Engineers. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
