import React from 'react';
import { AuthenticatedLayout } from '@/components/layout/AuthenticatedLayout';

export default function MyPropertiesPage() {
  return (
    <AuthenticatedLayout>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            My Properties (Seller)
          </h1>
          <p className="text-gray-600">
            Route: /sell
          </p>
          <p className="text-sm text-gray-400 mt-2">
            ✅ Route configured and working
          </p>
          <p className="text-xs text-blue-500 mt-4">
            Status: uploaded, in process, open, pending escrow, close, cancel
          </p>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
