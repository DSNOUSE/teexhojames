import type { Metadata } from "next";
import { Navigation } from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import { Section, SectionHeader, Grid, Card, Button } from "../../../components";

export const metadata: Metadata = {
  title: "UK Admissions",
  description:
    "Dedicated guidance for UK university applications, documentation, and deadlines.",
  openGraph: {
    title: "UK Admissions",
    description:
      "Dedicated guidance for UK university applications, documentation, and deadlines.",
    url: "/services/uk-admissions",
    images: [
      {
        url: "/images/hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "UK admissions support",
      },
    ],
  },
  twitter: {
    title: "UK Admissions",
    description:
      "Dedicated guidance for UK university applications, documentation, and deadlines.",
  },
};

export default function UkAdmissionsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Section padding="lg">
          <div className="h-24" />
          <SectionHeader
            title="UK Admissions"
            description="Navigate UCAS, application documents, and university decisions with step-by-step support."
          />
          <Grid cols={2} gap="lg">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">We help with</h3>
              <ul className="space-y-2 text-gray-600">
                <li>UCAS application guidance</li>
                <li>Personal statement feedback</li>
                <li>University shortlisting</li>
                <li>Offer response strategy</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Support timeline</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Initial intake and assessment</li>
                <li>Application drafting sessions</li>
                <li>Submission quality checks</li>
                <li>Next-step planning</li>
              </ul>
            </Card>
          </Grid>
          <div className="flex justify-center mt-12">
            <Button href="/contact" variant="primary">
              Apply with confidence
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
