module.exports = {
  mode: 'jit',
  purge: ["./index.html", "./src/**/*.{js, jsx, ts, tsx}"],
  darkMode: false,
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '12': '12px',
    },
    container: {
      center: true,
      padding: '.5rem',
    },
    extend: {
      minWidth: {
        '12px': '12px',
      },
      minHeight: {
        '12px': '12px',
        '10': '2.5rem',
        '48': '12rem',
        '64': '16rem',
        '72': '18rem',
      },
      maxWidth: {
        '2xs': '16rem',
      },
      colors: {
        primary: {
          50: '#C3EEB9',
          200: '#7FDB6A',
          300: '#43B02A',
          500: '#10A005',
        },
        hover: '#7f7f7f',
        ocean: '#0EC3C3',
        sea: '#26DC9E',
        blue: '#006fff',
        lightgrey: '#F4F4F4',
        'red-tk': '#e73930',
        'red-bk': '#E31F26',
      },
      spacing: {
        '5.5': '22px',
        '112': '28rem',
        '128': '32rem',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        neue: ['neue-haas-grotesk-display', 'sans-serif'],
      },
      fontSize: {
        tiny: '.625rem',
        xxs: '.70rem',
        xxxs: '.4rem',
      },
      lineHeight: {
        '4.5': '1.125rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
