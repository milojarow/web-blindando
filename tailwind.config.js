/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFB5A7",
        secondary: "#8BD3DD",
        accent: "#B5E5CF",
        neutral: "#F8EDEB",
        "base-100": "#FFF8F0",
        "base-200": "#F9F5F1",
        info: "#8EAAFB",
        success: "#9ED2BE",
        warning: "#FFD8A9",
        error: "#FFC4C4",
        "text-dark": "#4A4A4A",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}; 