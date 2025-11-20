import React from 'react';
import { Link } from 'wouter';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">FlipIQ</h3>
            <p className="text-gray-400 text-sm">
              Real Estate Investment Marketplace connecting buyers, sellers, and licensed professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about-us">
                  <a className="text-gray-400 hover:text-white transition-colors">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/our-leadership">
                  <a className="text-gray-400 hover:text-white transition-colors">Leadership</a>
                </Link>
              </li>
              <li>
                <Link href="/tools">
                  <a className="text-gray-400 hover:text-white transition-colors">Tools for Pros</a>
                </Link>
              </li>
              <li>
                <Link href="/help">
                  <a className="text-gray-400 hover:text-white transition-colors">Help Center</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/info/seller">
                  <a className="text-gray-400 hover:text-white transition-colors">For Sellers</a>
                </Link>
              </li>
              <li>
                <Link href="/info/wholesaler">
                  <a className="text-gray-400 hover:text-white transition-colors">For Wholesalers</a>
                </Link>
              </li>
              <li>
                <Link href="/info/agent">
                  <a className="text-gray-400 hover:text-white transition-colors">For Agents</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy">
                  <a className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <a className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} FlipIQ Marketplace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
