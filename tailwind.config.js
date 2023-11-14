/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [],
  },
  theme: {
    extend: {
      colors: {
        background: "#050b1e",
        primary: "#1C3F58",
        secondary: "#427d9d",
        accent: "#9bbec8",
        text: "#ddf2fd",
      },
    },
  },
  plugins: [require("daisyui")],
};
