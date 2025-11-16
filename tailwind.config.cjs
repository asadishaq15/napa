// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ffe6eb',
          100: '#ffccd7',
          200: '#ff99af',
          300: '#ff6687',
          400: '#ff335f',
          500: '#e5003c', // Main brand red from logo
          600: '#cc0035',
          700: '#b3002e',
          800: '#990027',
          900: '#800020',
        },
        secondary: {
          50: '#e6f0ff',
          100: '#cce0ff',
          200: '#99c2ff',
          300: '#66a3ff',
          400: '#3385ff',
          500: '#0066ff', // Blue from logo hands
          600: '#005ce6',
          700: '#0052cc',
          800: '#0047b3',
          900: '#003d99',
        },
        accent: {
          50: '#fff8e6',
          100: '#fff1cc',
          200: '#ffe499',
          300: '#ffd666',
          400: '#ffc733',
          500: '#ffb800', // Banner color from logo
          600: '#e6a600',
          700: '#cc9200',
          800: '#b37f00',
          900: '#996c00',
        },
        gray: {
          50: '#f8f9fa',
          100: '#eaedf0',
          200: '#d5dbe1',
          300: '#b0bac3',
          400: '#8d99a5',
          500: '#6b7785',
          600: '#4e5a68',
          700: '#3b4654',
          800: '#2c3541',
          900: '#1a202c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(135deg, var(--tw-colors-primary-500), var(--tw-colors-secondary-500))',
        'card-gradient': 'linear-gradient(to right bottom, var(--tw-colors-primary-50), var(--tw-colors-secondary-50))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}