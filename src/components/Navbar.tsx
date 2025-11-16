// components/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaBars, FaTimes } from 'react-icons/fa';
import Logo from "../assets/NAPA_logo.png"
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img className="h-16 w-auto" src={Logo} alt="NAPA Matrimony" />
            
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 text-gray-700 hover:text-primary-500 font-medium">Home</Link>
            <Link to="/search" className="px-3 py-2 text-gray-700 hover:text-primary-500 font-medium">Search</Link>
            <Link to="/about" className="px-3 py-2 text-gray-700 hover:text-primary-500 font-medium">About Us</Link>
            <Link to="/membership" className="px-3 py-2 text-gray-700 hover:text-primary-500 font-medium">Membership</Link>
            <Link to="/contact" className="px-3 py-2 text-gray-700 hover:text-primary-500 font-medium">Contact</Link>
            
            <div className="ml-4 flex items-center">
              <Link to="/login" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                Login
              </Link>
              <Link to="/register" className="ml-3 inline-flex items-center px-4 py-2 border border-primary-500 text-sm font-medium rounded-md text-primary-500 bg-white hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                Register
              </Link>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-500 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-primary-50">Home</Link>
            <Link to="/search" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-primary-50">Search</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-primary-50">About Us</Link>
            <Link to="/membership" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-primary-50">Membership</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-primary-50">Contact</Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <Link to="/login" className="w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600">
                Login
              </Link>
            </div>
            <div className="mt-3 px-5">
              <Link to="/register" className="w-full text-center px-4 py-2 border border-primary-500 text-sm font-medium rounded-md text-primary-500 bg-white hover:bg-primary-50">
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;