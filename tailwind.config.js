/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#f2e6f5",
        secondary: "#182314",
        tertiary: "#e2e2e1",
        "black-100": "#15250d",
        "black-200": "#052503",
        "white-100": "#f3f3f3",
        "custom-bg": "#f2e6f5",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #182314",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "custom-bg":
          "linear-gradient(to bottom, #FFFFFF, #FFE9FD, #D4E4FE, #D1E9F6, #EBF0EB, #FDF3E4, #E5D7FA)",
      },
      fontFamily: {
        sac: ["Sacramento", "serif"],
      },
    },
  },
  plugins: [],
};
