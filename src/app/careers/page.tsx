import type { Metadata } from "next";
import { Navigation } from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Section, SectionHeader, Card, Button } from "../../components";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore opportunities to join Teexho James Consulting. We are always excited to meet talented collaborators.",
  openGraph: {
    title: "Careers at Teexho James Consulting",
    description:
      "Explore opportunities to join Teexho James Consulting. We are always excited to meet talented collaborators.",
    url: "/careers",
    images: [
      {
        url: "/images/hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "Careers at Teexho James Consulting",
      },
    ],
  },
  twitter: {
    title: "Careers at Teexho James Consulting",
    description:
      "Explore opportunities to join Teexho James Consulting. We are always excited to meet talented collaborators.",
  },
};

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Section padding="lg">
          <div className="h-24" />
          <SectionHeader
            title="Careers"
            description="We are always looking for thoughtful, service-minded professionals to join our team."
          />
          <Card className="p-6 max-w-3xl mx-auto">
            <p className="text-gray-600">
              We do not have open roles listed right now, but we would still love to hear from you. Share your profile and
              the impact you want to make with our team.
            </p>
          </Card>
          <div className="flex justify-center mt-12">
            <Button href="/contact" variant="primary">
              Send your details
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
