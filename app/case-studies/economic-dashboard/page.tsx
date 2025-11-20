import Link from "next/link";
import ImageZoom from "@/components/ImageZoom";

export const metadata = {
  title: "Economic Intelligence Dashboard | Itamih Case Study",
  description: "How we built a comprehensive dashboard that consolidates 39+ economic metrics and real estate news, saving investors 80% of their research time.",
};

export default function EconomicDashboardCaseStudy() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary-dark mb-8 font-semibold">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to home
          </Link>
          <div className="text-sm font-semibold text-primary mb-4">REAL ESTATE & INVESTING</div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Economic Intelligence Dashboard
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            From data chaos to decision-ready insights—consolidating economic indicators and market intelligence in one platform
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="bg-white px-4 py-2 rounded-full border border-gray-200">
              <span className="font-semibold text-gray-900">React</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full border border-gray-200">
              <span className="font-semibold text-gray-900">FastAPI</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full border border-gray-200">
              <span className="font-semibold text-gray-900">PostgreSQL</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full border border-gray-200">
              <span className="font-semibold text-gray-900">FRED API</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Screenshot */}
      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
            <ImageZoom
              src="/images/dashboard-main.png"
              alt="Economic Intelligence Dashboard showing economic metrics charts and data visualization"
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
              Real estate investors and market analysts face information fragmentation every day. Making informed investment decisions requires tracking:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span className="text-gray-600 text-lg">Federal Reserve economic indicators across 5+ different datasets</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span className="text-gray-600 text-lg">Real estate market newsletters delivered to email inboxes</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span className="text-gray-600 text-lg">Housing market data from government websites</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span className="text-gray-600 text-lg">Regional banking and employment statistics</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span className="text-gray-600 text-lg">Market news and real estate deal announcements</span>
              </li>
            </ul>
            <p className="text-gray-600 text-lg leading-relaxed">
              Investors were jumping between Bloomberg terminals, FRED websites, email newsletters, and various data providers—spending <strong>5+ hours per week</strong> just gathering and organizing information. This fragmentation led to missed opportunities, incomplete analysis, and decision fatigue.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The Solution</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            We built a comprehensive economic intelligence platform that consolidates data from multiple government APIs, automatically parses real estate newsletters, and presents everything in an intuitive, organized dashboard. Investors now have all the information they need in one place.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                39+ Economic Metrics
              </h4>
              <p className="text-gray-600">
                Real-time data from Federal Reserve (FRED), BEA, and BLS including rates, housing, inflation, and employment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Automated Newsletter Parsing
              </h4>
              <p className="text-gray-600">
                Connects to email inbox, extracts real estate news from Bisnow newsletters, and organizes articles by category.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                "Today's Focus" Educational Feature
              </h4>
              <p className="text-gray-600">
                Daily themes organize metrics by topic (Mondays: Interest Rates, Tuesdays: Real Estate, etc.) for progressive learning.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                Personal Bookmarking System
              </h4>
              <p className="text-gray-600">
                Create custom bookmark lists to organize articles by topic, track deals, or save market opportunities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
                Interactive Data Visualization
              </h4>
              <p className="text-gray-600">
                5-year historical charts with multiple time ranges, trend analysis, and contextual insights.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Smart Metric Extraction
              </h4>
              <p className="text-gray-600">
                Automatically extracts cap rates, deal values, square footage, and prices from newsletter articles using regex patterns.
              </p>
            </div>
          </div>

          {/* Screenshots Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-lg">
              <ImageZoom
                src="/images/todays-focus.png"
                alt="Today's Focus feature showing daily themed economic metrics"
                width={1440}
                height={900}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-lg">
              <ImageZoom
                src="/images/newsstand.png"
                alt="Newsstand showing parsed real estate newsletter articles"
                width={1440}
                height={900}
                className="w-full h-auto"
              />
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
                    <strong>Data aggregation:</strong> Backend services automatically fetch economic data from FRED, BEA, and BLS APIs on a scheduled basis (daily, weekly, or monthly depending on the metric).
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  2
                </div>
                <div>
                  <p className="text-gray-600">
                    <strong>Newsletter parsing:</strong> Email integration connects to Gmail via IMAP, fetches Bisnow newsletters, and uses BeautifulSoup to extract individual articles from HTML emails.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  3
                </div>
                <div>
                  <p className="text-gray-600">
                    <strong>Intelligent organization:</strong> Articles are categorized, deduplicated, and analyzed for key metrics (cap rates, deal sizes, etc.) using regex patterns.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  4
                </div>
                <div>
                  <p className="text-gray-600">
                    <strong>Unified dashboard:</strong> React frontend presents everything in one place—charts for economic data, organized article feeds, and personal bookmarks.
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
              <div className="text-5xl font-bold text-primary mb-2">80%</div>
              <div className="text-gray-600 font-medium">Time saved on research</div>
              <div className="text-sm text-gray-500 mt-2">From 5+ hours to under 1 hour/week</div>
            </div>
            <div className="text-center p-6 bg-primary/5 rounded-2xl">
              <div className="text-5xl font-bold text-primary mb-2">39+</div>
              <div className="text-gray-600 font-medium">Economic metrics tracked</div>
              <div className="text-sm text-gray-500 mt-2">All in one unified dashboard</div>
            </div>
            <div className="text-center p-6 bg-primary/5 rounded-2xl">
              <div className="text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-600 font-medium">Automated newsletter parsing</div>
              <div className="text-sm text-gray-500 mt-2">No manual email reading required</div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              By consolidating fragmented data sources into one platform, we transformed the investment research workflow:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">✓</span>
                <span className="text-gray-600 text-lg">Investors access all economic data in seconds instead of hours</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">✓</span>
                <span className="text-gray-600 text-lg">Real estate newsletters automatically parsed and organized by category</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">✓</span>
                <span className="text-gray-600 text-lg">Historical context helps identify trends and outliers quickly</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">✓</span>
                <span className="text-gray-600 text-lg">Personal bookmarking system keeps track of opportunities and important articles</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">✓</span>
                <span className="text-gray-600 text-lg">"Today's Focus" feature provides educational progression for learning economics</span>
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
                    <li>• React 19.1 with TypeScript for type safety</li>
                    <li>• Vite build tool for fast development</li>
                    <li>• Shadcn/ui components (Radix UI + Tailwind)</li>
                    <li>• Recharts for data visualization</li>
                    <li>• Zustand for state management</li>
                    <li>• Deployed on Cloudflare Pages</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Backend</h5>
                  <ul className="space-y-2 text-gray-600">
                    <li>• FastAPI (Python 3.11+) for high-performance API</li>
                    <li>• PostgreSQL database with AsyncPG</li>
                    <li>• Redis caching for performance</li>
                    <li>• APScheduler for periodic data fetching</li>
                    <li>• SQLAlchemy 2.0 ORM with async support</li>
                    <li>• Deployed on Railway.app with auto-scaling</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Data Integrations</h5>
                  <ul className="space-y-2 text-gray-600">
                    <li>• FRED API (Federal Reserve Economic Data) - 39+ metrics</li>
                    <li>• BEA API (Bureau of Economic Analysis) - Regional data</li>
                    <li>• BLS API (Bureau of Labor Statistics) - Employment data</li>
                    <li>• Gmail IMAP for newsletter fetching</li>
                    <li>• BeautifulSoup 4 for HTML email parsing</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Key Features</h5>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Smart caching:</strong> Redis caches API responses to prevent quota exhaustion</li>
                    <li>• <strong>Rate limiting:</strong> 120 requests/minute with retry logic</li>
                    <li>• <strong>Metric extraction:</strong> Regex patterns extract cap rates, deal values, square footage from articles</li>
                    <li>• <strong>Duplicate detection:</strong> Prevents redundant articles in the database</li>
                    <li>• <strong>Responsive design:</strong> Mobile-first approach with information density gradients</li>
                    <li>• <strong>Dark mode:</strong> Glassmorphism effects with backdrop filters</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Database Schema Highlights</h5>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>FredDataPoint:</strong> Economic metrics with composite indexes</li>
                    <li>• <strong>Article:</strong> Individual news items extracted from newsletters</li>
                    <li>• <strong>Newsletter:</strong> Email container with metadata</li>
                    <li>• <strong>BookmarkList:</strong> User-created collections (max 10 per user)</li>
                    <li>• <strong>Normalized schema:</strong> Foreign key relationships with CASCADE delete</li>
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
              Drowning in data from multiple sources?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We specialize in consolidating fragmented information into unified dashboards. Let's talk about your workflow and how we can streamline it.
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
