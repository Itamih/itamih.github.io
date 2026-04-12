import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Case Studies | Itamih",
  description: "A look at the systems we've built for real teams&mdash;practice management, grant prospecting, knowledge assistants, and economic intelligence.",
};

const caseStudies = [
  {
    slug: "clinic",
    category: "Healthcare Operations",
    title: "Clinic: Dental Practice Management System",
    blurb:
      "A unified system for appointments, patient records, revenue, and doctor schedules at a dental hospital in India. Replaced paper registers end to end.",
    image: "/images/clinic-dashboard.png",
    stats: [
      { value: "Daily", label: "In active use" },
      { value: "Paper-free", label: "Front desk ops" },
    ],
  },
  {
    slug: "fundlens",
    category: "AI Automation",
    title: "FundLens: AI-Powered Grant Prospecting",
    blurb:
      "A platform that filters 10,000+ foundations, scores mission alignment with Claude, and generates personalized outreach&mdash;turning weeks of research into hours.",
    image: "/images/fundlens-dashboard.png",
    stats: [
      { value: "10K+", label: "Foundations" },
      { value: "90%", label: "Less research" },
    ],
  },
  {
    slug: "hannah",
    category: "AI Customer Support",
    title: "Hannah: AI-Powered Knowledge Assistant",
    blurb:
      "A RAG-based assistant that turns any company website into an instantly searchable knowledge base with cited sources and sub-2-second answers.",
    image: "/images/hannah-homepage.png",
    stats: [
      { value: "2 sec", label: "Response time" },
      { value: "10x", label: "More efficient" },
    ],
  },
  {
    slug: "economic-dashboard",
    category: "Real Estate & Investing",
    title: "Economic Intelligence Dashboard",
    blurb:
      "A live macro dashboard that replaces hours of manual data gathering with 39+ curated metrics, surfacing the signal a real estate team actually needs.",
    image: "/images/dashboard-main.png",
    stats: [
      { value: "39+", label: "Metrics" },
      { value: "80%", label: "Time saved" },
    ],
  },
];

export default function CaseStudiesIndex() {
  return (
    <main className="pt-16">
      {/* Header */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary-dark mb-8 font-semibold">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to home
          </Link>
          <p className="text-sm tracking-widest uppercase text-gray-400 mb-6">Case studies</p>
          <h1 className="text-5xl md:text-6xl text-gray-900 mb-6 leading-[1.08] max-w-3xl">
            Things we&apos;ve built
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
            Every project on this page started with a conversation about what wasn&apos;t working. Here&apos;s what came out of those conversations.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-28 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="group block bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-gray-400 transition-all"
              >
                <div className="aspect-[16/9] relative overflow-hidden bg-gray-100">
                  <Image
                    src={study.image}
                    alt={study.title}
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="text-xs tracking-widest uppercase text-gray-400 mb-2">
                    {study.category}
                  </div>
                  <h2 className="text-2xl text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {study.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed mb-5">{study.blurb}</p>
                  <div className="flex items-center gap-6 text-sm">
                    {study.stats.map((stat) => (
                      <div key={stat.label}>
                        <span className="text-lg font-heading text-gray-900">{stat.value}</span>
                        <span className="text-gray-400 ml-1.5 text-xs uppercase tracking-wider">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
