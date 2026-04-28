"use client";

import Link from "next/link";
import { useState } from "react";
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              Zyphronix
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="ml-10 flex items-center space-x-8">
              <li>
                <Link
                  href="/"
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 relative group"
                >
                  Home
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-linear-to-r from-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/addProduct"
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 relative group"
                >
                  Add Product
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-linear-to-r from-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/viewProduct"
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 relative group"
                >
                  View Product
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-linear-to-r from-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/addProduct/flutter"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 relative group"
                >
                  Flutter
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-purple-600 focus:outline-none transition-colors duration-200"
              aria-label="Toggle menu"
              type="button"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
        >
          <ul className="px-2 pt-2 pb-3 space-y-3">
            <li>
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg font-medium transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/addProduct"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg font-medium transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Add Product
              </Link>
            </li>
            <li>
              <Link
                href="/viewProduct"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg font-medium transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                View Product
              </Link>
            </li>
            <li>
              <Link
                href="/addProduct/flutter"
                className="block px-3 py-2 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium text-center hover:shadow-lg transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Flutter
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
