/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/Forum/Forum.js",
    "./src/components/Forum/ForumMainPage.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
