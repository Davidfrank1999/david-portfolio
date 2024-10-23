/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // Define your custom colors here
      pgbackgrd:'#ECE8DD',
      primary: '#3490dc',
      secondary: '#ffed4a',
      danger: '#e3342f'
    },
    extend: {},
  },
  plugins: [],
}

