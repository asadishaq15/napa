// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Page imports
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import TermsOfUse from './pages/TermsOfUse';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import SearchProfiles from './pages/SearchProfiles';
import MembershipPlans from './pages/MembershipPlans';
import ProfileDetail from './pages/ProfileDetail';

// Optional: Lazy load pages for performance (uncomment if desired)
// const Home = React.lazy(() => import('./pages/Home'));
// ...

const App: React.FC = () => {
  return (
    <Router>
      {/* <React.Suspense fallback={<div>Loading...</div>}> // For lazy loading */}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/privacy" element={<TermsOfUse />} /> {/* Replace with PrivacyPolicy page if available */}
          <Route path="/disclaimer" element={<TermsOfUse />} /> {/* Ditto */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/search" element={<SearchProfiles />} />
          <Route path="/featured" element={<SearchProfiles />} /> {/* If there's a featured page, replace as needed */}
          <Route path="/membership" element={<MembershipPlans />} />
          <Route path="/membership-plans" element={<MembershipPlans />} />
          <Route path="/profile/:id" element={<ProfileDetail />} />
          {/* Add more static pages as needed, e.g. success stories, etc. */}
          
          {/* Example placeholder for registration success page */}
          <Route 
            path="/registration-success" 
            element={
              <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold text-primary-600 mb-4">Registration Successful!</h1>
                <p className="mb-4">Thank you for registering. Please check your email to verify your account.</p>
                <a
                  href="/login"
                  className="inline-block px-4 py-2 rounded bg-primary-600 text-white font-semibold hover:bg-primary-700"
                >
                  Go to Login
                </a>
              </div>
            }
          />

          {/* Catch-all for 404 */}
          <Route
            path="*"
            element={
              <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <h1 className="text-5xl font-bold text-primary-600 mb-4">404</h1>
                <p className="mb-4 text-lg text-gray-700">Sorry, the page you are looking for was not found.</p>
                <a
                  href="/"
                  className="inline-block px-4 py-2 rounded bg-primary-600 text-white font-semibold hover:bg-primary-700"
                >
                  Go Home
                </a>
              </div>
            }
          />
        </Routes>
      {/* </React.Suspense> */}
    </Router>
  );
};

export default App;