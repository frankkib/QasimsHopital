import React from "react";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import Footer from "./Footer";
import hospitalImage1 from "../assets/HosLab.jpeg";
import hospitalImage2 from "../assets/maternity.jpg";
import hospitalImage3 from "../assets/ward.jpeg";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-white">
      <div className="relative p-8 max-w-7xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Back
        </button>
        <h2 className="text-center text-4xl font-extrabold text-white mb-8 font-serif">
          About Us
        </h2>
        <p className="text-white text-xl mb-8 font-sans font-bold">
          Qasims Hospital is dedicated to providing top-notch medical services
          with a team of experienced professionals. Our mission is to deliver
          compassionate care tailored to the individual needs of each patient.
          We are committed to ensuring that every aspect of your experience is
          positive and supportive. Our state-of-the-art facilities are equipped
          with the latest technology, enabling us to offer the best possible
          care. We understand that your health and well-being are paramount, and
          we strive to create an environment where you feel safe and valued. At
          Qasims Hospital, your health is our priority, and we are here to
          support you every step of the way.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="text-center">
            <h1 className="text-2xl font-extrabold mb-4 text-white font-serif">
              Laboratory Services
            </h1>
            <img
              src={hospitalImage1}
              alt="Laboratory Services"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-white text-xl font-sans font-bold">
              Our state-of-the-art laboratory is equipped with the latest
              technology to provide accurate and timely diagnostic services. Our
              experienced staff ensures that you receive the best care possible.
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-extrabold mb-4 text-white font-serif">
              Maternity Services
            </h1>
            <img
              src={hospitalImage2}
              alt="Maternity Services"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-white text-xl font-sans font-bold">
              Our maternity services offer comprehensive care for expectant
              mothers, including prenatal, delivery, and postnatal care. Our
              team of specialists is dedicated to ensuring a safe and
              comfortable experience.
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-extrabold mb-4 text-white font-serif">
              Our Wards
            </h1>
            <img
              src={hospitalImage3}
              alt="Home Care Services"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-white text-xl font-sans font-bold">
              Our wards are spacious and we provide personalized medical
              care in the wards. Our skilled professionals are committed to
              delivering high-quality care tailored to your individual needs.
            </p>
          </div>
        </div>
        <h3 className="text-center text-3xl font-extrabold text-white mb-6 font-serif">
          Our Location
        </h3>
        <div className="flex items-start space-x-2">
          <FaMapMarkerAlt className="text-red-500 h-6 w-6" />
          <div className="text-left space-y-2 text-white font-sans font-bold">
            <p>Located at Magena opp Magena Police Station.</p>
            <p>Po Box 3806-40200.</p>
            <p>Tel: 0707289342.</p>
            <p>Kisii, Kenya.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;