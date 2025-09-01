import React from "react";
import {
  FaTools,
  FaWrench,
  FaSearch,
  FaCarBattery,
  FaMotorcycle,
  FaLifeRing,
  FaCogs,
  FaOilCan,
  FaBolt,
  FaLightbulb,
  FaLaptop,
  FaTruck,
} from "react-icons/fa";
import { GiSolarPower, GiSpray } from "react-icons/gi";

const services = [
  // ================== Bike Services ==================
  {
    id: 1,
    category: "Bike",
    name: "Periodic Maintenance",
    offer: "Routine checkups & oil change",
    icon: <FaMotorcycle size={28} />,
  },
  {
    id: 2,
    category: "Bike",
    name: "Battery & Electrical Systems",
    offer: "Wiring & battery repair",
    icon: <FaCarBattery size={28} />,
  },
  {
    id: 3,
    category: "Bike",
    name: "Diagnostics & Inspections",
    offer: "Full bike checkups",
    icon: <FaSearch size={28} />,
  },
  {
    id: 4,
    category: "Bike",
    name: "Roadside Assistance",
    offer: "Emergency support",
    icon: <FaLifeRing size={28} />,
  },
  {
    id: 5,
    category: "Bike",
    name: "Bike Cleaning & Detailing",
    offer: "Shine & cosmetic care",
    icon: <GiSpray size={28} />,
  },

  // ================== Electrical Services ==================
  {
    id: 6,
    category: "Electrical",
    name: "IPS Making & Installation",
    offer: "Custom UPS/IPS for home & office",
    icon: <FaBolt size={28} />,
  },
  {
    id: 7,
    category: "Electrical",
    name: "IPS Servicing & Maintenance",
    offer: "Battery replacement & troubleshooting",
    icon: <FaCogs size={28} />,
  },
  {
    id: 8,
    category: "Electrical",
    name: "Home & Industrial Electrical Work",
    offer: "House wiring & appliance repair",
    icon: <FaLaptop size={28} />,
  },
  {
    id: 9,
    category: "Electrical",
    name: "Electronics Repair",
    offer: "UPS, inverter, small gadgets",
    icon: <FaTools size={28} />,
  },
  {
    id: 10,
    category: "Electrical",
    name: "Generator Installation & Servicing",
    offer: "Setup & maintenance",
    icon: <FaTruck size={28} />,
  },
  {
    id: 11,
    category: "Electrical",
    name: "Inverter & Battery Solutions",
    offer: "Sales, installation & repair",
    icon: <FaBolt size={28} />,
  },
  {
    id: 12,
    category: "Electrical",
    name: "Industrial Electrical Maintenance",
    offer: "Motors, transformers, switchboards",
    icon: <FaCogs size={28} />,
  },
  {
    id: 13,
    category: "Electrical",
    name: "Small Appliance Repair",
    offer: "Fans, heaters, and home electronics",
    icon: <FaTools size={28} />,
  },
  {
    id: 14,
    category: "Electrical",
    name: "Electrical Safety & Compliance Checks",
    offer: "Earthing & load testing",
    icon: <FaBolt size={28} />,
  },
  {
    id: 15,
    category: "Electrical",
    name: "Emergency Electrical Services",
    offer: "Quick response for electrical faults",
    icon: <FaLifeRing size={28} />,
  },

  // ================== Smart Tech / Automation ==================
  {
    id: 16,
    category: "Smart Tech",
    name: "Solar Panel Setup & Maintenance",
    offer: "Home solar systems",
    icon: <GiSolarPower size={28} />,
  },
  {
    id: 17,
    category: "Smart Tech",
    name: "Energy-efficient Lighting",
    offer: "LED & smart lighting solutions",
    icon: <FaLightbulb size={28} />,
  },
  {
    id: 18,
    category: "Smart Tech",
    name: "Smart Home Device Installation",
    offer: "UPS monitoring & automation",
    icon: <FaLaptop size={28} />,
  },
  {
    id: 19,
    category: "Smart Tech",
    name: "Home Automation Packages",
    offer: "Smart switches, IoT solutions",
    icon: <FaLaptop size={28} />,
  },
  {
    id: 20,
    category: "Smart Tech",
    name: "Online Consultation",
    offer: "Electrical & tech guidance",
    icon: <FaSearch size={28} />,
  },
];

const Service = () => {
  const categories = ["Bike", "Electrical", "Smart Tech"];

  return (
    <div
      id="services"
      className="container mx-auto my-12 px-4 py-12 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 rounded-3xl shadow-xl"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        Our <span className="text-red-500">Services</span>
      </h2>

      {categories.map((cat) => (
        <div key={cat} className="mb-10">
          <h3 className="text-2xl font-semibold text-red-500 mb-6">{cat} Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {services
              .filter((s) => s.category === cat)
              .map((service) => (
                <div
                  key={service.id}
                  className="bg-gray-800 bg-opacity-70 rounded-2xl p-6 flex flex-col items-center text-center transform transition duration-300 hover:-translate-y-3 hover:shadow-2xl hover:bg-gray-900"
                >
                  <div className="bg-gradient-to-tr from-red-500 to-yellow-400 p-5 rounded-full mb-4 shadow-lg text-white flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h4 className="font-semibold text-xl text-white mb-2">{service.name}</h4>
                  <p className="text-gray-300 text-sm mb-4">{service.offer}</p>
                  <button className="mt-auto px-6 py-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition font-semibold">
                    Learn More
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Service;
