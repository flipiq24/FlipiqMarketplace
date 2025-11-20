import React from 'react';
import { AuthenticatedLayout } from '@/components/layout/AuthenticatedLayout';
import { useRoute } from "wouter";

export default function OfferDetailPage() {
  const [match, params] = useRoute("/user/offer-details/:id");
  const id = params?.id || "unknown";

  return (
    <AuthenticatedLayout>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Offer Detail (Seller View)
          </h1>
          <p className="text-gray-600">
            Route: /user/offer-details/{id}
          </p>
          <p className="text-sm text-gray-400 mt-2">
            ✅ Route configured and working
          </p>
          <p className="text-xs text-blue-500 mt-4">
            Feature: Show star rating, buyer info, offer terms
          </p>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
