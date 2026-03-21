/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        busan: {
          blue: '#1B3A6B',
          coral: '#E85D4A',
          light: '#F5F0E8',
        },
      },
    },
  },
  plugins: [],
}
