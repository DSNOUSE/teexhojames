import type { Metadata } from "next";
import { Navigation } from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import { Section, SectionHeader, Grid, Card, Button } from "../../../components";

export const metadata: Metadata = {
  title: "Europe Admissions",
  description:
    "Guidance for EU university admissions, program matching, and documentation support.",
  openGraph: {
    title: "Europe Admissions",
    description:
      "Guidance for EU university admissions, program matching, and documentation support.",
    url: "/services/europe-admissions",
    images: [
      {
        url: "/images/hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "Europe admissions support",
      },
    ],
  },
  twitter: {
    title: "Europe Admissions",
    description:
      "Guidance for EU university admissions, program matching, and documentation support.",
  },
};

export default function EuropeAdmissionsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Section padding="lg">
          <div className="h-24" />
          <SectionHeader
            title="Europe Admissions"
            description="Get tailored support for admissions across Europe, including program fit and application readiness."
          />
          <Grid cols={2} gap="lg">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">We cover</h3>
              <ul className="space-y-2 text-gray-600">
                <li>EU program and school matching</li>
                <li>Application documentation review</li>
                <li>Scholarship guidance</li>
                <li>Offer evaluation</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our process</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Initial intake and screening</li>
                <li>Targeted application planning</li>
                <li>Submission timeline support</li>
                <li>Enrollment readiness</li>
              </ul>
            </Card>
          </Grid>
          <div className="flex justify-center mt-12">
            <Button href="/contact" variant="primary">
              Explore EU options
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
