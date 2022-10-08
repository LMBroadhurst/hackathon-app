/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '767px',
      lg: '1050px',
      xl: '1440px',
      xxl: '1750px'
    },
    extend: {
      colors: {
        cMono100: "#F8F9FA",
        cMono200: "#E9ECEF",
        cMono300: "#DEE2E6",
        cMono400: "#CED4DA",
        cMono500: "#6C757D",
        cMono600: "#495057",
        cMono700: "#343A40",
        cMono800: "#212529",

        cBlue100: "#BAF2E1",
        cBlue200:"#AAA4E0",
        cBlue300: "#76ACD0",
        cBlue400: "#2464A8",
        cBlue500: "#205A97",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  }
}