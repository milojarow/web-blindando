// app/api/auth/verification-error/page.js
'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function VerificationErrorPage() {
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
          <h2 className="mt-6 text-3xl font-bold text-red-600 mb-2">
            Error de Verificación
          </h2>
          <p className="text-gray-600">
            No pudimos verificar tu email. El enlace puede haber expirado o no ser válido.
          </p>
        </div>
        
        <div className="mt-8 space-y-4">
          <button
            onClick={async () => {
              try {
                const email = prompt("Por favor, ingresa tu email para enviar un nuevo enlace de verificación:");
                if (!email) return;
                
                const response = await fetch('/api/auth/verify-email', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ email }),
                });
                
                if (response.ok) {
                  alert("Si el email existe en nuestro sistema, te hemos enviado un nuevo enlace de verificación.");
                } else {
                  alert("Ocurrió un error al enviar el email de verificación. Por favor, intenta nuevamente.");
                }
              } catch (error) {
                console.error('Error:', error);
                alert("Ocurrió un error al enviar el email de verificación. Por favor, intenta nuevamente.");
              }
            }}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white font-medium bg-primary hover:bg-primary/90 focus:outline-none"
          >
            Reenviar Email de Verificación
          </button>
          
          <Link
            href="/api/auth/signin"
            className="w-full flex justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-gray-700 font-medium bg-white hover:bg-gray-50 focus:outline-none"
          >
            Volver a Iniciar Sesión
          </Link>
        </div>
      </div>
    </div>
  );
}
