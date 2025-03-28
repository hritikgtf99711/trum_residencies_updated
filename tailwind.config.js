/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gtf-pink": "#d93f92",
        "gtf-yellow": "#FDE93D",
        "gtf-blue": "#2AAEE4",
        "global-color": "#1E251F"
      },
      fontSize: {
        'xs': ['0.75rem', '1rem'],      // 12px / 16px
        'sm': ['0.875rem', '1.25rem'],  // 14px / 20px
        'base': ['1rem', '1.5rem'],     // 16px / 24px
        'lg': ['1.125rem', '1.75rem'],  // 18px / 28px
        'xl': ['1.25rem', '2rem'],      // 20px / 32px
        '2xl': ['1.5rem', '2.25rem'],   // 24px / 36px
        '3xl': ['1.875rem', '2.5rem'],  // 30px / 40px
        '4xl': ['2.25rem', '2.75rem'],  // 36px / 44px
        '5xl': ['3.5rem', '4rem'],      // 56px / 64px
        '6xl': ['3.75rem', '4.25rem'],  // 60px / 68px
      },
      fontWeight: {
        'thin': 100,
        'extralight': 200,
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
        'black': 900,
      },
      // Define custom container screens
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.custom_container': {
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.4'),  // 1rem = 16px
          paddingRight: theme('spacing.4'), // 1rem = 16px
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: theme('screens.sm'),
          },
          '@screen md': {
            maxWidth: theme('screens.md'),
          },
          '@screen lg': {
            maxWidth: theme('screens.lg'),
          },
          '@screen xl': {
            maxWidth: theme('screens.xl'),
          },
          '@screen 2xl': {
            maxWidth: theme('screens.2xl'),
          },
        },
      });
    }),
  ],
};