module.exports = {
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1DFFFF",
        },
        secondary: {
          DEFAULT: "#4E4E4E",
        },
        red: "#FC4A4A",
        yellow: "#FFD914",
        gray: {
          DEFAULT: "#A6A6A6",
          dark: "rgba(0, 0, 0, 0.7)"
        }
      },
      boxShadow: {
        "DEFAULT": "0px 0px 15px 0px #5656566E",
        "sm": "4px 4px 10px 0px #56565640",
        "searchbar": "0px 2px 6px 0px #00000040",
        "mobile": "0px -4px 10px 0px #E5E5E5",
        "mobile-nav": "0px -4px 7px 0px #E5E5E5"
      },
    },
    variants: {
      extend: {},
    },
    plugins: [
      require("@tailwindcss/typography"),
      require("@tailwindcss/forms"),
      require("@tailwindcss/line-clamp"),
      require("@tailwindcss/aspect-ratio"),
    ],
  }
}