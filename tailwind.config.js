module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        thops: ['PT Serif', 'serif'],
        cursive: ['Grey Qo', ' cursive'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
