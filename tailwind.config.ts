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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      letterSpacing: {
        tighter: "-0.15625rem",
        widest: "0.142856875rem",
      },
      lineHeight: {
        "0": "0",
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
