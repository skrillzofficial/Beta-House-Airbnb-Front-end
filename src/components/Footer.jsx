import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-900 py-16">
      <div className="container mx-auto w-11/12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
          {/* Logo and Brand Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">BH</span>
              </div>
              <span className="text-white text-xl font-bold">BetaHouse</span>
            </div>
            <p className="text-white text-sm leading-relaxed mb-6">
              Discover, rent, and find your ideal home hassle-free with
              BetaHouse. Take control of your rental journey today!
            </p>

            {/* Contact Information */}
            <div className="flex flex-col items-center md:items-start gap-3 w-full">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-white flex-shrink-0" />
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
                <span className="text-white text-sm">
                  support@rentbetahouse.com
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 text-center lg:text-left">
            {/* Quick Links Column */}
            <div className="min-w-[140px]">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Quick Links
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href="#"
                  className="text-white hover:text-green-500 transition-colors duration-200 text-sm"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-white hover:text-green-500 transition-colors duration-200 text-sm"
                >
                  Properties
                </a>
                <a
                  href="#"
                  className="text-white hover:text-green-500 transition-colors duration-200 text-sm"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="text-white hover:text-green-500 transition-colors duration-200 text-sm"
                >
                  Contact Us
                </a>
                <a
                  href="#"
                  className="text-white hover:text-green-500 transition-colors duration-200 text-sm"
                >
                  Blog
                </a>
              </div>
            </div>

            {/* More Column */}
            <div className="min-w-[140px]">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                More
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href="#"
                  className="text-white hover:text-green-500 transition-colors duration-200 text-sm"
                >
                  Agent
                </a>
                <a
                  href="#"
                  className="text-white hover:text-green-500 transition-colors duration-200 text-sm"
                >
                  Affordable Houses
                </a>
                <a
                  href="#"
                  className="text-white hover:text-green-500 transition-colors duration-200 text-sm"
                >
                  FAQ'S
                </a>
              </div>
            </div>
          </div>

          {/* Popular Search */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-sm">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Popular Search
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-white hover:text-green-500 transition-colors duration-200 text-sm"
              >
                Apartment for sale
              </a>
              <a
                href="#"
                className="text-white hover:text-green-500 transition-colors duration-200 text-sm"
              >
                Apartment for rent
              </a>
              <a
                href="#"
                className="text-white hover:text-green-500 transition-colors duration-200 text-sm"
              >
                3 bedroom flat
              </a>
              <a
                href="#"
                className="text-white hover:text-green-500 transition-colors duration-200 text-sm"
              >
                Bungalow
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-white">
              <p>Copyright 2023 Betahouse | Designed by Michael.fig</p>
            </div>

            <div className="text-sm text-white flex items-center gap-4">
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
