import React from "react";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 mt-auto">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} FlipIQ Marketplace. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
