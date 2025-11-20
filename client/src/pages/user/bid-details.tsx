import React from "react";
import { useRoute } from "wouter";

export default function UserBidDetailsPage() {
  const [match, params] = useRoute("/user/bid-details/:id");
  const id = params?.id || "unknown";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Bid Details
        </h1>
        <p className="text-gray-600">
          Route: /user/bid-details/{id}
        </p>
        <p className="text-sm text-gray-400 mt-2">
          ✅ Route configured and working
        </p>
      </div>
    </div>
  );
}
