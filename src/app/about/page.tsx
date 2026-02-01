'use client';

import { Navigation } from "../../components/Navigation";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "../../hooks/useGSAP";
import { Button } from "../../components/Button";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function About() {
  useGSAP();
  const [activeSolution, setActiveSolution] = useState('corporate');
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/images/group-showing-proof.jpg",
    "/images/two-sitting-three.jpg", 
    "/images/male-female.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section style={{backgroundColor: '#153937'}} className="text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black/40"></div>
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentImage ? 'opacity-30' : 'opacity-0'
                }`}
              >
                <Image
                  src={image}
                  alt={`Background image ${index + 1}`}
                  fill
                  className="object-cover"
                />
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

        {/* Simple Section */}
        <section className="py-20" style={{backgroundColor: '#f0f7f6'}}>
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                We help businesses and students succeed globally
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                From education consulting that opens doors to world-class universities, 
                to digital solutions that drive business growth - we're your trusted partner 
                in achieving excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Combined About Section */}
        <section className="py-24 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Our purpose is your progress</h2>
                  <p className="text-xl text-gray-600 leading-relaxed mb-6">
                    Better connected, more productive, and energised to do business in any market.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Customer satisfaction built on trust and results. We believe in creating lasting partnerships that drive sustainable growth for our clients through tailored solutions that address their unique challenges.
                  </p>
                </div>


                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href="/contact" variant="primary">
                    Start your journey
                  </Button>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/images/Create an creative 3D image of Business Strategy for Teexo James Consulting.jpg"
                  alt="Business Strategy"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-gray-50">
          <div className="container">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet our team</h2>
                <p className="text-lg text-gray-600 max-w-2xl">
                  Our diverse team blends creativity with technical excellence, ensuring every solution delivers measurable impact.
                </p>
              </div>
              <div className="flex space-x-4">
                <button className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                </button>
                <button className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex overflow-x-auto space-x-8 pb-4 scrollbar-hide">
              {/* Team Member 1 */}
              <div className="flex-none w-80">
                {/* Image Container */}
                <div className="relative h-64 mb-4 rounded-lg overflow-hidden border-1-5 border-teexho-blue">
                  <Image
                    src="/images/Tobby_Abby_TeexoJames.png"
                    alt="Teexho James"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                {/* Text Container */}
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <a href="#" className="text-gray-400 hover:text-teexho-blue">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-teexho-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.981a5.002 5.002 0 0 1 8.416-2.324c.317.218.6.478.848.775l1.694 2.162c.149.19.239.423.259.668l.013.12a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75v-.005a.75.75 0 0 1 .75-.75h1.062l-1.432-1.823a3.5 3.5 0 0 0-5.824 1.424l-.064.193a.75.75 0 0 1-1.423-.476l.064-.193ZM4.75 12.75h.75a.75.75 0 0 1 .75.75v.005a.75.75 0 0 1-.75.75H4.75a.75.75 0 0 1-.75-.75v-.005a.75.75 0 0 1 .75-.75Zm7.5 0h.75a.75.75 0 0 1 .75.75v.005a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.005a.75.75 0 0 1 .75-.75Zm7.5 0h.75a.75.75 0 0 1 .75.75v.005a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.005a.75.75 0 0 1 .75-.75Z" />
                      </svg>
                    </a>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Teexho James</h3>
                  <p className="text-gray-600 mb-3">Founder & CEO</p>
                  <p className="text-gray-700 text-sm italic">
                    "Leading with strategy and vision to drive sustainable growth."
                  </p>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="flex-none w-80">
                {/* Image Container */}
                <div className="relative h-64 mb-4 rounded-lg overflow-hidden border-1-5 border-teexho-blue">
                  <Image
                    src="/images/Abby_TeexoJames.png"
                    alt="Abby Johnson"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                {/* Text Container */}
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <a href="#" className="text-gray-400 hover:text-teexho-blue">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-teexho-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.981a5.002 5.002 0 0 1 8.416-2.324c.317.218.6.478.848.775l1.694 2.162c.149.19.239.423.259.668l.013.12a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75v-.005a.75.75 0 0 1 .75-.75h1.062l-1.432-1.823a3.5 3.5 0 0 0-5.824 1.424l-.064.193a.75.75 0 0 1-1.423-.476l.064-.193ZM4.75 12.75h.75a.75.75 0 0 1 .75.75v.005a.75.75 0 0 1-.75.75H4.75a.75.75 0 0 1-.75-.75v-.005a.75.75 0 0 1 .75-.75Zm7.5 0h.75a.75.75 0 0 1 .75.75v.005a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.005a.75.75 0 0 1 .75-.75Zm7.5 0h.75a.75.75 0 0 1 .75.75v.005a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.005a.75.75 0 0 1 .75-.75Z" />
                      </svg>
                    </a>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Abby Johnson</h3>
                  <p className="text-gray-600 mb-3">Head of Operations</p>
                  <p className="text-gray-700 text-sm italic">
                    "Transforming insights into actionable outcomes."
                  </p>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="flex-none w-80">
                {/* Image Container */}
                <div className="relative h-64 mb-4 rounded-lg overflow-hidden border-1-5 border-teexho-blue">
                  <Image
                    src="/images/about-image.png"
                    alt="Michael Chen"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                {/* Text Container */}
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <a href="#" className="text-gray-400 hover:text-teexho-blue">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-teexho-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.981a5.002 5.002 0 0 1 8.416-2.324c.317.218.6.478.848.775l1.694 2.162c.149.19.239.423.259.668l.013.12a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75v-.005a.75.75 0 0 1 .75-.75h1.062l-1.432-1.823a3.5 3.5 0 0 0-5.824 1.424l-.064.193a.75.75 0 0 1-1.423-.476l.064-.193ZM4.75 12.75h.75a.75.75 0 0 1 .75.75v.005a.75.75 0 0 1-.75.75H4.75a.75.75 0 0 1-.75-.75v-.005a.75.75 0 0 1 .75-.75Zm7.5 0h.75a.75.75 0 0 1 .75.75v.005a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.005a.75.75 0 0 1 .75-.75Zm7.5 0h.75a.75.75 0 0 1 .75.75v.005a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.005a.75.75 0 0 1 .75-.75Z" />
                      </svg>
                    </a>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Michael Chen</h3>
                  <p className="text-gray-600 mb-3">Lead Developer</p>
                  <p className="text-gray-700 text-sm italic">
                    "Shaping intuitive experiences that users love."
                  </p>
                </div>
              </div>

              {/* Team Member 4 */}
              <div className="flex-none w-80">
                {/* Image Container */}
                <div className="relative h-64 mb-4 rounded-lg overflow-hidden border-1-5 border-teexho-blue">
                  <Image
                    src="/images/Tobby_Abby_TeexoJames.png"
                    alt="Tobby Williams"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                {/* Text Container */}
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <a href="#" className="text-gray-400 hover:text-teexho-blue">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-teexho-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.981a5.002 5.002 0 0 1 8.416-2.324c.317.218.6.478.848.775l1.694 2.162c.149.19.239.423.259.668l.013.12a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75v-.005a.75.75 0 0 1 .75-.75h1.062l-1.432-1.823a3.5 3.5 0 0 0-5.824 1.424l-.064.193a.75.75 0 0 1-1.423-.476l.064-.193ZM4.75 12.75h.75a.75.75 0 0 1 .75.75v.005a.75.75 0 0 1-.75.75H4.75a.75.75 0 0 1-.75-.75v-.005a.75.75 0 0 1 .75-.75Zm7.5 0h.75a.75.75 0 0 1 .75.75v.005a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.005a.75.75 0 0 1 .75-.75Zm7.5 0h.75a.75.75 0 0 1 .75.75v.005a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.005a.75.75 0 0 1 .75-.75Z" />
                      </svg>
                    </a>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Tobby Williams</h3>
                  <p className="text-gray-600 mb-3">Marketing Director</p>
                  <p className="text-gray-700 text-sm italic">
                    "Creating compelling narratives that connect brands with audiences."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* CTA Section */}
        <section className="py-24 bg-gray-50">
          <div className="container">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Ready to work together?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve your goals and drive meaningful results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" variant="primary">
                  Get in touch
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
