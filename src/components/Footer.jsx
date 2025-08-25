import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-900 py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">BH</span>
              </div>
              <span className="text-white text-xl font-bold">BetaHouse</span>
            </div>
            <p className="text-white text-sm leading-relaxed mb-6 max-w-xs">
              Discover, rent, and find your ideal home hassle-free with
              BetaHouse. Take control of your rental journey today!
            </p>

            {/* Contact Information */}
            <div className="flex flex-col items-center sm:items-start gap-3 w-full">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <span className="text-white text-sm">
                  95 Tinubu Estate, Lekki, Lagos
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white flex-shrink-0" />
                <span className="text-white text-sm">+234 675 8935 675</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white flex-shrink-0" />
                <span className="text-white text-sm break-all sm:break-normal">
                  support@rentbetahouse.com
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-3">
              <a
                href="#"
                className="text-white disabled hover:text-green-400 transition-colors duration-200 text-sm"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white disabled hover:text-green-400 transition-colors duration-200 text-sm"
              >
                Properties
              </a>
              <a
                href="#"
                className="text-white disabled hover:text-green-400 transition-colors duration-200 text-sm"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-white disabled hover:text-green-400 transition-colors duration-200 text-sm"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="text-white disabled hover:text-green-400 transition-colors duration-200 text-sm"
              >
                Blog
              </a>
            </nav>
          </div>

          {/* More Column */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              More
            </h3>
            <nav className="flex flex-col gap-3">
              <a
                href="#"
                className="text-white disabled hover:text-green-400 transition-colors duration-200 text-sm"
              >
                Agent 
              </a>
              <a
                href="#"
                className="text-white disabled hover:text-green-400 transition-colors duration-200 text-sm"
              >
                Affordable Houses
              </a>
              <a
                href="#"
                className="text-white disabled hover:text-green-400 transition-colors duration-200 text-sm"
              >
                FAQ'S
              </a>
            </nav>
          </div>

          {/* Popular Search */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Popular Search
            </h3>
            <nav className="flex flex-col gap-3">
              <a
                href="#"
                className="text-white disabled hover:text-green-400 transition-colors duration-200 text-sm"
              >
                Apartment for sale
              </a>
              <a
                href="#"
                className="text-white disabled hover:text-green-400 transition-colors duration-200 text-sm"
              >
                Apartment for rent
              </a>
              <a
                href="#"
                className="text-white disabled hover:text-green-400 transition-colors duration-200 text-sm"
              >
                3 bedroom flat
              </a>
              <a
                href="#"
                className="text-white disabled hover:text-green-400 transition-colors duration-200 text-sm"
              >
                Bungalow
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 md:mt-12 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs sm:text-sm text-white/80 text-center sm:text-left">
              <p>Copyright 2023 Betahouse</p>
              <span className="hidden sm:inline">|</span>
              <p>Designed by Michael.fig</p>
            </div>

            <div className="text-xs sm:text-sm text-white/80">
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;