/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d', // Industrial Gray
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#000000', // Industrial Black
        },
        secondary: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#000000',
        },
        accent: {
          electric: '#00ffff', // Electric Blue
          warning: '#ffc107', // Warning Yellow
          success: '#28a745', // Success Green
          danger: '#dc3545', // Danger Red
        },
        industrial: {
          steel: '#4a5568',
          iron: '#2d3748',
          carbon: '#1a202c',
          titanium: '#718096',
        }
      },
      fontFamily: {
        'mono': ['Courier New', 'monospace'],
        'tech': ['Roboto Mono', 'monospace'],
        'industrial': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'flicker': 'flicker 2s infinite',
        'circuit': 'circuit 3s ease-in-out infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        circuit: {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      boxShadow: {
        'neon': '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff',
        'industrial': '0 8px 32px rgba(0, 0, 0, 0.8)',
        'steel': '0 4px 20px rgba(74, 85, 104, 0.4)',
      }
    },
  },
  plugins: [],
}