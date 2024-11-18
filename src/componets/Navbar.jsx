import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaCaretDown,
} from "react-icons/fa";
import reactLogo from "../assets/logo.jpg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const closeDropdowns = () => {
    setIsAboutDropdownOpen(false);
    setIsServicesDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        closeDropdowns();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="p-4 flex flex-col md:flex-row justify-between items-center bg-white text-gray-800 shadow-lg rounded-b-lg border border-amber-500" style={{ borderImage: 'linear-gradient(to right, #3b82f6, #60a5fa) 1' }}>
      <div className="flex items-center justify-between w-full md:w-auto">
        <img
          src={reactLogo}
          alt="React Logo"
          className="h-16 w-16 rounded-full"
        />
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes className="h-6 w-6 text-gray-800" />
          ) : (
            <FaBars className="h-6 w-6 text-gray-800" />
          )}
        </button>
      </div>
      <ul
        className={`flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 ${
          isOpen ? "block" : "hidden"
        } md:flex w-full md:w-auto font-black`}
      >
        <li className="flex items-center space-x-2">
          <FaHome className="hover:text-green-500 h-6 w-6 transition-transform duration-300 hover:scale-110 text-blue-600 md:text-green-600" />
          <Link
            to="/"
            className="hover:text-green-500 transition-colors duration-300 font-sans text-blue-600 md:text-green-600"
          >
            Home
          </Link>
        </li>
        <li className="relative flex items-center space-x-2 dropdown">
          <FaInfoCircle className="hover:text-green-500 h-6 w-6 transition-transform duration-300 hover:scale-110 text-blue-600 md:text-green-600" />
          <button
            onClick={toggleAboutDropdown}
            className="hover:text-green-500 flex items-center transition-colors duration-300 font-sans text-blue-600 md:text-green-600"
          >
            About <FaCaretDown className="ml-1" />
          </button>
          {isAboutDropdownOpen && (
            <ul className="absolute top-full left-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg">
              <li className="px-4 py-2 hover:bg-green-100 transition-colors duration-300 rounded-lg">
                <Link to="/about" className="block">
                  About Us
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-green-100 transition-colors duration-300 rounded-lg">
                <Link to="/management" className="block">
                  Management
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="relative flex items-center space-x-2 dropdown">
          <FaServicestack className="hover:text-green-500 h-6 w-6 transition-transform duration-300 hover:scale-110 text-blue-600 md:text-green-600" />
          <button
            onClick={toggleServicesDropdown}
            className="hover:text-green-500 flex items-center transition-colors duration-300 font-sans text-blue-600 md:text-green-600"
          >
            Services <FaCaretDown className="ml-1" />
          </button>
          {isServicesDropdownOpen && (
            <ul className="absolute top-full left-0 mt-2 w-64 bg-white text-gray-800 rounded-lg shadow-lg">
              <li className="px-4 py-2 hover:bg-green-100 transition-colors duration-300 rounded-lg">
                <Link to="/services" className="block">
                  General Consultations
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-green-100 transition-colors duration-300 rounded-lg">
                <Link to="/services" className="block">
                  Well-Baby Clinics
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-green-100 transition-colors duration-300 rounded-lg">
                <Link to="/services" className="block">
                  Pediatrics
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-green-100 transition-colors duration-300 rounded-lg">
                <Link to="/services" className="block">
                  Obstetrics & Gynecology
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-green-100 transition-colors duration-300 rounded-lg">
                <Link to="/services" className="block">
                  General Surgery
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-green-100 transition-colors duration-300 rounded-lg">
                <Link to="/services" className="block">
                  Orthopedics & Trauma Surgery
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-green-100 transition-colors duration-300 rounded-lg">
                <Link to="/services" className="block">
                  Maternity
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-green-100 transition-colors duration-300 rounded-lg">
                <Link to="/services" className="block">
                  Antenatal & Post-Natal
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-green-100 transition-colors duration-300 rounded-lg">
                <Link to="/services" className="block">
                  Family Planning
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-green-100 transition-colors duration-300 rounded-lg">
                <Link to="/services" className="block">
                  ENT Surgery
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-green-100 transition-colors duration-300 rounded-lg">
                <Link to="/services" className="block">
                  Internal Medicine/Physicians
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-green-100 transition-colors duration-300 rounded-lg">
                <Link to="/services" className="block">
                  Laboratory Services
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-green-100 transition-colors duration-300 rounded-lg">
                <Link to="/services" className="block">
                  Pharmacy Services
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-green-100 transition-colors duration-300 rounded-lg">
                <Link to="/services" className="block">
                  Theatre (Major & Minor Surgeries)
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-green-100 transition-colors duration-300 rounded-lg">
                <Link to="/services" className="block">
                  Nutrition Clinics
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-green-100 transition-colors duration-300 rounded-lg">
                <Link to="/services" className="block">
                  Physiotherapy
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-green-100 transition-colors duration-300 rounded-lg">
                <Link to="/services" className="block">
                  GBV & HIV Management & Support
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="flex items-center space-x-2">
          <FaEnvelope className="hover:text-green-500 h-6 w-6 transition-transform duration-300 hover:scale-110 text-blue-600 md:text-green-600" />
          <Link
            to="/contact"
            className="hover:text-green-500 transition-colors duration-300 font-sans text-blue-600 md:text-green-600"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;