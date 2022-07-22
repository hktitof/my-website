/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Header: ["Lato", "sans-serif"],
        Text2: ["Lato", "sans-serif"],
      },
      colors: {
        AAprimary: "#0b192f",
        AAsecondary: "#64ffda",
        ResumeButtonHover: "#153040",
        MobileNavBarColor: "#112340",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};
