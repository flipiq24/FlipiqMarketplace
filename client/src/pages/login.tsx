import React from 'react';
import { Header } from '@/components/layout/Header';
import { Link } from 'wouter';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Login to FlipIQ
          </h1>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input 
                type="password" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
              />
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Sign In
            </button>
            <div className="text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <Link href="/onboarding">
                <a className="text-blue-600 hover:underline">Sign up</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
