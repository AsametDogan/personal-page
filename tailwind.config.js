/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        tooltip_show: {
          '0%': { visibility: 'hidden', opacity: '0' },
          '15%': { visibility: 'hidden', opacity: '0' },
          '100%': { visibility: 'visible', opacity: '100' },
        }
      },
      animation: {
        tooltip_show: 'tooltip_show 1s ease forwards',
      }
    },
    screens: {
      '2xl': { 'max': '1490px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1160px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '780px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '530px' },
      // => @media (max-width: 639px) { ... }

      'just-sm': { 'min': '530px' },
      'just-lg': { 'min': '1160px' },

    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,

      test: "#FF0032",

      wpurple: "#7F56D9",
      wblack: "#222831",
      wblue: "#30475E",
      worrange: "#F2A365",
      wgrey: "#ECECEC",

      lpurple: "#C1A1D3",
      ldblue: "#0D335D",
      llblue: "#1A508B",
      lgrey: "#FFF3E6",
      ldgrey: "#ebe0d3",

      blueberrydark: "#182833",
      blueberrybase: "#153040",
      blueberrylight: "#1F4762",
      blueberrylemon: "#FDA300",
      blueberryyellow: "#FFC619",
      blueberrysalmon: "#E09F5A",
      blueberrybackground: "#EBE0D3"
    },
  },
  plugins: [],
}