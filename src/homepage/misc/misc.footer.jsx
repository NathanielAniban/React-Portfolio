import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { NavLink } from 'react-router-dom';
import Links from '../jsons/json.paths';
import IconName from '../assets/icon-name.webp';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-5">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <img
              src={IconName}
              alt="Logo"
              className="h-10 mb-4"
            />
            <p className="text-gray-400">
              Join us for expert guidance, top-notch equipment, varied classes,
              and a supportive community. Start your fitness journey today!
            </p>
            <div className="mt-4">
              <a
                href="https://athleticmma.online/Auth/Login"
                className="text-white underline"
              >
                Visit Admin Portal
              </a>
            </div>

            {/* Useful Links */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Useful Links</h3>
              <ul className="grid grid-cols-2 gap-2 text-gray-400">
                {Links.paths.map((path, index) => (
                            <li key={index}>
                              <NavLink to={path.link} className={"hover:text-white"}>
                                {path.linkName}
                              </NavLink>
                            </li>
                          ))}
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contacts</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 mt-1" />
                <span className="text-sm font-medium mt-1">+63 915-677-0853</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 mt-1" />
                <span className="text-sm font-medium mt-1">athleticmma@athleticmma.online</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-6 h-6 mt-1" />
                <span className="text-sm font-medium mt-1">
                  Blk 33 Philippines Street Bagong Pag-Asa,
                  Barangay Santa Ana Taytay Rizal,
                  Barkadahan Bridge, Taytay, Philippines, 1920
                </span>
              </li>
            </ul>
          </div>

          {/* Location (Google Maps) */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d276.19755108406395!2d121.11795309235845!3d14.548694485563082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDMyJzU1LjUiTiAxMjHCsDA3JzA1LjAiRQ!5e1!3m2!1sen!2sph!4v1708864697025!5m2!1sen!2sph"
              className="w-full rounded-md"
              height="250"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-6" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
          <p className="text-center md:text-left">
            © 2024 Athletic X3 Gym | All Rights Reserved
          </p>
          <ul className="flex space-x-4 mt-3 md:mt-0">
            <li>
              <a href="https://athleticmma.online/Home/PrivacyPolicy" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://athleticmma.online/Home/TermsofUse" className="hover:text-white">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="https://athleticmma.online/Home/SocialMediaPolicy" className="hover:text-white">
                Social Media Policy
              </a>
            </li>
            <li>
              <a href="https://athleticmma.online/Home/AccessibilityStatement" className="hover:text-white">
                Accessibility Statement
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
