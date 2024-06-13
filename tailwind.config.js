/**
 * @Author: Ramiro Luiz Nunes
 * @Date:   2024-06-11 22:50:01
 * @Last Modified by:   Ramiro Luiz Nunes
 * @Last Modified time: 2024-06-11 22:50:49
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
