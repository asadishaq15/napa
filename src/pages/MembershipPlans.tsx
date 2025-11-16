import React, { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface PlanFeature {
  title: string;
  basic: boolean;
  premium: boolean;
  platinum: boolean;
}

const features: PlanFeature[] = [
  { title: 'Create Profile', basic: true, premium: true, platinum: true },
  { title: 'Search Profiles', basic: true, premium: true, platinum: true },
  { title: 'View Contact Details', basic: false, premium: true, platinum: true },
  { title: 'Send Interests', basic: false, premium: true, platinum: true },
  { title: 'Chat with Matches', basic: false, premium: true, platinum: true },
  { title: 'View Who Viewed Your Profile', basic: false, premium: false, platinum: true },
  { title: 'Featured Profile', basic: false, premium: false, platinum: true },
  { title: 'Dedicated Matchmaking Assistance', basic: false, premium: false, platinum: true },
];

const MembershipPlans: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  
  return (
    <>
      <Navbar />
      
      {/* Header */}
      <div className="bg-primary-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl sm:tracking-tight lg:text-5xl text-center">
            Membership Plans
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-white text-center">
            Choose the perfect plan for your matrimony journey
          </p>
        </div>
      </div>
      
      {/* Pricing Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Billing Toggle */}
          <div className="flex justify-center">
            <div className="relative bg-gray-100 p-1 flex rounded-lg">
              <button
                type="button"
                className={`${
                  billingCycle === 'monthly'
                    ? 'bg-white shadow-sm'
                    : 'bg-transparent text-gray-500'
                } relative py-2 px-6 border-transparent rounded-md text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary-500 focus:z-10`}
                onClick={() => setBillingCycle('monthly')}
              >
                Monthly
              </button>
              <button
                type="button"
                className={`${
                  billingCycle === 'yearly'
                    ? 'bg-white shadow-sm'
                    : 'bg-transparent text-gray-500'
                } relative py-2 px-6 border-transparent rounded-md text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary-500 focus:z-10`}
                onClick={() => setBillingCycle('yearly')}
              >
                Yearly (Save 20%)
              </button>
            </div>
          </div>
          
          {/* Pricing Cards */}
          <div className="mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            {/* Basic Plan */}
            <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">Basic</h2>
                <p className="mt-4 text-sm text-gray-500">Get started with basic profile features.</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {billingCycle === 'monthly' ? '$0' : '$0'}
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    /{billingCycle === 'monthly' ? 'mo' : 'year'}
                  </span>
                </p>
                <a
                  href="#"
                  className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                >
                  Sign up for free
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {features.map((feature) => (
                    <li key={feature.title} className="flex space-x-3">
                      {feature.basic ? (
                        <FaCheck className="flex-shrink-0 h-5 w-5 text-green-500" />
                      ) : (
                        <FaTimes className="flex-shrink-0 h-5 w-5 text-gray-400" />
                      )}
                      <span className={`text-sm ${feature.basic ? 'text-gray-500' : 'text-gray-300'}`}>
                        {feature.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Premium Plan */}
            <div className="border border-primary-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6 bg-primary-50 rounded-t-lg">
                <h2 className="text-lg leading-6 font-medium text-gray-900">Premium</h2>
                <p className="mt-4 text-sm text-gray-500">All essentials to find your perfect match.</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {billingCycle === 'monthly' ? '$29' : '$279'}
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    /{billingCycle === 'monthly' ? 'mo' : 'year'}
                  </span>
                </p>
                <a
                  href="#"
                  className="mt-8 block w-full bg-primary-600 border border-primary-600 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-primary-700"
                >
                  Get Premium
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {features.map((feature) => (
                    <li key={feature.title} className="flex space-x-3">
                      {feature.premium ? (
                        <FaCheck className="flex-shrink-0 h-5 w-5 text-green-500" />
                      ) : (
                        <FaTimes className="flex-shrink-0 h-5 w-5 text-gray-400" />
                      )}
                      <span className={`text-sm ${feature.premium ? 'text-gray-500' : 'text-gray-300'}`}>
                        {feature.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Platinum Plan */}
            <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">Platinum</h2>
                <p className="mt-4 text-sm text-gray-500">Advanced features with personalized assistance.</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {billingCycle === 'monthly' ? '$49' : '$469'}
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    /{billingCycle === 'monthly' ? 'mo' : 'year'}
                  </span>
                </p>
                <a
                  href="#"
                  className="mt-8 block w-full bg-accent-500 border border-accent-500 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-accent-600"
                >
                  Get Platinum
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {features.map((feature) => (
                    <li key={feature.title} className="flex space-x-3">
                      {feature.platinum ? (
                        <FaCheck className="flex-shrink-0 h-5 w-5 text-green-500" />
                      ) : (
                        <FaTimes className="flex-shrink-0 h-5 w-5 text-gray-400" />
                      )}
                      <span className={`text-sm ${feature.platinum ? 'text-gray-500' : 'text-gray-300'}`}>
                        {feature.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            Frequently asked questions
          </h2>
          <div className="mt-12">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  What's the difference between plans?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  The Basic plan allows you to create a profile and search for matches. Premium adds contact viewing and communication features. Platinum includes all premium features plus dedicated matchmaking assistance.
                </dd>
              </div>
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Can I upgrade my plan later?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Yes, you can upgrade your plan at any time. The unused portion of your current plan will be prorated and applied to your new plan.
                </dd>
              </div>
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  How do I cancel my subscription?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  You can cancel your subscription at any time from your account settings. Your plan will remain active until the end of your billing cycle.
                </dd>
              </div>
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  What payment methods do you accept?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  We accept all major credit cards, PayPal, and Apple Pay. All transactions are securely processed and encrypted.
                </dd>
              </div>
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Is my payment information secure?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Yes, we use industry-standard encryption and security practices. We never store your full credit card details on our servers.
                </dd>
              </div>
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Do you offer refunds?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  We offer a 7-day money-back guarantee for all paid plans. If you're not satisfied, contact our support team within 7 days of purchase for a full refund.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-primary-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to find your perfect match?</span>
            <span className="block text-accent-400">Start your journey today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/register"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50"
              >
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent-500 hover:bg-accent-600"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default MembershipPlans;