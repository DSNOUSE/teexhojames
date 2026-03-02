import Link from "next/link";
import Image from "next/image";
import { Button } from "./Button";
import { MaterialIcon } from "./MaterialIcon";

export function Services() {
  return (
    <>
      {/* Introduction Section */}
      <section className="services-intro relative overflow-hidden py-20 sm:py-24" style={{ backgroundColor: "#153937" }}>
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-teexho-blue/20 blur-3xl" />
        </div>
        <div className="container relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            {/* Copy */}
            <div className="text-left">
              <p className="text-sm uppercase tracking-[0.2em] text-blue-100/80 mb-4">
                Consulting for real momentum
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                Clear strategy. Confident execution.
              </h2>
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-xl">
                We help students and businesses move from ambition to action with focused guidance, practical delivery,
                and measurable outcomes.
              </p>
              <Button href="/contact" variant="primary-white">
                Start Your Journey Today
              </Button>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl">
                <div className="relative h-full w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/images/Imagine working gears in a corporate environment.jpg"
                    alt="Corporate Environment - Working Gears"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="services py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title text-4xl font-bold text-gray-900 mb-4">
              Explore what we do best
            </h2>
            <p className="section-description text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We offer comprehensive solutions tailored to your unique needs, combining expertise with innovation to deliver exceptional results.
            </p>
            <Button href="/services" variant="primary">
              Explore Services
            </Button>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-end mb-8">
            <div className="flex gap-2">
              <button className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
                <MaterialIcon name="chevron_left" className="text-xl text-gray-600" />
              </button>
              <button className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
                <MaterialIcon name="chevron_right" className="text-xl text-gray-600" />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Growth Enablement */}
            <div className="service-card">
              <div className="relative h-64 mb-6">
                <Image
                  src="/images/Create image of a female African student who have gained University admission through Teexo James Educational Consulting service.jpg"
                  alt="Growth Enablement"
                  fill
                  className="object-cover rounded-lg border-1-5 border-teexho-blue"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Growth Enablement</h3>
              <p className="text-gray-600 mb-4">
                Empowering students and businesses to reach their full potential through strategic guidance and innovative solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 border border-[#153937] text-[#153937] text-sm rounded-full">Education</span>
                <span className="px-3 py-1 border border-[#153937] text-[#153937] text-sm rounded-full">Career Development</span>
                <span className="px-3 py-1 border border-[#153937] text-[#153937] text-sm rounded-full">Mentorship</span>
              </div>
            </div>

            {/* Strategy */}
            <div className="service-card">
              <div className="relative h-64 mb-6">
                <Image
                  src="/images/Imagine an image of people doing IT Consulting for Teexho James Consulting..jpg"
                  alt="Strategy"
                  fill
                  className="object-cover rounded-lg border-1-5 border-teexho-blue"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategy</h3>
              <p className="text-gray-600 mb-4">
                Developing comprehensive strategies that align with your goals and drive sustainable growth in competitive markets.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 border border-[#153937] text-[#153937] text-sm rounded-full">Planning</span>
                <span className="px-3 py-1 border border-[#153937] text-[#153937] text-sm rounded-full">Analysis</span>
                <span className="px-3 py-1 border border-[#153937] text-[#153937] text-sm rounded-full">Optimization</span>
              </div>
            </div>

            {/* Technology */}
            <div className="service-card">
              <div className="relative h-64 mb-6">
                <Image
                  src="/images/Imagine working gears in a corporate environment.jpg"
                  alt="Technology"
                  fill
                  className="object-cover rounded-lg border-1-5 border-teexho-blue"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technology</h3>
              <p className="text-gray-600 mb-4">
                Leveraging cutting-edge technology to create digital experiences that transform how you connect with your audience.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 border border-[#153937] text-[#153937] text-sm rounded-full">Web Development</span>
                <span className="px-3 py-1 border border-[#153937] text-[#153937] text-sm rounded-full">Digital Marketing</span>
                <span className="px-3 py-1 border border-[#153937] text-[#153937] text-sm rounded-full">IT Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
