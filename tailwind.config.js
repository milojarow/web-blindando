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
        primary: "#FEBE17",
        secondary: "#55A803",
        accent: "#55A803",
        neutral: "#212121",
        "base-100": "#212023",
        "base-200": "#0E0E0E",
        info: "#3abff8",
        success: "#36d399",
        warning: "#fbbd23",
        error: "#f87272",
        "text-dark": "#27150C",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}; 