import React from 'react';
import { Search } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Find Your Perfect Home
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Discover premium rental properties in the most desirable locations
          </p>
          
          <div className="max-w-3xl mx-auto bg-white rounded-lg p-2 flex items-center">
            <input
              type="text"
              placeholder="Search by location..."
              className="flex-1 px-4 py-2 focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md flex items-center">
              <Search className="h-5 w-5 mr-2" />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}