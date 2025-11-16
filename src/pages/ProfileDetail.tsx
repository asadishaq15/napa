// pages/ProfileDetail.tsx
import React, { useState } from 'react';
import { FaHeart, FaEnvelope, FaPhone, FaChevronLeft, FaChevronRight, FaShareAlt, FaBookmark, FaFlag } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Mock profile data
const profileData = {
  id: 1,
  name: 'Priya N.',
  age: 28,
  height: "5'6\"",
  gender: 'Female',
  education: "Master's in Computer Science",
  profession: 'Software Engineer',
  location: 'San Francisco, California',
  maritalStatus: 'Never Married',
  religion: 'Hindu',
  about: 'I am a passionate software engineer working in the tech industry. I love to travel, read books, and explore new cuisines. Looking for a life partner who shares similar values and interests.',
  interests: ['Reading', 'Traveling', 'Cooking', 'Music', 'Hiking'],
  images: [
    '/images/profile-1.jpg',
    '/images/profile-2.jpg',
    '/images/profile-3.jpg',
  ],
  family: {
    father: 'Business Owner',
    mother: 'Homemaker',
    siblings: '1 Brother (Married), 1 Sister (Unmarried)',
    location: 'Hyderabad, India',
  },
  preferences: {
    ageRange: '27-32 years',
    heightRange: "5'8\" - 6'2\"",
    education: "Bachelor's degree or higher",
    profession: 'Any professional career',
    location: 'United States (Open to relocation)',
  }
};

