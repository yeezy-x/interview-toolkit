// tailwind.config.js
export const content = ['./src/**/*.{js,ts,jsx,tsx,html}'];
export const theme = {
  extend: {
    fontFamily: {
      display: ['Urbanist', 'sans-serif'],
    },
    animation: {
        fadeIn: 'fadeIn 0.3s ease-out',
      },
    screens: {
      '3xl': '1920px',
    },
    colors: {
      primary: '#FF9324',
    },
    keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
  },
};
export const plugins = [];
