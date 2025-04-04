/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "var(--font-montserrat), sans-serif",
        cinzel: "var(--font-cinzel), serif",
      },
      spacing: {
        section: "6rem",
      
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(268.61deg, #D8C7AD 27.18%, #E8C183 76.63%)",
        "text-gradient":
          "linear-gradient(269.21deg, #FFFFFF -4.57%, #8D8D8D -4.56%, #FFFFFF 100.56%, #999999 100.57%)",
      },
      colors: {
        "primary-color": "#E8C18399",
        "btn-color": "#E8C183",
        "global-color": "#1E251F",
        "comment-button-bg": "#FDE93D",
        "comment-button-text": "#1E251F",
      },
      fontSize: {
        xs: ["0.75rem", "1rem"],
        sm: ["0.875rem", "1.25rem"],
        base: ["1rem", "1.5rem"],
        lg: ["1.125rem", "1.75rem"],
        xl: ["1.25rem", "2rem"],
        "2xl": ["1.5rem", "2.25rem"],
        "3xl": ["1.875rem", "2.5rem"],
        "4xl": ["2.25rem", "2.75rem"],
        "5xl": ["3.5rem", "4rem"],
        "6xl": ["3.75rem", "4.25rem"],
      },
      fontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      screens: {
        sm: "540px",
        md: "991px",
        lg: "1200px",
        xl: "1140px",
        "2xl": "1320px",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".custom_container": {
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: theme("spacing.4"),
          paddingRight: theme("spacing.4"),
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: theme("screens.sm"),
          },
          "@screen md": {
            maxWidth: theme("screens.md"),
          },
          "@screen lg": {
            maxWidth: theme("screens.lg"),
          },
          "@screen xl": {
            maxWidth: theme("screens.xl"),
          },
          "@screen 2xl": {
            maxWidth: theme("screens.2xl"),
          },
        },
        // Custom button styles for comment button
        ".comment-button": {
          backgroundColor: theme("colors.btn-color"),
          color: theme("colors.global-color"),
          fontWeight: theme("fontWeight.thin"),
          padding: "0.5rem 1rem",
          border: "2px solid transparent",
          textAlign: "center",
          transition: "background-color 0.3s ease, transform 0.2s ease",
          "&:hover": {
            backgroundColor: theme("colors.btn-color"),
            transform: "scale(1.05)",
          },
          "&:focus": {
            outline: "none",
            boxShadow: "0 0 0 2px rgba(47, 174, 228, 0.8)",
          },
        },
        ".heading_container span": {
          textTransform: "uppercase",
          color: "#D6D6D6",
        },
        h2: {
          fontSize: theme("fontSize.4xl"),
          textTransform: "uppercase", // Corrected spelling
          color: theme("colors.btn-color"),
        },
        p: {
          fontSize: "14px",
        },
        h3: {
          fontSize: theme("fontSize.3xl"),
        },
        ".custom-text-gradient": {
          "background-image":
            "linear-gradient(269.21deg, #FFFFFF -4.57%, #8D8D8D -4.56%, #FFFFFF 100.56%, #999999 100.57%)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
        ".black_texture_one": {
          "background-image": "url('/assets/images/amenities_texture.jpg')",
          "background-size": "cover",
          "background-position": "center",
        },
        ".black_texture_two": {
          "background-image": "url('/assets/images/tribeca_bg.jpg')",
          "background-size": "cover",
          "background-position": "center",
        },
        ".black_texture_three": {
          "background-image": "url('/assets/images/smart_world_bg.jpg')",
          "background-size": "cover",
          "background-position": "center",
        },
        // Media Query Fixes (Correctly Nested)
        "@media (max-width: 720px)": {
          h2: {
            fontSize: "1.5rem", // Smaller font size for smaller screens
            letterSpacing: "1px",
          },
          p: {
            fontSize: "12px",
          },
        },
        "@media (max-width: 767px)": {
        spacing: {
              section: "4rem",
            
            },
        
        },
      });
    }),
  ],
};
