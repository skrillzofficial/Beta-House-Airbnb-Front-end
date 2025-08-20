import React from 'react'
import { MapPin } from "lucide-react";

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-20 px-4 min-h-screen">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Browse Our Properties
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white mb-12 max-w-2xl leading-relaxed">
          Find your perfect home among our curated properties. Start browsing now!
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-4xl backdrop-blur-none bg-white/20  shadow-xl p-6 mb-2">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col bg-white rounded-l-2xl md:rounded-l-2xl md:rounded-r-none rounded-r-2xl md:flex-row px-4 py-3 flex-1">
              {/* Location Input */}
              <div className="flex-1 relative mb-4 md:mb-0">
                <p className="text-[15px] font-medium text-gray-700 mb-2">
                  LOCATION
                </p>
                <input
                  type="text"
                  placeholder="eg. Gbagada"
                  className="w-full text-center py-2 border-0 md:border md:border-t-0 md:border-l-0 md:border-b-0 border-b  focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
                />
              </div>

              {/* Property Type Input */}
              <div className="flex-1 relative mb-4 md:mb-0">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  PROPERTY TYPE
                </p>
                <input
                  type="text"
                  placeholder="eg. Duplex, Bedroom Flat"
                  className="w-full text-center py-2 border-0 md:border md:border-t-0 md:border-l-0 md:border-b-0 border-b  focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
                />
              </div>

              {/* Bedroom Counter */}
              <div className="flex-1 relative">
                <p className="text-sm font-medium text-gray-700 mb-2">BEDROOM</p>
                <div className="flex items-center justify-center py-2 px-4">
                  <button
                    className="w-[25px] h-[25px] flex items-center justify-center border rounded-full text-gray-500 hover:text-yellow-600 hover:bg-gray-50 transition-colors"
                    onClick={() => {
                      const input = document.getElementById("bedroom-count");
                      const current = parseInt(input.value) || 0;
                      if (current > 0) input.value = current - 1;
                    }}
                  >
                    -
                  </button>
                  <input
                    id="bedroom-count"
                    type="number"
                    defaultValue="0"
                    min="0"
                    max="10"
                    className="flex-1 text-center mx-3 focus:outline-none focus:ring-0 max-w-[40px]"
                    readOnly
                  />
                  <button
                    className="w-[25px] h-[25px] flex items-center justify-center text-gray-500 border rounded-full hover:text-yellow-600 hover:bg-gray-50 transition-colors"
                    onClick={() => {
                      const input = document.getElementById("bedroom-count");
                      const current = parseInt(input.value) || 0;
                      if (current < 10) input.value = current + 1;
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            
            {/* Search Button */}
            <div className="mt-4 md:mt-0">
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 cursor-pointer rounded-2xl md:rounded-l-none md:rounded-r-2xl font-medium transition-colors flex items-center justify-center h-full w-full min-h-[80px]">
                <span>Find Property</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero