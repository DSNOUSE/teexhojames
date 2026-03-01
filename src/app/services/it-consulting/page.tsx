import type { Metadata } from "next";
import { Navigation } from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import { Section, SectionHeader, Grid, Card, Button } from "../../../components";

export const metadata: Metadata = {
  title: "IT Consulting",
  description:
    "Technology advisory, infrastructure planning, and delivery support for growing organizations.",
  openGraph: {
    title: "IT Consulting",
    description:
      "Technology advisory, infrastructure planning, and delivery support for growing organizations.",
    url: "/services/it-consulting",
    images: [
      {
        url: "/images/hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "IT consulting",
      },
    ],
  },
  twitter: {
    title: "IT Consulting",
    description:
      "Technology advisory, infrastructure planning, and delivery support for growing organizations.",
  },
};

export default function ItConsultingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Section padding="lg">
          <div className="h-24" />
          <SectionHeader
            title="IT Consulting"
            description="Align your technology stack with business goals through clear strategy and execution support."
          />
          <Grid cols={2} gap="lg">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Focus areas</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Infrastructure assessment</li>
                <li>Systems integration planning</li>
                <li>Security and risk review</li>
                <li>Operational efficiency improvements</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Engagement model</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Discovery and gap analysis</li>
                <li>Technology roadmap delivery</li>
                <li>Vendor and tooling evaluation</li>
                <li>Implementation oversight</li>
              </ul>
            </Card>
          </Grid>
          <div className="flex justify-center mt-12">
            <Button href="/contact" variant="primary">
              Schedule a consultation
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
