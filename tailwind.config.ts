import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./ui/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
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
    container: {
      center: true,
      screens: {
        md: em(768),
        lg: em(992),
        xl: em(1110),
        "2xl": em(1320),
      },
      padding: {
        DEFAULT: "1.5rem",
        md: "2.5rem",
        xl: "0",
      },
    },
    extend: {
      screens: {
        xs: em(360),
        sm: em(640),
        md: em(768),
        lg: em(1024),
        xl: em(1280),
        "2xl": em(1400),
        "3xl": em(1600),
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
  plugins: [],
};
export default config;

/**
 * @description Pixel to em
 */
function em(px: number) {
  return `${px / 16}em`;
}
