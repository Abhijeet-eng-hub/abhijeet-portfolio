/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#070709',
          900: '#0b0b0f',
          850: '#111117',
          800: '#171722',
          700: '#222232',
          600: '#2d2d42',
        },
        gold: {
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#d4af37', // Royal Gold
          600: '#b89228',
          700: '#926d17',
          800: '#73510f',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'royal': '0 0 30px -5px rgba(212, 175, 55, 0.15)',
        'royal-lg': '0 0 50px -5px rgba(212, 175, 55, 0.25)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #d4af37 0%, #fef08a 50%, #b89228 100%)',
        'royal-gradient': 'linear-gradient(135deg, #171722 0%, #0b0b0f 100%)',
      }
    },
  },
  plugins: [],
}
