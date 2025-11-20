import React from 'react';
import { AuthenticatedLayout } from '@/components/layout/AuthenticatedLayout';

export default function UserDashboardPage() {
  return (
    <AuthenticatedLayout>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stats Cards */}
          <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
            <h3 className="text-gray-500 text-sm font-semibold mb-2">Active Bids</h3>
            <p className="text-3xl font-bold text-gray-900">0</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
            <h3 className="text-gray-500 text-sm font-semibold mb-2">Properties Watched</h3>
            <p className="text-3xl font-bold text-gray-900">0</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
            <h3 className="text-gray-500 text-sm font-semibold mb-2">Account Tier</h3>
            <p className="text-3xl font-bold text-blue-600">Tier 1</p>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
