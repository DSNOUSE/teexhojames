import type { Metadata } from "next";
import { Navigation } from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Section, SectionHeader, Card } from "../../components";

export const metadata: Metadata = {
  title: "Legal Notice",
  description:
    "Read the legal notice for Teexho James Consulting, including business details and usage terms.",
  openGraph: {
    title: "Legal Notice",
    description:
      "Read the legal notice for Teexho James Consulting, including business details and usage terms.",
    url: "/legal-notice",
    images: [
      {
        url: "/images/hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "Teexho James Consulting legal notice",
      },
    ],
  },
  twitter: {
    title: "Legal Notice",
    description:
      "Read the legal notice for Teexho James Consulting, including business details and usage terms.",
  },
};

export default function LegalNoticePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Section padding="lg">
          <div className="h-24" />
          <SectionHeader
            title="Legal notice"
            description="This page will outline business ownership details, terms of use, and legal disclosures."
            centered={false}
          />
          <Card className="p-6 max-w-3xl">
            <p className="text-gray-600">
              We are updating our legal notice content. For immediate questions, please contact our team directly.
            </p>
          </Card>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
