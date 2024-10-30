import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="p-8 max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-gray-700">Message</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <FaPhone className="text-blue-500 h-6 w-6" />
                <span className="text-gray-700 block">0707289342</span>
              </div>
              <div className="flex items-start space-x-2">
                <FaEnvelope className="text-blue-500 h-6 w-6" />
                <span className="text-gray-700 block">qasimshospital@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <FaMapMarkerAlt className="text-red-500 h-6 w-6" />
                <div className="text-gray-700 text-left">
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