/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#000000',
        'neon-gold': '#FFD700',
        'neon-purple': '#ff00ff',
        'neon-cyan': '#00ffff',
        'neon-red': '#ff0055',
        'neon-green': '#00ff00',
        'glass-bg': 'rgba(0, 0, 0, 0.9)',
      },
      fontFamily: {
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'mono': ['"Share Tech Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-gold': '0 0 10px #FFD700',
        'glow-purple': '0 0 10px #ff00ff',
        'glow-cyan': '0 0 10px #00ffff',
        'glow-green': '0 0 10px #00ff00',
      }
    },
  },
  plugins: [],
}
