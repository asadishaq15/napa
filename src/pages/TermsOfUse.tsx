// pages/TermsOfUse.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfUse: React.FC = () => {
  return (
    <>
      <Navbar />
      
      {/* Header */}
      <div className="bg-primary-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl sm:tracking-tight lg:text-5xl text-center">Terms of Use</h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-white text-center">
            Please read these terms and conditions carefully before using NAPA Matrimony
          </p>
        </div>
      </div>
      
      {/* Content */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-primary mx-auto">
            <h2>Disclaimer</h2>
            <p className="text-lg font-semibold uppercase">
              NAPA DISCLAIMER
            </p>
            <p>
              UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.
            </p>
            
            <p className="mt-8">
              "NAPA assumes no responsibility or liability for any errors or misuse the content of this site. The information contained in this site is provided on an "as is" basis with no guarantees of completeness or accuracy."
            </p>
            
            <p className="mt-4">
              matrimonial.napausa.org does not engage in any matchmaking whatsoever, matrimonial.napausa.org cannot be held responsible in any way for the character and integrity of a person whose profile is found on this site. matrimonial.napausa.org makes no representations regarding the accuracy or significance of any detail of a person found on this website, and cannot be responsible for any abuse that may be done by any third party therewith. Further, the management of matrimonial.napausa.org does not guarantee the accuracy of any person's background gained membership in matrimonial.napausa.org
            </p>
            
            <h2 className="mt-12">Use of the Service</h2>
            <p>
              By accessing or using NAPA Matrimony, you agree to abide by these Terms of Use. The Service is intended for personal use only and not for commercial exploitation. You may not use the Service to advertise, sell, or otherwise exploit for any commercial purposes.
            </p>
            
            <h2 className="mt-12">User Accounts</h2>
            <p>
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
            </p>
            <p>
              You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            </p>
            
            <h2 className="mt-12">Profile Content</h2>
            <p>
              You are solely responsible for the content of your profile and any information you provide to the Service. By creating a profile, you represent and warrant that:
            </p>
            <ul>
              <li>The information you provide is truthful, accurate, and complete.</li>
              <li>You will maintain the accuracy of such information.</li>
              <li>Your use of the Service does not violate any applicable law or regulation.</li>
            </ul>
            
            <h2 className="mt-12">Privacy</h2>
            <p>
              Your privacy is important to us. Our Privacy Policy explains how we collect, use, and disclose information about you. By using the Service, you agree to the collection, use, and disclosure of information in accordance with our Privacy Policy.
            </p>
            
            <h2 className="mt-12">Termination</h2>
            <p>
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
            </p>
            
            <h2 className="mt-12">Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            
            <h2 className="mt-12">Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              Email: <a href="mailto:matrimony@napausa.org">matrimony@napausa.org</a>
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default TermsOfUse;