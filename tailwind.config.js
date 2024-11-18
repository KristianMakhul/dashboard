/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xl: { max: "1250px" },
      lg: { max: "1000px" },
      sm: { max: "625px" },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        xxs: "0.625rem",
      },
      colors: {
        "primary-gray": "#FAFAFA",
        "dark-gray": "#686868",
        "primary-red": "#FF5151",
        "gray-border": "#E0E0E0",
        "dark-blue": "#161e54",
        "navy-blue": "#1b204a",
        "light-orange": "#FFEFE7",
        "light-pink": "#FDEBF9",
        "soft-blue": "#E8F0FB",
        "soft-blue-text": "#3786F1",
        "light-pink-text": "#EE61CF",
      },
    },
  },
  plugins: [],
};
