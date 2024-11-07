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
import iconImage from '../assets/Back.jpeg'; 

const Services = () => {
  return (
    <div className="bg-blue-100 min-h-screen py-8">
      <Navbar />
      <div className="p-8 max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-6 font-serif">
          Our Services
        </h2>
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 font-serif">General Services</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700 text-lg">
              <li className="flex flex-col items-center sm:flex-row sm:items-start mb-8">
                <img src={generalConsultationsImage} alt="General Consultations" className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0 sm:mr-4" />
                <h3 className="text-left text-xl font-bold flex items-center font-serif">
                  General Consultations
                </h3>
              </li>
              <li className="flex flex-col items-center sm:flex-row sm:items-start mb-8">
                <img src={wellBabyClinicsImage} alt="Well-Baby Clinics" className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0 sm:mr-4" />
                <h3 className="text-left text-xl font-bold flex items-center font-serif">
                  Well-Baby Clinics
                </h3>
              </li>
              <li className="flex flex-col items-center sm:flex-row sm:items-start mb-8">
                <img src={pediatricsImage} alt="Pediatrics" className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0 sm:mr-4" />
                <h3 className="text-left text-xl font-bold flex items-center font-serif">
                  Pediatrics
                </h3>
              </li>
              <li className="flex flex-col items-center sm:flex-row sm:items-start mb-8">
                <img src={obstetricsGynecologyImage} alt="Obstetrics & Gynecology" className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0 sm:mr-4" />
                <h3 className="text-left text-xl font-bold flex items-center font-serif">
                  Obstetrics & Gynecology
                </h3>
              </li>
              <li className="flex flex-col items-center sm:flex-row sm:items-start mb-8">
                <img src={generalSurgeryImage} alt="General Surgery" className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0 sm:mr-4" />
                <h3 className="text-left text-xl font-bold flex items-center font-serif">
                  General Surgery
                </h3>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 font-serif">Specialized Services</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700 text-lg">
              <li className="flex flex-col items-center sm:flex-row sm:items-start mb-8">
                <img src={orthopedicsTraumaSurgeryImage} alt="Orthopedics & Trauma Surgery" className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0 sm:mr-4" />
                <h3 className="text-left text-xl font-bold flex items-center font-serif">
                  Orthopedics & Trauma Surgery
                </h3>
              </li>
              <li className="flex flex-col items-center sm:flex-row sm:items-start mb-8">
                <img src={maternityImage} alt="Maternity" className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0 sm:mr-4" />
                <h3 className="text-left text-xl font-bold flex items-center font-serif">
                  Maternity
                </h3>
              </li>
              <li className="flex flex-col items-center sm:flex-row sm:items-start mb-8">
                <img src={antenatalPostNatalImage} alt="Antenatal & Post-Natal" className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0 sm:mr-4" />
                <h3 className="text-left text-xl font-bold flex items-center font-serif">
                  Antenatal & Post-Natal
                </h3>
              </li>
              <li className="flex flex-col items-center sm:flex-row sm:items-start mb-8">
                <img src={familyPlanningImage} alt="Family Planning" className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0 sm:mr-4" />
                <h3 className="text-left text-xl font-bold flex items-center font-serif">
                  Family Planning
                </h3>
              </li>
              <li className="flex flex-col items-center sm:flex-row sm:items-start mb-8">
                <img src={entSurgeryImage} alt="ENT Surgery" className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0 sm:mr-4" />
                <h3 className="text-left text-xl font-bold flex items-center font-serif">
                  ENT Surgery
                </h3>
              </li>
              <li className="flex flex-col items-center sm:flex-row sm:items-start mb-8">
                <img src={internalMedicineImage} alt="Internal Medicine/Physicians" className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0 sm:mr-4" />
                <h3 className="text-left text-xl font-bold flex items-center font-serif">
                  Internal Medicine/Physicians
                </h3>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 font-serif">Support Services</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700 text-lg">
              <li className="flex flex-col items-center sm:flex-row sm:items-start mb-8">
                <img src={laboratoryServicesImage} alt="Laboratory Services" className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0 sm:mr-4" />
                <h3 className="text-left text-xl font-bold flex items-center font-serif">
                  Laboratory Services
                </h3>
              </li>
              <li className="flex flex-col items-center sm:flex-row sm:items-start mb-8">
                <img src={pharmacyServicesImage} alt="Pharmacy Services" className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0 sm:mr-4" />
                <h3 className="text-left text-xl font-bold flex items-center font-serif">
                  Pharmacy Services
                </h3>
              </li>
              <li className="flex flex-col items-center sm:flex-row sm:items-start mb-8">
                <img src={theatreImage} alt="Theatre (Major & Minor Surgeries)" className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0 sm:mr-4" />
                <h3 className="text-left text-xl font-bold flex items-center font-serif">
                  Theatre (Major & Minor Surgeries)
                </h3>
              </li>
              <li className="flex flex-col items-center sm:flex-row sm:items-start mb-8">
                <img src={nutritionClinicsImage} alt="Nutrition Clinics" className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0 sm:mr-4" />
                <h3 className="text-left text-xl font-bold flex items-center font-serif">
                  Nutrition Clinics
                </h3>
              </li>
              <li className="flex flex-col items-center sm:flex-row sm:items-start mb-8">
                <img src={physiotherapyImage} alt="Physiotherapy" className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0 sm:mr-4" />
                <h3 className="text-left text-xl font-bold flex items-center font-serif">
                  Physiotherapy
                </h3>
              </li>
              <li className="flex flex-col items-center sm:flex-row sm:items-start mb-8">
                <img src={gbvHivManagementImage} alt="GBV & HIV Management & Support" className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0 sm:mr-4" />
                <h3 className="text-left text-xl font-bold flex items-center font-serif">
                  GBV & HIV Management & Support
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;