/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        hover: {
          100: "#F7E4FA",
          200: "#8368FC",
          300: "#765DE3",
          400: "#5B48B0",
        },
      },
      fontFamily: {
        "inter": ["inter", "sans-serif"],
        "raleway": ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
