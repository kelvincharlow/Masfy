export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 space-y-16">
      <section>
        <h1 className="text-4xl font-semibold text-slate-900">About Masfy Consultants</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Masfy Consultants is a multidisciplinary engineering consultancy specializing in structural engineering, civil engineering, BIM coordination, and project management. Since 2012, the firm has delivered innovative, sustainable, and technically sound engineering solutions across a diverse portfolio of projects in Kenya and beyond.
        </p>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          By combining advanced engineering expertise with modern digital design technologies, Masfy Consultants helps clients transform concepts into safe, efficient, and impactful built environments.
        </p>
      </section>

      <section className="grid gap-10 lg:grid-cols-2">
        <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Vision</h2>
          <p className="mt-4 text-slate-600">
            To be the leading engineering consultancy recognized for excellence, innovation, and sustainable solutions that shape the future of the built environment.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Mission</h2>
          <p className="mt-4 text-slate-600">
            To deliver high-quality engineering solutions through technical expertise, innovation, and collaborative partnerships while creating lasting value for clients, communities, and stakeholders.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-border bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Core Values</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Excellence</h3>
            <p className="mt-2 text-slate-600">We strive for the highest standards in every project, ensuring quality, precision, and reliability.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Integrity</h3>
            <p className="mt-2 text-slate-600">We conduct our work with honesty, transparency, and professional responsibility.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Innovation</h3>
            <p className="mt-2 text-slate-600">We embrace emerging technologies and modern engineering methodologies to deliver smarter solutions.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Sustainability</h3>
            <p className="mt-2 text-slate-600">We design with long-term environmental, social, and economic impact in mind.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Collaboration</h3>
            <p className="mt-2 text-slate-600">We believe successful projects are built through strong partnerships and teamwork.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Client Commitment</h3>
            <p className="mt-2 text-slate-600">We prioritize our clients' goals and work tirelessly to exceed expectations.</p>
          </div>
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-2">
        <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Team</h2>
          <div className="mt-6 space-y-6">
            <div>
              <p className="font-semibold text-slate-900">Managing Director</p>
              <p className="text-sm text-slate-600">Leads the firm’s strategic delivery and client engagement.</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Structural Engineering Lead</p>
              <p className="text-sm text-slate-600">Oversees complex structural design and analysis for built-environment projects.</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">BIM Coordinator</p>
              <p className="text-sm text-slate-600">Manages digital modeling, coordination, and design integration workflows.</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Project Manager</p>
              <p className="text-sm text-slate-600">Ensures delivery alignment, schedule control, and client satisfaction.</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Certifications</h2>
          <p className="mt-4 text-slate-600">
            Our delivery framework is built around strong quality management and professional engineering standards, with systems that support compliance, accuracy, and dependable project outcomes.
          </p>
          <ul className="mt-6 space-y-3 text-slate-600 list-disc list-inside">
            <li>Quality assurance embedded in every engineering process</li>
            <li>Professional engineering practice and technical review</li>
            <li>Digital design standards for BIM and coordination workflows</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
