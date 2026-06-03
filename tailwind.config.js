export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        /* Aurora wave */
        aurora: {
          '0%': {
            transform: 'translateX(-20%) rotate(-8deg)',
            opacity: '0.4',
          },
          '50%': {
            transform: 'translateX(20%) rotate(4deg)',
            opacity: '0.6',
          },
          '100%': {
            transform: 'translateX(-20%) rotate(-8deg)',
            opacity: '0.4',
          },
        },

        /* Floating energy blobs */
        floatSlow: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(40px, -30px)' },
        },
        floatSlower: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-50px, 20px)' },
        },
        floatSlowest: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(30px, 40px)' },
        },
      },

      animation: {
        aurora: 'aurora 18s ease-in-out infinite',
        'float-slow': 'floatSlow 18s ease-in-out infinite',
        'float-slower': 'floatSlower 25s ease-in-out infinite',
        'float-slowest': 'floatSlowest 32s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}


