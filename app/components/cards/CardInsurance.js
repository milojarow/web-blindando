'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import ButtonOutline from '../buttons/ButtonOutline';
import * as LucideIcons from 'lucide-react';

export default function CardInsurance({ id, title, description, iconName, benefits, color = "#FFC107" }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Dynamically get the icon component from lucide-react
  const IconComponent = LucideIcons[iconName];

  return (
    <div
      ref={cardRef}
      className="group relative bg-white rounded-lg shadow-sm transition-all duration-300 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top border accent - always visible */}
      <div 
        className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300"
        style={{ backgroundColor: color }}
      />
      
      {/* Snake Border Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Right Border */}
        <div className="absolute top-0 right-0 w-1.5 h-0" style={{
          backgroundColor: color,
          height: isHovered ? '100%' : '0%',
          transition: 'height 0.6s ease-in-out',
          transitionDelay: '0s'
        }}/>
        
        {/* Bottom Border */}
        <div className="absolute bottom-0 right-0 h-1.5 w-0" style={{
          backgroundColor: color,
          width: isHovered ? '100%' : '0%',
          transition: 'width 0.6s ease-in-out',
          transitionDelay: '0.6s'
        }}/>
        
        {/* Left Border */}
        <div className="absolute left-0 bottom-0 w-1.5 h-0" style={{
          backgroundColor: color,
          height: isHovered ? '100%' : '0%',
          transition: 'height 0.6s ease-in-out',
          transitionDelay: '1.2s'
        }}/>
        
        {/* Finish top-left portion */}
        <div className="absolute top-0 left-0 h-1.5 w-0" style={{
          backgroundColor: color,
          width: isHovered ? 'calc(100% - 10px)' : '0%', 
          transition: 'width 0.5s ease-in-out',
          transitionDelay: '1.8s'
        }}/>
      </div>
      
      <div className="p-6 h-full flex flex-col">
        {/* Icon */}
        <div className="flex justify-center mb-5">
          <div 
            className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300"
            style={{ 
              backgroundColor: `${color}15`,
              border: `2px solid ${isHovered ? color : 'transparent'}`
            }}
          >
            {IconComponent && (
              <IconComponent 
                size={32} 
                color={color}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            )}
          </div>
        </div>
        
        {/* Title */}
        <h3 
          className="text-xl font-bold text-center mb-4 transition-colors duration-300"
          style={{ color: isHovered ? color : '#1e293b' }}
        >
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 mb-6 text-center">{description}</p>
        
        {/* Benefits */}
        {benefits && benefits.length > 0 && (
          <div className="mt-auto mb-6">
            <h4 className="font-semibold text-gray-700 mb-3">Beneficios:</h4>
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div 
                    className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 rounded-full flex items-center justify-center transition-colors duration-300"
                    style={{ backgroundColor: `${color}15` }}
                  >
                    <svg
                      className="h-3 w-3"
                      style={{ color }}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Button */}
        <div className="mt-auto text-center">
          <ButtonOutline 
            href={`/seguros/${id}`} 
            color={color}
            className={`w-full gap-2 flex items-center justify-center py-2 ${isHovered ? 'bg-[' + color + '] text-white hover:bg-opacity-90' : ''}`}
            style={{
              ...(isHovered && { backgroundColor: color, color: 'white' })
            }}
          >
            Ver detalles
            <svg
              className="w-4 h-4 inline transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </ButtonOutline>
        </div>
      </div>
    </div>
  );
} 