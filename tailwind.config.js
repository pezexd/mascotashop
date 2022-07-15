// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.amber
      },
      backgroundImage: {
        'page-background': 'url(\'../src/assets/img/background.svg\')',
      },
    },
    fontFamily: {
      'body': ['Proxima Nova', 'sans-serif'],
      'display': ['Naugthy', 'sans-serif']
    }
  },
  plugins: [],
}
