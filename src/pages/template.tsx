// remote/src/components/TemplatePage.tsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TemplatePage: React.FC = () => {
  // THEME STATE AND OBSERVER
  const [currentTheme, setCurrentTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setCurrentTheme(isDark ? 'dark' : 'light');
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDarkNow = document.documentElement.classList.contains('dark');
          setCurrentTheme(isDarkNow ? 'dark' : 'light');
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`min-h-screen relative pt-32 pb-12
      ${
        currentTheme === 'dark'
          ? 'bg-gradient-to-b from-[#000c1a] to-[#101a30]'
          : 'bg-gradient-to-b from-[#f0f7ff] to-[#f8f9ff]'
      }
    `}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-24 -right-24 w-96 h-96 ${
          currentTheme === 'dark' ? 'bg-primary-600' : 'bg-primary-300'
        } rounded-full opacity-20 blur-3xl`} />
        <div className={`absolute top-1/3 -left-24 w-80 h-80 ${
          currentTheme === 'dark' ? 'bg-secondary-600' : 'bg-secondary-300'
        } rounded-full opacity-20 blur-3xl`} />
        <div className={`absolute bottom-0 right-1/3 w-64 h-64 ${
          currentTheme === 'dark' ? 'bg-primary-400' : 'bg-primary-200'
        } rounded-full opacity-10 blur-3xl`} />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={`text-4xl md:text-5xl font-bold mb-4
            ${currentTheme === 'dark' ? 'text-white' : 'text-gray-900'}
          `}>
            Welcome to the{' '}
            <span className={`gradient-text bg-gradient-to-r ${
              currentTheme === 'dark'
                ? 'from-primary-400 to-secondary-400'
                : 'from-primary-600 to-secondary-600'
            } text-transparent bg-clip-text`}>
              New Page
            </span>
          </h1>
          <p className={`text-lg mb-12 ${
            currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            This is a blank template. Start building your next great feature here.
          </p>
          {/* Example placeholder: image, illustration, or icon */}
          <div className="flex flex-col items-center gap-4">
            <img
              src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Template Placeholder"
              className="w-48 h-48 object-cover rounded-xl shadow-lg border border-primary-100 dark:border-primary-800"
            />
            <span className={`inline-block px-4 py-2 rounded-lg font-medium
              ${currentTheme === 'dark'
                ? 'bg-primary-900/30 text-primary-300'
                : 'bg-primary-50 text-primary-700'
              }
            `}>
              Ready to customize!
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TemplatePage;