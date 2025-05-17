'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../buttons/Button';

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
        isScrolled 
          ? 'backdrop-blur-md bg-secondary/85 shadow-lg py-2' 
          : 'backdrop-blur-sm bg-secondary/70 py-4'
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
          <span className="text-xl font-bold text-text-light">
            Blindando Sueños
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className={`lg:hidden flex items-center justify-center relative z-50 ${
            isMenuOpen ? 'w-12 h-12 rounded-full bg-gray-50/90' : ''
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6 text-text-light"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link 
            href="/#inicio" 
            className="font-medium text-text-light hover:text-primary transition-colors"
          >
            Inicio
          </Link>
          <Link 
            href="/#seguros" 
            className="font-medium text-text-light hover:text-primary transition-colors"
          >
            Seguros
          </Link>
          <Link 
            href="/#nosotros" 
            className="font-medium text-text-light hover:text-primary transition-colors"
          >
            Nosotros
          </Link>
          <Link 
            href="/#contacto" 
            className="font-medium text-text-light hover:text-primary transition-colors"
          >
            Contacto
          </Link>
          {/* Login button temporarily hidden
          <Button href="/api/auth/signin" variant="primary" className="ml-4">
            Iniciar Sesión
          </Button>
          */}
        </nav>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 backdrop-blur-lg bg-base-300/95 z-40 lg:hidden flex items-center justify-center">
            <nav className="relative w-full h-full flex items-center justify-center">
              {/* Radial Menu Items */}
              <Link 
                href="/#inicio" 
                className="absolute text-text-dark text-xl font-medium bg-gray-50/90 px-6 py-3 rounded-full transform -translate-y-32"
                onClick={() => setIsMenuOpen(false)}
                style={{ left: 'calc(50% - 60px)' }}
              >
                Inicio
              </Link>
              <Link 
                href="/#seguros" 
                className="absolute text-text-dark text-xl font-medium bg-gray-50/90 px-6 py-3 rounded-full transform translate-x-28 -translate-y-16"
                onClick={() => setIsMenuOpen(false)}
                style={{ left: 'calc(50% - 60px)' }}
              >
                Seguros
              </Link>
              <Link 
                href="/#nosotros" 
                className="absolute text-text-dark text-xl font-medium bg-gray-50/90 px-6 py-3 rounded-full transform translate-x-28 translate-y-16"
                onClick={() => setIsMenuOpen(false)}
                style={{ left: 'calc(50% - 60px)' }}
              >
                Nosotros
              </Link>
              <Link 
                href="/#contacto" 
                className="absolute text-text-dark text-xl font-medium bg-gray-50/90 px-6 py-3 rounded-full transform translate-y-32"
                onClick={() => setIsMenuOpen(false)}
                style={{ left: 'calc(50% - 60px)' }}
              >
                Contacto
              </Link>
              {/* Login button temporarily hidden
              <Button 
                href="/api/auth/signin" 
                variant="primary"
                className="mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Iniciar Sesión
              </Button>
              */}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 