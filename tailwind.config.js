/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      clipPath: {
        'cross-cut': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 90%)',
      },
    },
  },
  plugins: [
    function({ addUtilities, theme }) {
      const clipPathUtilities = theme('clipPath');
      const clipPathUtilitiesClasses = Object.keys(clipPathUtilities).map(key => {
        return {
          [`.clip-path-${key}`]: {
            clipPath: clipPathUtilities[key],
          },
        };
      });

      addUtilities(clipPathUtilitiesClasses, ['responsive', 'hover']);
    },
  ],
}

