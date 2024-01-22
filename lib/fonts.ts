import localFont from "next/font/local";

export const spaceGroteskFont = localFont({
  src: [
    {
      path: "../public/assets/fonts/SpaceGrotesk-VariableFont_wght.ttf",
      weight: "500",
    },
    {
      path: "../public/assets/fonts/SpaceGrotesk-VariableFont_wght.ttf",
      weight: "700",
    },
  ],
});
