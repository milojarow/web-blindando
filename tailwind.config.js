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
        primary: "#4a6fa5",
        secondary: "#7698cb",
        accent: "#f5b35e",
        neutral: "#f4f7ff",
        "base-100": "#ffffff",
        "base-200": "#f2f5fc",
        info: "#3abff8",
        success: "#36d399",
        warning: "#fbbd23",
        error: "#f87272",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}; 