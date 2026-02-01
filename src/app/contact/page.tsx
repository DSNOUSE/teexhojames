'use client';

import { Navigation } from "../../components/Navigation";
import Footer from "../../components/Footer";
import Image from "next/image";
import { useGSAP } from "../../hooks/useGSAP";
import { Button } from "../../components/Button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  useGSAP();

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-white">
          {/* Spacer Container */}
          <div className="h-48"></div>
          
          <div className="container py-16">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-gray-900">
                We'd love to hear from you
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Have a question or want to work together? Reach out to us and we'll get back to you as soon as possible.
              </p>
            </div>

            {/* Contact Content */}
            <div className="flex flex-col items-center space-y-12 mb-16">
              {/* Image */}
              <div className="relative h-96 w-full max-w-2xl rounded-lg overflow-hidden border-1-5 border-teexho-blue">
                <Image
                  src="/images/two-sitting-three.jpg"
                  alt="Contact us"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Contact Details */}
              <div className="space-y-8 text-center max-w-2xl">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Head Office</h2>
                  
                  {/* Contact Details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {/* Address */}
                    <div className="flex flex-col items-center text-center space-y-3">
                      <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700 font-medium">Gillingham, UK</p>
                        <p className="text-gray-600">
                          59 Byron Rd<br />
                          Gillingham ME7 5QH<br />
                          United Kingdom
                        </p>
                      </div>
                    </div>

                    {/* Phone Numbers */}
                    <div className="flex flex-col items-center text-center space-y-3">
                      <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700 font-medium">Phone</p>
                        <p className="text-gray-600">+61 3 1234 5678</p>
                        <p className="text-gray-600">+61 4 1234 5678</p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col items-center text-center space-y-3">
                      <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700 font-medium">Email</p>
                        <p className="text-gray-600">info@teexojames.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                
              </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teexho-blue focus:border-transparent text-sm md:text-base"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  {/* Email Address */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teexho-blue focus:border-transparent text-sm md:text-base"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {/* Company Name */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teexho-blue focus:border-transparent text-sm md:text-base"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teexho-blue focus:border-transparent text-sm md:text-base"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                {/* Services */}
                <div>
                  <label htmlFor="services" className="block text-sm font-medium text-gray-700 mb-2">
                    Services
                  </label>
                  <select
                    id="services"
                    name="services"
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teexho-blue focus:border-transparent text-sm md:text-base"
                  >
                    <option value="">Select a service</option>
                    <option value="education-consulting">Education Consulting</option>
                    <option value="digital-solutions">Digital Solutions</option>
                    <option value="it-consulting">IT Consulting</option>
                    <option value="business-strategy">Business Strategy</option>
                  </select>
                </div>

                {/* How did you hear about us */}
                <div>
                  <label htmlFor="hearAbout" className="block text-sm font-medium text-gray-700 mb-2">
                    How did you hear about Teexho James?
                  </label>
                  <select
                    id="hearAbout"
                    name="hearAbout"
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

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teexho-blue focus:border-transparent text-sm md:text-base"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <Button
                    type="submit"
                    variant="primary"
                    className="px-6 md:px-8 py-2 md:py-3 text-base md:text-lg"
                  >
                    Submit message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        </main>
      <Footer />
    </div>
  );
}
