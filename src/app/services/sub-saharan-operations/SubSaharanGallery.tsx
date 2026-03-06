"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  { src: "/images/sub-saharan/proj2.jpeg", alt: "Sub-Saharan project highlight" },
  { src: "/images/sub-saharan/proj3.jpeg", alt: "Sub-Saharan operations detail" },
  { src: "/images/sub-saharan/proj4.jpeg", alt: "Civil works delivery" },
  { src: "/images/sub-saharan/proj5.jpeg", alt: "Regional infrastructure project" },
  { src: "/images/sub-saharan/proj6.jpeg", alt: "On-the-ground operations" },
  { src: "/images/sub-saharan/proj7.jpeg", alt: "Project site progress" },
  { src: "/images/sub-saharan/proj8.jpeg", alt: "Field execution" },
];

export function SubSaharanGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="mt-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg focus:outline-none"
            aria-label={`Open image ${index + 1}`}
          >
            <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <button
            type="button"
            className="absolute inset-0"
            aria-label="Close image preview"
            onClick={() => setActiveIndex(null)}
          />
          <div className="relative z-[61] w-full max-w-4xl">
            <button
              type="button"
              className="absolute -top-10 right-0 text-white/80 hover:text-white text-sm"
              onClick={() => setActiveIndex(null)}
            >
              Close
            </button>
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-3xl bg-black">
              <Image
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
