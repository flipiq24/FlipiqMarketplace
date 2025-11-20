import React from 'react';
import { Link } from 'wouter';
import { PublicLayout } from '@/components/layout/PublicLayout';

export default function HomePage() {
  return (
    <PublicLayout>
      <div className="min-h-[60vh] flex items-center justify-center bg-white">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Find Your Next Real Estate Investment
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Connect with verified buyers, sellers, and licensed professionals
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/user/buy-property">
              <a className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Find Deals
              </a>
            </Link>
            <Link href="/user/list-property">
              <a className="bg-gray-200 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium">
                List Property
              </a>
            </Link>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
