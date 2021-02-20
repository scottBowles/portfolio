module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        test: 'linear-gradient(145deg, #1c2532, #212c3b)',
      },
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
    boxShadow: {
      test: '20px 20px 40px #1a232f, -20px -20px 40px #242f3f',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
