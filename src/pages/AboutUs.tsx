// pages/AboutUs.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs: React.FC = () => {
  return (
    <>
      <Navbar />
      
      {/* Header */}
      <div className="bg-primary-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl text-center">About Us</h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-white text-center">
            North American Padmashali Association Matrimony Service
          </p>
        </div>
      </div>
      
      {/* About Content */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-primary mx-auto">
            <h2>Our Community</h2>
            <p>
              Padmashalis are a Telugu speaking community with roots tracing back to Markandeya Maharishi. We are the third largest community and form 12% of the population of Andhra Pradesh and Telangana. Our community also has a large presence across India, including Maharashtra and Gujarat.
            </p>
            <p>
              Padmashalis are traditionally a weaving and artisan community but over time, many members from our community have successfully moved into modern professions. As a result, our community spread all over the world, including the United States of America and Canada.
            </p>
            
            <h2 className="mt-12">The Birth of NAPA</h2>
            <p>
              There was strong passion and zeal among US residents to reunite our family ties. This idea sparked the establishment of a strong and vibrant platform, "North American Padmashali Association" (NAPA), a non-profit organization for Padmashalis.
            </p>
            <p>
              The goal of the NAPA is to build a strong vibrant community-based platform in North America to not only help ourselves locally in North America, but also help our extended family members who reside across the globe. The organization's goals are not just limited to education, economics and social services, but we want to act as a catalyst to groom economically self-reliant citizens who can support their families and the greater community when it is required most.
            </p>
            
            <h2 className="mt-12">NAPA Matrimony Service</h2>
            <p>
              NAPA Matrimony is one of our key initiatives to help connect Padmashali individuals looking for their life partners. Our service provides a secure and dedicated platform for eligible Padmashali bachelors and bachelorettes to find their perfect match based on compatible values, backgrounds, and interests.
            </p>
            
            <h3 className="mt-8">Our Matrimony Features</h3>
            <ul>
              <li>Help for Marriages</li>
              <li>Support for Education</li>
              <li>Support for marketing weaving skills / products</li>
              <li>Immigration support and help</li>
            </ul>
            
            <p className="mt-8 text-xl font-semibold text-primary-600 text-center">
              #BeChoosy<br />
              <span className="text-base font-normal text-gray-600">While you find your perfect match</span>
            </p>
          </div>
        </div>
      </div>
      
      {/* Vision and Mission */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Vision</h2>
              <p className="text-gray-600">
                NAPA's Vision is to bring all Padmashalis in North America and across globe under one umbrella. NAPA's core focus is to leverage a digital platform to bring the Padmashali community together and help to accelerate the process of community integration.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Mission</h2>
              <p className="text-gray-600">
                Unite Padmashalis across globe and leverage collective community strength to provide focused social services to our extended family members and provide a strong united voice for economic and social growth.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Team</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Meet the dedicated team behind NAPA Matrimony
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((id) => (
              <div key={id} className="text-center">
                <div className="space-y-4">
                  <div className="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56 overflow-hidden">
                    <img src={`/images/team-${id}.jpg`} alt="Team Member" className="h-full w-full object-cover" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3 className="text-gray-900">Team Member {id}</h3>
                      <p className="text-primary-600">Role Title</p>
                    </div>
                    <div className="text-gray-500">
                      <p className="text-sm">Brief description about the team member and their contribution to NAPA.</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-primary-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Have questions about our services?</span>
            <span className="block text-accent-400">Get in touch with us today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a href="mailto:matrimony@napausa.org" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50">
                Email Us
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a href="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent-500 hover:bg-accent-600">
                Contact Form
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default AboutUs;