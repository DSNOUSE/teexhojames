import Link from "next/link";
import Image from "next/image";
import React from "react";
import { MaterialIcon } from "./MaterialIcon";

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
                <MaterialIcon name="arrow_forward" className="ml-2 text-base" />
              </Link>
              {/* Social icons row */}
              <div className="flex space-x-4">
                <a href="https://x.com/teexhojamescons" className="text-gray-400 hover:text-teexho-blue" aria-label="X">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path d="M18.244 2H21l-6.43 7.354L22 22h-6.64l-4.9-6.43L4.8 22H2l6.9-7.9L2 2h6.8l4.5 5.92L18.244 2zm-1.18 18h1.84L7 4h-1.9l11.964 16z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/teexhojames-consulting/" className="text-gray-400 hover:text-teexho-blue" aria-label="LinkedIn">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.82-2.05 3.75-2.05 4.02 0 4.76 2.64 4.76 6.08V21h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75V21h-4z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/teexhojamesconsult" className="text-gray-400 hover:text-teexho-blue" aria-label="Instagram">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 8.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 10.5zm5.25-3.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
                  </svg>
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

