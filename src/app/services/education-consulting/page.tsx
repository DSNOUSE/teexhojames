import type { Metadata } from "next";
import { Navigation } from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import { Section, SectionHeader, Grid, Card, Button } from "../../../components";

export const metadata: Metadata = {
  title: "Education Consulting",
  description:
    "Admissions guidance, application support, and study planning to help you secure the right university placement.",
  openGraph: {
    title: "Education Consulting",
    description:
      "Admissions guidance, application support, and study planning to help you secure the right university placement.",
    url: "/services/education-consulting",
    images: [
      {
        url: "/images/hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "Education consulting",
      },
    ],
  },
  twitter: {
    title: "Education Consulting",
    description:
      "Admissions guidance, application support, and study planning to help you secure the right university placement.",
  },
};

export default function EducationConsultingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Section padding="lg">
          <div className="h-24" />
          <SectionHeader
            title="Education Consulting"
            description="Personalized support to help you navigate applications, admissions, and next steps with confidence."
          />
          <Grid cols={2} gap="lg">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What we cover</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Course and university selection</li>
                <li>Application planning and timelines</li>
                <li>Personal statement review</li>
                <li>Offer evaluation and next steps</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How we work</h3>
              <ul className="space-y-2 text-gray-600">
                <li>One-on-one strategy session</li>
                <li>Document and profile review</li>
                <li>Weekly progress checkpoints</li>
                <li>Ongoing support until decision</li>
              </ul>
            </Card>
          </Grid>
          <div className="flex justify-center mt-12">
            <Button href="/contact" variant="primary">
              Start your application
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
