/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      animation: {
        'leSnake': 'leSnake 1.5s ease-in-out infinite',
      },
      keyframes: {
        leSnake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(1rem)' },
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

