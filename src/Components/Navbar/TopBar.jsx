import React from "react";
import { Clock, Phone, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden lg:flex w-full bg-gradient-to-r from-gray-900 via-black to-gray-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-row justify-between items-center py-4 px-6">

        {/* Logo */}
        <a href="#home" className="flex items-center space-x-3 hover:scale-110 transition-transform duration-300">
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
            <h1 className="text-xl font-bold text-white">Bike Doctors</h1>
            <p className="text-sm text-gray-300">1 Stop Bike Service Center</p>
          </div>
        </a>

        {/* Contact Info */}
        <div className="flex flex-row items-center space-x-6 text-sm">

          {/* Opening Time */}
          <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md hover:bg-white/20 transition-all duration-300 shadow-md hover:shadow-red-500/50 transform hover:scale-105">
            <Clock className="h-5 w-5 text-red-500" />
            <div className="flex flex-col leading-tight text-white">
              <span className="font-semibold">Opening Time</span>
              <span className="text-gray-200">Tue-Sun: 9:30AM - 8:30PM</span>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md hover:bg-white/20 transition-all duration-300 shadow-md hover:shadow-red-500/50 transform hover:scale-105">
            <Phone className="h-5 w-5 text-red-500" />
            <div className="flex flex-col leading-tight text-white">
              <span className="font-semibold">Phone</span>
              <a href="tel:+8801713532324" className="text-blue-400 hover:text-blue-500 underline">
                +88017 1353 2324
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md hover:bg-white/20 transition-all duration-300 shadow-md hover:shadow-red-500/50 transform hover:scale-105">
            <Mail className="h-5 w-5 text-red-500" />
            <div className="flex flex-col leading-tight text-white">
              <span className="font-semibold">Email</span>
              <a href="mailto:bikedoctors@service.com" className="text-blue-400 hover:text-blue-500 underline">
                bikedoctors@service.com
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
