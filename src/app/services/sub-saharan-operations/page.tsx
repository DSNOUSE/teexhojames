import type { Metadata } from "next";
import Image from "next/image";
import { Navigation } from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import { Section, SectionHeader, Button } from "../../../components";
import { SubSaharanGallery } from "./SubSaharanGallery";

export const metadata: Metadata = {
  title: "Sub-Saharan Operations",
  description:
    "Regional expansion support, operational advisory, and on-the-ground execution for Sub-Saharan markets.",
  openGraph: {
    title: "Sub-Saharan Operations",
    description:
      "Regional expansion support, operational advisory, and on-the-ground execution for Sub-Saharan markets.",
    url: "/services/sub-saharan-operations",
    images: [
      {
        url: "/images/sub-saharan/proj1.jpeg",
        width: 1200,
        height: 630,
        alt: "Sub-Saharan operations support",
      },
    ],
  },
  twitter: {
    title: "Sub-Saharan Operations",
    description:
      "Regional expansion support, operational advisory, and on-the-ground execution for Sub-Saharan markets.",
  },
};

export default function SubSaharanOperationsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/sub-saharan/proj1.jpeg"
              alt="Sub-Saharan operations"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/10" />
          </div>
          <div className="container relative z-10">
            <div className="h-24" />
            <div className="py-16 md:py-24 max-w-3xl">
              <p className="text-sm uppercase tracking-[0.3em] text-white/70 mb-4">
                Sub-Saharan operations
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                Delivering public and private sector projects with confidence.
              </h1>
              <p className="text-lg md:text-xl text-white/85 leading-relaxed">
                Infrastructure, civil works, and development projects supported by trusted local partnerships and
                reliable execution.
              </p>
            </div>
          </div>
        </section>

        <Section padding="lg">
          <SectionHeader
            title="Sub-Saharan Operations"
            description="Regional execution and delivery support across Sub-Saharan Africa."
          />
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              At Teexho James, we execute a wide range of public and private sector contracts across Sub-Saharan Africa.
              We partner with government organisations and agencies throughout the continent to deliver high-quality
              infrastructure, civil works, and development projects.
            </p>
            <p>
              Our experience includes working with the Lagos State Government on road rehabilitation and lane marking
              projects, improving safety and transportation infrastructure. We have also recently completed large-scale
              land clearing works for the Ekiti State Ministry of Agriculture, supporting agricultural development
              initiatives.
            </p>
            <p>
              With strong regional partnerships, local expertise, and a commitment to excellence, Teexho James delivers
              projects efficiently, safely, and to the highest standards across Sub-Saharan Africa.
            </p>
          </div>
          <SubSaharanGallery />
          <div className="flex justify-center mt-12">
            <Button href="/contact" variant="primary">
              Start your project
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
