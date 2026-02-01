import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins only on client side
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Hero section animations
export const animateHero = () => {
  if (typeof window === 'undefined') return;
  
  const heroTitle = document.querySelector('.hero-title');
  const heroDescription = document.querySelector('.hero-description');
  const heroButtons = document.querySelector('.hero-buttons');
  const heroImage = document.querySelector('.hero-image');

  if (heroTitle) {
    gsap.from(heroTitle, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      delay: 0.2
    });
  }

  if (heroDescription) {
    gsap.from(heroDescription, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power3.out',
      delay: 0.4
    });
  }

  if (heroButtons) {
    gsap.from(heroButtons, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power3.out',
      delay: 0.6
    });
  }

  // Parallax effect for hero background
  if (heroImage) {
    gsap.to(heroImage, {
      yPercent: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }
};

// Section reveal animations
export const animateSectionReveal = (sectionSelector: string) => {
  if (typeof window === 'undefined') return;
  
  const section = document.querySelector(sectionSelector);
  if (!section) return;

  const title = section.querySelector('.section-title');
  const description = section.querySelector('.section-description');

  if (title) {
    gsap.from(title, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
  }

  if (description) {
    gsap.from(description, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power3.out',
      delay: 0.2,
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
  }
};

// Services cards animation
export const animateServices = () => {
  if (typeof window === 'undefined') return;
  
  const serviceCards = document.querySelectorAll('.service-card');
  if (serviceCards.length === 0) return;

  gsap.from(serviceCards, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: 'power3.out',
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.services',
      start: 'top 70%',
      toggleActions: 'play none none reverse'
    }
  });
};

// Feature cards animation (Why Choose Us)
export const animateFeatures = () => {
  if (typeof window === 'undefined') return;
  
  const featureCards = document.querySelectorAll('.feature-card');
  if (featureCards.length === 0) return;

  gsap.from(featureCards, {
    opacity: 0,
    scale: 0.9,
    duration: 0.8,
    ease: 'power3.out',
    stagger: 0.15,
    scrollTrigger: {
      trigger: '.features',
      start: 'top 70%',
      toggleActions: 'play none none reverse'
    }
  });
};

// Team images animation
export const animateTeamImages = () => {
  if (typeof window === 'undefined') return;
  
  const teamImages = document.querySelectorAll('.team-image');
  if (teamImages.length === 0) return;

  gsap.from(teamImages, {
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    ease: 'power3.out',
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.team-section',
      start: 'top 70%',
      toggleActions: 'play none none reverse'
    }
  });
};

// Testimonials animation
export const animateTestimonials = () => {
  if (typeof window === 'undefined') return;
  
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  if (testimonialCards.length === 0) return;

  gsap.from(testimonialCards, {
    opacity: 0,
    x: 50,
    duration: 0.8,
    ease: 'power3.out',
    stagger: 0.3,
    scrollTrigger: {
      trigger: '.testimonials',
      start: 'top 70%',
      toggleActions: 'play none none reverse'
    }
  });
};

// Counter animation for statistics
export const animateCounter = (element: HTMLElement, target: number, duration: number = 2) => {
  if (typeof window === 'undefined') return;

  gsap.fromTo(
    { value: 0 },
    { value: target },
    {
      duration,
      ease: 'power2.out',
      onUpdate: function() {
        element.textContent = Math.floor(this.targets()[0].value).toString() + '+';
      },
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  );
};

// Initialize all animations
export const initAnimations = () => {
  // Wait for DOM to be ready
  if (typeof window !== 'undefined' && document.readyState === 'complete') {
    runAnimations();
  } else if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', runAnimations);
  }
};

function runAnimations() {
  // Initialize hero animations
  animateHero();
  
  // Initialize section animations
  animateSectionReveal('.services');
  animateSectionReveal('.features');
  animateSectionReveal('.team-section');
  animateSectionReveal('.testimonials');
  
  // Initialize component animations
  animateServices();
  animateFeatures();
  animateTeamImages();
  animateTestimonials();
  
  // Initialize counters if they exist
  const counters = document.querySelectorAll('.counter');
  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute('data-target') || '500');
    animateCounter(counter as HTMLElement, target);
  });
}

// Clean up ScrollTrigger instances
export const cleanupAnimations = () => {
  if (typeof window !== 'undefined') {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }
};
