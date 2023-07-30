/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/**/*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#5f0080',
        secondary: '#bd76ff',
        content: '#333333',
        error: '#f03f40',
        accent: '#A80000',
      },
      fontSize: {
        xs: '0.625rem' /* 10px */,
        sm: '0.75rem' /* 12px */,
        base: '1rem' /* 16px */,
        lg: '1.375rem' /* 22px */,
        xl: '2.375rem' /* 38px */,
      },
      width: {
        container: '1050px',
      },
    },
  },
  plugins: [],
};
