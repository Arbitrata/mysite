/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const MyClass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto Mono", "monospace"],
      },
    },
    colors: {
      greenblue: "#64ffda",
      lightgray: "#ccd6f6",
      black: "#000000",
      blue: "#1a8cff",
      white: "#FFFFFF",

      darkblue: "#0a2753",
      gray: "#F7F7F7",
      graybg: "#f9f9f9",

      blackBg: "#0f172a",
      iceblue: "#f5f8ff",
      softgray: "#f9f9f9",
      grayish: "#c5c4c3",
      backgroundPrimary: "#FEFAE0",
    },
  },
  plugins: [MyClass, require("tailwindcss-dotted-background")],
};
