import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // close mobile menu after click
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-black shadow-lg sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 w-full text-white space-x-6">
          {/* Logo */}
          <span
            onClick={() => scrollToSection("home")}
            className="text-2xl font-extrabold tracking-wider text-blue-400 hover:text-white cursor-pointer transition duration-300"
          >
            Total Tech Care
          </span>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex items-center space-x-4">
            <span
              onClick={() => scrollToSection("home")}
              className="hover:bg-blue-600 px-3 py-1 rounded-md transition duration-300 cursor-pointer font-medium"
            >
              HOME
            </span>
            <span
              onClick={() => scrollToSection("services")}
              className="hover:bg-blue-600 px-3 py-1 rounded-md transition duration-300 cursor-pointer font-medium"
            >
              SERVICES & PACKAGES
            </span>
            <span
              onClick={() => scrollToSection("gallery")}
              className="hover:bg-blue-600 px-3 py-1 rounded-md transition duration-300 cursor-pointer font-medium"
            >
              GALLERY
            </span>
            <span
              onClick={() => scrollToSection("contact")}
              className="hover:bg-blue-600 px-3 py-1 rounded-md transition duration-300 cursor-pointer font-medium"
            >
              CONTACT US
            </span>
            <span
              onClick={() => scrollToSection("about")}
              className="hover:bg-blue-600 px-3 py-1 rounded-md transition duration-300 cursor-pointer font-medium"
            >
              ABOUT US
            </span>
            <span
              onClick={() => scrollToSection("contact")}
              className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-white hover:text-blue-600 hover:shadow-lg transition duration-300 cursor-pointer"
            >
              Book Now
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-gray-900 rounded-b-lg shadow-inner absolute w-full top-16 left-0 z-50">
          <span
            onClick={() => scrollToSection("home")}
            className="block hover:bg-blue-600 px-3 py-1 rounded-md transition cursor-pointer font-medium text-white"
          >
            HOME
          </span>
          <span
            onClick={() => scrollToSection("about")}
            className="block hover:bg-blue-600 px-3 py-1 rounded-md transition cursor-pointer font-medium text-white"
          >
            ABOUT US
          </span>
          <span
            onClick={() => scrollToSection("services")}
            className="block hover:bg-blue-600 px-3 py-1 rounded-md transition cursor-pointer font-medium text-white"
          >
            SERVICES & PACKAGES
          </span>
          <span
            onClick={() => scrollToSection("gallery")}
            className="block hover:bg-blue-600 px-3 py-1 rounded-md transition cursor-pointer font-medium text-white"
          >
            GALLERY
          </span>
          <span
            onClick={() => scrollToSection("contact")}
            className="block hover:bg-blue-600 px-3 py-1 rounded-md transition cursor-pointer font-medium text-white"
          >
            CONTACT US
          </span>
          <span
            onClick={() => scrollToSection("contact")}
            className="block bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-white hover:text-blue-600 text-center transition duration-300 cursor-pointer"
          >
            Book Now
          </span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
