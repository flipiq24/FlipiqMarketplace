import React from "react";
import { useRoute } from "wouter";

export default function LenderCertifyPage() {
  const [match, params] = useRoute("/lender/certify/:token");
  const token = params?.token || "unknown";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Lender Certify
        </h1>
        <p className="text-gray-600">
          Route: /lender/certify/{token}
        </p>
        <p className="text-sm text-gray-400 mt-2">
          ✅ Route configured and working
        </p>
      </div>
    </div>
  );
}
