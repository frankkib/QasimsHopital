import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10 rounded-lg shadow-lg">
      <div className="container mx-auto text-left grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="mb-8">
          <h2 className="text-2xl mb-4">Social</h2>
          <div className="flex flex-col items-start space-y-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <FaFacebook className="h-8 w-8" />
              <span>Facebook</span>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <FaTwitter className="h-8 w-8" />
              <span>Twitter</span>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <FaInstagram className="h-8 w-8" />
              <span>Instagram</span>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <FaLinkedin className="h-8 w-8" />
              <span>LinkedIn</span>
            </a>
            <a href="mailto:qasimshospital@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <FaEnvelope className="h-8 w-8" />
              <span>Email</span>
            </a>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl mb-4 flex items-center">
            <FaMapMarkerAlt className="h-6 w-6 mr-2" />
            Location
          </h2>
          <div className="space-y-2">
            <p>Located at Magena opp Magena Police Station.</p>
            <p>Po Box 3806-40200.</p>
            <p>Tel: 0707289342.</p>
            <p>Kisii, Kenya.</p>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl mb-4">Visiting Hours</h2>
          <p>Morning: 6:30AM - 7:00AM</p>
          <p>Afternoon: 1:00PM - 2:00PM</p>
          <p>Evening: 5:00PM - 6:00PM</p>
        </div>
      </div>
      <div className="border-t border-gray-600 text-xs text-center mt-4 pt-4">
        <p>&copy; 2024 Qasims Hospital. All rights reserved.</p>
        <p><a href="/" className="text-blue-400 hover:underline">Privacy Policy</a></p>
      </div>
    </footer>
  );
}

export default Footer;