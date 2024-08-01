/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(31,70,180,1) 0%, rgba(167,7,180,1) 100%)',
      },
      boxShadow: {
        'glitter': '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(192, 192, 192, 0.8)',
      },
    },
  },
  plugins: [],
}

