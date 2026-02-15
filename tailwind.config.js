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
    extend: {},
  },
  plugins: [],
};
