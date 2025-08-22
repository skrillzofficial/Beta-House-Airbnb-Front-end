import React, { useState, useEffect } from "react";
import {
  Bed,
  Bath,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Filter,
} from "lucide-react";
import propeye from "../assets/Propeye.png";
import propimage from "../assets/Propimage.png";
import propvid from "../assets/Propvideo.png";
import F2f from "../assets/f2ficon.png";
import shareicon from "../assets/shareicon.png";
import loveicon from "../assets/loveicon.png";

const PropertyListing = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [favoriteProperties, setFavoriteProperties] = useState(new Set());
  const propertiesPerPage = 9;

  // Function to fetch properties from backend
  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://beta-house-airbnb-backend.onrender.com/api/v1/properties/`
      );
      const data = await response.json();
      const propertiesData = data.data || data.properties || data || [];
      setProperties(propertiesData);
      setTotalResults(propertiesData.length);
    } catch (error) {
      console.error("Error fetching properties:", error);
      // Set empty state on error
      setProperties([]);
      setTotalResults(0);
    } finally {
      setLoading(false);
    }
  };

  // Get current properties for the page
  const getCurrentProperties = () => {
    const startIndex = (currentPage - 1) * propertiesPerPage;
    return properties.slice(startIndex, startIndex + propertiesPerPage);
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

  const toggleFavorite = (propertyId) => {
    const newFavorites = new Set(favoriteProperties);
    if (newFavorites.has(propertyId)) {
      newFavorites.delete(propertyId);
    } else {
      newFavorites.add(propertyId);
    }
    setFavoriteProperties(newFavorites);
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
            <button
              className={`p-2 rounded-full hover:bg-gray-100 transition-colors ${
                favoriteProperties.has(property.id) ? "text-red-500" : ""
              }`}
              onClick={() => toggleFavorite(property.id)}
            >
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
      <div className="container mx-auto  px-4 py-8">
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
      {/* Header*/}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <div className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-500 opacity-50">
            <Filter className="w-4 h-4" />
            More Filter
          </div>
          <span className="text-gray-600">
            Showing {(currentPage - 1) * propertiesPerPage + 1} -{" "}
            {Math.min(currentPage * propertiesPerPage, totalResults)} of{" "}
            {totalResults} results
          </span>
        </div>

        <div className="flex items-center gap-2 opacity-50">
          <span className="text-gray-600">Sort by:</span>
          <div className="px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-500">
            Default
          </div>
        </div>
      </div>

      {/* Property Grid */}
      {properties.length > 0 ? (
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
          <p className="text-gray-500 text-lg">No properties found.</p>
        </div>
      )}
    </div>
  );
};

export default PropertyListing;
