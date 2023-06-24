/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        gold: "#FBBF24",
        "gold-100": "#FEF3C7",
        "gold-200": "#FDE68A",
        "gold-300": "#FCD34D",
        "gold-400": "#FBBF24",
        "gold-500": "#F59E0B",
        "gold-600": "#D97706",
        "gold-700": "#B45309",
        "gold-800": "#92400E",
        "gold-900": "#78350F",
      },
      animation: {
        scaleUp: "scaleUp 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
        ldsBee1: "ldsBee1 0.6s infinite",
        ldsBee2: "ldsBee2 0.6s infinite",
        ldsBee3: "ldsBee3 0.6s infinite",
      },
      keyframes: {
        scaleUp: {
          "0%": { transform: "scale(0)" },
          "80%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        ldsBee1: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        ldsBee3: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0)" },
        },
        ldsBee2: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(48px, 0)" },
        },
      },
    },
  },
  plugins: [],
};
