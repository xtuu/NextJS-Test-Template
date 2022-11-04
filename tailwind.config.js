/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './context/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: {
          100: '#f5dddc',
          200: '#e39f9e',
          300: '#D77674',
          400: '#955251',
          500: '#643736',
        },
        secondary: {
          100: '#f5dddc',
          200: '#e39f9e',
          300: '#D77674',
          400: '#955251',
          500: '#643736',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
};

