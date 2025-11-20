import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Navigation } from './Navigation';

interface AuthenticatedLayoutProps {
  children: React.ReactNode;
}

export function AuthenticatedLayout({ children }: AuthenticatedLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow">
        <Navigation />
        <main className="flex-grow bg-gray-50 p-6 overflow-auto">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
