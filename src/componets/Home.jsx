import React from 'react';
import Navbar from './Navbar';
import WhyChooseUs from './WhyChooseUs';
import Footer from './Footer';
import insuranceImage2 from '../assets/SHA.jpeg';
import insuranceImage3 from '../assets/britam.png';
import insuranceImage4 from '../assets/tredent.jpeg';
import insuranceImage5 from '../assets/Aon.png';
import receptionImage from '../assets/Reception.jpeg'; // Add the reception image
import entranceImage from '../assets/EntranceAlly.jpeg'; // Add the entrance image

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <div className="text-center p-8">
        <h2 className="text-indigo-600 text-4xl font-extrabold font-serif mt-4">
          WELCOME TO QASIMS HOSPITAL
        </h2>
        <p className="text-yellow-300 text-2xl font-serif mt-2">We treat, God heals</p>
      </div>
      <WhyChooseUs />
      <div className="bg-blue-100 p-8 rounded-lg shadow-lg mt-10">
        <h1 className="text-center text-4xl font-bold text-green-400 font-serif">
          Insurance Services Available
        </h1>
        <div className="flex justify-center mt-8 space-x-4">
          <img
            src={insuranceImage2}
            alt="Insurance Service 2"
            className="h-48 w-48 rounded-lg slide-in"
          />
          <img
            src={insuranceImage3}
            alt="Insurance Service 3"
            className="h-48 w-48 rounded-lg slide-in"
          />
          <img
            src={insuranceImage4}
            alt="Insurance Service 4"
            className="h-48 w-48 rounded-lg slide-in"
          />
          <img
            src={insuranceImage5}
            alt="Insurance Service 5"
            className="h-48 w-48 rounded-lg slide-in"
          />
        </div>
      </div>
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg mt-10">
        <h2 className="text-blue-600 text-3xl font-bold font-serif mb-6">
          Our Reception and Entrance
        </h2>
        <div className="flex justify-center mt-8 space-x-4">
          <img
            src={receptionImage}
            alt="Reception"
            className="h-80 w-80 rounded-lg shadow-lg"
          />
          <img
            src={entranceImage}
            alt="Entrance"
            className="h-80 w-80 rounded-lg shadow-lg"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;