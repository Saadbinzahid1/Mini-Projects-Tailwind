// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: "selector",
//   content: ["./**/*.html"],
//   theme: {
//     extend: {},
//   },
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.html", "./**/*.html"], // This looks at the root and all subfolders
  theme: {
    fontfamily: {
      sans: ["Mulish", "sans-serif"],
      mono: ["Rokkitt", "monospace"],
    },
    extend: {},
  },
  plugins: [],
};
