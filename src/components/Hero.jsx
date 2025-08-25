import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [searchData, setSearchData] = useState({
    location: '',
    propertyType: '',
    bedrooms: '0'
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBedroomChange = (operation) => {
    setSearchData(prev => {
      let newCount = parseInt(prev.bedrooms) || 0;
      
      if (operation === 'increment' && newCount < 10) {
        newCount++;
      } else if (operation === 'decrement' && newCount > 0) {
        newCount--;
      }
      
      return {
        ...prev,
        bedrooms: newCount.toString()
      };
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    
    // Navigate to property listing page with search criteria
    navigate('/property', { 
      state: { 
        searchCriteria: searchData
      } 
    });
  };

  return (
    <div className='w-11/12 container mx-auto'>
      <div className="flex flex-col items-center justify-center text-center py-20 px-4 min-h-screen">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Browse Our Properties
        </h1>
        <p className="text-lg md:text-xl text-white mb-12 max-w-2xl leading-relaxed">
          Find your perfect home among our curated properties. Start browsing now!
        </p>

        {/* Search Form */}
        <div className="w-full max-w-4xl backdrop-blur-none bg-white/20 shadow-xl p-6 mb-2">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row">
            <div className="flex flex-col bg-white rounded-l-2xl md:rounded-l-2xl md:rounded-r-none rounded-r-2xl md:flex-row px-4 py-3 flex-1">
              {/* Location Input */}
              <div className="flex-1 relative mb-4 md:mb-0">
                <p className="text-[15px] font-medium text-gray-700 mb-2">LOCATION</p>
                <input
                  type="text"
                  name="location"
                  placeholder="eg. Gbagada"
                  value={searchData.location}
                  onChange={handleInputChange}
                  className="w-full text-center py-2 border-0 md:border md:border-t-0 md:border-l-0 md:border-b-0 border-b focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
                />
              </div>

              {/* Property Type Input */}
              <div className="flex-1 relative mb-4 md:mb-0">
                <p className="text-sm font-medium text-gray-700 mb-2">PROPERTY TYPE</p>
                <input
                  type="text"
                  name="propertyType"
                  placeholder="eg. Duplex, Apartment"
                  value={searchData.propertyType}
                  onChange={handleInputChange}
                  className="w-full text-center py-2 border-0 md:border md:border-t-0 md:border-l-0 md:border-b-0 border-b focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
                />
              </div>

              {/* Bedroom Counter */}
              <div className="flex-1 relative">
                <p className="text-sm font-medium text-gray-700 mb-2">BEDROOM</p>
                <div className="flex items-center justify-center py-2 px-4">
                  <button
                    type="button"
                    className="w-[25px] h-[25px] flex items-center justify-center border rounded-full text-gray-500 hover:text-yellow-600 hover:bg-gray-50 transition-colors"
                    onClick={() => handleBedroomChange('decrement')}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={searchData.bedrooms}
                    readOnly
                    className="flex-1 text-center mx-3 focus:outline-none focus:ring-0 max-w-[40px] bg-transparent"
                  />
                  <button
                    type="button"
                    className="w-[25px] h-[25px] flex items-center justify-center text-gray-500 border rounded-full hover:text-yellow-600 hover:bg-gray-50 transition-colors"
                    onClick={() => handleBedroomChange('increment')}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            
            {/* Search Button */}
            <div className="mt-4 md:mt-0">
              <button 
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-8 cursor-pointer rounded-2xl md:rounded-l-none md:rounded-r-2xl font-medium transition-colors flex items-center justify-center h-full w-full min-h-[80px]"
              >
                Find Property
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;