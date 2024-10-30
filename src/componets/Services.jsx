import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import generalConsultationsImage from '../assets/consulting.jpg';
import wellBabyClinicsImage from '../assets/WELL-BABY.jpg';
import pediatricsImage from '../assets/pediatrics.jpg';
import obstetricsGynecologyImage from '../assets/Gynecology.jpg';
import generalSurgeryImage from '../assets/genaral-surgery.jpeg';
import orthopedicsTraumaSurgeryImage from '../assets/Orthopedic.jpg';
import maternityImage from '../assets/maternity.jpg';
import antenatalPostNatalImage from '../assets/Postnatal-Care.jpg';
import familyPlanningImage from '../assets/Family.jpeg';
import laboratoryServicesImage from '../assets/LabService.jpg';
import pharmacyServicesImage from '../assets/Pharmacy.jpg';
import theatreImage from '../assets/Thearte.jpeg';
import nutritionClinicsImage from '../assets/Nutrition.jpeg';
import physiotherapyImage from '../assets/Physiotherapy.jpeg';
import entSurgeryImage from '../assets/ENT.jpg';
import internalMedicineImage from '../assets/Internal.jpg';
import gbvHivManagementImage from '../assets/Gbv.jpg';

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="p-8 max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
          Our Services
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-gray-700 text-lg">
          <li className="relative">
            <h3 className="text-center text-xl font-bold text-white bg-blue-400 p-2 rounded-t-lg">
              General Consultations
            </h3>
            <img src={generalConsultationsImage} alt="General Consultations" className="w-full h-32 object-cover rounded-b-lg mb-2 transition-transform duration-300 hover:scale-105" />
            <p className="mt-2">We provide comprehensive general consultations to address all your health concerns.</p>
          </li>
          <li className="relative">
            <h3 className="text-center text-xl font-bold text-white bg-blue-400 p-2 rounded-t-lg">
              Well-Baby Clinics
            </h3>
            <img src={wellBabyClinicsImage} alt="Well-Baby Clinics" className="w-full h-32 object-cover rounded-b-lg mb-2 transition-transform duration-300 hover:scale-105" />
            <p className="mt-2">Our well-baby clinics ensure your child's health and development are on track.</p>
          </li>
          <li className="relative">
            <h3 className="text-center text-xl font-bold text-white bg-blue-400 p-2 rounded-t-lg">
              Pediatrics
            </h3>
            <img src={pediatricsImage} alt="Pediatrics" className="w-full h-32 object-cover rounded-b-lg mb-2 transition-transform duration-300 hover:scale-105" />
            <p className="mt-2">Our pediatric services provide specialized care for infants, children, and adolescents.</p>
          </li>
          <li className="relative">
            <h3 className="text-center text-xl font-bold text-white bg-blue-400 p-2 rounded-t-lg">
              Obstetrics & Gynecology
            </h3>
            <img src={obstetricsGynecologyImage} alt="Obstetrics & Gynecology" className="w-full h-32 object-cover rounded-b-lg mb-2 transition-transform duration-300 hover:scale-105" />
            <p className="mt-2">We offer comprehensive obstetric and gynecological care for women of all ages.</p>
          </li>
          <li className="relative">
            <h3 className="text-center text-xl font-bold text-white bg-blue-400 p-2 rounded-t-lg">
              General Surgery
            </h3>
            <img src={generalSurgeryImage} alt="General Surgery" className="w-full h-32 object-cover rounded-b-lg mb-2 transition-transform duration-300 hover:scale-105" />
            <p className="mt-2">Our general surgery services cover a wide range of surgical procedures.</p>
          </li>
          <li className="relative">
            <h3 className="text-center text-xl font-bold text-white bg-blue-400 p-2 rounded-t-lg">
              Orthopedics & Trauma Surgery
            </h3>
            <img src={orthopedicsTraumaSurgeryImage} alt="Orthopedics & Trauma Surgery" className="w-full h-32 object-cover rounded-b-lg mb-2 transition-transform duration-300 hover:scale-105" />
            <p className="mt-2">We provide specialized care for orthopedic and trauma-related conditions.</p>
          </li>
          <li className="relative">
            <h3 className="text-center text-xl font-bold text-white bg-blue-400 p-2 rounded-t-lg">
              Maternity
            </h3>
            <img src={maternityImage} alt="Maternity" className="w-full h-32 object-cover rounded-b-lg mb-2 transition-transform duration-300 hover:scale-105" />
            <p className="mt-2">Our maternity services offer comprehensive care for expectant mothers.</p>
          </li>
          <li className="relative">
            <h3 className="text-center text-xl font-bold text-white bg-blue-400 p-2 rounded-t-lg">
              Antenatal & Post-Natal
            </h3>
            <img src={antenatalPostNatalImage} alt="Antenatal & Post-Natal" className="w-full h-32 object-cover rounded-b-lg mb-2 transition-transform duration-300 hover:scale-105" />
            <p className="mt-2">We provide antenatal and post-natal care to ensure the health of both mother and baby.</p>
          </li>
          <li className="relative">
            <h3 className="text-center text-xl font-bold text-white bg-blue-400 p-2 rounded-t-lg">
              Family Planning
            </h3>
            <img src={familyPlanningImage} alt="Family Planning" className="w-full h-32 object-cover rounded-b-lg mb-2 transition-transform duration-300 hover:scale-105" />
            <p className="mt-2">Our family planning services help you make informed decisions about your reproductive health.</p>
          </li>
          <li className="relative">
            <h3 className="text-center text-xl font-bold text-white bg-blue-400 p-2 rounded-t-lg">
              Laboratory Services
            </h3>
            <img src={laboratoryServicesImage} alt="Laboratory Services" className="w-full h-32 object-cover rounded-b-lg mb-2 transition-transform duration-300 hover:scale-105" />
            <p className="mt-2">Our state-of-the-art laboratory provides accurate and timely diagnostic services.</p>
          </li>
          <li className="relative">
            <h3 className="text-center text-xl font-bold text-white bg-blue-400 p-2 rounded-t-lg">
              Pharmacy Services
            </h3>
            <img src={pharmacyServicesImage} alt="Pharmacy Services" className="w-full h-32 object-cover rounded-b-lg mb-2 transition-transform duration-300 hover:scale-105" />
            <p className="mt-2">Our pharmacy offers a wide range of medications and health products.</p>
          </li>
          <li className="relative">
            <h3 className="text-center text-xl font-bold text-white bg-blue-400 p-2 rounded-t-lg">
              Theatre (Major & Minor Surgeries)
            </h3>
            <img src={theatreImage} alt="Theatre (Major & Minor Surgeries)" className="w-full h-32 object-cover rounded-b-lg mb-2 transition-transform duration-300 hover:scale-105" />
            <p className="mt-2">Our theatre is equipped for both major and minor surgical procedures.</p>
          </li>
          <li className="relative">
            <h3 className="text-center text-xl font-bold text-white bg-blue-400 p-2 rounded-t-lg">
              Nutrition Clinics
            </h3>
            <img src={nutritionClinicsImage} alt="Nutrition Clinics" className="w-full h-32 object-cover rounded-b-lg mb-2 transition-transform duration-300 hover:scale-105" />
            <p className="mt-2">Our nutrition clinics provide dietary advice and support for a healthy lifestyle.</p>
          </li>
          <li className="relative">
            <h3 className="text-center text-xl font-bold text-white bg-blue-400 p-2 rounded-t-lg">
              Physiotherapy
            </h3>
            <img src={physiotherapyImage} alt="Physiotherapy" className="w-full h-32 object-cover rounded-b-lg mb-2 transition-transform duration-300 hover:scale-105" />
            <p className="mt-2">Our physiotherapy services help you recover and maintain physical function.</p>
          </li>
          <li className="relative">
            <h3 className="text-center text-xl font-bold text-white bg-blue-400 p-2 rounded-t-lg">
              ENT Surgery
            </h3>
            <img src={entSurgeryImage} alt="ENT Surgery" className="w-full h-32 object-cover rounded-b-lg mb-2 transition-transform duration-300 hover:scale-105" />
            <p className="mt-2">We offer specialized ENT surgical services for ear, nose, and throat conditions.</p>
          </li>
          <li className="relative">
            <h3 className="text-center text-xl font-bold text-white bg-blue-400 p-2 rounded-t-lg">
              Internal Medicine/Physicians
            </h3>
            <img src={internalMedicineImage} alt="Internal Medicine/Physicians" className="w-full h-32 object-cover rounded-b-lg mb-2 transition-transform duration-300 hover:scale-105" />
            <p className="mt-2">Our internal medicine physicians provide comprehensive care for adults.</p>
          </li>
          <li className="relative">
            <h3 className="text-center text-xl font-bold text-white bg-blue-400 p-2 rounded-t-lg">
              GBV & HIV Management & Support
            </h3>
            <img src={gbvHivManagementImage} alt="GBV & HIV Management & Support" className="w-full h-32 object-cover rounded-b-lg mb-2 transition-transform duration-300 hover:scale-105" />
            <p className="mt-2">We offer support and management services for GBV and HIV patients.</p>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Services;