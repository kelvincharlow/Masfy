"use client";

import { useState } from "react";

const services = [
  "Civil Engineering",
  "Structural Engineering",
  "BIM & Digital Delivery",
  "Auxiliary & Testing Services",
  "Infrastructure Planning",
  "Other",
];

const projectTypes = [
  "Residential / Apartments",
  "Commercial",
  "Hospitality",
  "Industrial",
  "Institutional",
  "Infrastructure / Civil Works",
  "Structural Assessment",
  "Other",
];

const projectStages = [
  "Concept",
  "Approvals",
  "Tender",
  "Construction",
  "Assessment",
  "Not sure yet",
];

const responseMethods = ["WhatsApp", "Phone call", "Email"];

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
    label: "Phone / WhatsApp",
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
    href: "https://www.google.com/maps/search/?api=1&query=The+Crescent+Pearl+Crescent+Road+Westlands+Nairobi",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Company profile",
    value: "Download PDF",
    href: "/Masfy%20Profile%202025.pdf",
    download: true,
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <path d="M7 10l5 5 5-5" />
        <path d="M12 15V3" />
      </svg>
    ),
  },
];

type Status = "idle" | "loading" | "success" | "error";

const formspreeEndpoint = "https://formspree.io/f/mjgdgyza";

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  projectLocation: "",
  projectType: "",
  projectStage: "",
  service: "",
  responseMethod: "",
  message: "",
};

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState(emptyForm);
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setStatus("success");
      setForm(emptyForm);
      formElement.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        "Sorry, the message could not be sent. Please try again or contact us directly on WhatsApp."
      );
    }
  }

  return (
    <section className="mx-auto max-w-6xl">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.24em] text-brand-500">
          Contact us
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
          Let&apos;s work together
        </h1>
        <p className="mt-3 max-w-xl text-slate-600">
          Tell us about your project, location, stage, and the support you need.
          We will get back to you within one business day.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        <div className="rounded-3xl border border-border bg-surface p-5 shadow-sm sm:p-8">
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
                onClick={() => { setStatus("idle"); setForm(emptyForm); }}
                className="mt-2 rounded-full border border-border px-6 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="hidden"
                name="_subject"
                value="New project inquiry from Masfy website"
              />
              <input type="hidden" name="_replyto" value={form.email} />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" required>
                  <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="John Smith" className={inputClassName} />
                </Field>
                <Field label="Email address" required>
                  <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="john@company.com" className={inputClassName} />
                </Field>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Phone / WhatsApp number">
                  <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+254 7..." className={inputClassName} />
                </Field>
                <Field label="Company">
                  <input id="company" name="company" type="text" value={form.company} onChange={handleChange} placeholder="Your company name" className={inputClassName} />
                </Field>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Project location">
                  <input id="projectLocation" name="projectLocation" type="text" value={form.projectLocation} onChange={handleChange} placeholder="Westlands, Nairobi" className={inputClassName} />
                </Field>
                <Field label="Project type">
                  <select id="projectType" name="projectType" value={form.projectType} onChange={handleChange} className={inputClassName}>
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                  </select>
                </Field>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Project stage">
                  <select id="projectStage" name="projectStage" value={form.projectStage} onChange={handleChange} className={inputClassName}>
                    <option value="">Select project stage</option>
                    {projectStages.map((stage) => <option key={stage} value={stage}>{stage}</option>)}
                  </select>
                </Field>
                <Field label="Service of interest">
                  <select id="service" name="service" value={form.service} onChange={handleChange} className={inputClassName}>
                    <option value="">Select a service</option>
                    {services.map((service) => <option key={service} value={service}>{service}</option>)}
                  </select>
                </Field>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Preferred response method">
                  <select id="responseMethod" name="responseMethod" value={form.responseMethod} onChange={handleChange} className={inputClassName}>
                    <option value="">Select response method</option>
                    {responseMethods.map((method) => <option key={method} value={method}>{method}</option>)}
                  </select>
                </Field>
                <Field label="Upload drawings / documents">
                  <input id="documents" name="documents" type="file" multiple className="w-full rounded-xl border border-border bg-white px-4 py-2 text-sm text-slate-700 file:mr-4 file:rounded-full file:border-0 file:bg-brand-50 file:px-4 file:py-1.5 file:text-xs file:font-semibold file:text-brand-700 hover:file:bg-brand-100" />
                </Field>
              </div>

              <Field label="Message" required>
                <textarea id="message" name="message" required rows={6} value={form.message} onChange={handleChange} placeholder="Tell us about your project, timeline, drawings available, and any specific requirements..." className={`${inputClassName} resize-none`} />
              </Field>

              <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-h-5">
                  {status === "error" ? (
                    <p className="text-xs font-semibold text-red-600">
                      {errorMessage}
                    </p>
                  ) : (
                    <p className="text-xs text-slate-400">
                      Attach drawings, sketches, or documents where available.
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <>
                      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" strokeLinecap="round" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 2 11 13M22 2 15 22l-4-9-9-4 20-7z" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <div className="rounded-3xl border border-border bg-surface p-7 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">
              Get in touch
            </h3>
            <ul className="mt-5 space-y-4">
              {contactDetails.map((detail) => (
                <li key={detail.label}>
                  <a
                    href={detail.href}
                    download={"download" in detail ? detail.download : undefined}
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
          </div>

          <div className="rounded-3xl border border-border bg-brand-500 p-7 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-100">
              Why Masfy?
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                "Response within one business day",
                "Clear initial project consultation",
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
          </div>
        </div>
      </div>
    </section>
  );
}

const inputClassName =
  "w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 shadow-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20";

function Field({
  children,
  label,
  required,
}: {
  children: React.ReactNode;
  label: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-slate-700">
        {label} {required && <span className="text-brand-500">*</span>}
      </label>
      {children}
    </div>
  );
}
