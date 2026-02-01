import React from 'react';

interface SectionHeaderProps {
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ 
  title, 
  description, 
  centered = true,
  className = ""
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      <h2 className="section-title text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {description && (
        <p className="section-description text-xl text-gray-600 max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
