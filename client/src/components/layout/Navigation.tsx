import React from "react";
import { Link } from "wouter";

export function Navigation() {
  return (
    <nav className="w-64 bg-gray-50 border-r border-gray-200 min-h-screen p-4 hidden md:block">
      <div className="space-y-6">
        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">User</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/user/dashboard" className="block text-sm text-gray-700 hover:text-blue-600">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/user/profile" className="block text-sm text-gray-700 hover:text-blue-600">
                Profile
              </Link>
            </li>
            <li>
              <Link href="/user/inbox" className="block text-sm text-gray-700 hover:text-blue-600">
                Inbox
              </Link>
            </li>
             <li>
              <Link href="/user/my-listings" className="block text-sm text-gray-700 hover:text-blue-600">
                My Listings
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Admin</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/admin/dashboard" className="block text-sm text-gray-700 hover:text-blue-600">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/admin/users" className="block text-sm text-gray-700 hover:text-blue-600">
                Users
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
