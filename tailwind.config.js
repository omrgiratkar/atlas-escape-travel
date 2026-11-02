/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { forest: '#102a27', moss: '#627b65', sand: '#f4f0e8', clay: '#c97855', ink: '#18211f' },
    fontFamily: { sans: ['DM Sans', 'sans-serif'], display: ['Playfair Display', 'serif'] }
  }},
  plugins: []
}