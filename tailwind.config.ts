import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./ui/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  corePlugins: {
    container: false,
  },
  theme: {
    colors: {
      dark: "#151515;",
      green: "#4ee1a0",
      grey: {
        DEFAULT: "#d9d9d9",
        dark: "#242424",
      },
      white: "#ffffff",
      black: "#000000",
      error: "#ff6f5b",
      transparent: "transparent",
    },
    extend: {
      screens: {
        xs: "22.5em",
        sm: "40em",
        md: "48em",
        lg: "64em",
        xl: "80em",
        "2xl": "87.5em",
        "3xl": "100em",
      },
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        18: "4.5rem",
        21: "5.25rem",
        22: "5.5rem",
        23: "5.75rem",
        25: "6.25rem",
        35: "8.75rem",
        90: "22.5rem",
        100: "25rem",
        480: "120rem",
        unset: "unset",
      },
      backgroundImage: {
        decor: "url('/assets/images/pattern-rings.svg')",
      },
      backgroundSize: {
        "2/1": "200% 100%",
      },
      letterSpacing: {
        tighter: "-0.15625rem",
        widest: "0.142856875rem",
      },
      lineHeight: {
        "0": "0",
      },
      zIndex: {
        "1": "1",
        "100": "100",
        "1000": "1000",
        top: "9999",
      },
      animation: {
        hidden: "hidden 1s 5s forwards",
        typewriter:
          "typing 2.5s 1s steps(40, end) forwards,caret 0.75s step-end infinite",
      },
    },
    keyframes: {
      hidden: {
        "100%": {
          opacity: "0",
          visibility: "hidden",
        },
      },
      typing: {
        "0%": {
          width: "0",
          opacity: "0",
        },
        "50%": {
          opacity: "1",
        },
        "100%": {
          width: "275px",
        },
      },
      caret: {
        "0%": {
          borderColor: "transparent",
        },
        "50%": {
          borderColor: "theme(colors.green)",
        },
        "100%": {
          borderColor: "transparent",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        ".container": {
          width: "100%",
          marginInline: "auto",
          paddingInline: "1.5rem",
          "@media (min-width: 40em)": {
            maxWidth: "36rem",
          },
          "@media (min-width: 48em)": {
            maxWidth: "48rem",
            paddingInline: "2rem",
          },
          "@media (min-width: 64em)": {
            maxWidth: "62rem",
            paddingInline: "0",
          },
          "@media (min-width: 80em)": {
            maxWidth: "69.375rem",
          },
          "@media (min-width: 100em)": {
            maxWidth: "82.5rem",
          },
        },
      });
    }),
  ],
};
export default config;
