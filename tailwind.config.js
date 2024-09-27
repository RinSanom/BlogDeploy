const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary200: "#043854",
        primary100: "#01213F",
        secondary200: "#ecc801",
        accen: "#F0EDFF",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
