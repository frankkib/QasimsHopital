import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope, FaBars, FaTimes, FaCaretDown } from 'react-icons/fa';
import reactLogo from '../assets/logo.jpg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isGeneralServicesOpen, setIsGeneralServicesOpen] = useState(false);
  const [isSpecializedServicesOpen, setIsSpecializedServicesOpen] = useState(false);
  const [isSupportServicesOpen, setIsSupportServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const toggleGeneralServices = () => {
    setIsGeneralServicesOpen(!isGeneralServicesOpen);
  };

  const toggleSpecializedServices = () => {
    setIsSpecializedServicesOpen(!isSpecializedServicesOpen);
  };

  const toggleSupportServices = () => {
    setIsSupportServicesOpen(!isSupportServicesOpen);
  };

  const closeDropdowns = () => {
    setIsAboutDropdownOpen(false);
    setIsServicesDropdownOpen(false);
    setIsGeneralServicesOpen(false);
    setIsSpecializedServicesOpen(false);
    setIsSupportServicesOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        closeDropdowns();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center justify-between w-full md:w-auto">
        <img src={reactLogo} alt="React Logo" className="h-24 w-24 rounded-full" />
        <button className="md:hidden bg-blue-700" onClick={toggleMenu}>
          {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
        </button>
      </div>
      <ul className={`flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 ${isOpen ? 'block' : 'hidden'} md:flex w-full md:w-auto`}>
        <li className="flex items-center space-x-2">
          <FaHome className="hover:text-pink-600 h-6 w-6" />
          <Link to="/" className="hover:text-pink-600">Home</Link>
        </li>
        <li className="relative flex items-center space-x-2 dropdown">
          <FaInfoCircle className="hover:text-pink-600 h-6 w-6" />
          <button onClick={toggleAboutDropdown} className="hover:text-pink-600 flex items-center">
            About <FaCaretDown className="ml-1" />
          </button>
          {isAboutDropdownOpen && (
            <ul className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link to="/about" className="block">About Us</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link to="/management" className="block">Management</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="relative flex items-center space-x-2 dropdown">
          <FaServicestack className="hover:text-pink-600 h-6 w-6" />
          <button onClick={toggleServicesDropdown} className="hover:text-pink-600 flex items-center">
            Services <FaCaretDown className="ml-1" />
          </button>
          {isServicesDropdownOpen && (
            <ul className="absolute top-full left-0 mt-2 w-64 bg-white text-black rounded shadow-lg">
              <li className="px-4 py-2 hover:bg-gray-200 font-bold cursor-pointer" onClick={toggleGeneralServices}>
                General Services <FaCaretDown className="ml-1" />
              </li>
              {isGeneralServicesOpen && (
                <ul className="pl-4">
                  <li className="px-4 py-2 hover:bg-gray-200 text-left">
                    <Link to="/services" className="block">General Consultations</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link to="/services" className="block">Well-Baby Clinics</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link to="/services" className="block">Pediatrics</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link to="/services" className="block">Obstetrics & Gynecology</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link to="/services" className="block">General Surgery</Link>
                  </li>
                </ul>
              )}
              <li className="px-4 py-2 hover:bg-gray-200 font-bold cursor-pointer" onClick={toggleSpecializedServices}>
                Specialized Services <FaCaretDown className="ml-1" />
              </li>
              {isSpecializedServicesOpen && (
                <ul className="pl-4">
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link to="/services" className="block">Orthopedics & Trauma Surgery</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link to="/services" className="block">Maternity</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link to="/services" className="block">Antenatal & Post-Natal</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link to="/services" className="block">Family Planning</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link to="/services" className="block">ENT Surgery</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link to="/services" className="block">Internal Medicine/Physicians</Link>
                  </li>
                </ul>
              )}
              <li className="px-4 py-2 hover:bg-gray-200 font-bold cursor-pointer" onClick={toggleSupportServices}>
                Support Services <FaCaretDown className="ml-1" />
              </li>
              {isSupportServicesOpen && (
                <ul className="pl-4">
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link to="/services" className="block">Laboratory Services</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link to="/services" className="block">Pharmacy Services</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link to="/services" className="block">Theatre (Major & Minor Surgeries)</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link to="/services" className="block">Nutrition Clinics</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link to="/services" className="block">Physiotherapy</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link to="" className="block">GBV & HIV Management & Support</Link>
                  </li>
                </ul>
              )}
            </ul>
          )}
        </li>
        <li className="flex items-center space-x-2">
          <FaEnvelope className="hover:text-pink-600 h-6 w-6 " />
          <Link to="/contact" className="hover:text-pink-600">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;