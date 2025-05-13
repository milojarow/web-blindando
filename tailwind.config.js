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
        primary: "#FFC107",
        secondary: "#1976D2",
        accent: "#F57C00",
        neutral: "#E0E0E0",
        "base-100": "#F5F5F5",
        "base-200": "#EEEEEE",
        "base-300": "#424242",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FF9800",
        error: "#F44336",
        "text-dark": "#212121",
        "text-light": "#FAFAFA",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}; 