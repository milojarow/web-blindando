'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    // Check if user is authenticated
    if (status === 'unauthenticated') {
      router.push('/api/auth/signin');
    } else if (status === 'authenticated') {
      setIsLoading(false);
    }
  }, [status, router]);

  const handleLogout = () => {
    signOut({ redirect: true, callbackUrl: '/api/auth/signin' });
  };

  if (isLoading || status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <div className="loading-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className="mt-4 text-primary font-medium">Cargando tu información...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      {/* Dashboard header */}
      <header className="bg-primary text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/logo.png" 
                alt="Blindando Sueños Logo" 
                width={40} 
                height={40} 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold">Blindando Sueños</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            <span className="hidden md:inline-block">
              Bienvenido, {session?.user?.name || session?.user?.email?.split('@')[0] || 'Usuario'}
            </span>
            <button 
              onClick={handleLogout}
              className="px-4 py-2 rounded-md bg-white text-primary hover:bg-white/90 transition-colors font-medium"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h1 className="text-2xl font-bold text-primary mb-4">Panel de Control</h1>
          <p className="text-gray-600">
            Bienvenido a tu panel personal, donde puedes gestionar tus pólizas, revisar el estado de tus trámites y acceder a nuestros servicios exclusivos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Mis Pólizas</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Accede a todas tus pólizas contratadas, revisa detalles y descarga documentos importantes.
            </p>
            <div className="bg-base-200 rounded-lg p-4 text-center text-gray-500">
              No tienes pólizas activas. Explora nuestros seguros para contratar.
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Mis Trámites</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Revisa el estado de tus solicitudes, reclamos y otros trámites en proceso.
            </p>
            <div className="bg-base-200 rounded-lg p-4 text-center text-gray-500">
              No tienes trámites en proceso. Inicia uno nuevo desde la sección de servicios.
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-success">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Pagos</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Gestiona tus pagos, consulta facturas y visualiza tu historial de transacciones.
            </p>
            <div className="bg-base-200 rounded-lg p-4 text-center text-gray-500">
              No tienes pagos pendientes ni historial de transacciones aún.
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Seguros Recomendados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4 flex">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                <Image
                  src="/icons/life.svg"
                  alt="Seguro de Vida"
                  width={24}
                  height={24}
                  className="text-primary"
                />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Seguro de Vida Plus</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Protección integral con mayores beneficios para ti y tu familia.
                </p>
                <Link 
                  href="/seguros/seguro-de-vida"
                  className="text-primary text-sm font-medium hover:text-primary/80"
                >
                  Ver detalles
                </Link>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 flex">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mr-4 flex-shrink-0">
                <Image
                  src="/icons/health.svg"
                  alt="Seguro Médico"
                  width={24}
                  height={24}
                  className="text-accent"
                />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Seguro Médico Familiar</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Cobertura médica completa para toda tu familia, incluyendo consultas y medicamentos.
                </p>
                <Link 
                  href="/seguros/seguro-medico"
                  className="text-primary text-sm font-medium hover:text-primary/80"
                >
                  Ver detalles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-auto py-6">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Blindando Sueños. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
} 