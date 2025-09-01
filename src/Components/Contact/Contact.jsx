import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Replace these with your EmailJS credentials
    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLATE_ID";
    const publicKey = "YOUR_PUBLIC_KEY";

    // Map your form fields to the EmailJS template parameters
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      user_message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Your message has been sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
          setLoading(false);
        },
        (err) => {
          console.error("FAILED...", err);
          alert("Something went wrong. Please try again later.");
          setLoading(false);
        }
      );
  };

  return (
    <div id="contact" className="container mx-auto my-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-300">
        Get in <span className="text-red-600">Touch</span> with <span className="text-red-500">Total Tech Care</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        {/* Left: Contact Info */}
        <div className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-3xl shadow-2xl p-8 flex flex-col gap-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Info</h3>

          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-red-600 mt-1" />
            <div>
              <p className="font-semibold text-gray-700">Address</p>
              <p className="text-gray-600">Beldi Bazar, Near Kanchan Bridge, Rupganj, Narayanganj, Bangladesh</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-red-600 mt-1" />
            <div>
              <p className="font-semibold text-gray-700">Phone</p>
              <a href="tel:+8801713532324" className="text-gray-600 hover:text-red-600 hover:underline">
                +8801713-532324
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaEnvelope className="text-red-600 mt-1" />
            <div>
              <p className="font-semibold text-gray-700">Email</p>
              <a href="mailto:realrahat1234@gmail.com" className="text-gray-600 hover:text-red-600 hover:underline">
                realrahat1234@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-4">
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
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white bg-blue-700 p-3 rounded-full hover:bg-blue-800 transition transform hover:scale-110">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Right: Booking Form */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl shadow-2xl p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Send a Message / Book Now</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <textarea
              name="message"
              placeholder="Your Message / Booking Details"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-600 resize-none h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition font-semibold"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {/* Map */}
      <div className="overflow-hidden rounded-3xl shadow-2xl h-48">
        <iframe
          title="Total Tech Care Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d729.489740630385!2d90.551622!3d23.8680073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755cd5067bd8cf5%3A0x959971cb40dfd56b!2sBeldi%20Bazar!5e0!3m2!1sen!2sbd!4v1693234567890"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="border-0"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
