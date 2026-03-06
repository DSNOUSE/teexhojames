"use client";

import { useState } from "react";
import Image from "next/image";
import { MaterialIcon } from "../../components/MaterialIcon";
import { Navigation } from "../../components/Navigation";
import { Hero } from "../../components/Hero";
import { Services } from "../../components/Services";
import Footer from "../../components/Footer";
import { useGSAP } from "../../hooks/useGSAP";
import { Button } from "../../components/Button";
import { Section, SectionHeader, Grid, Card } from "../../components";

const featureItems = [
  {
    title: "Proven Success",
    content: (
      <p className="text-gray-600">
        <span className="counter" data-target="500">0</span> students successfully placed in top universities and{" "}
        <span className="counter" data-target="100">0</span> digital projects delivered with excellence.
      </p>
    ),
    icon: "check_circle",
  },
  {
    title: "Expert Guidance",
    content: (
      <p className="text-gray-600">
        Our team of experienced consultants provides personalized support every step of the way.
      </p>
    ),
    icon: "group",
  },
  {
    title: "Fast Results",
    content: (
      <p className="text-gray-600">
        Streamlined processes ensure quick admissions and rapid digital project delivery.
      </p>
    ),
    icon: "bolt",
  },
];

const teamItems = [
  {
    title: "Personalized Guidance",
    description: "One-on-one consulting sessions",
    image: "/images/Imagine an image of people Teexo James Consulting staff doing Education & Training. (1).jpg",
    alt: "Education Training Session",
  },
  {
    title: "Group Workshops",
    description: "Collaborative learning experiences",
    image: "/images/Imagine an image of people Teexo James Consulting staff doing Education & Training. (2).jpg",
    alt: "Group Training Workshop",
  },
  {
    title: "Digital Skills",
    description: "Technology training for modern careers",
    image: "/images/Imagine an image of people Teexo James Consulting staff doing Education & Training. (3).jpg",
    alt: "Digital Skills Training",
  },
];

const testimonials = [
  {
    quote:
      "The team exceeded our expectations with their innovative solutions and professional approach. Truly a game-changer for our business.",
    name: "Sarah Johnson",
    role: "CEO, TechStart",
  },
  {
    quote:
      "Outstanding service and support. They helped me navigate the complex university application process with ease.",
    name: "Michael Chen",
    role: "Student, Engineering",
  },
  {
    quote:
      "Their digital solutions transformed our online presence completely. Highly recommend their expertise!",
    name: "Emily Davis",
    role: "Marketing Director",
  },
  {
    quote:
      "The educational consulting provided was exceptional. They guided me through every step and helped me secure admission to my dream university.",
    name: "Amina S.",
    role: "Computer Science, University of Manchester",
  },
  {
    quote:
      "Professional, efficient, and results-driven. Our digital marketing campaign saw a 300% increase in leads within just 3 months.",
    name: "David Kim",
    role: "Operations Manager, TechCorp Ltd",
  },
  {
    quote:
      "The personalized attention and expert guidance made all the difference. I couldn't have done it without their support.",
    name: "James Wilson",
    role: "MBA Student, London Business School",
  },
];

const faqItems = [
  {
    question: "What services do you offer?",
    answer:
      "We offer educational consulting, digital solutions, and business strategy services. Our comprehensive approach helps students achieve their academic goals and businesses scale effectively.",
  },
  {
    question: "How do I get started with your services?",
    answer:
      "Getting started is easy! Simply book a consultation call through our website, and we'll discuss your specific needs and create a personalized plan to help you achieve your goals.",
  },
  {
    question: "What makes your approach different?",
    answer:
      "We combine deep expertise with personalized attention. Our team takes the time to understand your unique challenges and develops tailored solutions that deliver measurable results.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes! We provide comprehensive support throughout your journey. From initial consultation to implementation and beyond, we're here to ensure your success.",
  },
];

export default function HomeClient() {
  useGSAP();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Services />

        <Section className="features bg-[#f0fffe]" padding="lg">
          <SectionHeader
            title="Why Choose Teexho James?"
            description="We combine deep expertise with personalized service to deliver exceptional results for students and businesses alike."
          />

          <Grid cols={3} gap="lg">
            {featureItems.map((item) => {
              return (
                <Card key={item.title} className="feature-card p-8 text-center space-y-4" hover>
                  <div className="w-16 h-16 bg-teexho-blue/10 rounded-full flex items-center justify-center mx-auto">
                    <MaterialIcon name={item.icon} className="text-3xl text-teexho-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  {item.content}
                </Card>
              );
            })}
          </Grid>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button href="/contact" className="bg-white text-gray-900 hover:bg-gray-100">
              Book a call Today
            </Button>
          </div>
        </Section>

        <Section className="team-section" padding="lg">
          <SectionHeader
            title="Expert Guidance Every Step of the Way"
            description="Our experienced team provides personalized education and training to ensure your success."
          />
          <Grid cols={3} gap="lg">
            {teamItems.map((item) => (
              <Card
                key={item.title}
                className="team-image relative overflow-hidden group border-1-5 border-teexho-blue"
                shadow="lg"
                border={false}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-white"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                  <p className="text-white/90 text-sm">{item.description}</p>
                </div>
              </Card>
            ))}
          </Grid>
        </Section>

        <Section className="testimonials" bg="gray-50" padding="lg">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gray-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-lg font-semibold text-gray-900">4.6 Rate by 16,000+ Reviews</span>
            </div>
            <h2 className="section-title text-4xl font-bold text-gray-900 mb-4">What our clients say</h2>
            <p className="section-description text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by teams and businesses worldwide, here's what people love about working with us.
            </p>
          </div>

          <div
            className="overflow-x-auto scrollbar-hide relative"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-white z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-white z-10 pointer-events-none"></div>

            <div
              className="flex gap-8 pb-4"
              style={{ scrollBehavior: "smooth", animation: "scroll 40s linear infinite" }}
              onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
              onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <Card
                  key={`${testimonial.name}-${index}`}
                  className="testimonial-card min-w-[350px] p-6"
                  shadow="sm"
                >
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-gray-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        <Section className="faq" padding="lg">
          <Grid cols={2} gap="xl" className="items-start">
            <div>
              <SectionHeader
                title="Frequently asked questions"
                description="Do you have questions? We have answers. Find everything you need to know about our services."
                centered={false}
                className="mb-8"
              />
              <Button href="/contact" variant="primary">
                Still have questions? Contact us
              </Button>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={item.question} className="bg-gray-50 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                    <MaterialIcon
                      name="expand_more"
                      className={`text-xl text-gray-500 transition-transform duration-300 ${
                        openFAQ === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`px-6 overflow-hidden transition-all duration-300 ${
                      openFAQ === index ? "py-4 max-h-40" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </Grid>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
