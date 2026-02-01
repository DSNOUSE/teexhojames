'use client';

import { useEffect } from 'react';
import { initAnimations, cleanupAnimations } from '../utils/gsap';

export const useGSAP = () => {
  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      // Initialize animations
      initAnimations();
    }

    // Cleanup on unmount
    return () => {
      if (typeof window !== 'undefined') {
        cleanupAnimations();
      }
    };
  }, []);
};
