import './globals.css';
import { Suspense } from 'react';
import LoadingSpinner from './components/layouts/LoadingSpinner';

export const metadata = {
  title: 'Blindando Sueños | Seguros para proteger lo que más importa',
  description: 'Protege lo que más amas con nuestros planes de seguros personalizados. Ofrecemos seguros de vida, médicos, y más para blindar tus sueños y los de tu familia.',
  keywords: 'seguros, seguro de vida, seguro médico, protección, familia, blindando sueños',
  authors: [{ name: 'Blindando Sueños' }],
  creator: 'Blindando Sueños',
  publisher: 'Blindando Sueños',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-base-200">
        <Suspense fallback={<LoadingSpinner />}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
