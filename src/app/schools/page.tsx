import type { Metadata } from "next";
import Image from "next/image";
import { Navigation } from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Button } from "../../components/Button";
import { Section, SectionHeader, Grid, Card } from "../../components";

export const metadata: Metadata = {
  title: "Partner Schools",
  description:
    "Explore partner schools in the UK and Europe with admissions support from Teexho James Consulting.",
  openGraph: {
    title: "Partner Schools",
    description:
      "Explore partner schools in the UK and Europe with admissions support from Teexho James Consulting.",
    url: "/schools",
    images: [
      {
        url: "/images/partner-school-page.jpg",
        width: 1200,
        height: 630,
        alt: "Partner schools",
      },
    ],
  },
  twitter: {
    title: "Partner Schools",
    description:
      "Explore partner schools in the UK and Europe with admissions support from Teexho James Consulting.",
  },
};

export default function SchoolsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Content will be added here */}
        <section className="relative overflow-hidden">
          <div className="h-20" />
          <div className="relative h-[420px] sm:h-[480px]">
            <Image
              src="/images/partner-school-page.jpg"
              alt="Partner schools"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-transparent" />
            <div className="absolute inset-0">
              <div className="container h-full flex items-center">
                <div className="max-w-3xl">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    Partner Schools
                  </h1>
                  <p className="mt-4 text-lg md:text-xl text-white/90 leading-relaxed">
                    Admissions support for UK and Europe universities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section padding="lg">
          <SectionHeader
            title="Admissions support you can trust"
            description="We offer education consulting and admissions support for students applying to universities across the UK and Europe. From course selection and application guidance to document review and next steps, we help you move forward with clarity."
          />

          <div className="mt-8 flex justify-center">
            <Button href="/contact" variant="secondary">
              Start your application
            </Button>
          </div>

          <Grid cols={2} gap="lg" className="mt-12">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">UK partner schools</h2>
              <ul className="space-y-3 text-gray-700">
                <li>University of Sunderland</li>
                <li>Anglia Ruskin University</li>
                <li>University of Winchester</li>
                <li>University of Bolton</li>
                <li>University of Surrey</li>
              </ul>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Europe admissions</h2>
              <ul className="space-y-3 text-gray-700">
                <li>University College Dublin</li>
                <li>Trinity College Dublin</li>
                <li>University of Lisbon (Universidade de Lisboa)</li>
                <li>University of Porto (Universidade do Porto)</li>
              </ul>
            </Card>
          </Grid>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
