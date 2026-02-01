import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  border?: boolean;
  shadow?: 'sm' | 'md' | 'lg' | 'none';
}

export function Card({ 
  children, 
  className = "", 
  hover = false,
  border = true,
  shadow = 'sm'
}: CardProps) {
  const shadowClasses = {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    none: ''
  };

  const baseClasses = `
    bg-white 
    rounded-xl 
    ${shadowClasses[shadow]}
    ${border ? 'border border-gray-200' : ''}
    ${hover ? 'hover:shadow-lg transition-shadow duration-300' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className={baseClasses}>
      {children}
    </div>
  );
}
