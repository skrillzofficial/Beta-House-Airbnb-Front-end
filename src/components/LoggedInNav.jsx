import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, User } from "lucide-react";
import { Link } from "react-router-dom";

const LoggedInNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const BACKEND_URL =
    "https://beta-house-airbnb-backend.onrender.com/api/v1/profile";

  // Function to fetch user data from backend
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token =
          localStorage.getItem("authToken") ||
          sessionStorage.getItem("authToken");

        if (!token) {
          setLoading(false);
          return;
        }

        const response = await fetch(BACKEND_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const userData = await response.json();
          console.log(userData)
          setUser(userData);
        } else {
          console.error("Failed to fetch user data:", response.status);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div className="w-full">
        <div className="container mx-auto w-11/12">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-green-400 w-10 h-10 rounded-full flex items-center justify-center">
                <p className="text-white font-bold">BH</p>
              </div>
              <p className="text-xl font-bold text-white">BetaHouse</p>
            </Link>

            {/* Loading space for lloggedin user info */}
            <div className="hidden md:flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-600 animate-pulse"></div>
              <div className="h-4 w-20 bg-gray-600 rounded animate-pulse"></div>
              <ChevronDown size={16} className="text-white" />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button className="text-white">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="container mx-auto w-11/12">
        {/* BetaHouse Navbar */}
        <div className="flex justify-between items-center h-16">
          {/* Logo and brand name */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-green-400 w-10 h-10 rounded-full flex items-center justify-center">
              <p className="text-white font-bold">BH</p>
            </div>
            <p className="text-xl font-bold text-white">BetaHouse</p>
          </Link>

          {/* Navlinks */}
          <div className="hidden lg:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <Link
              to="/"
              className="text-white hover:underline pb-2 font-medium transition-all underline-offset-4"
            >
              Home
            </Link>
            <Link
              to="/properties"
              className="text-white hover:underline font-medium transition-all underline-offset-4"
            >
              Properties
            </Link>
            <Link
              to="/about"
              className="text-white hover:underline font-medium transition-all underline-offset-4"
            >
              About Us
            </Link>
            <Link
              to="/blog"
              className="text-white hover:underline font-medium transition-all underline-offset-4"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-white hover:underline font-medium transition-all underline-offset-4"
            >
              Contact Us
            </Link>
          </div>

          {/* User section */}
          <div className="hidden md:flex items-center space-x-2">
            {user?.avatar || user?.profilePicture ? (
              <img
                src={user.avatar || user.profilePicture}
                alt={"User"}
                className="w-8 h-8 rounded-full object-cover"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                <User size={16} className="text-white" />
              </div>
            )}
            <span className="text-sm text-white">
              {user?.user?.firstName || user?.user?.lastName || "User"}
            </span>
            <ChevronDown size={16} className="text-white" />
          </div>

          {/* Mobile menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-green-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-sm border-t border-gray-200 py-4 rounded-b-lg">
            <div className="flex flex-col space-y-4 px-4">
              <Link
                to="/"
                className="text-gray-600 hover:underline font-medium py-2 underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/properties"
                className="text-gray-600 hover:underline font-medium py-2 underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Properties
              </Link>
              <Link
                to="/about"
                className="text-gray-600 hover:underline font-medium py-2 underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/blog"
                className="text-gray-600 hover:underline font-medium py-2 underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 hover:underline font-medium py-2 underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>

              {/* Mobile user info */}
              <div className="pt-4 border-t border-gray-200 flex items-center space-x-2">
                {user?.avatar || user?.profilePicture ? (
                  <img
                    src={user.avatar || user.profilePicture}
                    alt={user.name || user.username || "User"}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <User size={16} className="text-white" />
                  </div>
                )}
                <span className="text-gray-600 text-sm">
                  {user?.user?.firstName || user?.user?.lastName || "User"}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoggedInNav;
