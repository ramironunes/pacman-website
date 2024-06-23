/**
 * ===========================================================================
 * @Author: Ramiro Luiz Nunes
 * @Date:   2024-06-22 19:04:13
 * @Info:   A brief description of the file
 * ===========================================================================
 */

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pacmanYellow: "#FFCC00",
        pacmanBlue: "#0051FF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
