/** @type {import('tailwindcss').Config} */
module.exports = {
  darkmode:"class",
  content: ["./src/index.html"],
  theme: {
    extend: {
      screens:{
        "sm":"480px"
      }
    },
    fontfamily:{
      nunito:['Nunito', 'serif-serif']
    }
  },
  plugins: [],
}

