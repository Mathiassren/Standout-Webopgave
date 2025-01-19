/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./dist/*.{html,js}"], // Add relevant paths
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/assets/images/topbillede.jpg')", // Correct path for the image
      },
    },
  },
  plugins: [],
};
