import React from 'react';
import Link from 'next/link';
import { MaterialIcon } from './MaterialIcon';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'primary-white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export function Button({ 
  children, 
  href, 
  variant = 'primary', 
  size = 'md',
  className = "",
  onClick,
  type = 'button',
  disabled = false
}: ButtonProps) {
  const baseClasses = 'inline-flex font-semibold transition-all duration-300 items-center gap-2 group whitespace-nowrap';
  
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    'primary-white': 'btn-primary-white'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:transform hover:-translate-y-0.5'}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  if (href && !disabled) {
    return (
      <Link href={href} className={classes}>
        {children}
        <MaterialIcon
          name="chevron_right"
          className="text-base transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      <MaterialIcon
        name="chevron_right"
        className="text-base transition-transform duration-300 group-hover:translate-x-1"
      />
    </button>
  );
}
