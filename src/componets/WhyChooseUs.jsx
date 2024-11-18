import React from "react";
import bodyImage from "../assets/contact.jpeg";
import labTest from "../assets/EntranceAlly.jpeg";

const WhyChooseUs = () => {
  return (
    <div className="mt-10 p-8">
      <h2 className="text-center text-3xl font-bold text-blue-400 mb-6">
        Why Choose Us?
      </h2>
      <div className="flex flex-col md:flex-row items-center mt-10 space-y-4 md:space-y-0 md:space-x-4">
        <img
          src={bodyImage}
          alt="Body"
          className="h-48 w-48 md:h-96 md:w-96 rounded-lg shadow-lg"
        />
        <div className="text-gray-700 text-lg text-center md:text-left md:w-1/2 space-y-8">
          <div className="p-4 bg-blue-100 rounded-lg shadow-lg">
            <h3 className="text-center text-2xl font-bold text-blue-800 mb-2 font-serif">
              Our Vision
            </h3>
            <p className="text-center md:text-left text-blue-700 font-light">
              To provide quality laboratory services that inspires confidence in
              our clients.
            </p>
          </div>
          <div className="p-4 bg-green-100 rounded-lg shadow-lg">
            <h3 className="text-center text-2xl font-bold text-green-800 mb-2 font-serif">
              Our Mission
            </h3>
            <p className="text-center md:text-left text-green-700 font-light">
              Committed to provide quality services.
            </p>
          </div>
        </div>
        <img
          src={labTest}
          alt="Lab Test"
          className="h-48 w-48 md:h-96 md:w-96 rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
