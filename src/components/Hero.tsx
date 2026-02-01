import Link from "next/link";
import Image from "next/image";
import { Button } from "./Button";

export function Hero() {
  return (
    <section style={{backgroundColor: '#153937'}} className="hero text-white relative overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[800px] lg:min-h-[900px] py-32 relative z-10">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Less friction. More flow.
              </h1>
              <p className="hero-description text-xl md:text-2xl text-blue-100 leading-relaxed">
                Connecting Nigerian students to world-class education opportunities across the UK and Europe, while delivering cutting-edge digital solutions for businesses.
              </p>
            </div>
            
            <div className="hero-buttons flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary-white" className="bg-white text-gray-900 hover:bg-gray-100">
                Start Your Journey
              </Button>
              
            </div>
          </div>

          {/* Right Content - Empty space for text overlay */}
          <div className="hidden md:block"></div>
        </div>
      </div>
      
      {/* Background Image */}
      <div className="hero-image absolute inset-0 z-0 border-1-5 border-teexho-blue">
        <Image
          src="/images/hero-image.jpg"
          alt="Teexho James Consulting - Education and Digital Solutions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>
    </section>
  );
}
