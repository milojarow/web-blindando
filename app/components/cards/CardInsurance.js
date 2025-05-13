'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

export default function CardInsurance({ id, title, description, icon, benefits, color = "#FEBE17" }) {
  const cardRef = useRef(null);

  const onMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden bg-base-100 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
      style={{
        '--card-color': color,
        background: `radial-gradient(
          800px circle at var(--mouse-x) var(--mouse-y),
          rgba(255, 255, 255, 0.05),
          transparent 40%
        )`,
      }}
      onMouseMove={onMouseMove}
    >
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-center mb-4">
          <div 
            className="w-14 h-14 rounded-full flex items-center justify-center mr-4"
            style={{ background: `${color}20` }}
          >
            <Image
              src={icon}
              alt={title}
              width={32}
              height={32}
              className="text-primary"
            />
          </div>
          <h3 className="text-xl font-bold" style={{ color }}>
            {title}
          </h3>
        </div>
        
        <p className="text-neutral-200 mb-6">{description}</p>
        
        {benefits && benefits.length > 0 && (
          <div className="mt-auto mb-6">
            <h4 className="font-semibold text-neutral-200 mb-2">Beneficios:</h4>
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0"
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
                  <span className="text-neutral-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-auto flex justify-between items-center">
          <div
            className="relative h-[3px] w-1/3 overflow-hidden bg-neutral rounded-full"
          >
            <div
              className="absolute top-0 left-0 h-full w-0 group-hover:w-full transition-all duration-700"
              style={{ background: color }}
            ></div>
          </div>
          
          <Link
            href={`/seguros/${id}`}
            className="inline-flex items-center font-medium transition-all group-hover:translate-x-1"
            style={{ color }}
          >
            Ver detalles
            <svg
              className="ml-2 w-4 h-4"
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
          </Link>
        </div>
      </div>
      
      {/* Border gradient effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `
            linear-gradient(
              to right,
              ${color}00 0%,
              ${color}55 50%,
              ${color}00 100%
            )
            top / 100% 1px no-repeat,
            linear-gradient(
              to bottom,
              ${color}00 0%,
              ${color}55 50%,
              ${color}00 100%
            )
            right / 1px 100% no-repeat,
            linear-gradient(
              to left,
              ${color}00 0%,
              ${color}55 50%,
              ${color}00 100%
            )
            bottom / 100% 1px no-repeat,
            linear-gradient(
              to top,
              ${color}00 0%,
              ${color}55 50%,
              ${color}00 100%
            )
            left / 1px 100% no-repeat
          `
        }}
      />
    </div>
  );
} 