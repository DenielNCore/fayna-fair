module.exports = {
  content: [
    './app/**/*.{vue,js,ts}',
    './app.{vue,js,ts}',
    './error.{vue,js,ts}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#FFFFFF',
          100: '#F4F4F4',
          950: '#252323',
        },
        red: {
          500: '#FF5061',
        },
        green: {
          100: '#E0E7D7',
          500: '#A9A967',
          700: '#0C8796',

        },
      },
      fontSize: {
        h1: ['58px', '64px'],
        h2: ['48px', '53px'],
        subtitle1: ['32px', '35px'],
        subtitle2: ['24px', '26px'],
        p1: ['22px', '29px'],
        p2: ['18px', '23px'],
        button: ['16px', '18px'],
        small: ['12px', '13px'],
      },
      fontFamily: {
        sans: ['Montserrat Alternates', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
