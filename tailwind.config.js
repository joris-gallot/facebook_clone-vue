module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue'],
  theme: {
    colors: {
      white: '#e4e6eb',
    },
    fontSize: {
      xs: '.75rem',
      sm: '0.8125rem', // 13px
      base: '0.9375rem', // 15px
      lg: '1.0625rem', // 17px
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      minWidth: {
        10: '2.5rem',
      },
      borderWidth: {
        3: '3px',
      },
      width: {
        logo: '43px',
      },
      height: {
        logo: '43px',
      },
      colors: {
        button: '#393c3c',
        card: '#232626',
        dark: '#191a1b',
        'gray-icon': '#a7abaf',
        input: '#3a3b3c',
        primary: {
          light: '#1caaf9',
          DEFAULT: '#2e88ff',
          dark: '#1c4481',
        },
        success: '#2fa34c',
        danger: '#f1304d',
        'gray-hover': '#4e4f50',
        'gray-text': '#b0b3b8',
        'gray-border': '#393a3b',
      },
    },
  },
  variants: {},
  plugins: [],
}
