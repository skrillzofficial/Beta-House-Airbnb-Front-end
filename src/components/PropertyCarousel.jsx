import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

// Import images directly (recommended approach)
import Discov1 from '../assets/Discov1.png';
import Discov2 from '../assets/Discov2.png';
import Discov3 from '../assets/Discov3.png';
import Discov4 from '../assets/Discov4.png';


const PropertyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  // property data
  const properties = [
    {
      id: 1,
      title: "Semi Detached Duplex",
      price: "₦1,430,000,000",
      beds: 6,
      baths: 3,
      sqft: 720,
      location: "Victoria Island, Lagos",
      image: Discov1
    },
    {
      id: 2,
      title: "Special Duplex",
      price: "₦670,000,000",
      beds: 6,
      baths: 3,
      sqft: 720,
      location: "Victoria Island, Lagos",
      image: Discov2
    },
    {
      id: 3,
      title: "Split-Level House",
      price: "₦340,000,000",
      beds: 6,
      baths: 3,
      sqft: 720,
      location: "Victoria Island, Lagos",
      image: Discov3
    },
    {
      id: 4,
      title: "Twin Duplex",
      price: "₦290,000,000",
      beds: 6,
      baths: 3,
      sqft: 720,
      location: "Victoria Island, Lagos",
      image: Discov4
    },
    {
      id: 5,
      title: "Modern Villa",
      price: "₦2,100,000,000",
      beds: 8,
      baths: 5,
      sqft: 1200,
      location: "Victoria Island, Lagos",
      image: Discov1
    },
    {
      id: 6,
      title: "Luxury Penthouse",
      price: "₦1,850,000,000",
      beds: 5,
      baths: 4,
      sqft: 950,
      location: "Victoria Island, Lagos",
      image: Discov2
    },
  ];

  // Function to handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(4);
      }
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate maximum index we can scroll to
  const maxIndex = Math.max(0, properties.length - visibleCount);

  // Function to go to previous property
  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? maxIndex : currentIndex - 1);
  };

  // Function to go to next property
  const goToNext = () => {
    setCurrentIndex(currentIndex >= maxIndex ? 0 : currentIndex + 1);
  };

  return (
    <div className="w-11/12 container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Discover Our Popular Properties
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-green-900 rounded-full p-2 shadow-lg"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-green-900 rounded-full p-2 shadow-lg"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Carousel Content */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              width: `${(properties.length / visibleCount) * 100}%`
            }}
          >
            {properties.map((property) => (
              <div 
                key={property.id} 
                className="p-4"
                style={{ width: `${100 / properties.length}%` }}
              >
                <div className="bg-white relative rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-100">
                  {/* Property Image */}
                  <div className="relative h-full overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Property Details */}
                  <div className="p-4 absolute w-full bottom-0 backdrop-blur-0 bg-white/10">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {property.title}
                    </h3>
                    <p className="text-lg font-semibold text-white mb-3">
                      {property.price}
                    </p>

                    {/* Property Features */}
                    <div className="flex justify-between mb-4">
                      <div className="flex items-center p-2 border border-white border-t-0 border-l-0 border-b-0">
                        <span className="text-white">{property.beds} Beds</span>
                      </div>
                      <div className="flex items-center p-2 border border-white border-t-0 border-l-0 border-b-0">
                        <span className="text-white">{property.baths} Baths</span>
                      </div>
                      <div className="flex items-center p-2 ">
                        <span className="text-white">{property.sqft} sqft</span>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center text-white mb-4">
                      <MapPin className="w-5 h-5 mr-1" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCarousel;