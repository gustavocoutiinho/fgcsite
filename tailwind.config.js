/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        vinho: "#3A0F0E",
        "vinho-glow": "#4E1714",
        oliva: "#26260A",
        creme: "#FCF6EE",
        "creme-soft": "#EADFCF",
        dourado: "#D8992F",
        "dourado-lt": "#E2A94C",
        laranja: "#D2742E",
        telha: "#DC463C",
        coral: "#C25D50",
        musgo: "#A0A04E",
        marrom: "#6E3C16",
        bordo: "#5A1414",
        nude: "#D3A281",
        grafite: "#4A4744",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ["Montserrat", "system-ui", "sans-serif"],
      },
      maxWidth: { content: "1140px" },
    },
  },
  plugins: [],
};
