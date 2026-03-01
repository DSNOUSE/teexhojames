import type { Metadata } from "next";
import HomeClient from "./_components/HomeClient";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Education consulting for Nigerian students and digital solutions for ambitious businesses. Start your journey with Teexho James Consulting.",
  openGraph: {
    title: "Teexho James Consulting",
    description:
      "Education consulting for Nigerian students and digital solutions for ambitious businesses. Start your journey with Teexho James Consulting.",
    url: "/",
    images: [
      {
        url: "/images/hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "Teexho James Consulting",
      },
    ],
  },
  twitter: {
    title: "Teexho James Consulting",
    description:
      "Education consulting for Nigerian students and digital solutions for ambitious businesses. Start your journey with Teexho James Consulting.",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
