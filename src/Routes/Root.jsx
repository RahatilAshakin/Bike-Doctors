import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";
import TopBar from "../Components/Navbar/TopBar";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";
import Service from "../Components/Service/Service";
import Contact from "../Components/Contact/Contact";
import About from "../Components/About/About";

const Root = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white min-h-screen">
      {/* Header full width */}
      <header className="w-full">{/* <Header /> */}</header>

      {/* Navbar */}
      <Navbar />

      {/* TopBar */}
      <div className="max-w-7xl mx-auto px-4">
        <TopBar />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        {/* Banner */}
        <div className="bg-black/40 rounded-2xl p-4 shadow-lg">
          <Banner />
        </div>

        {/* Services Section */}
        <div className="bg-black/40 text-gray-900 rounded-2xl shadow-lg p-6">
          <Service />
        </div>

        {/* Contact Section */}
        <div className="bg-black/40 text-gray-900 rounded-2xl shadow-lg p-6">
          <Contact />
        </div>

        {/* About Section */}
        <div className="bg-gray-800 text-white rounded-2xl shadow-lg p-6">
          <About />
        </div>
      </div>

      {/* Footer */}
      <Footer />

      <main className="mt-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
