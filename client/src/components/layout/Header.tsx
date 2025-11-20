import React from 'react';
import { Link } from 'wouter';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">
                FlipIQ
              </div>
            </a>
          </Link>

          {/* Main Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/">
              <a className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            </Link>
            <Link href="/info/seller">
              <a className="text-gray-700 hover:text-blue-600 transition-colors">Sellers</a>
            </Link>
            <Link href="/info/wholesaler">
              <a className="text-gray-700 hover:text-blue-600 transition-colors">Wholesalers</a>
            </Link>
            <Link href="/info/agent">
              <a className="text-gray-700 hover:text-blue-600 transition-colors">Agents</a>
            </Link>
            <Link href="/about-us">
              <a className="text-gray-700 hover:text-blue-600 transition-colors">About Us</a>
            </Link>
            <Link href="/our-leadership">
              <a className="text-gray-700 hover:text-blue-600 transition-colors">Leadership</a>
            </Link>
            <Link href="/tools">
              <a className="text-gray-700 hover:text-blue-600 transition-colors">Tools</a>
            </Link>
          </nav>

          {/* Support Phone & Login */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block text-sm text-gray-600">
              <span className="font-semibold">Support:</span> (888) 555-FLIP
            </div>
            <Link href="/login">
              <a className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Login
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
