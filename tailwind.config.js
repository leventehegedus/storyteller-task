/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Base
        white: "#ffffff",
        "off-white": "#f9f9f9",

        // Dark shades
        "dark-primary": "#171A25",
        "dark-secondary": "#292F48",

        // Blues
        "blue-light": "#76A0F0",
        "blue-primary": "#1C62EB",
        "blue-dark": "#103B8E",
        "blue-action": "#3161e3",
        "blue-dark-active": "#2a2f46",

        // Accent
        green: "#1DB56C",
        red: "#D24747",

        // Grays
        "gray-light": "#BBBCC2",
        gray: "#A3A3A3",
        "gray-lighter": "#EBEBEB",
        "gray-light-search": "#D3D4D9",
      },
      borderRadius: {
        xs: "2.5px",
        sm: "3px",
        md: "4px",
      },
    },
  },
  plugins: [],
};
