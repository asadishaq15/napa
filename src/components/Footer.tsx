// components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import Logo from "../assets/NAPA_logo.png"
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <img src={Logo} alt="NAPA Matrimony Logo" className="h-12 mb-4" />
            <p className="text-sm text-gray-300">
              NAPA Matrimony - A dedicated matrimonial service for the Padmashali community in North America.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaYoutube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/search" className="text-gray-300 hover:text-white">Search Profiles</Link>
              </li>
              <li>
                <Link to="/featured" className="text-gray-300 hover:text-white">Featured Profiles</Link>
              </li>
              <li>
                <Link to="/membership" className="text-gray-300 hover:text-white">Membership Plans</Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-gray-300 hover:text-white">Success Stories</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase">Community</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/mission" className="text-gray-300 hover:text-white">Our Mission</Link>
              </li>
              <li>
                <Link to="/vision" className="text-gray-300 hover:text-white">Our Vision</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-white">Events</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white">Terms of Use</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-300 hover:text-white">Disclaimer</Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-300 hover:text-white">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-sm text-gray-400 text-center">
            &copy; {new Date().getFullYear()} North American Padmashali Association. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;