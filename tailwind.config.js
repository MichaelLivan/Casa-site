/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'church-red': '#D62828',
        'church-blue': '#003049',
        'church-blue-light': '#1D4E89',
        'church-white': '#FFFFFF',
        'church-black': '#0A0A0A',
        'church-gray': '#F5F5F5',
        'church-gray-dark': '#EBEBEB',
        'church-cream': '#FFF8DC'
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/2351844/pexels-photo-2351844.jpeg')",
        'historia-bg': "url('https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg')",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};