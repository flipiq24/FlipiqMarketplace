import React from "react";
import { Link } from "wouter";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center px-6">
      <div className="flex-1 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-600">
          FlipIQ Marketplace
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
