'use client';

import Link from 'next/link';

export default function Button({ 
  children, 
  variant = 'primary', 
  href, 
  onClick, 
  className = '',
  type = 'button',
  disabled = false,
  fullWidth = false
}) {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-opacity-50";
  
  const variantStyles = {
    primary: "bg-primary text-gray-800 hover:bg-primary/90 focus:ring-primary/50",
    secondary: "bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary/50"
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${widthClass} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {children}
    </button>
  );
} 