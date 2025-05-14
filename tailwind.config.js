/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8A2BE2',
          light: '#9D50BB',
          dark: '#6A0DAD',
        },
        secondary: {
          DEFAULT: '#00B4D8',
          light: '#48CAE4',
          dark: '#0077B6',
        },
        accent: {
          DEFAULT: '#7B68EE',
          light: '#9C89FF',
          dark: '#5A47D3',
        },
        dark: {
          DEFAULT: '#0A0A1A',
          lighter: '#121225',
          darker: '#050510',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Libre Baskerville', 'serif'],
      },
      boxShadow: {
        'card': '0 10px 30px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.8s ease-out forwards',
        'fadeInDown': 'fadeInDown 0.8s ease-out',
        'logoPulse': 'logoPulse 4s infinite alternate',
        'lineGrow': 'lineGrow 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};