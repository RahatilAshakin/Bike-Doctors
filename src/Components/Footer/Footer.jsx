import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-10 bg-red-600 text-white py-10 relative">
      {/* Social Media Icons */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-red-600 rounded-t-full px-6 py-2 flex space-x-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
            alt="Facebook"
            className="w-5 h-5 invert"
          />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg"
            alt="Twitter"
            className="w-5 h-5 invert"
          />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg"
            alt="YouTube"
            className="w-6 h-6 invert"
          />
        </a>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Logo + Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/logo.png"
            alt="Bike Doctors"
            className="w-20 mb-4"
          />
          <p className="text-sm">© 2025 - Bike Doctors</p>
          <p className="text-sm">All Rights Reserved</p>
        </div>

        {/* About Us */}
        <div>
          <h3 className="font-semibold mb-3">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/company-profile" className="hover:underline">Company Profile</Link></li>
            <li><Link to="/board-of-directors" className="hover:underline">Board of Directors</Link></li>
            <li><Link to="/global-partnership" className="hover:underline">Global Partnership</Link></li>
            <li><Link to="/awards" className="hover:underline">Awards & Accreditation</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/news" className="hover:underline">News & Events</Link></li>
            <li><Link to="/research" className="hover:underline">Research & Development</Link></li>
            <li><Link to="/financials" className="hover:underline">Financials</Link></li>
            <li><Link to="/admin-login" className="hover:underline">Admin Log In</Link></li>
            <li><Link to="/appointments" className="hover:underline">Appointments Login</Link></li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="font-semibold mb-3">Information</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/calendar" className="hover:underline">Financial Calendar</Link></li>
            <li><Link to="/webmail" className="hover:underline">Webmail</Link></li>
            <li><Link to="/career" className="hover:underline">Career</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
