module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  variants: {
    backgroundImage: ['responsive', 'hover'],
  },
  theme: {
    extend: {
      backgroundImage: {
        neumorphic: 'linear-gradient(145deg, #0f1623, #121a2a)',
      },
      fontFamily: {
        italianno: ['Italianno'],
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
      subtle: '20px 20px 40px #0a0e17, -20px -20px 40px #151e31',
      btn: '3px 3px 10px -3px #04060A, inset 2px 3px 4px -6px #F3F4F6',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
