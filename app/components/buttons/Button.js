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
  const baseStyles = "px-6 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg focus:outline-none border-2";
  
  const variantStyles = {
    primary: "bg-primary border-primary text-text-dark hover:bg-primary-600 focus:ring-2 focus:ring-primary focus:ring-opacity-50",
    secondary: "bg-secondary border-secondary text-text-light hover:bg-secondary-700 focus:ring-2 focus:ring-secondary focus:ring-opacity-50",
    heroYellow: "bg-[#DD6B20] border-[#DD6B20] text-white hover:bg-[#C05621] focus:ring-2 focus:ring-[#DD6B20] focus:ring-opacity-50",
    heroOutline: "bg-[#2D3748] border-[#2D3748] text-[#F7FAFC] hover:bg-[#1A202C] hover:border-[#1A202C] focus:ring-2 focus:ring-[#2D3748] focus:ring-opacity-50"
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${widthClass} ${disabledClass} ${className}`;
  
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