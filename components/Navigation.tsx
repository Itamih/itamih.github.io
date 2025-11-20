"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">Itamih</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#work" className="text-gray-600 hover:text-gray-900 transition-colors">
              Our Work
            </Link>
            <Link href="/#approach" className="text-gray-600 hover:text-gray-900 transition-colors">
              Approach
            </Link>
            <Link
              href="/#contact"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-6 py-4 space-y-4">
            <Link
              href="/#work"
              className="block text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Our Work
            </Link>
            <Link
              href="/#approach"
              className="block text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Approach
            </Link>
            <Link
              href="/#contact"
              className="block bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
