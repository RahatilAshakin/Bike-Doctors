import React from "react";
import {
  FaTools,
  FaWrench,
  FaSearch,
  FaCarBattery,
  FaMotorcycle,
  FaLifeRing,
  FaTruck,
  FaCogs,
  FaOilCan,
  FaSprayCan,
  FaTachometerAlt,
  FaBolt,
} from "react-icons/fa";

const services = [
  { id: 1, name: "Periodic Services", offer: "5% - 20% OFF", icon: <FaCogs size={28} /> },
  { id: 2, name: "Repair Work", offer: "Offers Available", icon: <FaWrench size={28} /> },
  { id: 3, name: "Inspection & Diagnostics", offer: "Free Checkup", icon: <FaSearch size={28} /> },
  { id: 4, name: "Battery & Tyres", offer: "Offers Available", icon: <FaCarBattery size={28} /> },
  { id: 5, name: "Bike Care & Cleaning", offer: "Max Offers", icon: <FaSprayCan size={28} /> },
  { id: 6, name: "Roadside Assistance", offer: "24/7 Support", icon: <FaLifeRing size={28} /> },
  { id: 7, name: "Engine Tune-Up", offer: "Special Discounts", icon: <FaMotorcycle size={28} /> },
  { id: 8, name: "Brake & Clutch Service", offer: "Offers Available", icon: <FaTools size={28} /> },
  { id: 9, name: "Oil Change & Lubrication", offer: "5% OFF", icon: <FaOilCan size={28} /> },
  { id: 10, name: "Speedometer & Electronics", offer: "Free Diagnostics", icon: <FaTachometerAlt size={28} /> },
  { id: 11, name: "Electrical Repair", offer: "Quick Service", icon: <FaBolt size={28} /> },
  { id: 12, name: "Premium Custom Services", offer: "Call for Offers", icon: <FaTruck size={28} /> },
];

const Service = () => {
  return (
    <div id="services" className="container mx-auto my-12 px-4 py-12 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 rounded-3xl shadow-xl">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        Our <span className="text-red-500">Services</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-gray-800 bg-opacity-70 rounded-2xl p-6 flex flex-col items-center text-center transform transition duration-300 hover:-translate-y-3 hover:shadow-2xl hover:bg-gray-900"
          >
            {/* Icon inside a gradient circle */}
            <div className="bg-gradient-to-tr from-red-500 to-yellow-400 p-5 rounded-full mb-4 shadow-lg text-white flex items-center justify-center">
              {service.icon}
            </div>

            {/* Service Name */}
            <h3 className="font-semibold text-xl text-white mb-2">{service.name}</h3>

            {/* Offer */}
            <p className="text-gray-300 text-sm mb-4">{service.offer}</p>

            {/* Call to action */}
            <button className="mt-auto px-6 py-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition font-semibold">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
