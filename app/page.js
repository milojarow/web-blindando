import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layouts/Header';
import CardInsurance from '@/components/cards/CardInsurance';
import LoadingSpinner from '@/components/layouts/LoadingSpinner';

const insuranceProducts = [
  {
    id: 'seguro-de-vida',
    title: 'Seguro de Vida',
    description: 'Protege a tus seres queridos financieramente cuando ya no estés con ellos.',
    icon: '/icons/life.svg',
    color: '#4a6fa5',
    benefits: [
      'Cobertura por fallecimiento',
      'Beneficios por invalidez',
      'Protección para tu familia',
      'Planes personalizados',
    ],
  },
  {
    id: 'seguro-medico',
    title: 'Seguro Médico',
    description: 'Obtén la mejor atención médica sin preocuparte por los gastos inesperados.',
    icon: '/icons/health.svg',
    color: '#36d399',
    benefits: [
      'Consultas médicas',
      'Hospitalización',
      'Medicamentos',
      'Atención de emergencias',
    ],
  },
  {
    id: 'seguro-hogar',
    title: 'Seguro de Hogar',
    description: 'Protege tu casa y tus pertenencias contra daños, robos y otros imprevistos.',
    icon: '/icons/home.svg',
    color: '#f5b35e',
    benefits: [
      'Cobertura contra incendios',
      'Protección contra robos',
      'Daños por fenómenos naturales',
      'Responsabilidad civil',
    ],
  },
  {
    id: 'seguro-auto',
    title: 'Seguro de Auto',
    description: 'Maneja con tranquilidad sabiendo que estás protegido ante cualquier accidente.',
    icon: '/icons/car.svg',
    color: '#f87272',
    benefits: [
      'Daños a terceros',
      'Cobertura amplia',
      'Asistencia vial',
      'Robo total',
    ],
  },
  {
    id: 'seguro-viaje',
    title: 'Seguro de Viaje',
    description: 'Viaja sin preocupaciones con cobertura médica y de equipaje en todo el mundo.',
    icon: '/icons/travel.svg',
    color: '#3abff8',
    benefits: [
      'Atención médica internacional',
      'Pérdida de equipaje',
      'Cancelación de viaje',
      'Asistencia 24/7',
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        id="inicio" 
        className="hero-gradient text-white pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[#4a6fa5] opacity-90 z-0"></div>
        <div 
          className="absolute inset-0 z-0 opacity-30" 
          style={{ 
            backgroundImage: 'url(/pattern-bg.svg)', 
            backgroundSize: '400px',
            backgroundRepeat: 'repeat'
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Protegemos lo que más valoras. <span className="text-accent">¿Tu tranquilidad?</span> Es nuestra prioridad.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              En Blindando Sueños, no solo ofrecemos pólizas: creamos protección personalizada para que puedas vivir plenamente, sin preocupaciones.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#seguros" 
                className="px-8 py-3 rounded-full bg-white text-primary font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Nuestros Seguros
              </Link>
              <Link 
                href="#contacto" 
                className="px-8 py-3 rounded-full bg-accent text-white font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Contactar Asesor
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-base-200 -mb-10 rounded-t-[50%] z-10"></div>
      </section>
      
      {/* Insurance Products Section */}
      <section id="seguros" className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nuestros Seguros
            </h2>
            <p className="text-gray-600">
              Ofrecemos una amplia gama de seguros diseñados para proteger lo que más te importa. Cada plan puede personalizarse según tus necesidades específicas.
            </p>
          </div>
          
          <Suspense fallback={<LoadingSpinner />}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insuranceProducts.map((product) => (
                <CardInsurance
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  icon={product.icon}
                  benefits={product.benefits}
                  color={product.color}
                />
              ))}
            </div>
          </Suspense>
        </div>
      </section>
      
      {/* About Us Section */}
      <section id="nosotros" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Sobre Blindando Sueños
              </h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Nuestra Misión
                </h3>
                <p className="text-gray-600 mb-4">
                  Brindar protección financiera integral que permita a nuestros clientes vivir con tranquilidad, 
                  sabiendo que sus seres queridos, bienes y patrimonio están resguardados ante cualquier imprevisto.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Nuestra Visión
                </h3>
                <p className="text-gray-600 mb-4">
                  Ser reconocidos como la compañía aseguradora más confiable y cercana del mercado, destacándonos por 
                  nuestro excelente servicio, soluciones innovadoras y compromiso genuino con el bienestar de nuestros clientes.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Nuestro Compromiso
                </h3>
                <p className="text-gray-600 mb-4">
                  Nos comprometemos a ofrecer un servicio honesto, transparente y de calidad. Trabajamos cada día para que 
                  nuestros clientes sientan la seguridad de contar con un aliado que responderá cuando más lo necesiten.
                </p>
              </div>
            </div>
            
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="/circle_profile_picture.jpg"
                alt="Sobre Blindando Sueños"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                className="rounded-xl"
                priority
              />
              <div className="absolute inset-0 bg-primary bg-opacity-30"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Contáctanos
            </h2>
            <p className="text-gray-600">
              Estamos aquí para responder todas tus dudas. Comunícate con nosotros y un asesor especializado te ayudará a encontrar la mejor opción para ti.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  className="w-8 h-8 text-primary"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
              <p className="text-gray-600 mb-4">Disponible de Lunes a Viernes, 9AM - 6PM</p>
              <a href="tel:+5255XXXXXXXX" className="text-primary font-medium">+52 55 XXXX XXXX</a>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  className="w-8 h-8 text-primary"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Correo Electrónico</h3>
              <p className="text-gray-600 mb-4">Te respondemos en menos de 24 horas</p>
              <a href="mailto:contacto@blindandosuenos.com" className="text-primary font-medium">contacto@blindandosuenos.com</a>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  className="w-8 h-8 text-primary"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                  />
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Dirección</h3>
              <p className="text-gray-600 mb-4">Visítanos en nuestras oficinas</p>
              <p className="text-primary font-medium">Av. Insurgentes Sur 1234, Col. Del Valle, CDMX</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Image 
                  src="/logo.png" 
                  alt="Blindando Sueños Logo" 
                  width={40} 
                  height={40} 
                  className="h-10 w-auto"
                />
                <span className="text-xl font-bold">
                  Blindando Sueños
                </span>
              </div>
              <p className="text-white/80 mb-6">
                Protegiendo lo que más valoras con seguros personalizados y atención de calidad.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-accent">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-accent">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.503 14-14v-.617c.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-accent">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Enlaces</h4>
              <ul className="space-y-4">
                <li><Link href="/#inicio" className="text-white/80 hover:text-white">Inicio</Link></li>
                <li><Link href="/#seguros" className="text-white/80 hover:text-white">Seguros</Link></li>
                <li><Link href="/#nosotros" className="text-white/80 hover:text-white">Nosotros</Link></li>
                <li><Link href="/#contacto" className="text-white/80 hover:text-white">Contacto</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Nuestros Seguros</h4>
              <ul className="space-y-4">
                <li><Link href="/seguros/seguro-de-vida" className="text-white/80 hover:text-white">Seguro de Vida</Link></li>
                <li><Link href="/seguros/seguro-medico" className="text-white/80 hover:text-white">Seguro Médico</Link></li>
                <li><Link href="/seguros/seguro-hogar" className="text-white/80 hover:text-white">Seguro de Hogar</Link></li>
                <li><Link href="/seguros/seguro-auto" className="text-white/80 hover:text-white">Seguro de Auto</Link></li>
                <li><Link href="/seguros/seguro-viaje" className="text-white/80 hover:text-white">Seguro de Viaje</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Legal</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-white/80 hover:text-white">Términos y Condiciones</Link></li>
                <li><Link href="#" className="text-white/80 hover:text-white">Política de Privacidad</Link></li>
                <li><Link href="#" className="text-white/80 hover:text-white">Aviso Legal</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p className="text-white/70">
              © {new Date().getFullYear()} Blindando Sueños. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
