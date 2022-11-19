/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#14b8a6',
        secondary:'#64748b',
        dark:'#0f172a',
      },
    },
  },
  plugins: [],
}
