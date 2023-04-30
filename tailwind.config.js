/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins"],
      },
    },
    colors: {
      greenblue: "#64ffda",
      lightgray: "#ccd6f6",
      black: "#000000",
      blue: "#1a8cff",
      red: "",
      white: "#FFFFFF",
      darkblue: "#0a2753",
    },
  },
  plugins: [
    require('tailwindcss-dotted-background'),
  ],
};
