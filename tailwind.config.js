module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        sideDrawerOpen: 'sideDrawerOpen 250ms ease forwards',
        sideDrawerClose: 'sideDrawerClose 250ms ease forwards',
      },
      keyframes: {
        sideDrawerOpen: {
          '0%': { transform: 'scaleX(0)' },
          '90%': { transform: 'scaleX(1.01)' },
          '100%': { transform: 'scaleX(1)' },
        },
        sideDrawerClose: {
          '0%': { transform: 'scaleX(1)' },
          '100%': { transform: 'scaleX(0)' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
