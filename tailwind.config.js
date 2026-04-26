export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0c0a14', // Deep charcoal with a purple tint
        cardDark: '#14111f', // Dark card surfaces
        primary: '#a78bfa', // Soft violet
        secondary: '#7c3aed', // Rich purple
        accent: '#c4b5fd', // Light lavender
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
