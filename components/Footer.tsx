import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Itamih</h3>
            <p className="text-gray-600 max-w-md">
              We help businesses discover and automate repetitive tasks using AI.
              Transform your operations with custom automation solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#work" className="text-gray-600 hover:text-primary transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/#approach" className="text-gray-600 hover:text-primary transition-colors">
                  Approach
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-600 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Case Studies */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Case Studies</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/case-studies/hannah" className="text-gray-600 hover:text-primary transition-colors">
                  Hannah AI Chatbot
                </Link>
              </li>
              <li>
                <Link href="/case-studies/economic-dashboard" className="text-gray-600 hover:text-primary transition-colors">
                  Economic Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            &copy; {new Date().getFullYear()} Itamih. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
