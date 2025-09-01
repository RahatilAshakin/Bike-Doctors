import React, { useState } from "react";
import { Clock, Phone, Mail, Menu, X } from "lucide-react";

export default function TopBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 w-full">
        {/* Mobile Hamburger (LEFT SIDE) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
    {/* Desktop Contact Info (CENTERED, lg+) */}
      <div className="hidden lg:flex justify-center space-x-8 pb-4">
        <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md hover:bg-white/20 transition-all duration-300 shadow-md hover:shadow-red-500/50 transform hover:scale-105">
          <Clock className="h-5 w-5 text-red-500" />
          <div className="flex flex-col leading-tight text-white">
            <span className="font-semibold">Opening Time</span>
            <span className="text-gray-200">Tue-Sun: 9:30AM - 8:30PM</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md hover:bg-white/20 transition-all duration-300 shadow-md hover:shadow-red-500/50 transform hover:scale-105">
          <Phone className="h-5 w-5 text-red-500" />
          <div className="flex flex-col leading-tight text-white">
            <span className="font-semibold">Phone</span>
            <a
              href="tel:+8801713532324"
              className="text-blue-400 hover:text-blue-500 underline"
            >
              +88017 1353 2324
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md hover:bg-white/20 transition-all duration-300 shadow-md hover:shadow-red-500/50 transform hover:scale-105">
          <Mail className="h-5 w-5 text-red-500" />
          <div className="flex flex-col leading-tight text-white">
            <span className="font-semibold">Email</span>
            <a
              href="mailto:totaltechcare@service.com"
              className="text-blue-400 hover:text-blue-500 underline"
            >
              totaltechcare@service.com
            </a>
          </div>
        </div>
      </div>
        {/* Logo (RIGHT SIDE) */}
        <a
          href="#home"
          className="flex items-center space-x-3 ml-auto hover:scale-110 transition-transform duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7M5 7h.01M19 13h.01M6 10h.01M18 10h.01"
            />
          </svg>
          <div>
            <h1 className="text-xl font-bold text-white">Total Tech Care</h1>
            <p className="text-sm text-gray-300">
              Bike • Electrical • Electronics • Industrial
            </p>
          </div>
        </a>
      </div>

  

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-black/90 text-white px-6 pb-4 space-y-4">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-red-500" />
            <span>Tue-Sun: 9:30AM - 8:30PM</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="h-5 w-5 text-red-500" />
            <a
              href="tel:+8801713532324"
              className="text-blue-400 hover:text-blue-500 underline"
            >
              +88017 1353 2324
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="h-5 w-5 text-red-500" />
            <a
              href="mailto:totaltechcare@service.com"
              className="text-blue-400 hover:text-blue-500 underline"
            >
              totaltechcare@service.com
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
