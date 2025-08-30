import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="container mx-auto my-16 px-4 py-12 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 rounded-3xl shadow-xl">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white mb-4">
          About <span className="text-red-500">Us</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          At <span className="font-semibold text-red-500">Bike Doctors</span>, we are passionate bike enthusiasts dedicated to providing <span className="font-semibold">premium services</span> for all types of motorcycles. Our mission is to make every ride <span className="font-semibold text-red-500">safe, smooth, and enjoyable</span>.
        </p>
      </div>

      {/* About Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co/fj0Dw3b/imgi-151-Bike-Repair-2.jpg"
            alt="Bike Service"
            className="rounded-2xl shadow-2xl object-cover w-full max-w-md hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Description + Social Links */}
        <div className="flex flex-col justify-center space-y-6 bg-gray-800 bg-opacity-70 p-6 rounded-2xl shadow-lg">
          <p className="text-gray-300 text-lg">
            Founded by motorcycle lovers, our service center combines <span className="font-semibold text-red-500">expertise</span> with care. From periodic maintenance to <span className="font-semibold text-red-500">emergency roadside assistance</span>, we are committed to keeping your bike in perfect condition. Your <span className="font-semibold">safety</span> and <span className="font-semibold">satisfaction</span> are our top priorities.
          </p>

          {/* Social Media */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-white mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition transform hover:scale-110">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white bg-blue-400 p-3 rounded-full hover:bg-blue-500 transition transform hover:scale-110">
                <FaTwitter />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white bg-red-600 p-3 rounded-full hover:bg-red-700 transition transform hover:scale-110">
                <FaYoutube />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white bg-pink-500 p-3 rounded-full hover:bg-pink-600 transition transform hover:scale-110">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center md:text-left">
            <a
              href="#contact"
              className="inline-block mt-4 px-6 py-3 bg-red-500 text-white font-semibold rounded-full shadow-lg hover:bg-red-600 transition transform hover:scale-105 duration-300"
            >
              Book Your Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
