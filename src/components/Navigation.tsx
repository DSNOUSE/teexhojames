"use client";

import React, { useState } from "react";
import { Button } from "./Button";

const navLinks = [
  { name: "Who We Are", href: "/about" },
  { name: "Our Solutions", href: "/services" },
  { name: "Partner Schools", href: "/schools" },
  { name: "Get Started", href: "/contact" },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header
      className="w-full border-b border-gray-200 bg-white fixed top-0 left-0 z-50"
      style={{ fontFamily: 'Rethink Sans, system-ui, sans-serif', background: '#fff', boxShadow: 'none' }}
    >
      <div className="container h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" aria-label="Home" className="flex items-center h-10">
          <img src="/images/blue-logo.png" alt="Logo" className="h-10 w-auto" style={{ maxHeight: 40 }} />
        </a>
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-2 lg:gap-4 ml-auto">
          {navLinks.slice(0, -1).map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#1a1a1a] text-base px-3 py-2 font-medium relative group transition-colors duration-200"
              style={{ fontFamily: 'Rethink Sans, system-ui, sans-serif' }}
            >
              <span className="relative">
                {link.name}
                <span className="absolute left-0 right-0 -bottom-0.5 h-px bg-[#1a1a1a] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
              </span>
            </a>
          ))}
          <Button href="/contact" variant="primary">
            Get Started
          </Button>
        </nav>

        {/* Tablet Compact Nav */}
        <nav className="hidden md:flex lg:hidden items-center gap-1 ml-auto">
          {navLinks.slice(0, -1).map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#1a1a1a] text-sm px-2 py-1 font-medium relative group transition-colors duration-200"
              style={{ fontFamily: 'Rethink Sans, system-ui, sans-serif' }}
            >
              <span className="relative">
                {link.name}
                <span className="absolute left-0 right-0 -bottom-0.5 h-px bg-[#1a1a1a] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
              </span>
            </a>
          ))}
          <Button href="/contact" variant="primary" className="px-3 py-1 text-sm">
            Get Started
          </Button>
        </nav>
        {/* Mobile Hamburger */}
        <button
          className={`md:hidden lg:hidden flex flex-col items-center justify-center w-10 h-10 rounded-lg focus:outline-none transition-all duration-300 ${mobileOpen ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen(v => !v)}
        >
          <span className={`block w-6 h-0.5 bg-[#1a1a1a] mb-1 rounded transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#1a1a1a] mb-1 rounded transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#1a1a1a] rounded transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
        
        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
            mobileOpen 
              ? 'bg-black/50 backdrop-blur-sm opacity-100 pointer-events-auto' 
              : 'bg-transparent opacity-0 pointer-events-none'
          }`}
          onClick={() => setMobileOpen(false)}
        />
        
        {/* Mobile Menu */}
        <div 
          className={`fixed top-0 right-0 h-full w-80 max-w-[90vw] sm:max-w-[85vw] bg-white shadow-2xl z-50 md:hidden transition-all duration-300 ease-in-out transform ${
            mobileOpen 
              ? 'translate-x-0 opacity-100' 
              : 'translate-x-full opacity-0'
          }`}
          style={{ fontFamily: 'Rethink Sans, system-ui, sans-serif' }}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-100">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Menu</h2>
            <button
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Menu Items */}
          <nav className="flex flex-col p-4 sm:p-6 space-y-1 sm:space-y-2">
            {navLinks.slice(0, -1).map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[#1a1a1a] text-base sm:text-lg font-medium px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-all duration-200 hover:bg-gray-100 hover:text-teexho-blue transform hover:translate-x-1 ${
                  mobileOpen ? 'animate-slide-in' : ''
                }`}
                style={{ 
                  animationDelay: mobileOpen ? `${index * 100}ms` : '0ms',
                  animationFillMode: 'both'
                }}
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            {/* CTA Button */}
            <div className={`pt-4 ${mobileOpen ? 'animate-slide-in' : ''}`} 
                 style={{ 
                   animationDelay: mobileOpen ? `${(navLinks.length - 1) * 100}ms` : '0ms',
                   animationFillMode: 'both'
                 }}>
              <Button 
                href="/contact" 
                variant="primary" 
                className="w-full justify-center"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
