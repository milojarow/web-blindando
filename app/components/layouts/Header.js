'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-base-100 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo and Company Name */}
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/logo.png" 
            alt="Blindando Sueños Logo" 
            width={50} 
            height={50} 
            className="h-10 w-auto"
          />
          <span className={`text-xl font-bold transition-all ${
            isScrolled ? 'text-primary' : 'text-neutral-200'
          }`}>
            Blindando Sueños
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden flex items-center" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className={`w-6 h-6 transition-all ${
              isScrolled ? 'text-primary' : 'text-neutral-200'
            }`}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className={`hidden lg:flex items-center gap-6`}>
          <Link 
            href="/#inicio" 
            className={`font-medium transition-all hover:text-secondary ${
              isScrolled ? 'text-neutral-200' : 'text-neutral-200'
            }`}
          >
            Inicio
          </Link>
          <Link 
            href="/#seguros" 
            className={`font-medium transition-all hover:text-secondary ${
              isScrolled ? 'text-neutral-200' : 'text-neutral-200'
            }`}
          >
            Seguros
          </Link>
          <Link 
            href="/#nosotros" 
            className={`font-medium transition-all hover:text-secondary ${
              isScrolled ? 'text-neutral-200' : 'text-neutral-200'
            }`}
          >
            Nosotros
          </Link>
          <Link 
            href="/#contacto" 
            className={`font-medium transition-all hover:text-secondary ${
              isScrolled ? 'text-neutral-200' : 'text-neutral-200'
            }`}
          >
            Contacto
          </Link>
          <Link 
            href="/login" 
            className={`ml-4 px-6 py-2 rounded-full font-medium transition-all
              ${isScrolled 
                ? 'bg-primary text-text-dark hover:bg-primary/90' 
                : 'bg-primary text-text-dark hover:bg-primary/90'
              } shadow-md hover:shadow-lg`}
          >
            Iniciar Sesión
          </Link>
        </nav>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-base-100 bg-opacity-95 z-50 lg:hidden flex flex-col items-center justify-center">
            <button 
              className="absolute top-6 right-6" 
              onClick={() => setIsMenuOpen(false)}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                className="w-8 h-8 text-neutral-200"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
            <nav className="flex flex-col items-center gap-8">
              <Link 
                href="/#inicio" 
                className="text-neutral-200 text-xl font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                href="/#seguros" 
                className="text-neutral-200 text-xl font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Seguros
              </Link>
              <Link 
                href="/#nosotros" 
                className="text-neutral-200 text-xl font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link 
                href="/#contacto" 
                className="text-neutral-200 text-xl font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
              <Link 
                href="/login" 
                className="mt-4 px-8 py-3 bg-primary text-text-dark rounded-full font-medium shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Iniciar Sesión
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 