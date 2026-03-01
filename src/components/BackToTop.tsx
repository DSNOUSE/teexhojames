"use client";

import { useEffect, useState } from "react";
import { MaterialIcon } from "./MaterialIcon";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg ring-1 ring-black/10 transition hover:-translate-y-0.5 hover:bg-gray-50"
    >
      <MaterialIcon name="arrow_upward" className="text-xl" />
    </button>
  );
}
