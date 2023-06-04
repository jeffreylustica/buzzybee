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
    },
  },
  plugins: [],
};
