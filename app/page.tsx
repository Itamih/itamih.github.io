import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 text-balance">
            We help businesses automate repetitive tasks with AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto text-balance">
            Most people don't know how to use AI for their business. We discover what's slowing you down and build custom solutions that work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="#work"
              className="border-2 border-gray-300 hover:border-primary text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-colors"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            From chaos to clarity
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Card 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">We discover</h3>
              <p className="text-gray-600 text-lg">
                We analyze your workflow to find repetitive tasks that waste your team's time and energy.
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">We build</h3>
              <p className="text-gray-600 text-lg">
                Custom AI solutions designed specifically for your business. No generic tools—just what you need.
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">You scale</h3>
              <p className="text-gray-600 text-lg">
                Your team focuses on growth while AI handles the repetitive work. More done with less effort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="work" className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Real work, real results
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We've built solutions that save hours every week and transform how businesses operate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Hannah Case Study */}
            <Link
              href="/case-studies/hannah"
              className="group block bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-primary transition-all hover:shadow-xl"
            >
              <div className="aspect-video relative overflow-hidden bg-gray-50">
                <Image
                  src="/images/hannah-chat.png"
                  alt="Hannah AI chatbot interface"
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <div className="text-sm font-semibold text-primary mb-2">AI CUSTOMER SUPPORT</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  Hannah: AI-Powered Knowledge Assistant
                </h3>
                <p className="text-gray-600 mb-4">
                  Customer support agents were spending hours searching documentation to answer questions. We built an AI assistant that instantly retrieves accurate answers from their website content.
                </p>
                <div className="flex items-center gap-6 text-sm">
                  <div>
                    <div className="font-bold text-2xl text-gray-900">2 sec</div>
                    <div className="text-gray-600">Response time</div>
                  </div>
                  <div>
                    <div className="font-bold text-2xl text-gray-900">10x</div>
                    <div className="text-gray-600">More efficient</div>
                  </div>
                </div>
                <div className="mt-6 text-primary font-semibold flex items-center gap-2">
                  Read case study
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Economic Dashboard Case Study */}
            <Link
              href="/case-studies/economic-dashboard"
              className="group block bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-primary transition-all hover:shadow-xl"
            >
              <div className="aspect-video relative overflow-hidden bg-gray-50">
                <Image
                  src="/images/dashboard-main.png"
                  alt="Economic Intelligence Dashboard interface"
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <div className="text-sm font-semibold text-primary mb-2">REAL ESTATE & INVESTING</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  Economic Intelligence Dashboard
                </h3>
                <p className="text-gray-600 mb-4">
                  Investors were jumping between 5+ websites to track economic data and real estate news. We consolidated everything into one beautiful dashboard with automated newsletter parsing.
                </p>
                <div className="flex items-center gap-6 text-sm">
                  <div>
                    <div className="font-bold text-2xl text-gray-900">39+</div>
                    <div className="text-gray-600">Economic metrics</div>
                  </div>
                  <div>
                    <div className="font-bold text-2xl text-gray-900">80%</div>
                    <div className="text-gray-600">Time saved</div>
                  </div>
                </div>
                <div className="mt-6 text-primary font-semibold flex items-center gap-2">
                  Read case study
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            How we work
          </h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Discovery call</h3>
                <p className="text-gray-600 text-lg">
                  We start with a conversation about your business. What tasks take up your team's time? Where are the bottlenecks?
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Analysis & proposal</h3>
                <p className="text-gray-600 text-lg">
                  We analyze your workflow and identify automation opportunities. You get a clear proposal with timelines and expected impact.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Build & iterate</h3>
                <p className="text-gray-600 text-lg">
                  We build your custom solution with regular check-ins. You see progress and provide feedback throughout.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                4
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Launch & support</h3>
                <p className="text-gray-600 text-lg">
                  We deploy your solution and train your team. Ongoing support ensures everything runs smoothly as you scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to automate your business?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Let's talk about what's slowing you down and how AI can help. Book a free consultation—no commitments, just conversation.
          </p>
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-lg">
            <form className="space-y-6 max-w-xl mx-auto">
              <div className="text-left">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="text-left">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="you@company.com"
                  required
                />
              </div>

              <div className="text-left">
                <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="Your company"
                  required
                />
              </div>

              <div className="text-left">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  What tasks are you looking to automate?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                  placeholder="Tell us about the repetitive tasks that take up your team's time..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
              >
                Send Message
              </button>

              <p className="text-sm text-gray-500 mt-4">
                We'll get back to you within 24 hours. Usually much sooner.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
