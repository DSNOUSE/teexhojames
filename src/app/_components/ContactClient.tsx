"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { MaterialIcon } from "../../components/MaterialIcon";
import { Navigation } from "../../components/Navigation";
import Footer from "../../components/Footer";
import { useGSAP } from "../../hooks/useGSAP";
import { Button } from "../../components/Button";
import { Section, SectionHeader, Grid, Card } from "../../components";

const initialFormState = {
  fullName: "",
  email: "",
  company: "",
  phone: "",
  services: "",
  hearAbout: "",
  message: "",
};

type FormState = typeof initialFormState;

type FormStatus = "idle" | "sending" | "sent" | "error";

export default function ContactClient() {
  useGSAP();
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }

      setStatus("sent");
      setFormState(initialFormState);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Section padding="lg">
          <div className="h-24" />
          <SectionHeader
            title="Start your connection with us"
            description="Do you have a question or want to work together? Reach out to us and we'll get back to you as soon as possible."
          />

          <div className="flex flex-col items-center space-y-12 mb-16">
            <Card className="relative h-96 w-full max-w-2xl overflow-hidden border-1-5 border-teexho-blue" border={false}>
              <Image src="/images/contact-page.jpg" alt="Contact us" fill className="object-cover" />
            </Card>

            <div className="space-y-8 text-center max-w-2xl">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Head Office</h2>

                <Grid cols={3} gap="lg" className="text-center">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <MaterialIcon name="location_on" className="text-xl text-gray-400 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-medium">Address</p>
                      <p className="text-gray-700 font-medium">Ashton Under Lyne, UK</p>
                      <p className="text-gray-600">
                        1 Hope Street
                        <br />
                        Ashton Under Lyne OL6 9SL
                        <br />
                        United Kingdom
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center space-y-3">
                    <MaterialIcon name="call" className="text-xl text-gray-400 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-medium">Phone</p>
                      <p className="text-gray-600">+234 706 701 3634</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center space-y-3">
                    <MaterialIcon name="mail" className="text-xl text-gray-400 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-medium">Email</p>
                      <p className="text-gray-600">admin@teexhojames.com</p>
                      <p className="text-gray-600">teexhojames@gmail.com</p>
                    </div>
                  </div>
                </Grid>
              </div>
            </div>
          </div>
        </Section>

        <Section bg="gray-50" padding="lg">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">Send us a message</h2>

            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <Grid cols={2} gap="md">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formState.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teexho-blue focus:border-transparent text-sm md:text-base"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teexho-blue focus:border-transparent text-sm md:text-base"
                    placeholder="Enter your email"
                  />
                </div>
              </Grid>

              <Grid cols={2} gap="md">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teexho-blue focus:border-transparent text-sm md:text-base"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teexho-blue focus:border-transparent text-sm md:text-base"
                    placeholder="Enter your phone number"
                  />
                </div>
              </Grid>

              <div>
                <label htmlFor="services" className="block text-sm font-medium text-gray-700 mb-2">
                  Services
                </label>
                <select
                  id="services"
                  name="services"
                  value={formState.services}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teexho-blue focus:border-transparent text-sm md:text-base"
                >
                  <option value="">Select a service</option>
                  <option value="education-consulting">Education Consulting</option>
                  <option value="digital-solutions">Digital Solutions</option>
                  <option value="it-consulting">IT Consulting</option>
                  <option value="business-strategy">Business Strategy</option>
                </select>
              </div>

              <div>
                <label htmlFor="hearAbout" className="block text-sm font-medium text-gray-700 mb-2">
                  How did you hear about Teexho James?
                </label>
                <select
                  id="hearAbout"
                  name="hearAbout"
                  value={formState.hearAbout}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teexho-blue focus:border-transparent text-sm md:text-base"
                >
                  <option value="">Select an option</option>
                  <option value="search">Search Engine</option>
                  <option value="social">Social Media</option>
                  <option value="referral">Referral</option>
                  <option value="advertisement">Advertisement</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teexho-blue focus:border-transparent text-sm md:text-base"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              {status === "sent" && (
                <p className="text-green-600 text-sm text-center">Thanks for reaching out. We'll be in touch soon.</p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-sm text-center">{errorMessage}</p>
              )}

              <div className="text-center">
                <Button
                  type="submit"
                  variant="primary"
                  className="px-6 md:px-8 py-2 md:py-3 text-base md:text-lg"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Submit message"}
                </Button>
              </div>
            </form>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
