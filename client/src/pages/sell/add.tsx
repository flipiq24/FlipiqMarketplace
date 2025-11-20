import React from 'react';
import { AuthenticatedLayout } from '@/components/layout/AuthenticatedLayout';

export default function PostPropertyPage() {
  return (
    <AuthenticatedLayout>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Post Property
          </h1>
          <p className="text-gray-600">
            Route: /sell/add
          </p>
          <p className="text-sm text-gray-400 mt-2">
            ✅ Route configured and working
          </p>
          <p className="text-xs text-red-500 mt-4">
            CRITICAL: Follow exact sell property process - do not reinvent
          </p>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
