import React from "react";

interface MaterialIconProps {
  name: string;
  className?: string;
}

export function MaterialIcon({ name, className = "" }: MaterialIconProps) {
  return <span className={`material-symbols-rounded ${className}`}>{name}</span>;
}
