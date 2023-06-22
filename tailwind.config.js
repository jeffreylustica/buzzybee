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
        "gold-900": "#78350F",
      },
      animation: {
        scaleUpBr:
          "scaleUpBr 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
        scaleUpBl:
          "scaleUpBl 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
      },
      keyframes: {
        scaleUpBr: {
          "0%": { transform: "scale(0)" },
          "80%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        scaleUpBl: {
          "0%": { transform: "scale(0)" },
          "80%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
