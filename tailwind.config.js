/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xl: { max: "1250px" },
      lg: { max: "1000px" },
      sm: { max: "625px" },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      fontSize: {
        xxs: "0.625rem",
      },
      colors: {
        "primary": {
          "gray": "#FAFAFA",
          "red": "#FF5151",
        },
        "dark": {
          "gray": "#686868",
          "blue": "#161e54",
        },
        "soft": {
          "blue": "#E8F0FB",
          "blue-text": "#3786F1",
        },
        "light": {
          "pink-text": "#EE61CF",
          "orange": "#FFEFE7",
          "pink": "#FDEBF9",
        },
        "gray-border": "#E0E0E0",
        "navy-blue": "#1b204a",
      },
    },
  },
  plugins: [],
};
