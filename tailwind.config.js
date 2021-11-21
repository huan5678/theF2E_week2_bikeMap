module.exports = {
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FFB82E",
        },
        secondary: {
          DEFAULT: "#41CD8A",
        },
        red: "#F85D5D",
        cyan: "#11B6D0",
        blue: "#005A7A",
        orange: "#F3982B",
        gray: {
          DEFAULT: "#8A9298",
          light: "#F5F7F9",
          dark: "#081B2C",
          tr: "rgba(8, 27, 44, 0.12)",
        },
      },
      boxShadow: {
        DEFAULT: "0px 3px 8px rgba(20, 37, 80, 0.12)",
      },
    },
    variants: {
      extend: {
        opacity: ["group-focus"],
      },
    },
    plugins: [
      require("@tailwindcss/typography"),
      require("@tailwindcss/forms"),
      require("@tailwindcss/line-clamp"),
      require("@tailwindcss/aspect-ratio"),
      require("tailwind-scrollbar"),
    ],
  },
};