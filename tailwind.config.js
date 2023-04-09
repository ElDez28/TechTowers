/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ral: ["var(--font-ral)"],
      },
      fontWeight: {
        thin: "100",
        hairline: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        "extra-bold": "800",
        black: "900",
      },
      colors: {
        primary: "#1846ac",
        hcolor: "#3498db",
        lightblue: "		#92a4ba",
      },
      keyframes: {
        move: {
          "0%": {
            transform: "translateY(10px)",
          },

          "100%": {
            transform: "translateY(-10px)",
          },
        },
        moveup: {
          "0%": {
            transform: "translateY(30px)",
            opacity: 0,
          },

          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
      },
      animation: {
        "up-down": "move 2s ease-in-out infinite alternate-reverse both",
        drop: "moveup 200ms ease-in-out",
      },
      variants: {
        display: ["group-hover"],
      },
      screens: {
        xs: "318px",

        sm: "374px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
