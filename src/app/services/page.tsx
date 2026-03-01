import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Section, SectionHeader, Grid, Card, Button } from "../../components";

const serviceLinks = [
  {
    title: "Education Consulting",
    description: "Admissions guidance, application support, and academic planning.",
    href: "/services/education-consulting",
  },
  {
    title: "Digital Solutions",
    description: "Web, marketing, and digital growth systems for modern teams.",
    href: "/services/digital-solutions",
  },
  {
    title: "IT Consulting",
    description: "Technology strategy, infrastructure advisory, and delivery support.",
    href: "/services/it-consulting",
  },
  {
    title: "Business Strategy",
    description: "Market positioning, operations alignment, and execution planning.",
    href: "/services/business-strategy",
  },
  {
    title: "UK Admissions",
    description: "End-to-end guidance for UK university applications.",
    href: "/services/uk-admissions",
  },
  {
    title: "Europe Admissions",
    description: "Support for EU programs, documentation, and next steps.",
    href: "/services/europe-admissions",
  },
  {
    title: "Student Visa Support",
    description: "Visa documentation review and compliance support.",
    href: "/services/student-visa",
  },
];

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore education consulting, digital solutions, and business strategy services from Teexho James Consulting.",
  openGraph: {
    title: "Teexho James Consulting Services",
    description:
      "Explore education consulting, digital solutions, and business strategy services from Teexho James Consulting.",
    url: "/services",
    images: [
      {
        url: "/images/hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "Teexho James Consulting services",
      },
    ],
  },
  twitter: {
    title: "Teexho James Consulting Services",
    description:
      "Explore education consulting, digital solutions, and business strategy services from Teexho James Consulting.",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Section padding="lg">
          <div className="h-24" />
          <SectionHeader
            title="Our solutions"
            description="Choose a service area to see how we support students and businesses with tailored guidance."
          />

          <Grid cols={3} gap="lg">
            {serviceLinks.map((service) => (
              <Card key={service.title} className="p-6" hover>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link className="text-teexho-blue font-semibold" href={service.href}>
                  Learn more
                </Link>
              </Card>
            ))}
          </Grid>

          <div className="flex justify-center mt-12">
            <Button href="/contact" variant="primary">
              Book a consultation
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
