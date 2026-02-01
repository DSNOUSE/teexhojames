import React from 'react';
import { Container } from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bg?: 'white' | 'gray-50' | 'gray-100';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Section({ 
  children, 
  className = "", 
  bg = 'white',
  padding = 'lg' 
}: SectionProps) {
  const paddingClasses = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-24',
    xl: 'py-32'
  };

  const bgClasses = {
    white: 'bg-white',
    'gray-50': 'bg-gray-50',
    'gray-100': 'bg-gray-100'
  };

  return (
    <section className={`${bgClasses[bg]} ${paddingClasses[padding]} ${className}`}>
      <Container>
        {children}
      </Container>
    </section>
  );
}
