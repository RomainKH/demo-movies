/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0d0d0c",
        nearWhite: "#f6f5f1",
        darkRed: "#5b1d1c",
        blue: "#1e3370",
        brown: "#926b63"
      },
      fontFamily: {
        NewsCycle: ["NewsCycle", "sans-serif"],
      },
      fontSize: {
        "7xl": "7rem",
        "6xl": ["4.6rem", "1"],
        "sm": "0.875rem",
      },
    },
  },
  plugins: [],
}

