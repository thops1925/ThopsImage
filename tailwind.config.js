

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        thops: ['PT Serif', 'serif'],
        cursive: ['Grey Qo', ' cursive'],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}