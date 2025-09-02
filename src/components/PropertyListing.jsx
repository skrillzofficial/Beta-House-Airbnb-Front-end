import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Bed,
  Bath,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Filter,
  X,
} from "lucide-react";
import propeye from "../assets/Propeye.png";
import propimage from "../assets/Propimage.png";
import propvid from "../assets/Propvideo.png";
import F2f from "../assets/f2ficon.png";
import shareicon from "../assets/shareicon.png";
import loveicon from "../assets/loveicon.png";

const PropertyListing = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [searchCriteria, setSearchCriteria] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const propertiesPerPage = 9;
  const location = useLocation();

  // Function to fetch properties from backend
  useEffect(() => {
    fetchProperties();
  }, []);

  // Check for search criteria in location state
  useEffect(() => {
    if (location.state && location.state.searchCriteria) {
      handleSearch(location.state.searchCriteria);
    }
  }, [location]);

  const fetchProperties = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://beta-house-airbnb-backend.onrender.com/api/v1/properties/`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("API Response:", data); // Check this in browser console

      // More robust data extraction
      let propertiesData = [];

      if (Array.isArray(data)) {
        propertiesData = data;
      } else if (data.data && Array.isArray(data.data)) {
        propertiesData = data.data;
      } else if (data.properties && Array.isArray(data.properties)) {
        propertiesData = data.properties;
      } else if (data.results && Array.isArray(data.results)) {
        propertiesData = data.results;
      }

      console.log("Extracted properties:", propertiesData);

      setProperties(propertiesData);
      setFilteredProperties(propertiesData);
      setTotalResults(propertiesData.length);
    } catch (error) {
      console.error("Error fetching properties:", error);
      setProperties([]);
      setFilteredProperties([]);
      setTotalResults(0);
    } finally {
      setLoading(false);
    }
  };

  // Handle search functionality
  const handleSearch = async (criteria) => {
    setSearchCriteria(criteria);
    setSearchPerformed(true);
    setCurrentPage(1);
    setError(null);

    try {
      const response = await fetch(
        "https://beta-house-airbnb-backend.onrender.com/api/v1/search",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(criteria),
        }
      );

      if (!response.ok) {
        throw new Error(`Search failed with status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Search response:", data);

      // Use the same extraction logic as fetchProperties
      let searchResults = [];

      if (Array.isArray(data)) {
        searchResults = data;
      } else if (data.data && Array.isArray(data.data)) {
        searchResults = data.data;
      } else if (data.properties && Array.isArray(data.properties)) {
        searchResults = data.properties;
      } else if (data.results && Array.isArray(data.results)) {
        searchResults = data.results;
      }

      console.log("Extracted search results:", searchResults);

      setFilteredProperties(searchResults);
      setTotalResults(searchResults.length);
    } catch (error) {
      console.error("Search error:", error);
      setError("Search failed. Please try again.");
      setFilteredProperties([]);
      setTotalResults(0);
    }
  };

  // Add this useEffect to detect network issues
  useEffect(() => {
    const checkNetwork = async () => {
      try {
        const testResponse = await fetch(
          "https://beta-house-airbnb-backend.onrender.com/api/v1/health"
        );
        if (!testResponse.ok) {
          setError("Backend server is not responding");
        }
      } catch (error) {
        setError("Network error: Cannot connect to backend server");
      }
    };

    if (properties.length === 0 && !loading) {
      checkNetwork();
    }
  }, [properties, loading]);

  useEffect(() => {
    console.log("Properties:", properties);
    console.log("Filtered Properties:", filteredProperties);
    console.log("Total Results:", totalResults);
  }, [properties, filteredProperties, totalResults]);

  // Clear search and show all properties
  const clearSearch = () => {
    setSearchCriteria(null);
    setSearchPerformed(false);
    setFilteredProperties(properties);
    setTotalResults(properties.length);
    setCurrentPage(1);
    // Clear browser history state
    window.history.replaceState({}, document.title);
  };

  // Get current properties for the page
  const getCurrentProperties = () => {
    const startIndex = (currentPage - 1) * propertiesPerPage;
    return filteredProperties.slice(startIndex, startIndex + propertiesPerPage);
  };

  const formatPrice = (price, type) => {
    if (!price) return "Price not available";

    const formattedPrice = new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price);

    return type === "rent" ? `${formattedPrice}/1 Year` : formattedPrice;
  };

  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/400x300?text=Property+Image";
  };

  const PropertyCard = ({ property }) => (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
      {/* Property Image */}
      <div className="relative h-48 bg-gray-200">
        <img
          src={
            property.images?.[0] ||
            "https://via.placeholder.com/400x300?text=Property+Image"
          }
          alt={property.title || "Property"}
          className="w-full h-full object-cover"
          onError={handleImageError}
        />

        {/* Status Badges */}
        <div className="absolute top-3 left-3 right-3 flex justify-between">
          <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
            Featured
          </span>
          <span className="bg-blue-400 text-white text-xs px-2 py-1 rounded">
            For {property.status === "For rent" ? "sale" : "rent"}
          </span>
        </div>

        {/* Action Icons */}
        <div className="absolute bottom-3 right-3 flex gap-2">
          <button className="bg-white/30 bg-opacity-90 p-2 backdrop-blur rounded-lg hover:bg-opacity-100 transition-all">
            <img src={propeye} alt="" className="w-4 h-4" />
          </button>
          <button className="bg-white/30 bg-opacity-90 p-2 hover:bg-opacity-100 rounded-lg backrop-blur transition-all">
            <img src={propimage} alt="" className="w-4 h-4" />
          </button>
          <button className="bg-white/30 bg-opacity-90 p-2 hover:bg-opacity-100 rounded-lg backdrop-blur transition-all">
            <img src={propvid} alt="" className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Property Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {property.title || "No Title Available"}
        </h3>

        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">
            {property.location || "Location not specified"}
          </span>
        </div>

        <div className="flex items-center gap-4 mb-4 text-gray-600">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4" />
            <span className="text-sm">{property.bedrooms || 0} Bedrooms</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4" />
            <span className="text-sm">{property.bathrooms || 0} Bathrooms</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gray-900">
            {formatPrice(property.price, property.type)}
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <img src={F2f} alt="" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <img src={shareicon} alt="" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <img src={loveicon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const Pagination = () => {
    const totalPages = Math.ceil(totalResults / propertiesPerPage);
    if (totalPages <= 1) return null;

    // Page Numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.min(5, totalPages); i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="flex items-center justify-center gap-2 mt-8">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded-lg border ${
              currentPage === page
                ? "bg-green-600 text-white border-green-600"
                : "border-gray-300 hover:bg-gray-50"
            }`}
          >
            {page}
          </button>
        ))}

        {totalPages > 5 && <span className="px-2 py-1">...</span>}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-500 opacity-50">
              <Filter className="w-4 h-4" />
              More Filter
            </div>
            <span className="text-gray-600">Loading results...</span>
          </div>

          <div className="flex items-center gap-2 opacity-50">
            <span className="text-gray-600">Sort by:</span>
            <div className="px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-500">
              Default
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-sm overflow-hidden animate-pulse"
            >
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded mb-3 w-3/4"></div>
                <div className="flex gap-4 mb-4">
                  <div className="h-3 bg-gray-200 rounded w-20"></div>
                  <div className="h-3 bg-gray-200 rounded w-20"></div>
                </div>
                <div className="h-6 bg-gray-200 rounded w-32"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header with search info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <div className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-500 opacity-50">
            <Filter className="w-4 h-4" />
            More Filter
          </div>

          {searchPerformed && searchCriteria ? (
            <div className="flex items-center gap-2">
              <span className="text-gray-600">
                Showing {(currentPage - 1) * propertiesPerPage + 1} -{" "}
                {Math.min(currentPage * propertiesPerPage, totalResults)} of{" "}
                {totalResults} search results
              </span>
              <button
                onClick={clearSearch}
                className="flex items-center gap-1 px-2 py-1 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors"
              >
                <X className="w-4 h-4" />
                Clear search
              </button>
            </div>
          ) : (
            <span className="text-gray-600">
              Showing {(currentPage - 1) * propertiesPerPage + 1} -{" "}
              {Math.min(currentPage * propertiesPerPage, totalResults)} of{" "}
              {totalResults} results
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 opacity-50">
          <span className="text-gray-600">Sort by:</span>
          <div className="px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-500">
            Default
          </div>
        </div>
      </div>

      {/* Display search criteria if search was performed */}
      {searchPerformed && searchCriteria && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h3 className="font-semibold text-green-800 mb-2">Search Filters:</h3>
          <div className="flex flex-wrap gap-4">
            {searchCriteria.location && (
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                Location: {searchCriteria.location}
              </span>
            )}
            {searchCriteria.propertyType && (
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                Type: {searchCriteria.propertyType}
              </span>
            )}
            {searchCriteria.bedrooms && searchCriteria.bedrooms !== "0" && (
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                Bedrooms: {searchCriteria.bedrooms}+
              </span>
            )}
          </div>
        </div>
      )}

      {/* Property Grid */}
      {filteredProperties.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getCurrentProperties().map((property) => (
              <PropertyCard
                key={property.id || property._id}
                property={property}
              />
            ))}
          </div>
          <Pagination />
        </>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            {searchPerformed
              ? "No properties found matching your search criteria."
              : "No properties available."}
          </p>
          {searchPerformed && (
            <button
              onClick={clearSearch}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              View All Properties
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default PropertyListing;
