'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Placeholder: implement authentication request
    setMessage('El inicio de sesión aún no está implementado.');
  };

  return (
    <div className="min-h-screen bg-base-200 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <Link 
        href="/" 
        className="absolute top-8 left-8 flex items-center text-primary hover:text-primary/80 transition-colors"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 mr-2" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Regresar al inicio
      </Link>

      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div className="text-center">
          <Link href="/" className="inline-block">
            <Image
              src="/logo.png"
              alt="Blindando Sueños Logo"
              width={80}
              height={80}
              className="mx-auto h-16 w-auto"
            />
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-primary">Iniciar Sesión</h2>
          <p className="mt-2 text-sm text-gray-600">Accede a tu cuenta para gestionar tus pólizas y beneficios</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                placeholder="correo@ejemplo.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>
          </div>

          {message && (
            <div className="text-sm text-warning bg-warning/10 p-3 rounded-md">{message}</div>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-md text-white font-medium bg-primary hover:bg-primary/90"
            >
              Iniciar sesión
            </button>
          </div>

          {/* Placeholder: social login buttons when providers are configured */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">O continúa con</span>
            </div>
          </div>
          <button type="button" disabled className="w-full py-2 px-4 border border-gray-300 rounded-md bg-gray-100 text-gray-500">
            Google (pendiente)
          </button>
        </form>

        <div className="text-center text-sm">
          <p className="text-gray-600">
            ¿No tienes una cuenta?{' '}
            <Link href="/api/auth/signup" className="font-medium text-primary hover:text-primary/80">Regístrate aquí</Link>
          </p>
        </div>
      </div>
    </div>
  );
} 