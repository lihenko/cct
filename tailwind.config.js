/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  theme: {
    extend: {},
    colors: {
      'darkblue': '#0B61A3',
      'blue': '#1086E2',
      'white' : '#ffffff',
      'lightblue' : '#25BCF3',
      'black' : '#0B0F17',
    },
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif'],
      'body': ['Montserrat', 'sans-serif'],
    },
    fontSize: {
      micro:['12px', '13px'],
      sm: ['14px', '22px'],
      base: ['16px', '24px'],
      lg: ['18px', '30px'],
      xl: ['20px', '30px'],
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '992px',
      'xl': '1250px',
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
  corePlugins: {
    placeholderColor: false,
    placeholderOpacity: false,
  },
};
