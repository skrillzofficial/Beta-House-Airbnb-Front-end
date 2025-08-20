import React, { useState } from "react";
import { Menu, X, Search, MapPin } from "lucide-react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="container mx-auto w-11/12">
        {/* BetaHouse Navbar */}
        <div className="flex justify-between items-center h-16">
          {/* Logo and brand name to the left */}
          <div className="flex items-center space-x-2">
            <div className="bg-green-400 w-10 h-10 rounded-full flex items-center justify-center">
              <p className="text-white font-bold">BH</p>
            </div>
            <p className="text-xl font-bold text-white">BetaHouse</p>
          </div>

          {/* Navlinks should be center placed */}
          <div className="hidden lg:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <span className="text-white hover:underline pb-2 font-medium cursor-pointer transition-all underline-offset-4">
              Home
            </span>
            <span className="text-white hover:underline font-medium cursor-pointer transition-all underline-offset-4">
              Properties
            </span>
            <span className="text-white hover:underline font-medium cursor-pointer transition-all underline-offset-4">
              About Us
            </span>
            <span className="text-white hover:underline font-medium cursor-pointer transition-all underline-offset-4">
              Blog
            </span>
            <span className="text-white hover:underline font-medium cursor-pointer transition-all underline-offset-4">
              Contact Us
            </span>
          </div>

          {/* Sign in and login button to the right */}
          <div className="hidden md:flex items-center space-x-4">
             <button className="px-4 py-1 text-white font-medium border-2 rounded-md cursor-pointer transition-colors">
              Sign Up
            </button>
            <button className="px-4 py-1 bg-green-400 text-white rounded-md hover:bg-green-600 transition-colors cursor-pointer font-medium">
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
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
              <span className="text-gray-600 hover:underline font-medium cursor-pointer py-2 underline-offset-4">
                Home
              </span>
              <span className="text-gray-600 hover:underline font-medium cursor-pointer py-2 underline-offset-4">
                Properties
              </span>
              <span className="text-gray-600 hover:underline font-medium cursor-pointer py-2 underline-offset-4">
                About Us
              </span>
              <span className="text-gray-600 hover:underline font-medium cursor-pointer py-2 underline-offset-4">
                Blog
              </span>
              <span className="text-gray-600 hover:underline font-medium cursor-pointer py-2 underline-offset-4">
                Contact Us
              </span>
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
                <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-medium">
                  Sign Up
                </button>
                <button className="px-4 py-2 text-gray-600 hover:text-green-600 font-medium text-left">
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;