/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#121212",
        dark_gray: "#252525",
        light_gray: "#373737",
        light: "#eee",
        accent: "#2E2EFF",
      },
    },
  },
  plugins: [],
};
