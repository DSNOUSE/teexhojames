"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MaterialIcon } from "../../components/MaterialIcon";
import { Navigation } from "../../components/Navigation";
import Footer from "../../components/Footer";
import { useGSAP } from "../../hooks/useGSAP";
import { Button } from "../../components/Button";
import { Section, SectionHeader, Grid, Card } from "../../components";

const teamMembers = [
  {
    name: "Teexho James",
    role: "Founder & CEO",
    quote: "Leading with strategy and vision to drive sustainable growth.",
    image: "/images/Tobby_Abby_TeexoJames.png",
    imageAlt: "Teexho James",
  },
  {
    name: "Abby Johnson",
    role: "Head of Operations",
    quote: "Transforming insights into actionable outcomes.",
    image: "/images/Teexho-Exce-Female.png",
    imageAlt: "Abby Johnson",
  },
  {
    name: "Ola Emila",
    role: "Lead Developer",
    quote: "Shaping intuitive experiences that users love.",
    image: "/images/lead-dev.png",
    imageAlt: "Michael Chen",
  },
];

export default function AboutClient() {
  useGSAP();
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/images/group-showing-proof.jpg",
    "/images/two-sitting-three.jpg",
    "/images/male-female.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section style={{ backgroundColor: "#153937" }} className="text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black/40"></div>
            {images.map((image, index) => (
              <div
                key={image}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentImage ? "opacity-30" : "opacity-0"
                }`}
              >
                <Image src={image} alt={`Background image ${index + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
          <div className="container h-full">
            <div className="min-h-[600px] relative z-10 flex items-end justify-start">
              <div className="max-w-4xl pb-12 pl-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                  Shaping smarter business, everywhere
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                  Our focus is on delivering measurable results through innovation, strategy, and collaboration.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Section padding="lg" className="relative overflow-hidden">
          <div className="relative z-10 space-y-6 md:pr-[45%]">
            <SectionHeader
              title="Our purpose is your progress"
              description="Better connected, more productive, and energised to do business in any market."
              centered={false}
              className="mb-4"
            />
            <p className="text-lg text-gray-600 leading-relaxed">
              Customer satisfaction built on trust and results. We believe in creating lasting partnerships that drive
              sustainable growth for our clients through tailored solutions that address their unique challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary">
                Start your journey
              </Button>
            </div>
          </div>

          <div className="absolute inset-0 flex items-end justify-end pointer-events-none">
            <div className="relative w-full h-full max-h-[520px] md:max-h-none md:w-[45%]">
              <Image src="/images/Teexho-Exec-Male.png" alt="Business Strategy" fill className="object-contain object-bottom" />
            </div>
          </div>
        </Section>

        <Section bg="gray-50" padding="lg">
          <SectionHeader
            title="Meet our team"
            description="Our diverse team blends creativity with technical excellence, ensuring every solution delivers measurable impact."
            centered={false}
          />
          <Grid cols={3} gap="lg">
            {teamMembers.map((member) => {
              const isHeadOps = member.role === "Head of Operations";

              return (
                <Card key={member.name} className="p-0 overflow-hidden" shadow="sm">
                  <div className="relative h-80 border-1-5 border-teexho-blue">
                    <Image
                      src={member.image}
                      alt={member.imageAlt}
                      fill
                      className={`object-cover ${isHeadOps ? "object-[center_20%]" : "object-top"}`}
                    />
                  </div>
                <div className="p-6 bg-white">
                  <div className="flex items-center space-x-2 mb-3">
                    <a href="#" className="text-gray-400 hover:text-teexho-blue" aria-label="LinkedIn">
                      <MaterialIcon name="business_center" className="text-xl" />
                    </a>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gray-600 mb-3">{member.role}</p>
                  <p className="text-gray-700 text-sm italic">"{member.quote}"</p>
                </div>
                </Card>
              );
            })}
          </Grid>
        </Section>

        <Section bg="gray-50" padding="lg">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to work together?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your goals and drive meaningful results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary">
                Get in touch
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
