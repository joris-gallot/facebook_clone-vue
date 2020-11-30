module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue'],
  theme: {
    colors: {
      white: '#e4e6eb',
    },
    fontSize: {
      sm: '13px',
      base: '15px',
      lg: '17px',
    },
    extend: {
      colors: {
        button: '#393c3c',
        card: '#232626',
        dark: '#191a1b',
        'gray-icon': '#a7abaf',
        input: '#3a3b3c',
        primary: '#2e88ff',
        success: '#2fa34c',
        danger: '#f1304d',
        'gray-hover': '#4e4f50',
        'gray-text': '#b0b3b8',
      },
    },
  },
  variants: {},
  plugins: [],
}
