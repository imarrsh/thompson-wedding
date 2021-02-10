// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

const fontfamily = defaultTheme.fontFamily;
const sans = ['"Nunito Sans"', 'Roboto', ...fontfamily.sans];
const headings = ['"Amatic SC"', ...fontfamily.serif];
const colors = {
  ...defaultTheme.colors,
  sageGreen: '#9CAF88'
};

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    ...defaultTheme,
    fontFamily: {
      sans,
      headings
    },
    colors,
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
