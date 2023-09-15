const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      ...colors,
      custom: colors.custom,
      sunshade: colors.sunshade,
    },
    extend: {
      colors: {
        sunshade: {
          DEFAULT: "#FF9027",
          50: "#FFEEDF",
          100: "#FFE4CA",
          200: "#FFCFA1",
          300: "#FFBA79",
          400: "#FFA550",
          500: "#FF9027",
          600: "#EE7400",
          700: "#B65800",
          800: "#7E3D00",
          900: "#462200",
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('flowbite/plugin')
  ],
}
