/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**.html", "./src/**.html"],
  theme: {
    extend: {
      fontFamily: {
        // the rubik-dirt font has a double and single quote because of the space between the names of the font
        'rubik-dirt' : ['"Rubik Dirt"', 'cursive;'],
        'quick-sand' : ['Quicksand', 'sans-serif;'],
        'climate-crisis' : ['"Climate Crisis"', 'cursive'],
        'archivo-black' : ['"Archivo Black"', 'sans-serif'],
        'jost' : ['jost', 'sans-serif'],
        'rubik-moonrocks' : ['"Rubik Moonrocks"', 'cursive;']
      },
      height: {
        viewPort: '85vh'
      }
    },
  },
  plugins: [],
}
