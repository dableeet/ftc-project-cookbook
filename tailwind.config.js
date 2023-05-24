/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{jsx,js}",
    "./ node_modules / flowbite/**/ *.js"
  ],
  theme: {
      extend: {
      height: {
        106: '28rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin')
  ],
}

