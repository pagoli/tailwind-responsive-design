/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        lightYellow: "hsl(50, 100%, 80%)",
        lightGreen: "hsl(142, 76.6%, 73.1%)",
        lightPink: "hsl(336, 92.9%, 61.2%)",
        darkPink: "hsl(333, 100%, 34.7%)",
        purpleGray: "hsl(313, 15.5%, 90%)",
      },
    },
  },
};
