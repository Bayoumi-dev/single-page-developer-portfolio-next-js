"use client";

import React, { useEffect, useState } from "react";
import { CaretUpIcSvg } from "../utils/svg";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      id="scroll-button"
      aria-label="Go to the top of the page"
      className={`fixed bottom-8 right-8 z-1000 translate-y-[calc(100%+2rem)] [transition:opacity_0.3s,transform_0.7s] 
      hover:opacity-100 ${visible ? "opacity-75 translate-y-0" : "opacity-0"}`}
      onClick={scrollToTop}
    >
      <CaretUpIcSvg />
    </button>
  );
}
