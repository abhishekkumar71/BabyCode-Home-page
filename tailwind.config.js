/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6", // Blue
        secondary: "#34D399", // Mint Green
        accent: "#FBBF24", // Warm Yellow
        background: "#F9FAFB", // Off-white
        text: "#1F2937", // Dark Gray
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
