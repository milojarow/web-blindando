// app/api/auth/verification-success/page.js
'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function VerificationSuccessPage() {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg text-center">
        <div>
          <Link href="/" className="inline-block">
            <Image
              src="/logo.png"
              alt="Blindando Sueños Logo"
              width={80}
              height={80}
              className="mx-auto h-16 w-auto"
            />
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-green-600 mb-2">
            ¡Email Verificado!
          </h2>
          <p className="text-gray-600">
            Tu cuenta ha sido verificada correctamente. Ahora puedes iniciar sesión y comenzar a usar nuestros servicios.
          </p>
        </div>
        
        <div className="mt-8">
          <Link 
            href="/api/auth/signin" 
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white font-medium bg-primary hover:bg-primary/90 focus:outline-none"
          >
            Iniciar Sesión
          </Link>
        </div>
      </div>
    </div>
  );
}
