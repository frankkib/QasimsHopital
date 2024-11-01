import React from 'react';
import Navbar from './Navbar';
import WhyChooseUs from './WhyChooseUs';
import Footer from './Footer';
import insuranceImage2 from '../assets/SHA.jpeg';
import insuranceImage3 from '../assets/tredent.jpeg';

const Home = () => {
  return (
    <>
      <Navbar />
      <h2 className="text-blue-600 text-4xl font-extrabold font-mono mt-4">
        WELCOME TO QASIMS HOSPITAL
      </h2>
      <p className="text-blue-500 text-2xl mt-2">We treat, God heals</p>
      <WhyChooseUs />
      <h1 className="text-center text-4xl font-bold text-green-600 mt-10">
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
      </div>
      <Footer />
    </>
  );
};

export default Home;