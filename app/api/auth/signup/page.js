'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SignUpPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const emailFromQuery = searchParams.get('email') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: emailFromQuery,
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'El nombre es requerido';
    if (!formData.email.trim()) return 'El correo electrónico es requerido';
    if (!formData.email.includes('@')) return 'Por favor ingresa un correo electrónico válido';
    if (formData.password.length < 8) return 'La contraseña debe tener al menos 8 caracteres';
    if (formData.password !== formData.confirmPassword) return 'Las contraseñas no coinciden';
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validateForm();
    if (validation) {
      setError(validation);
      return;
    }
    // Placeholder: implement registration request
    setError('');
    setMessage('El registro de usuarios aún no está implementado.');
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
          <h2 className="mt-6 text-3xl font-bold text-primary">Crear Cuenta</h2>
          <p className="mt-2 text-sm text-gray-600">Regístrate para acceder a todos nuestros servicios</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre Completo</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                placeholder="Tu nombre completo"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
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
                autoComplete="new-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                placeholder="Mínimo 8 caracteres"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirmar Contraseña</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                placeholder="Confirma tu contraseña"
              />
            </div>
          </div>

          {error && <div className="text-sm text-error bg-error/10 p-3 rounded-md">{error}</div>}
          {message && <div className="text-sm text-warning bg-warning/10 p-3 rounded-md">{message}</div>}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-md text-white font-medium bg-primary hover:bg-primary/90"
            >
              Crear cuenta
            </button>
          </div>

          {/* Placeholder: social sign up */}
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
            ¿Ya tienes una cuenta?{' '}
            <Link href="/api/auth/signin" className="font-medium text-primary hover:text-primary/80">Inicia sesión aquí</Link>
          </p>
        </div>
      </div>
    </div>
  );
} 