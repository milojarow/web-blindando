'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);
  
  // Listen for auth errors in console
  useEffect(() => {
    const originalConsoleError = console.error;
    
    console.error = (...args) => {
      // Check if this is an auth error
      const errorString = args.join(' ');
      if (errorString.includes('MissingCSRF') || 
          errorString.includes('auth') || 
          errorString.includes('CSRF')) {
        setHasError(true);
      }
      
      // Call original console.error
      originalConsoleError.apply(console, args);
    };
    
    // Cleanup
    return () => {
      console.error = originalConsoleError;
    };
  }, []);
  
  if (hasError) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 p-4">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-16 w-16 mx-auto text-error" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
            />
          </svg>
          
          <h2 className="text-2xl font-bold mt-4 mb-2 text-gray-800">
            Error de Autenticación
          </h2>
          
          <p className="text-gray-600 mb-6">
            Ha ocurrido un error durante el proceso de autenticación. Por favor, intenta nuevamente.
          </p>
          
          <div className="flex flex-col space-y-3">
            <Link 
              href="/api/auth/signin" 
              className="btn btn-primary w-full"
            >
              Volver a Iniciar Sesión
            </Link>
            
            <Link 
              href="/" 
              className="btn btn-outline btn-primary w-full"
            >
              Volver al Inicio
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return children;
} 