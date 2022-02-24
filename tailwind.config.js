module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/templates/**/*.{js,ts,jsx,tsx}",
    "./src/tw-whitelist.txt",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#115897",
          DEFAULT: "#0a4172",
          dark: "#013360",
        },
        accent: {
          light: "#FF6E6E",
          DEFAULT: "#ff362f",
          dark: "#CC1616",
        },
      },
    },
  },
  plugins: [],
};
