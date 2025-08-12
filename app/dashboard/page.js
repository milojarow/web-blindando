'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Dashboard() {
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
            {/* TODO: Replace with actual user info after implementing authentication */}
            <span className="hidden md:inline-block">Usuario</span>
            {/* TODO: Replace with real logout action */}
            <button 
              className="px-4 py-2 rounded-md bg-white text-primary hover:bg-white/90 transition-colors font-medium"
              disabled
              title="Pendiente de implementar"
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
            Esta sección estará protegida una vez implementemos el sistema de autenticación.
          </p>
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