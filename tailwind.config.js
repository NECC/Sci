// tailwind.config.js
const {nextui} = require("@nextui-org/react");

module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': {
          1: '#08a4de', /* esta a ser usado */
          2: '#10639f',
          3: '#2281c4 ' /* esta a ser usado */



        }, // cor do logo das jornadas poderá ser utilizado
        'custom-grey': 'rgba(255, 255, 255, 0.60)',


        'custom-yellow': {
          1: '#F6DA7D'
        }
      },
      transitionProperty: {
        width: 'width',
        height: 'height',
      },
      fontFamily: {
        'comfortaa': ['Comfortaa', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'sponsor': 'linear-gradient(to top right, hsl(0, 0%, 0%) 0%, hsla(238.82, 96.2%, 1.78%, 0.999) 9.1%, hsla(238.82, 96.2%, 3.59%, 0.996) 18.4%, hsla(238.82, 96.2%, 5.46%, 0.991) 27.7%, hsla(238.82, 96.2%, 7.36%, 0.983) 36.9%, hsla(238.82, 96.2%, 9.31%, 0.973) 45.9%, hsla(238.82, 96.2%, 11.3%, 0.96) 54.6%, hsla(238.82, 96.2%, 13.33%, 0.944) 62.9%, hsla(238.82, 96.2%, 15.41%, 0.926) 70.7%, hsla(238.82, 96.2%, 17.52%, 0.904) 77.8%, hsla(238.82, 96.2%, 19.67%, 0.879) 84.1%, hsla(238.82, 96.2%, 21.85%, 0.851) 89.5%, hsla(238.82, 96.2%, 24.08%, 0.819) 93.9%, hsla(238.82, 96.2%, 26.34%, 0.783) 97.2%, hsla(238.82, 96.2%, 28.64%, 0.744) 99.3%, hsla(238.82, 96.2%, 30.98%, 0.7) 100%)',
        'custombutton': 'linear-gradient(90deg, rgba(0, 0, 139, 0.28) 0%, rgba(217, 217, 217, 0.00) 100%)',
        'selectday': 'radial-gradient(30.17% 5405.66% at 50.61% 50.72%, rgba(0, 0, 139, 0.28) 0%, rgba(217, 217, 217, 0.00) 100%)',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],


};