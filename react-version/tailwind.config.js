module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neonPurple: {
          300: "#c084fc",
          400: "#a855f7",
          500: "#9333ea",
          600: "#7c3aed",
          700: "#6d28d9",
        },
        glass: {
          100: "rgba(255, 255, 255, 0.08)",
          200: "rgba(255, 255, 255, 0.15)",
        },
        secondary: "#a855f7",
        primary: "#7c3aed",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
