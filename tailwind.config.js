/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        lexendtera: ["Lexend Tera", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        primary: "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
        "Emerald": {
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
        },
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        hero: "url('assets/images/Vector.svg')",
        card: "url('assets/images/thumbnail-background.svg')",
        doctorCard: "linear-gradient(119deg, rgba(2,112,112,1) 0%, rgba(14,209,167,1) 35%, rgba(73,255,134,1) 100%)",
        loginCard: "linear-gradient(110deg, #6aff67 0%, #0d9488 100%)"
        // loginCard: "linear-gradient(315deg, #6aff67 0%, #85ffbd 100%)"
         
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
