import type { Config } from "tailwindcss";
import  plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./ui/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  corePlugins: {
    container: false,
  },
  theme: {
    colors: {
      dark: "#151515;",
      green: {
        DEFAULT: "#4ee1a0",
        dark: "#242424",
      },
      grey: "#d9d9d9",
      white: "#ffffff",
      error: "#ff6f5b",
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
        22: "5.5rem",
        198: "12.375rem",
        218: "13.625rem",
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
            paddingInline: "2.5rem",
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
