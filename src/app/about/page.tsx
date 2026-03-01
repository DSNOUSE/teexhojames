import type { Metadata } from "next";
import AboutClient from "../_components/AboutClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Teexho James Consulting. We help students access global education and support businesses with strategy and digital solutions.",
  openGraph: {
    title: "About Teexho James Consulting",
    description:
      "Meet Teexho James Consulting. We help students access global education and support businesses with strategy and digital solutions.",
    url: "/about",
    images: [
      {
        url: "/images/group-showing-proof.jpg",
        width: 1200,
        height: 630,
        alt: "Teexho James Consulting team",
      },
    ],
  },
  twitter: {
    title: "About Teexho James Consulting",
    description:
      "Meet Teexho James Consulting. We help students access global education and support businesses with strategy and digital solutions.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
