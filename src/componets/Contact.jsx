import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="p-8 max-w-7xl mx-auto bg-blue-50 text-gray-900 rounded-lg shadow-lg">
        <h2 className="text-center text-4xl font-extrabold text-blue-800 mb-8">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-3xl font-bold text-blue-800 mb-6">
              Get in Touch
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-900 text-lg font-bold">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-900 text-lg font-bold">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-gray-900 text-lg font-bold">Message</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-800 mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <FaPhone className="text-blue-500 h-6 w-6" />
                <span className="text-gray-900 font-sans font-bold text-lg block">0707289342</span>
              </div>
              <div className="flex items-start space-x-2">
                <FaEnvelope className="text-blue-500 h-6 w-6" />
                <span className="text-gray-900 font-sans font-bold text-lg block">
                  qasimshospital@gmail.com
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <FaMapMarkerAlt className="text-red-500 h-6 w-6" />
                <div className="text-gray-900 font-sans font-bold text-lg text-left">
                  <p>Located at Magena opp Magena Police Station.</p>
                  <p>Po Box 3806-40200.</p>
                  <p>Kisii, Kenya.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;