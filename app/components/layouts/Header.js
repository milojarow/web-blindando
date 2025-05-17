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
        <div className="lg:hidden relative">
          <button 
            className="w-10 h-10 flex items-center justify-center relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen && (
              <div className="absolute inset-0 bg-gray-50/90 rounded-full" />
            )}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-6 h-6 text-text-light relative z-10"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>

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
          <div className="fixed inset-0 backdrop-blur-lg bg-base-300/95 z-40 lg:hidden">
            {/* Menu items positioned in quadrant 3 relative to hamburger menu */}
            <nav className="absolute right-0 top-0 w-full h-screen">
              {/* Inicio - top green oval in the drawing */}
              <Link 
                href="/#inicio" 
                className="absolute text-text-dark text-lg font-medium bg-gray-50/90 px-4 py-2 rounded-full"
                onClick={() => setIsMenuOpen(false)}
                style={{
                  right: '65px',
                  top: '70px',
                }}
              >
                Inicio
              </Link>

              {/* Seguros - second green oval */}
              <Link 
                href="/#seguros" 
                className="absolute text-text-dark text-lg font-medium bg-gray-50/90 px-4 py-2 rounded-full"
                onClick={() => setIsMenuOpen(false)}
                style={{
                  right: '50px',
                  top: '130px',
                }}
              >
                Seguros
              </Link>

              {/* Nosotros - third green oval */}
              <Link 
                href="/#nosotros" 
                className="absolute text-text-dark text-lg font-medium bg-gray-50/90 px-4 py-2 rounded-full"
                onClick={() => setIsMenuOpen(false)}
                style={{
                  right: '35px',
                  top: '190px',
                }}
              >
                Nosotros
              </Link>

              {/* Contacto - bottom green oval */}
              <Link 
                href="/#contacto" 
                className="absolute text-text-dark text-lg font-medium bg-gray-50/90 px-4 py-2 rounded-full"
                onClick={() => setIsMenuOpen(false)}
                style={{
                  right: '55px',
                  top: '250px',
                }}
              >
                Contacto
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 