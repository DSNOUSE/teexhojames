import type { Metadata } from "next";
import { Navigation } from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import { Section, SectionHeader, Grid, Card, Button } from "../../../components";

export const metadata: Metadata = {
  title: "Digital Solutions",
  description:
    "Digital experiences, marketing systems, and operational tooling that help your business scale with clarity.",
  openGraph: {
    title: "Digital Solutions",
    description:
      "Digital experiences, marketing systems, and operational tooling that help your business scale with clarity.",
    url: "/services/digital-solutions",
    images: [
      {
        url: "/images/hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "Digital solutions",
      },
    ],
  },
  twitter: {
    title: "Digital Solutions",
    description:
      "Digital experiences, marketing systems, and operational tooling that help your business scale with clarity.",
  },
};

export default function DigitalSolutionsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Section padding="lg">
          <div className="h-24" />
          <SectionHeader
            title="Digital Solutions"
            description="Build a modern digital presence with strategy-led execution and measurable outcomes."
          />
          <Grid cols={2} gap="lg">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What we deliver</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Website and landing page design</li>
                <li>Digital marketing campaigns</li>
                <li>Content and brand systems</li>
                <li>Analytics and optimization</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How we work</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Discovery and audit workshops</li>
                <li>Roadmap and sprint planning</li>
                <li>Implementation and QA</li>
                <li>Performance reporting</li>
              </ul>
            </Card>
          </Grid>
          <div className="flex justify-center mt-12">
            <Button href="/contact" variant="primary">
              Discuss your project
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
