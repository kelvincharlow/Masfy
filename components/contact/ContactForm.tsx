"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  "Civil Engineering",
  "Structural Engineering",
  "BIM & Digital Delivery",
  "Auxiliary & Testing Services",
  "Infrastructure Planning",
  "Other",
];

const contactDetails = [
  {
    label: "Email",
    value: "manza@masfyconsultants.com",
    href: "mailto:manza@masfyconsultants.com",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+254 726 365 516",
    href: "tel:+254726365516",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "The Crescent Pearl, 1st Floor, Crescent Road, Westlands",
    href: "#",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    // Simulate async submit — wire up to your API / email service here
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
  }

  return (
    <section className="mx-auto max-w-6xl">

      {/* Page header */}
      <div className="mb-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-[0.24em] text-brand-500"
        >
          Contact us
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl"
        >
          Let&apos;s work together
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mt-3 max-w-xl text-slate-600"
        >
          Tell us about your project and we will get back to you within one business day.
        </motion.p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

        {/* ── Form card ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-3xl border border-border bg-surface p-5 shadow-sm sm:p-8"
        >
          {status === "success" ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 py-16 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-50">
                <svg className="h-8 w-8 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-slate-900">Message sent!</h2>
              <p className="max-w-sm text-slate-600">
                Thanks for reaching out. A member of our team will be in touch with you shortly.
              </p>
              <button
                onClick={() => { setStatus("idle"); setForm({ name: "", email: "", company: "", service: "", message: "" }); }}
                className="mt-2 rounded-full border border-border px-6 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1 */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                    Full name <span className="text-brand-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 shadow-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                    Email address <span className="text-brand-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 shadow-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 shadow-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700">
                    Service of interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                  Message <span className="text-brand-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                  className="w-full resize-none rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 shadow-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                />
              </div>

              {/* Submit */}
              <div className="flex items-center justify-between gap-4 pt-1">
                <p className="text-xs text-slate-400">
                  We&apos;ll respond within one business day.
                </p>
                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <>
                      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" strokeLinecap="round" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 2 11 13M22 2 15 22l-4-9-9-4 20-7z" />
                      </svg>
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          )}
        </motion.div>

        {/* ── Sidebar ── */}
        <div className="flex flex-col gap-4">

          {/* Contact details card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="rounded-3xl border border-border bg-surface p-7 shadow-sm"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">
              Get in touch
            </h3>
            <ul className="mt-5 space-y-4">
              {contactDetails.map((detail) => (
                <li key={detail.label}>
                  <a
                    href={detail.href}
                    className="group flex items-start gap-3 transition"
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition group-hover:bg-brand-500 group-hover:text-white">
                      {detail.icon}
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-widest text-slate-400">{detail.label}</p>
                      <p className="mt-0.5 text-sm font-semibold text-slate-900">{detail.value}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Why reach out card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.36 }}
            className="rounded-3xl border border-border bg-brand-500 p-7 shadow-sm"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-100">
              Why Masfy?
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                "Response within one business day",
                "Free initial project consultation",
                "Multidisciplinary engineering team",
                "Trusted by 80+ partner companies",
              ].map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-sm text-white">
                  <svg className="h-4 w-4 shrink-0 text-brand-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
