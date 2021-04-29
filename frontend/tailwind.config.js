// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

const fontfamily = defaultTheme.fontFamily;
const sans = ['"Nunito Sans"', 'Roboto', ...fontfamily.sans];
const headings = ['"Amatic SC"', ...fontfamily.serif];
const script = ['"Tangerine"', ...fontfamily.serif];

const colors = {
  ...defaultTheme.colors,
  sageGreen: {
    50: '#f2f5f0',
    100: '#d9e0d1',
    200: '#c0ccb3',
    300: '#a6b794',
    400: '#8da376',
    500: '#9CAF88',
    600: '#73895c',
    700: '#5a6b48',
    800: '#404c33',
    900: '#262e1f',
  },
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
      headings,
      script
    },
    colors,
    extend: {},
  },
  variants: {
    extend: {
      translate: ['active', 'group-hover'],
      scale: ['group-hover'],
      margin: ['first'],
    },
  },
  plugins: [],
};
