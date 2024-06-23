/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['Noto Sans JP', 'sans-serif'],
      },
      width: {
        main: 'clamp(0px, 1050px, 90vw)', // 基本は1050px、画面が小さくなると90vw
      },
    },
  },
  plugins: [],
}