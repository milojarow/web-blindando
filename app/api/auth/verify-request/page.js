// app/api/auth/verify-request/page.js
'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function VerifyRequestPage() {
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
          <h2 className="mt-6 text-3xl font-bold text-primary mb-2">
            Revisa tu Email
          </h2>
          <p className="text-gray-600">
            Hemos enviado un enlace de verificación a tu correo electrónico. Por favor, revisa tu bandeja de entrada y haz clic en el enlace para verificar tu cuenta.
          </p>
        </div>
        
        <div className="mt-8">
          <p className="text-sm text-gray-500 mb-4">
            Si no has recibido el email en unos minutos, revisa tu carpeta de spam o solicita un nuevo enlace de verificación.
          </p>
          
          <div className="flex flex-col space-y-4">
            <button
              onClick={async () => {
                try {
                  const email = prompt("Por favor, confirma tu email para enviar un nuevo enlace de verificación:");
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
              className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none"
            >
              Reenviar Email de Verificación
            </button>
            
            <Link
              href="/"
              className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none"
            >
              Volver al Inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
