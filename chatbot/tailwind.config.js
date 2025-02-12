
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,ts}",,
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          100: "#f8fcff",
          150: "#f5f7ff",
          200: "#e8ecff",
          250: "#cfdeff",
          300: "#b8c3f5",
          350: "#9da8d9",
          400: "#7f8dc4",
          450: "#6777af",
          550: "#4b5c92",
          600: "#3e5189",
          650: "#2c3a63",
          700: "#242f50",
          750: "#1d2439",
          800: "#171e32",
          850: "#101524",
          900: "#0c101c",
        },
      },
    },
  },
  plugins: [],
}