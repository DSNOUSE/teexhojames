import type { Metadata } from "next";
import ContactClient from "../_components/ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Teexho James Consulting to discuss education consulting, digital solutions, or business strategy support.",
  openGraph: {
    title: "Contact Teexho James Consulting",
    description:
      "Contact Teexho James Consulting to discuss education consulting, digital solutions, or business strategy support.",
    url: "/contact",
    images: [
      {
        url: "/images/contact-page.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Teexho James Consulting",
      },
    ],
  },
  twitter: {
    title: "Contact Teexho James Consulting",
    description:
      "Contact Teexho James Consulting to discuss education consulting, digital solutions, or business strategy support.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
