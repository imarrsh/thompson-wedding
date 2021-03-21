// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

const fontfamily = defaultTheme.fontFamily;
const sans = ['"Nunito Sans"', 'Roboto', ...fontfamily.sans];
const headings = ['"Amatic SC"', ...fontfamily.serif];

const colors = {
  ...defaultTheme.colors,
  sageGreen: '#9CAF88',
  steelBlue: {
    50: '#edf3f8',
    100: '#c8daea',
    200: '#a3c2db',
    300: '#7ea9cd',
    400: '#5a91bf',
    500: '#4077a5',
    600: '#325d81',
    700: '#24425c',
    800: '#152837',
    900: '#070d12',
  }
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
