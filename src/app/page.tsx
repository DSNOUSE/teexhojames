'use client';

import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "../hooks/useGSAP";
import { CheckCircle, Users, Zap, ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "../components/Button";
import { useState } from "react";

export default function Home() {
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
        
        {/* Why Choose Us Section */}
        <section className="features py-24" style={{backgroundColor: '#f0fffe'}}>
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="section-title text-4xl font-bold text-gray-900 mb-4">
                Why Choose Teexho James?
              </h2>
              <p className="section-description text-xl text-gray-600 max-w-3xl mx-auto">
                We combine deep expertise with personalized service to deliver exceptional results for students and businesses alike.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="feature-card text-center space-y-4">
                <div className="w-16 h-16 bg-teexho-blue/10 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-teexho-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Proven Success</h3>
                <p className="text-gray-600">
                  <span className="counter" data-target="500">0</span>+ students successfully placed in top universities and <span className="counter" data-target="100">0</span>+ digital projects delivered with excellence.
                </p>
              </div>

              <div className="feature-card text-center space-y-4">
                <div className="w-16 h-16 bg-teexho-blue/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-teexho-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Expert Guidance</h3>
                <p className="text-gray-600">
                  Our team of experienced consultants provides personalized support every step of the way.
                </p>
              </div>

              <div className="feature-card text-center space-y-4">
                <div className="w-16 h-16 bg-teexho-red/10 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="w-8 h-8 text-teexho-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Fast Results</h3>
                <p className="text-gray-600">
                  Streamlined processes ensure quick admissions and rapid digital project delivery.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Button href="/contact" className="bg-white text-gray-900 hover:bg-gray-100">
                Book a call Today
              </Button>
            </div>
          </div>
        </section>

        {/* Team/Training Section */}
        <section className="team-section py-24 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="section-title text-4xl font-bold text-gray-900 mb-4">
                Expert Guidance Every Step of the Way
              </h2>
              <p className="section-description text-xl text-gray-600 max-w-3xl mx-auto">
                Our experienced team provides personalized education and training to ensure your success.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="team-image relative rounded-xl overflow-hidden shadow-lg group border-1-5 border-teexho-blue">
                <Image
                  src="/images/Imagine an image of people Teexo James Consulting staff doing Education & Training. (1).jpg"
                  alt="Education Training Session"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-white"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">Personalized Guidance</h3>
                  <p className="text-white/90 text-sm">One-on-one consulting sessions</p>
                </div>
              </div>

              <div className="team-image relative rounded-xl overflow-hidden shadow-lg group border-1-5 border-teexho-blue">
                <Image
                  src="/images/Imagine an image of people Teexo James Consulting staff doing Education & Training. (2).jpg"
                  alt="Group Training Workshop"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-white"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">Group Workshops</h3>
                  <p className="text-white/90 text-sm">Collaborative learning experiences</p>
                </div>
              </div>

              <div className="team-image relative rounded-xl overflow-hidden shadow-lg group border-1-5 border-teexho-blue">
                <Image
                  src="/images/Imagine an image of people Teexo James Consulting staff doing Education & Training. (3).jpg"
                  alt="Digital Skills Training"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-white"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">Digital Skills</h3>
                  <p className="text-white/90 text-sm">Technology training for modern careers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials py-24 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gray-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-lg font-semibold text-gray-900">4.6 Rate by 16,000+ Reviews</span>
              </div>
              <h2 className="section-title text-4xl font-bold text-gray-900 mb-4">
                What our clients say
              </h2>
              <p className="section-description text-xl text-gray-600 max-w-3xl mx-auto">
                Trusted by teams and businesses worldwide, here's what people love about working with us.
              </p>
            </div>

            <div className="overflow-x-auto scrollbar-hide relative" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
              {/* Left fade */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-white z-10 pointer-events-none"></div>
              {/* Right fade */}
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-white z-10 pointer-events-none"></div>
              
              <div className="flex gap-8 pb-4" style={{scrollBehavior: 'smooth', animation: 'scroll 40s linear infinite'}} onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'} onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}>
                {/* First set of cards */}
                {/* Testimonial Card 1 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 min-w-[350px]">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-gray-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    "The team exceeded our expectations with their innovative solutions and professional approach. Truly a game-changer for our business."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                      <p className="text-sm text-gray-600">CEO, TechStart</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial Card 2 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 min-w-[350px]">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-gray-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    "Outstanding service and support. They helped me navigate the complex university application process with ease."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Michael Chen</h4>
                      <p className="text-sm text-gray-600">Student, Engineering</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial Card 3 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 min-w-[350px]">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-gray-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    "Their digital solutions transformed our online presence completely. Highly recommend their expertise!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Emily Davis</h4>
                      <p className="text-sm text-gray-600">Marketing Director</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial Card 4 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 min-w-[350px]">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-gray-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    "The educational consulting provided was exceptional. They guided me through every step and helped me secure admission to my dream university."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Amina S.</h4>
                      <p className="text-sm text-gray-600">Computer Science, University of Manchester</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial Card 5 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 min-w-[350px]">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-gray-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    "Professional, efficient, and results-driven. Our digital marketing campaign saw a 300% increase in leads within just 3 months."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">David Kim</h4>
                      <p className="text-sm text-gray-600">Operations Manager, TechCorp Ltd</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial Card 6 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 min-w-[350px]">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-gray-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    "The personalized attention and expert guidance made all the difference. I couldn't have done it without their support."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">James Wilson</h4>
                      <p className="text-sm text-gray-600">MBA Student, London Business School</p>
                    </div>
                  </div>
                </div>

                {/* Duplicate set for seamless loop */}
                {/* Testimonial Card 1 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 min-w-[350px]">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-gray-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    "The team exceeded our expectations with their innovative solutions and professional approach. Truly a game-changer for our business."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                      <p className="text-sm text-gray-600">CEO, TechStart</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial Card 2 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 min-w-[350px]">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-gray-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    "Outstanding service and support. They helped me navigate the complex university application process with ease."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Michael Chen</h4>
                      <p className="text-sm text-gray-600">Student, Engineering</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial Card 3 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 min-w-[350px]">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-gray-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    "Their digital solutions transformed our online presence completely. Highly recommend their expertise!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Emily Davis</h4>
                      <p className="text-sm text-gray-600">Marketing Director</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial Card 4 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 min-w-[350px]">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-gray-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    "The educational consulting provided was exceptional. They guided me through every step and helped me secure admission to my dream university."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Amina S.</h4>
                      <p className="text-sm text-gray-600">Computer Science, University of Manchester</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial Card 5 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 min-w-[350px]">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-gray-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    "Professional, efficient, and results-driven. Our digital marketing campaign saw a 300% increase in leads within just 3 months."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">David Kim</h4>
                      <p className="text-sm text-gray-600">Operations Manager, TechCorp Ltd</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial Card 6 */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 min-w-[350px]">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-gray-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    "The personalized attention and expert guidance made all the difference. I couldn't have done it without their support."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">James Wilson</h4>
                      <p className="text-sm text-gray-600">MBA Student, London Business School</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      {/* FAQ Section */}
        <section className="faq py-24 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left Column - Heading and Description */}
              <div>
                <h2 className="section-title text-4xl font-bold text-gray-900 mb-6">
                  Frequently asked questions
                </h2>
                <p className="section-description text-xl text-gray-600 mb-8">
                  Have questions? We have answers. Find everything you need to know about our services.
                </p>
                <Button href="/contact" variant="primary">
                  Still have questions? Contact us
                </Button>
              </div>

              {/* Right Column - FAQ Items */}
              <div className="space-y-4">
                {/* FAQ Item 1 */}
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(0)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">
                      What services do you offer?
                    </h3>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                        openFAQ === 0 ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-300 ${
                    openFAQ === 0 ? 'py-4 max-h-40' : 'max-h-0'
                  }`}>
                    <p className="text-gray-600">
                      We offer educational consulting, digital solutions, and business strategy services. Our comprehensive approach helps students achieve their academic goals and businesses scale effectively.
                    </p>
                  </div>
                </div>

                {/* FAQ Item 2 */}
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(1)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">
                      How do I get started with your services?
                    </h3>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                        openFAQ === 1 ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-300 ${
                    openFAQ === 1 ? 'py-4 max-h-40' : 'max-h-0'
                  }`}>
                    <p className="text-gray-600">
                      Getting started is easy! Simply book a consultation call through our website, and we'll discuss your specific needs and create a personalized plan to help you achieve your goals.
                    </p>
                  </div>
                </div>

                {/* FAQ Item 3 */}
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(2)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">
                      What makes your approach different?
                    </h3>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                        openFAQ === 2 ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-300 ${
                    openFAQ === 2 ? 'py-4 max-h-40' : 'max-h-0'
                  }`}>
                    <p className="text-gray-600">
                      We combine deep expertise with personalized attention. Our team takes the time to understand your unique challenges and develops tailored solutions that deliver measurable results.
                    </p>
                  </div>
                </div>

                {/* FAQ Item 4 */}
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(3)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">
                      Do you offer ongoing support?
                    </h3>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                        openFAQ === 3 ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-300 ${
                    openFAQ === 3 ? 'py-4 max-h-40' : 'max-h-0'
                  }`}>
                    <p className="text-gray-600">
                      Yes! We provide comprehensive support throughout your journey. From initial consultation to implementation and beyond, we're here to ensure your success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
