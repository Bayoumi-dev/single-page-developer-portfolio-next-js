import type { Metadata } from "next";
import "@/ui/styles/globals.css";
import { spaceGroteskFont } from "@/ui/styles/fonts/fonts";

export const metadata: Metadata = {
  title: "Single-page developer portfolio | Frontend Mentor",
  description:
    "This is a solution to Single-page developer portfolio challenge on Frontend Mentor. The purpose of this challenge is to improve my coding skills by building realistic projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceGroteskFont.className}`}>{children}</body>
    </html>
  );
}