import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Navigation } from "./Navigation";
import { useRoute } from "wouter";

interface RootLayoutProps {
  children: React.ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
  // Simple logic to determine if we should show the sidebar navigation
  // In a real app this might be more robust based on auth state or specific routes
  const [isUserRoute] = useRoute("/user/*");
  const [isAdminRoute] = useRoute("/admin/*");
  const [isOperatorRoute] = useRoute("/operator/*");
  
  const showSidebar = isUserRoute || isAdminRoute || isOperatorRoute;

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900">
      <Header />
      <div className="flex flex-1">
        {showSidebar && <Navigation />}
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
