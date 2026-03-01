import type { Metadata } from "next";
import { Navigation } from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Section, SectionHeader, Card } from "../../components";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Teexho James Consulting handles, stores, and protects personal information.",
  openGraph: {
    title: "Privacy Policy",
    description:
      "Learn how Teexho James Consulting handles, stores, and protects personal information.",
    url: "/privacy-policy",
    images: [
      {
        url: "/images/hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "Teexho James Consulting privacy policy",
      },
    ],
  },
  twitter: {
    title: "Privacy Policy",
    description:
      "Learn how Teexho James Consulting handles, stores, and protects personal information.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Section padding="lg">
          <div className="h-24" />
          <SectionHeader
            title="Privacy policy"
            description="This page will explain how we collect, use, and protect your personal data."
            centered={false}
          />
          <Card className="p-6 max-w-3xl">
            <p className="text-gray-600">
              We are finalizing our privacy policy content. For any questions, please contact our team directly.
            </p>
          </Card>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
