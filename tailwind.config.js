/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  mode:'jit',
  theme: {
    extend: {
      colors:{
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
          
          'hero': "url('../public/45degreee_fabric.png')",
      }),
      fontFamily:{
        opensans:['Open Sans', 'sans-serif'],
        playfair:['Playfair Display', 'serif'],
        raleway:['Raleway', 'sans-serif']
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
}
