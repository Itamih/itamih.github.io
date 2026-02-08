import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <h3 className="text-xl font-heading text-gray-900 mb-2">Itamih</h3>
            <p className="text-gray-400 text-sm max-w-xs">
              AI automation for businesses that have better things to do.
            </p>
          </div>

          <div className="flex gap-12 text-sm">
            <div className="space-y-2">
              <Link href="/#work" className="block text-gray-400 hover:text-gray-900 transition-colors">Work</Link>
              <Link href="/#approach" className="block text-gray-400 hover:text-gray-900 transition-colors">Approach</Link>
              <Link href="/#contact" className="block text-gray-400 hover:text-gray-900 transition-colors">Contact</Link>
            </div>
            <div className="space-y-2">
              <Link href="/case-studies/hannah" className="block text-gray-400 hover:text-gray-900 transition-colors">Hannah AI</Link>
              <Link href="/case-studies/economic-dashboard" className="block text-gray-400 hover:text-gray-900 transition-colors">Economic Dashboard</Link>
              <Link href="/case-studies/fundlens" className="block text-gray-400 hover:text-gray-900 transition-colors">FundLens</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} Itamih
          </p>
        </div>
      </div>
    </footer>
  );
}
