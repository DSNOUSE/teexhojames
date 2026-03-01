import type { Metadata } from "next";
import { Navigation } from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import { Section, SectionHeader, Grid, Card, Button } from "../../../components";

export const metadata: Metadata = {
  title: "Business Strategy",
  description:
    "Strategic planning, market positioning, and execution support for ambitious businesses.",
  openGraph: {
    title: "Business Strategy",
    description:
      "Strategic planning, market positioning, and execution support for ambitious businesses.",
    url: "/services/business-strategy",
    images: [
      {
        url: "/images/hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "Business strategy",
      },
    ],
  },
  twitter: {
    title: "Business Strategy",
    description:
      "Strategic planning, market positioning, and execution support for ambitious businesses.",
  },
};

export default function BusinessStrategyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Section padding="lg">
          <div className="h-24" />
          <SectionHeader
            title="Business Strategy"
            description="Build a clear plan, align teams, and move from vision to execution with confidence."
          />
          <Grid cols={2} gap="lg">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategy pillars</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Market positioning and messaging</li>
                <li>Revenue and growth planning</li>
                <li>Operational efficiency</li>
                <li>Performance metrics</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Engagement flow</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Executive discovery session</li>
                <li>Strategic roadmap creation</li>
                <li>Implementation support</li>
                <li>Quarterly review checkpoints</li>
              </ul>
            </Card>
          </Grid>
          <div className="flex justify-center mt-12">
            <Button href="/contact" variant="primary">
              Plan with us
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
