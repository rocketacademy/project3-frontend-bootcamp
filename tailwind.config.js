/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/Forum/Forum.js",
    "./src/components/Forum/ForumMainPage.js",
    "./src/components/Forum/ForumNavBar.js",
    "./src/components/Forum/ForumCreate.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
