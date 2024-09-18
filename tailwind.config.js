/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#509a8d",
        customGreen: "#14241c",
        customWhite: "#f6e9d2",
        customBlue2: "#65627e",
      },
    },
  },
  plugins: [],
};
