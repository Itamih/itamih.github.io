import Link from "next/link";
import ImageZoom from "@/components/ImageZoom";

export const metadata = {
  title: "Hannah: AI-Powered Knowledge Assistant | Itamih Case Study",
  description: "How we built an AI chatbot that helps customer support teams respond 10x faster by instantly retrieving accurate answers from website content.",
};

export default function HannahCaseStudy() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary-dark mb-8 font-semibold">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to home
          </Link>
          <div className="text-sm font-semibold text-primary mb-4">AI CUSTOMER SUPPORT</div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Hannah: AI-Powered Knowledge Assistant
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transforming customer support from hours of searching to instant, accurate answers with AI
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="bg-white px-4 py-2 rounded-full border border-gray-200">
              <span className="font-semibold text-gray-900">Next.js</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full border border-gray-200">
              <span className="font-semibold text-gray-900">FastAPI</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full border border-gray-200">
              <span className="font-semibold text-gray-900">OpenAI</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full border border-gray-200">
              <span className="font-semibold text-gray-900">RAG</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Screenshots */}
      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Homepage Screenshot */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
            <ImageZoom
              src="/images/hannah-homepage.png"
              alt="Hannah AI assistant homepage showing URL input and getting started interface"
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
          </div>

          {/* Chat Interface Screenshot */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
            <ImageZoom
              src="/images/hannah-chat.png"
              alt="Hannah chat interface showing customer support question and AI response with source citations"
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
              Customer support teams face a constant challenge: answering the same questions over and over while ensuring accuracy and consistency. Support agents spend valuable time:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span className="text-gray-600 text-lg">Searching through multiple documentation pages to find the right answer</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span className="text-gray-600 text-lg">Manually copying and customizing responses from knowledge bases</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span className="text-gray-600 text-lg">Worrying about giving outdated or incorrect information</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span className="text-gray-600 text-lg">Training new team members on where to find information</span>
              </li>
            </ul>
            <p className="text-gray-600 text-lg leading-relaxed">
              The result? Longer response times, inconsistent answers, and support teams stretched thin. One team we spoke with estimated spending <strong>3-5 minutes per ticket</strong> just searching for the right information to share with customers.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The Solution</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            We built Hannah—an AI assistant that transforms any company's website and documentation into an intelligent, searchable knowledge base. Support agents can ask questions in plain English and get instant, accurate answers with source citations.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Instant Answers
              </h4>
              <p className="text-gray-600">
                Get responses in under 2 seconds with zero hallucination—all answers are grounded in actual company content.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Source Citations
              </h4>
              <p className="text-gray-600">
                Every answer includes clickable links to the exact pages where the information came from for easy verification.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Smart Web Crawling
              </h4>
              <p className="text-gray-600">
                Automatically crawls and indexes website content, extracting only valuable information while skipping ads and navigation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Always Up-to-Date
              </h4>
              <p className="text-gray-600">
                Re-crawl websites on demand to keep the knowledge base current as documentation changes.
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
                    <strong>Website is crawled:</strong> Hannah automatically scans the company website, extracting content from documentation pages, FAQs, product pages, and blog posts.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  2
                </div>
                <div>
                  <p className="text-gray-600">
                    <strong>Content is indexed:</strong> The content is broken into searchable chunks and stored with AI embeddings for fast, semantic search.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  3
                </div>
                <div>
                  <p className="text-gray-600">
                    <strong>Support agent asks a question:</strong> Instead of searching manually, the agent types a natural language question into Hannah.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  4
                </div>
                <div>
                  <p className="text-gray-600">
                    <strong>AI retrieves and responds:</strong> Hannah finds the most relevant content and generates a clear, accurate answer with links to source pages.
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
              <div className="text-5xl font-bold text-primary mb-2">2 sec</div>
              <div className="text-gray-600 font-medium">Average response time</div>
              <div className="text-sm text-gray-500 mt-2">vs. 3-5 minutes searching manually</div>
            </div>
            <div className="text-center p-6 bg-primary/5 rounded-2xl">
              <div className="text-5xl font-bold text-primary mb-2">10x</div>
              <div className="text-gray-600 font-medium">Faster information retrieval</div>
              <div className="text-sm text-gray-500 mt-2">Support agents handle more tickets</div>
            </div>
            <div className="text-center p-6 bg-primary/5 rounded-2xl">
              <div className="text-5xl font-bold text-primary mb-2">Zero</div>
              <div className="text-gray-600 font-medium">Hallucinations</div>
              <div className="text-sm text-gray-500 mt-2">All answers cite real sources</div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              By eliminating the manual search process, Hannah transformed how support teams work:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">✓</span>
                <span className="text-gray-600 text-lg">Support agents spend less time searching and more time helping customers</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">✓</span>
                <span className="text-gray-600 text-lg">New team members get up to speed in days instead of weeks</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">✓</span>
                <span className="text-gray-600 text-lg">Customers receive faster, more accurate responses</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">✓</span>
                <span className="text-gray-600 text-lg">Documentation stays the single source of truth with automatic updates</span>
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
                    <li>• Next.js 14 with TypeScript for type safety</li>
                    <li>• TailwindCSS for responsive design</li>
                    <li>• Framer Motion for smooth animations</li>
                    <li>• Deployed on Cloudflare Pages (auto-deploy from GitHub)</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Backend</h5>
                  <ul className="space-y-2 text-gray-600">
                    <li>• FastAPI (Python) for high-performance API endpoints</li>
                    <li>• SQLite database for edge compatibility</li>
                    <li>• OpenAI embeddings (text-embedding-ada-002) for semantic search</li>
                    <li>• GPT-4o-mini for response generation</li>
                    <li>• Deployed on Railway.app with automatic scaling</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">RAG Pipeline</h5>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Smart web crawler with content filtering</li>
                    <li>• Chunks content into 512-token segments</li>
                    <li>• Cosine similarity search for retrieval (no external vector DB needed)</li>
                    <li>• Binary quantization for fast similarity matching</li>
                    <li>• Quality scoring and deduplication</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Key Design Decisions</h5>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Zero hallucination guarantee:</strong> Strict system prompts ensure AI only uses retrieved content</li>
                    <li>• <strong>Source transparency:</strong> Every answer shows exactly where information came from</li>
                    <li>• <strong>Cost optimization:</strong> SQLite instead of managed vector database reduces infrastructure costs</li>
                    <li>• <strong>Edge deployment:</strong> Fast global performance with Cloudflare Pages CDN</li>
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
              Want to build something similar?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's talk about how AI can transform your team's workflow. Every business has repetitive tasks—we help you automate them.
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
