import Link from "next/link";
import ImageZoom from "@/components/ImageZoom";

export const metadata = {
  title: "Clinic: Dental Practice Management System | Itamih Case Study",
  description: "How we built a unified practice management system for a dental hospital in India, replacing paper-based workflows with digital appointments, patient records, revenue tracking, and doctor schedules.",
};

export default function ClinicCaseStudy() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary-dark mb-8 font-semibold">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to home
          </Link>
          <div className="text-sm font-semibold text-primary mb-4">HEALTHCARE OPERATIONS</div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Clinic: Dental Practice Management System
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Replacing paper-based chaos with a unified system for appointments, patient records, revenue, and doctor schedules at a dental hospital in India
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="bg-white px-4 py-2 rounded-full border border-gray-200">
              <span className="font-semibold text-gray-900">Next.js</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full border border-gray-200">
              <span className="font-semibold text-gray-900">Prisma</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full border border-gray-200">
              <span className="font-semibold text-gray-900">Bun</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full border border-gray-200">
              <span className="font-semibold text-gray-900">PostgreSQL</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full border border-gray-200">
              <span className="font-semibold text-gray-900">TypeScript</span>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Hero: front-desk dashboard */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
            <ImageZoom
              src="/images/clinic-dashboard.png"
              alt="Clinic front-desk dashboard with today's appointments, collections, outstanding dues, and pending payments"
              width={1600}
              height={1000}
              className="w-full h-auto"
            />
          </div>

          {/* Row 2: the dental chart — the headline product moment */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
            <ImageZoom
              src="/images/clinic-exam.png"
              alt="Clinical examination page showing interactive dental chart, per-tooth findings, clinical notes, and treatment status sidebar"
              width={1600}
              height={1000}
              className="w-full h-auto"
            />
          </div>

          {/* Row 3: appointments + treatment plan side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <ImageZoom
                src="/images/clinic-appointments.png"
                alt="Daily appointment schedule with room-based columns, patient context, and status tracking"
                width={1600}
                height={1000}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <ImageZoom
                src="/images/clinic-patient-detail.png"
                alt="Patient detail view with active treatment chain, multi-step plan progress, and balance tracking"
                width={1600}
                height={1000}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Row 4: revenue report full width */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
            <ImageZoom
              src="/images/clinic-revenue.png"
              alt="Bills report with payment mode summary and detailed receipt list by date"
              width={1600}
              height={1000}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Dental practices across India still run on paper. A busy hospital sees dozens of patients a day, and the daily workflow is held together by physical registers, handwritten files, and verbal coordination between the front desk and the back office. The problems compound fast:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">&bull;</span>
                <span className="text-gray-600 text-lg">Appointments tracked in physical registers, leading to double-bookings and missed slots</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">&bull;</span>
                <span className="text-gray-600 text-lg">Patient histories scattered across paper files, hard to retrieve mid-visit when a doctor needs context</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">&bull;</span>
                <span className="text-gray-600 text-lg">Daily revenue reconciled by hand at the end of every shift, with no clear view of trends across weeks or months</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">&bull;</span>
                <span className="text-gray-600 text-lg">Doctor availability juggled verbally, with no central source of truth for who is on shift when</span>
              </li>
            </ul>
            <p className="text-gray-600 text-lg leading-relaxed">
              Off-the-shelf hospital software exists, but it is built for large institutions, priced for Western markets, and far too heavy for a single-location dental practice. The team needed something purpose-built for the way their clinic actually runs.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The Solution</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            We built Clinic&mdash;a practice management system tailored to the daily rhythm of a dental hospital. One interface unifies appointments, patient records, revenue, and doctor schedules, replacing the stack of paper registers with a single source of truth the whole team can trust.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Appointment Booking
              </h4>
              <p className="text-gray-600">
                Front desk books, reschedules, and cancels appointments from a calendar view. Conflicts are caught before they happen, not after a patient walks in.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Patient Records
              </h4>
              <p className="text-gray-600">
                A complete treatment history for every patient, searchable by name or phone number and accessible in seconds from any workstation in the clinic.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Revenue Tracking
              </h4>
              <p className="text-gray-600">
                Payments are logged at the point of sale and automatically roll up into daily, weekly, and monthly revenue reports&mdash;no more end-of-day manual reconciliation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Doctor Schedules
              </h4>
              <p className="text-gray-600">
                A single shared schedule for every doctor on staff, so the front desk always knows who is available and patients are routed to the right practitioner.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Role-Based Access
              </h4>
              <p className="text-gray-600">
                Front desk, doctors, and administrators each see the views and actions relevant to their role, keeping the interface simple and patient data properly scoped.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Built for Low Bandwidth
              </h4>
              <p className="text-gray-600">
                Server components and a lean Bun runtime keep page loads fast even on unreliable clinic internet, so the system never slows the team down during a busy day.
              </p>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">How a Day at the Clinic Runs</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  1
                </div>
                <div>
                  <p className="text-gray-600">
                    <strong>Front desk books the appointment:</strong> A patient calls in, the receptionist finds an open slot with the right doctor, and the appointment is logged against the patient&apos;s record in seconds.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  2
                </div>
                <div>
                  <p className="text-gray-600">
                    <strong>Patient arrives, records are pulled:</strong> On check-in, the front desk opens the full treatment history and hands it to the attending doctor&mdash;no paper file hunt.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  3
                </div>
                <div>
                  <p className="text-gray-600">
                    <strong>Doctor logs the treatment:</strong> Procedures, notes, and follow-ups are recorded directly against the patient, building a continuous history across every visit.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  4
                </div>
                <div>
                  <p className="text-gray-600">
                    <strong>Revenue is captured automatically:</strong> Payment at the front desk flows straight into the day&apos;s revenue totals, and the administrator sees the numbers update live.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Results */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The Outcome</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-primary/5 rounded-2xl">
              <div className="text-5xl font-bold text-primary mb-2">Daily</div>
              <div className="text-gray-600 font-medium">In active use</div>
              <div className="text-sm text-gray-500 mt-2">The India team runs on it every shift</div>
            </div>
            <div className="text-center p-6 bg-primary/5 rounded-2xl">
              <div className="text-5xl font-bold text-primary mb-2">Paper-free</div>
              <div className="text-gray-600 font-medium">Front desk operations</div>
              <div className="text-sm text-gray-500 mt-2">Registers and files replaced end to end</div>
            </div>
            <div className="text-center p-6 bg-primary/5 rounded-2xl">
              <div className="text-5xl font-bold text-primary mb-2">Handed off</div>
              <div className="text-gray-600 font-medium">Maintenance mode</div>
              <div className="text-sm text-gray-500 mt-2">Client-operated, with light ongoing support</div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Clinic is now the operating system for the practice:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">&#10003;</span>
                <span className="text-gray-600 text-lg">The front desk books and tracks every appointment through one calendar instead of a stack of registers</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">&#10003;</span>
                <span className="text-gray-600 text-lg">Doctors walk into every visit with the patient&apos;s full history already on screen</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">&#10003;</span>
                <span className="text-gray-600 text-lg">Administrators see daily revenue without a manual end-of-day count</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">&#10003;</span>
                <span className="text-gray-600 text-lg">The system has been handed off to the on-site team and is running in maintenance mode</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Details (Expandable) */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <details className="group">
            <summary className="cursor-pointer list-none">
              <div className="flex items-center justify-between p-6 bg-white rounded-xl border border-gray-200 group-hover:border-primary transition-colors">
                <h3 className="text-2xl font-semibold text-gray-900">Technical Implementation</h3>
                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </summary>

            <div className="mt-4 p-8 bg-white rounded-xl border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Architecture</h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Frontend</h5>
                  <ul className="space-y-2 text-gray-600">
                    <li>&bull; Next.js App Router with TypeScript end to end</li>
                    <li>&bull; Server components by default for fast first loads on clinic hardware</li>
                    <li>&bull; Tailwind CSS for a consistent, easily maintained UI</li>
                    <li>&bull; Role-aware layouts for front desk, doctors, and administrators</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Backend</h5>
                  <ul className="space-y-2 text-gray-600">
                    <li>&bull; Bun runtime for fast startup and a lean deployment footprint</li>
                    <li>&bull; Prisma ORM with a strongly typed schema for patients, appointments, treatments, and payments</li>
                    <li>&bull; PostgreSQL for reliable, transactional storage of clinical and financial data</li>
                    <li>&bull; Server actions for mutations, keeping the client bundle small</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Data Model</h5>
                  <ul className="space-y-2 text-gray-600">
                    <li>&bull; Patients linked to treatment history, appointments, and payments</li>
                    <li>&bull; Doctors linked to schedules and the appointments they are assigned</li>
                    <li>&bull; Payments rolled up into daily revenue views for administrators</li>
                    <li>&bull; Audit-friendly timestamps on every record</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Key Design Decisions</h5>
                  <ul className="space-y-2 text-gray-600">
                    <li>&bull; <strong>Handoff-first:</strong> Clean Prisma schema, seed data, and documentation so the on-site team could take ownership without us in the loop</li>
                    <li>&bull; <strong>Low-bandwidth friendly:</strong> Server rendering and minimal client JavaScript keep the app responsive on unreliable clinic internet</li>
                    <li>&bull; <strong>Role-scoped views:</strong> Each role sees only the data and actions relevant to their job, reducing training time and mistakes</li>
                    <li>&bull; <strong>Single source of truth:</strong> Appointments, records, and revenue all live in one database, so no team ever has to reconcile across systems</li>
                  </ul>
                </div>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Need a custom operations system for your business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether it&apos;s a clinic, a storefront, or a back office&mdash;we build tools that fit how your team actually works, and hand them off cleanly when they&apos;re ready to run on their own.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
