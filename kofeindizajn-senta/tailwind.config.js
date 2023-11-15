/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          sm: '100%',
          md: '100%',
          lg: '100%',
          xl: '100%',
          '2xl': '1528px',
        },
      },
    },
    colors: {
      transparent: "transparent",
      white: "#fff",
      black: "#000",
      blue: {
        0: "#0C337C",
        1: "#001948",
        2: "#1D73C3",
        3: "#93BBFC",
        4: "#C5E1FE",
      },
      grey: {
        1: "#363636",
        2: "#828180",
        3: "#BFBFBF",
        warm: {
          1: "#DBDAD3",
          2: "#E8E7DF",
          3: "#EFEFEC",
        },
        turquoise: "#53CCE1",
        violet: "#3A0CA3",
        red: "#F3414C",
      },
    },
    fontFamily: {
      sans: ["Archivo", "sans-serif"],
      mono: ["Roboto Mono", "monospace"],
    },
  },
  plugins: [],
}

