// pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaHeart, FaUsers, FaHandshake, FaChartLine } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import image from "../assets/placeholder.webp"
const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-600 to-secondary-600 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">NAPA Matrimony Service</span>
                  <span className="block text-accent-400 text-3xl mt-3">#BeChoosy</span>
                </h1>
                <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Find your perfect match from the Padmashali community. A dedicated matrimonial service for Padmashalis in North America and across the globe.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link to="/register" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent-500 hover:bg-accent-600 md:py-4 md:text-lg md:px-10">
                      Register Now
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link to="/about" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://eventsmanagementkerala.com/wp-content/uploads/2025/01/wedding-photography-kannur.jpg" alt="Padmashali couple" />
        </div>
      </div>
      
      {/* Quick Search */}
      <div className="bg-white shadow-md rounded-lg -mt-10 max-w-5xl mx-auto z-20 relative px-6 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Find Your Perfect Match</h2>
        <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label htmlFor="looking-for" className="block text-sm font-medium text-gray-700 mb-1">Looking for</label>
            <select id="looking-for" name="looking-for" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md">
              <option>Bride</option>
              <option>Groom</option>
            </select>
          </div>
          <div>
            <label htmlFor="age-from" className="block text-sm font-medium text-gray-700 mb-1">Age From</label>
            <select id="age-from" name="age-from" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md">
              {[...Array(43)].map((_, i) => (
                <option key={i}>{i + 18}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="age-to" className="block text-sm font-medium text-gray-700 mb-1">Age To</label>
            <select id="age-to" name="age-to" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md">
              {[...Array(43)].map((_, i) => (
                <option key={i}>{i + 18}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">&nbsp;</label>
            <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              <FaSearch className="mr-2" /> Search
            </button>
          </div>
        </form>
      </div>
      
      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">Our Features</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
              Select NAPA Matrimony
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              A Personalized Matchmaking Service for You
            </p>
          </div>
          
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white pt-6 px-6 pb-8 rounded-lg shadow-lg">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white mb-4">
                  <FaHeart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">Dedicated Advisory</h3>
                <p className="mt-4 text-base text-gray-500">
                  Our experts provide personalized guidance to help you find your perfect match.
                </p>
              </div>
              
              <div className="bg-white pt-6 px-6 pb-8 rounded-lg shadow-lg">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white mb-4">
                  <FaUsers className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">Handpicked Matches</h3>
                <p className="mt-4 text-base text-gray-500">
                  Curated profiles according to your preferences and compatibility.
                </p>
              </div>
              
              <div className="bg-white pt-6 px-6 pb-8 rounded-lg shadow-lg">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white mb-4">
                  <FaHandshake className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">Introductions and Meetings</h3>
                <p className="mt-4 text-base text-gray-500">
                  We facilitate introductions and help arrange meetings with potential matches.
                </p>
              </div>
              
              <div className="bg-white pt-6 px-6 pb-8 rounded-lg shadow-lg">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white mb-4">
                  <FaChartLine className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">All Premium Benefits</h3>
                <p className="mt-4 text-base text-gray-500">
                  Enjoy all the benefits of our premium service to enhance your matchmaking experience.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/membership" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              View Membership Plans
            </Link>
          </div>
        </div>
      </div>
      
      {/* Featured Profiles */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">Find Your Match</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
              Featured Profiles
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Discover some of our handpicked profiles
            </p>
          </div>
          
          <div className="mt-12 grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {[1, 2, 3].map((id) => (
              <div key={id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gray-200 h-48 w-full">
                  <img src={image} alt="Profile" className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800">Profile ID: NM{100 + id}</h3>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <span className="mr-2">28 yrs,</span>
                    <span className="mr-2">5'6",</span>
                    <span>Software Engineer</span>
                  </div>
                  <div className="mt-4">
                    <Link to={`/profile/${id}`} className="text-primary-600 hover:text-primary-700 font-medium">
                      View Full Profile →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/featured" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white border-primary-600 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              View All Featured Profiles
            </Link>
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">Testimonials</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
              Success Stories
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Hear from our happy couples who found their perfect match
            </p>
          </div>
          
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:h-full md:w-48" src={image} alt="Success Story" />
                  </div>
                  <div className="p-8">
                    <blockquote className="mt-4 text-gray-500">
                      <p className="text-lg font-medium">
                        "NAPA Matrimony helped us find each other despite living in different states. We are grateful for the platform that brought us together."
                      </p>
                      <footer className="mt-4">
                        <p className="text-base font-semibold text-gray-900">Rani & Raju</p>
                        <p className="text-sm text-gray-500">Married in 2024</p>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:h-full md:w-48" src={image} alt="Success Story" />
                  </div>
                  <div className="p-8">
                    <blockquote className="mt-4 text-gray-500">
                      <p className="text-lg font-medium">
                        "The personalized matchmaking service at NAPA Matrimony understood our preferences and values. We couldn't be happier with our match."
                      </p>
                      <footer className="mt-4">
                        <p className="text-base font-semibold text-gray-900">Priya & Harish</p>
                        <p className="text-sm text-gray-500">Married in 2023</p>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-primary-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to find your perfect match?</span>
            <span className="block text-accent-400">Join NAPA Matrimony today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link to="/register" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50">
                Register Now
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link to="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent-500 hover:bg-accent-600">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Home;