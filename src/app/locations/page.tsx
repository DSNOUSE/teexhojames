import type { Metadata } from "next";
import { Navigation } from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Section, SectionHeader, Grid, Card, Button } from "../../components";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Connect with Teexho James Consulting in the UK and get remote support across Nigeria and beyond.",
  openGraph: {
    title: "Teexho James Consulting Locations",
    description:
      "Connect with Teexho James Consulting in the UK and get remote support across Nigeria and beyond.",
    url: "/locations",
    images: [
      {
        url: "/images/contact-page.jpg",
        width: 1200,
        height: 630,
        alt: "Teexho James Consulting locations",
      },
    ],
  },
  twitter: {
    title: "Teexho James Consulting Locations",
    description:
      "Connect with Teexho James Consulting in the UK and get remote support across Nigeria and beyond.",
  },
};

export default function LocationsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Section padding="lg">
          <div className="h-24" />
          <SectionHeader
            title="Our locations"
            description="We support students and businesses globally, with a main office in the UK and remote support across time zones."
          />
          <Grid cols={2} gap="lg">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">United Kingdom</h3>
              <p className="text-gray-600">1 Hope Street, Ashton Under Lyne, OL6 9SL</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Remote support</h3>
              <p className="text-gray-600">
                We work with clients across Nigeria and international time zones through virtual consultations.
              </p>
            </Card>
          </Grid>
          <div className="flex justify-center mt-12">
            <Button href="/contact" variant="primary">
              Contact our team
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
