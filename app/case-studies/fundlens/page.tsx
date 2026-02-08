import Link from "next/link";
import ImageZoom from "@/components/ImageZoom";

export const metadata = {
  title: "FundLens: AI-Powered Grant Prospecting | Itamih Case Study",
  description: "How we built an AI-powered platform that helps nonprofits find aligned foundations, score mission fit, and automate personalized outreach.",
};

export default function FundLensCaseStudy() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-violet-50">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary-dark mb-8 font-semibold">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to home
          </Link>
          <div className="text-sm font-semibold text-primary mb-4">AI AUTOMATION</div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            FundLens: AI-Powered Grant Prospecting
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Helping nonprofits find and connect with aligned foundations using AI scoring and automated outreach
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="bg-white px-4 py-2 rounded-full border border-gray-200">
              <span className="font-semibold text-gray-900">Next.js</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full border border-gray-200">
              <span className="font-semibold text-gray-900">FastAPI</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full border border-gray-200">
              <span className="font-semibold text-gray-900">Claude AI</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full border border-gray-200">
              <span className="font-semibold text-gray-900">ProPublica API</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full border border-gray-200">
              <span className="font-semibold text-gray-900">Railway</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Screenshots */}
      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Dashboard Screenshot */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
            <ImageZoom
              src="/images/fundlens-dashboard.png"
              alt="FundLens foundation search dashboard with filters, foundation cards showing assets, income, and grant data"
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
          </div>

          {/* Scoring Screenshot */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
            <ImageZoom
              src="/images/fundlens-scoring.png"
              alt="FundLens AI scoring interface showing mission alignment score, score breakdown, grant history, and outreach tools"
              width={1920}
              height={1080}
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
              Nonprofits spend enormous amounts of time prospecting for grant funding. The process of finding aligned foundations is manual, fragmented, and inefficient:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">&bull;</span>
                <span className="text-gray-600 text-lg">Hours spent manually researching foundations on GuideStar and reading through 990 filings</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">&bull;</span>
                <span className="text-gray-600 text-lg">No systematic way to score how well a foundation's priorities align with the nonprofit's mission</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">&bull;</span>
                <span className="text-gray-600 text-lg">Outreach emails are generic and don't reference specific foundation interests or giving patterns</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">&bull;</span>
                <span className="text-gray-600 text-lg">No pipeline tracking to manage relationships across dozens of potential funders</span>
              </li>
            </ul>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our first client, the White Lens Foundation focused on child online safety, was spending weeks on research that could be dramatically accelerated with the right tooling.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The Solution</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            We built FundLens—a platform that loads IRS foundation data, filters by criteria, uses AI to score mission alignment against the nonprofit's pillars, and generates personalized outreach emails with full pipeline tracking.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                IRS Data Filtering
              </h4>
              <p className="text-gray-600">
                Search and filter 10,000+ foundations by assets, grant size, state, organization type, and NTEE category to find relevant prospects fast.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                AI Alignment Scoring
              </h4>
              <p className="text-gray-600">
                Claude AI scores each foundation against the nonprofit's mission pillars, providing a 0-100 score with detailed reasoning for why they're a good fit.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                ProPublica 990 Enrichment
              </h4>
              <p className="text-gray-600">
                Automatically pulls financial data, grant history, and filing details from ProPublica's 990 database to enrich foundation profiles.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Personalized Outreach Emails
              </h4>
              <p className="text-gray-600">
                AI generates personalized email sequences that reference specific foundation interests, giving patterns, and grant recipients.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Kanban Pipeline
              </h4>
              <p className="text-gray-600">
                Track outreach progress with a 7-step sequence from initial contact through follow-ups, keeping all foundation relationships organized.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Contact Extraction from PDFs
              </h4>
              <p className="text-gray-600">
                Uses Claude Vision to extract contact information from 990 PDF filings, finding key people to reach out to directly.
              </p>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">How It Works</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  1
                </div>
                <div>
                  <p className="text-gray-600">
                    <strong>Load & filter foundations:</strong> IRS e-file data is loaded and filtered by assets, grant size, location, and NTEE category to surface relevant prospects from 10,000+ foundations.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  2
                </div>
                <div>
                  <p className="text-gray-600">
                    <strong>AI scores alignment:</strong> Claude analyzes each foundation's giving history, grant recipients, and stated mission against the nonprofit's pillars, producing a score and detailed explanation.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  3
                </div>
                <div>
                  <p className="text-gray-600">
                    <strong>Enrich with 990 data:</strong> ProPublica integration pulls financial details, filing history, and grant activity to build complete foundation profiles.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  4
                </div>
                <div>
                  <p className="text-gray-600">
                    <strong>Generate & track outreach:</strong> AI crafts personalized emails referencing specific foundation interests, and a Kanban pipeline tracks the full 7-step outreach sequence.
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The Results</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-primary/5 rounded-2xl">
              <div className="text-5xl font-bold text-primary mb-2">90%</div>
              <div className="text-gray-600 font-medium">Less research time</div>
              <div className="text-sm text-gray-500 mt-2">From weeks to hours per batch</div>
            </div>
            <div className="text-center p-6 bg-primary/5 rounded-2xl">
              <div className="text-5xl font-bold text-primary mb-2">10K+</div>
              <div className="text-gray-600 font-medium">Foundations searchable</div>
              <div className="text-sm text-gray-500 mt-2">Filtered from IRS e-file data</div>
            </div>
            <div className="text-center p-6 bg-primary/5 rounded-2xl">
              <div className="text-5xl font-bold text-primary mb-2">AI</div>
              <div className="text-gray-600 font-medium">Mission-aligned scoring</div>
              <div className="text-sm text-gray-500 mt-2">Per-pillar breakdown with reasoning</div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              FundLens transformed the grant prospecting workflow for the White Lens Foundation:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">&check;</span>
                <span className="text-gray-600 text-lg">Foundation research that took weeks now takes hours with smart filtering and AI scoring</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">&check;</span>
                <span className="text-gray-600 text-lg">Every outreach email is personalized with specific references to the foundation's giving history</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">&check;</span>
                <span className="text-gray-600 text-lg">AI explains exactly why each foundation is a good fit, with per-pillar score breakdowns</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">&check;</span>
                <span className="text-gray-600 text-lg">Full pipeline tracking ensures no opportunity falls through the cracks</span>
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
                    <li>&bull; Next.js 14 App Router with TypeScript</li>
                    <li>&bull; shadcn/ui components (Radix UI + Tailwind)</li>
                    <li>&bull; Responsive dashboard with filter sidebar</li>
                    <li>&bull; Foundation detail pages with score visualizations</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Backend</h5>
                  <ul className="space-y-2 text-gray-600">
                    <li>&bull; FastAPI (Python) for API endpoints</li>
                    <li>&bull; SQLite for development, PostgreSQL for production</li>
                    <li>&bull; Claude API for mission alignment scoring</li>
                    <li>&bull; Claude Vision for PDF contact extraction</li>
                    <li>&bull; Deployed on Railway.app</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Data Pipeline</h5>
                  <ul className="space-y-2 text-gray-600">
                    <li>&bull; IRS 990-PF e-file data via Giving Tuesday Data Lake</li>
                    <li>&bull; ProPublica Nonprofit Explorer API for 990 enrichment</li>
                    <li>&bull; Automated grant history extraction from XML filings</li>
                    <li>&bull; Contact search across multiple public sources</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Key Design Decisions</h5>
                  <ul className="space-y-2 text-gray-600">
                    <li>&bull; <strong>Per-pillar scoring:</strong> AI scores against each mission pillar independently for transparent alignment reasoning</li>
                    <li>&bull; <strong>Risk flags:</strong> Automatically surfaces concerns like small foundation size or missing grant data</li>
                    <li>&bull; <strong>7-step outreach:</strong> Structured email sequence with AI-generated personalization at each step</li>
                    <li>&bull; <strong>Bookmark lists:</strong> Organize foundations into custom lists for different campaigns or priorities</li>
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
              Need AI to streamline your workflows?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether it's data processing, outreach automation, or intelligent scoring—we build custom AI tools that save your team hours every week.
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
