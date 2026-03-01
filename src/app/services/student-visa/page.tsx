import type { Metadata } from "next";
import { Navigation } from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import { Section, SectionHeader, Grid, Card, Button } from "../../../components";

export const metadata: Metadata = {
  title: "Student Visa Support",
  description:
    "Visa application guidance, document review, and preparation support for student travel.",
  openGraph: {
    title: "Student Visa Support",
    description:
      "Visa application guidance, document review, and preparation support for student travel.",
    url: "/services/student-visa",
    images: [
      {
        url: "/images/hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "Student visa support",
      },
    ],
  },
  twitter: {
    title: "Student Visa Support",
    description:
      "Visa application guidance, document review, and preparation support for student travel.",
  },
};

export default function StudentVisaPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Section padding="lg">
          <div className="h-24" />
          <SectionHeader
            title="Student Visa Support"
            description="Prepare your visa submission with clear guidance and documentation checks."
          />
          <Grid cols={2} gap="lg">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What we help with</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Document checklist preparation</li>
                <li>Financial evidence review</li>
                <li>Application readiness coaching</li>
                <li>Interview preparation support</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Next steps</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Initial consultation call</li>
                <li>Visa readiness assessment</li>
                <li>Submission checklist</li>
                <li>Post-submission guidance</li>
              </ul>
            </Card>
          </Grid>
          <div className="flex justify-center mt-12">
            <Button href="/contact" variant="primary">
              Get visa support
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
