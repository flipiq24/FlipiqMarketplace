import React, { useState } from "react";
import { Link } from "wouter";

export default function FindYourNextDealPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const properties = [
    {
      id: 1,
      price: 385000,
      arv: 550000,
      address: "St. Lucie County, Port St. Lucie, FL, 34983",
      beds: 3,
      baths: 2,
      sqft: 1434,
    },
    {
      id: 2,
      price: 245000,
      arv: 390000,
      address: "Pinellas County, St. Petersburg, FL, 33703",
      beds: 3,
      baths: 1,
      sqft: 1372,
    },
    {
      id: 3,
      price: 10000,
      arv: 130000,
      address: "Fulton County, Canton, IL, 61520",
      beds: 2,
      baths: 1,
      sqft: 960,
    },
    {
      id: 4,
      price: 39000,
      arv: 100000,
      address: "Cuyahoga County, Cleveland, OH, 44108",
      beds: 3,
      baths: 1,
      sqft: 1179,
    },
    {
      id: 5,
      price: 160000,
      arv: 280000,
      address: "Mohave County, Bullhead City, AZ, 86429",
      beds: 2,
      baths: 2,
      sqft: 1248,
    },
    {
      id: 6,
      price: 187000,
      arv: 275000,
      address: "Pasco County, Port Richey, FL, 34668",
      beds: 2,
      baths: 2,
      sqft: 1251,
    },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/">
              <a className="flex items-center">
                <img src="/flipiq-logo-vector.svg" alt="FlipIQ Logo" width={140} height={45} />
              </a>
            </Link>
            <div className="relative max-w-lg w-full">
              <input
                type="text"
                placeholder="State, County and City"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-medium">
              Buy Box
            </button>
            <button className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Post a Deal</span>
            </button>
            <Link href="/login">
              <a className="text-gray-600 hover:text-gray-800 font-medium">
                Log in
              </a>
            </Link>
            <Link href="/onboarding">
              <a className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-lg font-medium">
                Sign up
              </a>
            </Link>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        <div className="flex-1 relative bg-gradient-to-br from-blue-200 via-green-200 to-yellow-200">
          <div className="absolute top-4 left-4 z-10 flex space-x-2">
            <button className="bg-white border border-gray-300 px-4 py-2 rounded-lg font-medium shadow-sm">Map</button>
            <button className="bg-white border border-gray-300 px-4 py-2 rounded-lg font-medium shadow-sm">
              Satellite
            </button>
          </div>

          {/* Property markers with FlipIQ orange branding */}
          <div className="absolute top-1/4 left-1/4 bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold shadow-xl border-4 border-white cursor-pointer">
            249.5K
          </div>
          <div className="absolute top-1/3 left-1/2 bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold shadow-lg border-2 border-white cursor-pointer">
            22
          </div>
          <div className="absolute top-2/5 right-1/3 bg-orange-500 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold shadow-xl border-4 border-white cursor-pointer">
            1141
          </div>
          <div className="absolute bottom-1/3 left-1/3 bg-orange-600 text-white rounded-full w-14 h-14 flex items-center justify-center font-bold shadow-lg border-2 border-white cursor-pointer">
            373
          </div>
        </div>

        <div className="w-[600px] bg-white border-l border-gray-200 flex flex-col shadow-lg">
          <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-white">
            <h1 className="text-2xl font-bold text-gray-900 mb-4 text-center">Find Your Next Deal</h1>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <select className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm">
                <option>Price</option>
                <option>Under $50k</option>
                <option>$50k - $100k</option>
                <option>$100k - $200k</option>
                <option>$200k+</option>
              </select>
              <select className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm">
                <option>Home type</option>
                <option>Single Family</option>
                <option>Condo</option>
                <option>Townhouse</option>
              </select>
              <select className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm">
                <option>Beds / Baths</option>
                <option>1+ Bed</option>
                <option>2+ Beds</option>
                <option>3+ Beds</option>
              </select>
              <select className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm">
                <option>Available</option>
                <option>Just Listed</option>
                <option>Price Reduced</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <button className="flex items-center space-x-2 px-4 py-2 border border-orange-500 text-orange-600 rounded-lg hover:bg-orange-50 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                  />
                </svg>
                <span className="text-sm font-medium">All filters</span>
              </button>
            </div>

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 font-medium">50+ results found</p>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Sort:</span>
                <select className="text-sm text-orange-600 font-medium border-none focus:ring-0 bg-transparent">
                  <option>Latest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <div className="grid grid-cols-2 gap-4">
              {properties.map((property) => (
                <div
                  key={property.id}
                  className="border border-gray-200 rounded-lg hover:shadow-lg transition-shadow cursor-pointer bg-white"
                >
                  <div className="relative">
                    <div className="w-full h-32 bg-gray-200 rounded-t-lg flex items-center justify-center overflow-hidden">
                      {/* Using a simple div placeholder since we can't use Next/Image */}
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                         <span className="text-xs">Property Image</span>
                      </div>
                    </div>
                    <div className="absolute top-2 left-2 bg-orange-600 text-white px-2 py-1 rounded text-xs font-semibold">
                      FOR SALE
                    </div>
                    <div className="absolute top-2 right-2 bg-gray-900 text-white px-2 py-1 rounded text-xs font-medium">
                      Just listed
                    </div>
                  </div>

                  <div className="p-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-900">{formatPrice(property.price)}</span>
                      <button className="text-gray-400 hover:text-orange-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 font-medium">(ARV - {formatPrice(property.arv)})</p>
                    <p className="text-xs text-gray-600 font-medium line-clamp-2">{property.address}</p>
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span>{property.beds} Beds</span>
                      <span>{property.baths} Baths</span>
                      <span>{property.sqft.toLocaleString()} sq.ft</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
