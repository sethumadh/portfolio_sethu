/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blue: "#2CBCE9",
        red: "#DC4492",
        yellow: "#FDCC49",
        grey: "#ededed",
        "deep-blue": "#010026",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",

        hero: "url('../public/45degreee_fabric.png')",
        filmpire: "url('../public/filmpire.png')",
        musicplayer: "url('../public/musicplayer.png')",
        passwordapp: "url('../public/passwordapp.png')",
        navbg: "url('../public/contactbg.png')",
        mainbg: "url('../public/bg1.jpg')",
        mainbg1: "url('../public/bg3.png')",
      }),
      fontFamily: {
        opensans: ["Open Sans", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      keyframes: {
        words: {
          "0%": {
            opacity: 0,
            filter: "blur(20px)",
            transform: "translateY(-100px) skewY(10deg) skewx(10deg) rotateZ(30deg)",
          },
          "25%": {
            opacity: 1,
            filter: "blur(0px)",
            transform: "translateY(0px) skewY(0deg) skewx(0deg) rotateZ(0deg)",
          },
          "75%": {
            opacity: 1,
            filter: "blur(0px)",
            transform: "translateY(0px) skewY(0deg) skewx(0deg) rotateZ(0deg)",
          },
          "100%": {
            opacity: 0,
            filter: "blur(30px)",
            // transform: "translateY(-100px)",
          },
        },
      },
      animation: {
        "words-anim": "words 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
