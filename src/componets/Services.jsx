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
import pharmacyServicesImage from '../assets/HsPharmacy.jpeg';
import theatreImage from '../assets/HospitalThearter.jpeg';
import nutritionClinicsImage from '../assets/Nutrition.jpeg';
import physiotherapyImage from '../assets/Physiotherapy.jpeg';
import entSurgeryImage from '../assets/ENT.jpg';
import DentalSurgeryImage from '../assets/Dental.jpeg';
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
            <h3 className="text-2xl font-bold text-gray-800 mb-4 font-serif flex items-center">
              <img src={iconImage} alt="Icon" className="w-6 h-6 mr-2" />
              General Services
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 text-lg">
              <li className="flex flex-col items-center sm:flex-row sm:items-start mb-8">
                <img src={generalConsultationsImage} alt="General Consultations" className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0 sm:mr-4" />
                <h3 className="text-left text-xl font-bold flex items-center font-serif">
                  <img src={iconImage} alt="Icon" className="w-6 h-6 mr-2" />
                  General Consultations
                </h3>
              </li>
              <li className="flex flex-col items-center sm:flex-row sm:items-start mb-8">
                <img src={wellBabyClinicsImage} alt="Well-Baby Clinics" className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0 sm:mr-4" />
                <h3 className="text-left text-xl font-bold flex items-center font-serif">
                  <img src={iconImage} alt="Icon" className="w-6 h-6 mr-2" />
                  Well-Baby Clinics
                </h3>
              </li>
              <li className="flex flex-col items-center sm:flex-row sm:items-start mb-8">
                <img src={pediatricsImage} alt="Pediatrics" className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0 sm:mr-4" />
                <h3 className="text-left text-xl font-bold flex items-center font-serif">
                  <img src={iconImage} alt="Icon" className="w-6 h-6 mr-2" />
                  Pediatrics
                </h3>
              </li>
              <li className="flex flex-col items-center sm:flex-row sm:items-start mb-8">
                <img src={obstetricsGynecologyImage} alt="Obstetrics & Gynecology" className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0 sm:mr-4" />
                <h3 className="text-left text-xl font-bold flex items-center font-serif">
                  <img src={iconImage} alt="Icon" className="w-6 h-6 mr-2" />
                  Obstetrics & Gynecology
                </h3>
              </li>
              <li className="flex flex-col items-center sm:flex-row sm:items-start mb-8">
                <img src={generalSurgeryImage} alt="General Surgery" className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0 sm:mr-4" />
                <h3 className="text-left text-xl font-bold flex items-center font-serif">
                  <img src={iconImage} alt="Icon" className="w-6 h-6 mr-2" />
                  General Surgery
                </h3>
              </li>
              <li className="flex flex-col items-center sm:flex-row sm:items-start mb-8">
                <img src={DentalSurgeryImage} alt="General Surgery" className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0 sm:mr-4" />
                <h3 className="text-left text-xl font-bold flex items-center font-serif">
                  <img src={iconImage} alt="Icon" className="w-6 h-6 mr-2" />
                  Dental Services
                </h3>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 font-serif flex items-center">
              <img src={iconImage} alt="Icon" className="w-6 h-6 mr-2" />
              Specialized Services
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 text-lg">
              <li className="flex flex-col items-center sm:flex-row sm:items-start mb-8">
                <img src={orthopedicsTraumaSurgeryImage} alt="Orthopedics & Trauma Surgery" className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0 sm:mr-4" />
                <h3 className="text-left text-xl font-bold flex items-center font-serif">
                  <img src={iconImage} alt="Icon" className="w-6 h-6 mr-2" />
                  Orthopedics & Trauma Surgery
                </h3>
              </li>
              <li className="flex flex-col items-center sm:flex-row sm:items-start mb-8">
                <img src={maternityImage} alt="Maternity" className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0 sm:mr-4" />
                <h3 className="text-left text-xl font-bold flex items-center font-serif">
                  <img src={iconImage} alt="Icon" className="w-6 h-6 mr-2" />
                  Maternity
                </h3>
              </li>
              <li className="flex flex-col items-center sm:flex-row sm:items-start mb-8">
                <img src={antenatalPostNatalImage} alt="Antenatal & Post-Natal" className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0 sm:mr-4" />
                <h3 className="text-left text-xl font-bold flex items-center font-serif">
                  <img src={iconImage} alt="Icon" className="w-6 h-6 mr-2" />
                  Antenatal & Post-Natal
                </h3>
              </li>
              <li className="flex flex-col items-center sm:flex-row sm:items-start mb-8">
                <img src={familyPlanningImage} alt="Family Planning" className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0 sm:mr-4" />
                <h3 className="text-left text-xl font-bold flex items-center font-serif">
                  <img src={iconImage} alt="Icon" className="w-6 h-6 mr-2" />
                  Family Planning
                </h3>
              </li>
              <li className="flex flex-col items-center sm:flex-row sm:items-start mb-8">
                <img src={entSurgeryImage} alt="ENT Surgery" className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0 sm:mr-4" />
                <h3 className="text-left text-xl font-bold flex items-center font-serif">
                  <img src={iconImage} alt="Icon" className="w-6 h-6 mr-2" />
                  ENT Surgery
                </h3>
              </li>
              <li className="flex flex-col items-center sm:flex-row sm:items-start mb-8">
                <img src={internalMedicineImage} alt="Internal Medicine/Physicians" className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0 sm:mr-4" />
                <h3 className="text-left text-xl font-bold flex items-center font-serif">
                  <img src={iconImage} alt="Icon" className="w-6 h-6 mr-2" />
                  Internal Medicine/Physicians
                </h3>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 font-serif flex items-center">
              <img src={iconImage} alt="Icon" className="w-6 h-6 mr-2" />
              Support Services
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 text-lg">
              <li className="flex flex-col items-center sm:flex-row sm:items-start mb-8">
                <img src={laboratoryServicesImage} alt="Laboratory Services" className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0 sm:mr-4" />
                <h3 className="text-left text-xl font-bold flex items-center font-serif">
                  <img src={iconImage} alt="Icon" className="w-6 h-6 mr-2" />
                  Laboratory Services
                </h3>
              </li>
              <li className="flex flex-col items-center sm:flex-row sm:items-start mb-8">
                <img src={pharmacyServicesImage} alt="Pharmacy Services" className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0 sm:mr-4" />
                <h3 className="text-left text-xl font-bold flex items-center font-serif">
                  <img src={iconImage} alt="Icon" className="w-6 h-6 mr-2" />
                  Pharmacy Services
                </h3>
              </li>
              <li className="flex flex-col items-center sm:flex-row sm:items-start mb-8">
                <img src={theatreImage} alt="Theatre (Major & Minor Surgeries)" className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0 sm:mr-4" />
                <h3 className="text-left text-xl font-bold flex items-center font-serif">
                  <img src={iconImage} alt="Icon" className="w-6 h-6 mr-2" />
                  Theatre (Major & Minor Surgeries)
                </h3>
              </li>
              <li className="flex flex-col items-center sm:flex-row sm:items-start mb-8">
                <img src={nutritionClinicsImage} alt="Nutrition Clinics" className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0 sm:mr-4" />
                <h3 className="text-left text-xl font-bold flex items-center font-serif">
                  <img src={iconImage} alt="Icon" className="w-6 h-6 mr-2" />
                  Nutrition Clinics
                </h3>
              </li>
              <li className="flex flex-col items-center sm:flex-row sm:items-start mb-8">
                <img src={physiotherapyImage} alt="Physiotherapy" className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0 sm:mr-4" />
                <h3 className="text-left text-xl font-bold flex items-center font-serif">
                  <img src={iconImage} alt="Icon" className="w-6 h-6 mr-2" />
                  Physiotherapy
                </h3>
              </li>
              <li className="flex flex-col items-center sm:flex-row sm:items-start mb-8">
                <img src={gbvHivManagementImage} alt="GBV & HIV Management & Support" className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0 sm:mr-4" />
                <h3 className="text-left text-xl font-bold flex items-center font-serif">
                  <img src={iconImage} alt="Icon" className="w-6 h-6 mr-2" />
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