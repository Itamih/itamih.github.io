import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <p className="text-sm tracking-widest uppercase text-gray-400 mb-6">Business automation studio</p>
            <h1 className="text-5xl md:text-7xl text-gray-900 mb-8 leading-[1.08]">
              Your team has better things to do than repetitive work
            </h1>
            <p className="text-xl text-gray-500 mb-10 max-w-xl leading-relaxed">
              We find the tasks that drain your team&apos;s time and replace them with AI systems that actually work. No buzzwords, no generic tools&mdash;just automation built around how your business operates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="bg-gray-900 hover:bg-gray-800 text-white px-7 py-3.5 rounded text-base font-medium transition-colors inline-block text-center"
              >
                Start a conversation
              </Link>
              <Link
                href="#work"
                className="text-gray-500 hover:text-gray-900 px-7 py-3.5 text-base font-medium transition-colors inline-block text-center"
              >
                See what we&apos;ve built
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-28 px-6 lg:px-8 bg-cream grain">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left column: headline */}
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl text-gray-900 leading-tight lg:sticky lg:top-24">
                We handle the work your team shouldn&apos;t be doing manually
              </h2>
            </div>

            {/* Right column: descriptions */}
            <div className="lg:col-span-6 lg:col-start-7 space-y-16">
              <div>
                <h3 className="text-lg font-medium font-sans text-gray-900 mb-3">Find what&apos;s costing you time</h3>
                <p className="text-gray-500 text-lg leading-relaxed">
                  We sit down with your team, watch how they work, and identify the repetitive tasks that eat up hours every week. Usually it&apos;s things people have just accepted as &ldquo;part of the job.&rdquo;
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium font-sans text-gray-900 mb-3">Build something that fits</h3>
                <p className="text-gray-500 text-lg leading-relaxed">
                  No off-the-shelf tools. We build AI systems designed around your specific workflow, your specific data, and the way your team actually operates. If it doesn&apos;t integrate smoothly, it won&apos;t get used.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium font-sans text-gray-900 mb-3">Stay with you after launch</h3>
                <p className="text-gray-500 text-lg leading-relaxed">
                  Automation isn&apos;t a one-time deliverable. We monitor how it performs, adjust when your needs change, and make sure your team is actually getting value from it&mdash;not just a tool they ignore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-28 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
              Things we&apos;ve built
            </h2>
            <p className="text-lg text-gray-500 max-w-xl">
              Each project started with a conversation about what wasn&apos;t working. Here&apos;s what came out of it.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Featured: Hannah */}
            <Link
              href="/case-studies/hannah"
              className="group lg:col-span-7 block bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-gray-400 transition-all"
            >
              <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                <Image
                  src="/images/hannah-chat.png"
                  alt="Hannah AI chatbot interface"
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="text-xs tracking-widest uppercase text-gray-400 mb-3">AI Customer Support</div>
                <h3 className="text-2xl text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  Hannah: AI-Powered Knowledge Assistant
                </h3>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  Support agents were spending hours searching documentation. We built an AI assistant that finds answers in seconds.
                </p>
                <div className="flex items-center gap-8 text-sm">
                  <div>
                    <div className="text-2xl font-heading text-gray-900">2 sec</div>
                    <div className="text-gray-400 text-xs uppercase tracking-wider">Response time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-heading text-gray-900">10x</div>
                    <div className="text-gray-400 text-xs uppercase tracking-wider">More efficient</div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Right column: stacked */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Economic Dashboard */}
              <Link
                href="/case-studies/economic-dashboard"
                className="group block bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-gray-400 transition-all flex-1"
              >
                <div className="aspect-[16/9] relative overflow-hidden bg-gray-100">
                  <Image
                    src="/images/dashboard-main.png"
                    alt="Economic Intelligence Dashboard"
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs tracking-widest uppercase text-gray-400 mb-2">Real Estate & Investing</div>
                  <h3 className="text-xl text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    Economic Intelligence Dashboard
                  </h3>
                  <div className="flex items-center gap-6 text-sm">
                    <div>
                      <span className="text-lg font-heading text-gray-900">39+</span>
                      <span className="text-gray-400 ml-1.5 text-xs uppercase tracking-wider">Metrics</span>
                    </div>
                    <div>
                      <span className="text-lg font-heading text-gray-900">80%</span>
                      <span className="text-gray-400 ml-1.5 text-xs uppercase tracking-wider">Time saved</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* FundLens */}
              <Link
                href="/case-studies/fundlens"
                className="group block bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-gray-400 transition-all flex-1"
              >
                <div className="aspect-[16/9] relative overflow-hidden bg-gray-100">
                  <Image
                    src="/images/fundlens-dashboard.png"
                    alt="FundLens grant prospecting"
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs tracking-widest uppercase text-gray-400 mb-2">AI Automation</div>
                  <h3 className="text-xl text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    FundLens: AI-Powered Grant Prospecting
                  </h3>
                  <div className="flex items-center gap-6 text-sm">
                    <div>
                      <span className="text-lg font-heading text-gray-900">10K+</span>
                      <span className="text-gray-400 ml-1.5 text-xs uppercase tracking-wider">Foundations</span>
                    </div>
                    <div>
                      <span className="text-lg font-heading text-gray-900">90%</span>
                      <span className="text-gray-400 ml-1.5 text-xs uppercase tracking-wider">Less research</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section id="approach" className="py-28 px-6 lg:px-8 bg-gray-900 text-white grain">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-4xl md:text-5xl leading-tight">
                No surprises, no black boxes
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="space-y-12">
                <div className="border-l-2 border-white/20 pl-8">
                  <h3 className="text-xl font-medium font-sans mb-3">We start by listening</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    A conversation about what&apos;s actually slowing your team down. Not a sales pitch&mdash;we need to understand the problem before we can tell you if we&apos;re the right fit.
                  </p>
                </div>

                <div className="border-l-2 border-white/20 pl-8">
                  <h3 className="text-xl font-medium font-sans mb-3">We build in the open</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    You&apos;ll see a clear proposal before we write a line of code. Once we start, you get regular check-ins and working demos&mdash;not status updates that say &ldquo;on track.&rdquo;
                  </p>
                </div>

                <div className="border-l-2 border-white/20 pl-8">
                  <h3 className="text-xl font-medium font-sans mb-3">We stick around</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Deploying is the halfway point, not the finish line. We train your team, monitor performance, and adjust things as your business evolves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 px-6 lg:px-8 bg-cream grain">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl text-gray-900 leading-tight mb-6">
                Tell us what&apos;s not working
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                No pitch deck needed. Just tell us what&apos;s eating up your team&apos;s time and we&apos;ll let you know if we can help. Most conversations take 20 minutes.
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="bg-white rounded-lg p-8 md:p-10 border border-gray-200">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