const ProfileDetail: React.FC = () => {
  //const { id } = useParams<{ id: string }>();
  const [currentImage, setCurrentImage] = useState(0);
  const [showContact, setShowContact] = useState(false);
  
  const nextImage = () => {
    setCurrentImage((prev) => (prev === profileData.images.length - 1 ? 0 : prev + 1));
  };
  
  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? profileData.images.length - 1 : prev - 1));
  };
  
  return (
    <>
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <a href="/search" className="flex items-center text-primary-600 hover:text-primary-700">
            <FaChevronLeft className="mr-2" /> Back to Search Results
          </a>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            {/* Left column - photos */}
            <div className="md:w-1/2 relative">
              <div className="relative h-96">
                <img
                  src={profileData.images[currentImage]}
                  alt={profileData.name}
                  className="h-full w-full object-cover"
                />
                
                {/* Image navigation */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 text-gray-800 hover:bg-opacity-100"
                >
                  <FaChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 text-gray-800 hover:bg-opacity-100"
                >
                  <FaChevronRight className="h-5 w-5" />
                </button>
                
                {/* Image indicators */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                  {profileData.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`h-2 w-2 rounded-full ${
                        currentImage === index ? 'bg-white' : 'bg-white bg-opacity-50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Thumbnail images */}
              <div className="flex p-2 gap-2">
                {profileData.images.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`cursor-pointer h-20 w-1/3 ${
                      currentImage === index ? 'ring-2 ring-primary-500' : ''
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${profileData.name} ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right column - profile info */}
            <div className="md:w-1/2 p-6">
              <div className="flex justify-between items-start">
                <h1 className="text-3xl font-bold text-gray-900">{profileData.name}</h1>
                <div className="flex space-x-2">
                  <button className="text-gray-400 hover:text-gray-500">
                    <FaShareAlt className="h-5 w-5" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-500">
                    <FaBookmark className="h-5 w-5" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-500">
                    <FaFlag className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-x-4 text-sm text-gray-500">
                <span>{profileData.age} yrs,</span>
                <span>{profileData.height},</span>
                <span>{profileData.profession}</span>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-y-4">
                <div>
                  <h3 className="text-xs text-gray-500 uppercase">Location</h3>
                  <p className="text-sm font-medium text-gray-900">{profileData.location}</p>
                </div>
                <div>
                  <h3 className="text-xs text-gray-500 uppercase">Marital Status</h3>
                  <p className="text-sm font-medium text-gray-900">{profileData.maritalStatus}</p>
                </div>
                <div>
                  <h3 className="text-xs text-gray-500 uppercase">Religion</h3>
                  <p className="text-sm font-medium text-gray-900">{profileData.religion}</p>
                </div>
                <div>
                  <h3 className="text-xs text-gray-500 uppercase">Education</h3>
                  <p className="text-sm font-medium text-gray-900">{profileData.education}</p>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xs text-gray-500 uppercase">About Me</h3>
                <p className="mt-1 text-sm text-gray-600">{profileData.about}</p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xs text-gray-500 uppercase">Interests</h3>
                <div className="mt-1 flex flex-wrap gap-2">
                  {profileData.interests.map((interest) => (
                    <span
                      key={interest}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 flex space-x-4">
                <button
                  onClick={() => setShowContact(true)}
                  className="flex-1 bg-primary-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  <FaEnvelope className="mr-2" /> Contact
                </button>
                <button className="flex-1 bg-white border border-primary-300 rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-primary-700 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                  <FaHeart className="mr-2" /> Express Interest
                </button>
              </div>
              
              {showContact && (
                <div className="mt-4 bg-primary-50 border border-primary-100 rounded-md p-4">
                  <h3 className="text-sm font-medium text-primary-800">Contact Information</h3>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center">
                      <FaEnvelope className="h-4 w-4 text-primary-500 mr-2" />
                      <span className="text-sm text-gray-600">example@email.com</span>
                    </div>
                    <div className="flex items-center">
                      <FaPhone className="h-4 w-4 text-primary-500 mr-2" />
                      <span className="text-sm text-gray-600">+1 (123) 456-7890</span>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    Note: This is premium content. Please respect privacy and use this information responsibly.
                  </p>
                </div>
              )}
            </div>
          </div>
          
          {/* Additional Details Sections */}
          <div className="border-t border-gray-200 px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Family Details</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xs text-gray-500 uppercase">Father</h3>
                    <p className="text-sm font-medium text-gray-900">{profileData.family.father}</p>
                  </div>
                  <div>
                    <h3 className="text-xs text-gray-500 uppercase">Mother</h3>
                    <p className="text-sm font-medium text-gray-900">{profileData.family.mother}</p>
                  </div>
                  <div>
                    <h3 className="text-xs text-gray-500 uppercase">Siblings</h3>
                    <p className="text-sm font-medium text-gray-900">{profileData.family.siblings}</p>
                  </div>
                  <div>
                    <h3 className="text-xs text-gray-500 uppercase">Family Location</h3>
                    <p className="text-sm font-medium text-gray-900">{profileData.family.location}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Partner Preferences</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xs text-gray-500 uppercase">Age Range</h3>
                    <p className="text-sm font-medium text-gray-900">{profileData.preferences.ageRange}</p>
                  </div>
                  <div>
                    <h3 className="text-xs text-gray-500 uppercase">Height Range</h3>
                    <p className="text-sm font-medium text-gray-900">{profileData.preferences.heightRange}</p>
                  </div>
                  <div>
                    <h3 className="text-xs text-gray-500 uppercase">Education</h3>
                    <p className="text-sm font-medium text-gray-900">{profileData.preferences.education}</p>
                  </div>
                  <div>
                    <h3 className="text-xs text-gray-500 uppercase">Profession</h3>
                    <p className="text-sm font-medium text-gray-900">{profileData.preferences.profession}</p>
                  </div>
                  <div>
                    <h3 className="text-xs text-gray-500 uppercase">Location</h3>
                    <p className="text-sm font-medium text-gray-900">{profileData.preferences.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Similar Profiles */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Profiles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((profile) => (
              <div key={profile} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200">
                  <img
                    src={`/images/profile-${profile}.jpg`}
                    alt={`Profile ${profile}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">Profile {profile}</h3>
                  <div className="mt-1 text-sm text-gray-500">
                    {25 + profile} yrs, 5'6" • Software Engineer
                  </div>
                  <div className="mt-3">
                    <a
                      href={`/profile/${profile}`}
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                    >
                      View Profile →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default ProfileDetail;