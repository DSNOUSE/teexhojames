import Link from "next/link";
import Image from "next/image";
import React from "react";
import { ArrowRight, Twitter, Linkedin, Youtube, Instagram, Mail, Phone, MapPin, Globe } from "lucide-react";

const Footer = () => {
  return (
    <>
      {/* Main Footer Content */}
      <footer className="mt-16 pt-24 pb-16" style={{backgroundColor: '#063835'}}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Logo & Contact - 2 columns */}
            <div className="md:col-span-2 flex flex-col space-y-6">
              <Link className="inline-block" href="/">
                <Image
                  alt="Teexho James Consulting"
                  loading="lazy"
                  width={150}
                  height={40}
                  className="h-10 w-auto"
                  src="/images/white-logo.png"
                />
              </Link>
              <p className="text-gray-300 text-base">Got a question?</p>
              <Link
                className="text-white hover:text-gray-200 inline-flex items-center text-base font-medium transition-colors duration-200"
                href="/contact"
              >
                Make an enquiry
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              {/* Social icons row */}
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-teexho-blue" aria-label="Twitter/X">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-teexho-blue" aria-label="LinkedIn">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-teexho-blue" aria-label="YouTube">
                  <Youtube className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-teexho-blue" aria-label="Instagram">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
            {/* Columns */}
            <div className="md:col-span-1 space-y-6">
              <h4 className="font-semibold text-white text-base">Our Solutions</h4>
              <ul className="space-y-3">
                <li><Link className="text-gray-300 hover:text-teexho-blue text-base" href="/services/education-consulting">Education Consulting</Link></li>
                <li><Link className="text-gray-300 hover:text-teexho-blue text-base" href="/services/digital-solutions">Digital Solutions</Link></li>
                <li><Link className="text-gray-300 hover:text-teexho-blue text-base" href="/services/it-consulting">IT Consulting</Link></li>
                <li><Link className="text-gray-300 hover:text-teexho-blue text-base" href="/services/business-strategy">Business Strategy</Link></li>
              </ul>
            </div>
            <div className="md:col-span-1 space-y-6">
              <h4 className="font-semibold text-white text-base">Our Services</h4>
              <ul className="space-y-3">
                <li><Link className="text-gray-300 hover:text-teexho-blue text-base" href="/services/uk-admissions">UK Admissions</Link></li>
                <li><Link className="text-gray-300 hover:text-teexho-blue text-base" href="/services/europe-admissions">Europe Admissions</Link></li>
                <li><Link className="text-gray-300 hover:text-teexho-blue text-base" href="/services/student-visa">Student Visa Support</Link></li>
              </ul>
            </div>
            <div className="md:col-span-1 space-y-6">
              <h4 className="font-semibold text-white text-base">About Us</h4>
              <ul className="space-y-3">
                <li><Link className="text-gray-300 hover:text-teexho-blue text-base" href="/about">About Teexho James</Link></li>
                <li><Link className="text-gray-300 hover:text-teexho-blue text-base" href="/locations">Our Locations</Link></li>
                <li><Link className="text-gray-300 hover:text-teexho-blue text-base" href="/careers">Careers</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Footer Bar - Separate Component */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center py-6">
            <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Teexho James Consulting. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-6 mt-4 md:mt-0">
              <Link className="text-gray-600 hover:text-teexho-blue text-sm" href="/legal-notice">Legal notice</Link>
              <Link className="text-gray-600 hover:text-teexho-blue text-sm" href="/privacy-policy">Privacy policy</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

