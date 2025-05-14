'use client';

import Link from 'next/link';

export default function ButtonOutline({ 
  children, 
  color = '#FFC107', 
  href, 
  onClick, 
  className = '',
  type = 'button',
  disabled = false,
  fullWidth = false
}) {
  // Base styles using DaisyUI button pattern
  const baseStyles = "btn btn-outline rounded-md button-outline-custom";
  
  // Dynamic styles based on props
  const widthClass = fullWidth ? 'w-full' : '';
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  // Combine all styles
  const buttonClasses = `${baseStyles} ${widthClass} ${disabledClass} ${className}`;
  
  // Set custom color through CSS variables
  const colorStyles = {
    '--btn-color': color,
    borderColor: color,
    color: color
  };

  if (href) {
    return (
      <Link 
        href={href} 
        className={buttonClasses} 
        style={colorStyles}
      >
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
      style={colorStyles}
    >
      {children}
    </button>
  );
} 