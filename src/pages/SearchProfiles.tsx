// pages/SearchProfiles.tsx
import React, { useState } from 'react';
import { FaSearch, FaFilter, FaTimes, FaListUl, FaThLarge } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import image from "../assets/placeholder.webp"
// Mock profile data
const mockProfiles = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  name: `Profile ${i + 1}`,
  age: 25 + (i % 10),
  height: `${5}'${(i % 10) + 1}"`,
  education: ['Bachelor\'s', 'Master\'s', 'PhD'][i % 3],
  occupation: ['Software Engineer', 'Doctor', 'Business Owner', 'Teacher'][i % 4],
  location: ['California', 'Texas', 'New York', 'Washington', 'New Jersey', 'Arizona'][i % 6],
  image: image,
}));

const SearchProfiles: React.FC = () => {
  const [profiles, _setProfiles] = useState(mockProfiles);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    ageFrom: '18',
    ageTo: '40',
    gender: '',
    education: '',
    location: '',
  });
  
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const applyFilters = () => {
    // In a real application, this would send a request to the API with the filters
    // For now, we'll just simulate filtering the mock data
    setFilterOpen(false);
  };
  
  const resetFilters = () => {
    setFilters({
      ageFrom: '18',
      ageTo: '40',
      gender: '',
      education: '',
      location: '',
    });
  };
  
  return (
    <>
      <Navbar />
      
      {/* Search Header */}
      <div className="bg-primary-600 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-white text-center">Search Profiles</h1>
          <p className="mt-2 text-lg text-white text-center">
            Find your perfect match from our curated profiles
          </p>
          
          <div className="mt-6 max-w-xl mx-auto">
            <div className="flex rounded-md shadow-sm">
              <div className="relative flex-grow focus-within:z-10">
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="block w-full rounded-none rounded-l-md border-gray-300 focus:border-primary-500 focus:ring-primary-500 pl-4 sm:text-sm"
                  placeholder="Search by name, location, or profile ID"
                />
              </div>
              <button
                type="button"
                className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              >
                <FaSearch className="h-4 w-4 text-gray-400" />
                <span>Search</span>
              </button>
            </div>
            
            <div className="mt-4 flex justify-center">
              <button
                type="button"
                onClick={() => setFilterOpen(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50"
              >
                <FaFilter className="mr-2 h-4 w-4" />
                Advanced Filters
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Filter Sidebar - Mobile */}
      {filterOpen && (
        <div className="fixed inset-0 overflow-hidden z-50">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setFilterOpen(false)}></div>
            
            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                  <div className="flex-1 py-6 px-4 sm:px-6 overflow-y-auto">
                    <div className="flex items-start justify-between">
                      <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                      <button
                        type="button"
                        className="ml-3 h-7 flex items-center justify-center text-gray-400 hover:text-gray-500"
                        onClick={() => setFilterOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <FaTimes className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                    
                    <div className="mt-6">
                      <form className="space-y-6">
                        <div>
                          <h3 className="text-sm font-medium text-gray-700">Age Range</h3>
                          <div className="mt-2 grid grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="age-from" className="block text-xs font-medium text-gray-700">
                                From
                              </label>
                              <select
                                id="age-from"
                                name="ageFrom"
                                value={filters.ageFrom}
                                onChange={handleFilterChange}
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                              >
                                {Array.from({ length: 43 }, (_, i) => (
                                  <option key={i} value={i + 18}>{i + 18}</option>
                                ))}
                              </select>
                            </div>
                            <div>
                              <label htmlFor="age-to" className="block text-xs font-medium text-gray-700">
                                To
                              </label>
                              <select
                                id="age-to"
                                name="ageTo"
                                value={filters.ageTo}
                                onChange={handleFilterChange}
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                              >
                                {Array.from({ length: 43 }, (_, i) => (
                                  <option key={i} value={i + 18}>{i + 18}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                            Looking For
                          </label>
                          <select
                            id="gender"
                            name="gender"
                            value={filters.gender}
                            onChange={handleFilterChange}
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                          >
                            <option value="">Any</option>
                            <option value="male">Groom</option>
                            <option value="female">Bride</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="education" className="block text-sm font-medium text-gray-700">
                            Education
                          </label>
                          <select
                            id="education"
                            name="education"
                            value={filters.education}
                            onChange={handleFilterChange}
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                          >
                            <option value="">Any</option>
                            <option value="high-school">High School</option>
                            <option value="bachelor">Bachelor's Degree</option>
                            <option value="master">Master's Degree</option>
                            <option value="phd">PhD / Doctorate</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                            Location
                          </label>
                          <select
                            id="location"
                            name="location"
                            value={filters.location}
                            onChange={handleFilterChange}
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                          >
                            <option value="">Any</option>
                            <option value="usa">United States</option>
                            <option value="canada">Canada</option>
                            <option value="india">India</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <button
                            type="button"
                            onClick={resetFilters}
                            className="inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                          >
                            Reset
                          </button>
                          <button
                            type="button"
                            onClick={applyFilters}
                            className="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                          >
                            Apply Filters
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Search Results */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-medium text-gray-900">
              {profiles.length} profiles found
            </h2>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="hidden sm:flex items-center space-x-1">
              <span className="text-sm text-gray-500">View:</span>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md ${
                  viewMode === 'grid' 
                    ? 'bg-primary-100 text-primary-600' 
                    : 'text-gray-400 hover:text-gray-500'
                }`}
              >
                <FaThLarge className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md ${
                  viewMode === 'list' 
                    ? 'bg-primary-100 text-primary-600' 
                    : 'text-gray-400 hover:text-gray-500'
                }`}
              >
                <FaListUl className="h-5 w-5" />
              </button>
            </div>
            
            <select
              id="sort"
              name="sort"
              className="block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
            >
              <option>Recently Active</option>
              <option>Newest First</option>
              <option>Age: Low to High</option>
              <option>Age: High to Low</option>
            </select>
          </div>
        </div>
        
        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {profiles.map((profile) => (
              <div key={profile.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gray-200">
                  <img className="h-full w-full object-cover" src={profile.image} alt={profile.name} />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {profile.name}
                  </h3>
                  <div className="mt-1 text-sm text-gray-500">
                    {profile.age} yrs, {profile.height} • {profile.education}
                  </div>
                  <div className="mt-1 text-sm text-gray-500">
                    {profile.occupation}
                  </div>
                  <div className="mt-1 text-sm text-gray-500">
                    {profile.location}
                  </div>
                  <div className="mt-4">
                    <a
                      href={`/profile/${profile.id}`}
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                    >
                      View Profile →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* List View */}
        {viewMode === 'list' && (
          <div className="space-y-4">
            {profiles.map((profile) => (
              <div key={profile.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="sm:flex">
                  <div className="sm:flex-shrink-0 h-48 sm:h-full sm:w-48 bg-gray-200">
                    <img className="h-full w-full object-cover" src={profile.image} alt={profile.name} />
                  </div>
                  <div className="p-4 sm:p-6 w-full">
                    <div className="sm:flex sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {profile.name}
                        </h3>
                        <div className="mt-1 flex flex-wrap gap-x-4 text-sm text-gray-500">
                          <span>{profile.age} yrs, {profile.height}</span>
                          <span>•</span>
                          <span>{profile.education}</span>
                          <span>•</span>
                          <span>{profile.occupation}</span>
                          <span>•</span>
                          <span>{profile.location}</span>
                        </div>
                        <p className="mt-3 text-sm text-gray-500">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, velit vel bibendum bibendum, metus nisl fringilla nunc, vitae aliquam odio nunc vel nisi.
                        </p>
                      </div>
                      <div className="mt-4 sm:mt-0">
                        <a
                          href={`/profile/${profile.id}`}
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                        >
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Pagination */}
        <div className="mt-10 flex items-center justify-between">
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">20</span> of{' '}
                <span className="font-medium">148</span> results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <a
                  href="#"
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Previous</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" aria-current="page" className="z-10 bg-primary-50 border-primary-500 text-primary-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                  1
                </a>
                <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                  2
                </a>
                <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                  3
                </a>
                <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                  ...
                </span>
                <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                  8
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Next</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
          
          {/* Mobile pagination */}
          <div className="flex sm:hidden justify-between w-full">
            <button
              type="button"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Previous
            </button>
            <button
              type="button"
              className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default SearchProfiles;