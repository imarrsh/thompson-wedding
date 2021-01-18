// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

const fontfamily = defaultTheme.fontFamily;
const sans = ['Roboto', ...fontfamily.sans];
const headings = ['"Amatic SC"', ...fontfamily.serif];

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans,
      headings
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
