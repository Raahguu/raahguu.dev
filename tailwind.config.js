/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: ["./layouts/**/*.html", "./content/**/*.{html,md}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        'bg-primary-dark': '#121212',
        'bg-secondary-dark': '#1a1a1a',
        'bg-tertiary-dark': '#1a1a1a',  
        'text-primary-dark': colors.neutral[100],
        'text-secondary-dark': colors.neutral[400],
        'border-primary-dark': colors.neutral[700],
        'accent-dark': colors.sky[500],
      },
    },
  },
  plugins: [
      require('@tailwindcss/typography')
  ],
} 