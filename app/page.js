'use client';

import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from './components/layouts/Header';
import CardInsurance from './components/cards/CardInsurance';
import CardInfo from './components/cards/CardInfo';
import CardContact from './components/cards/CardContact';
import ContactItem from './components/cards/ContactItem';
import LoadingSpinner from './components/layouts/LoadingSpinner';
import Button from './components/buttons/Button';
import { PhoneCall, Mail, MapPin, Clock, Zap } from 'lucide-react';

const insuranceProducts = [
  {
    id: 'seguro-de-vida',
    title: 'Seguro de Vida',
    description: 'Protege a tus seres queridos financieramente cuando ya no estés con ellos.',
    iconName: 'HeartPulse',
    color: '#FFC107',
    benefits: [
      'Cobertura por fallecimiento',
      'Beneficios por invalidez',
      'Protección para tu familia',
      'Planes personalizados',
    ],
  },
  {
    id: 'orvi',
    title: 'Orvi',
    description: 'Seguro de Vida diseñado para personas responsables que desean proteger a su familia con una protección vitalicia.',
    iconName: 'ShieldCheck',
    color: '#9C27B0',
    benefits: [
      'Cobertura por fallecimiento vitalicia',
      'Protección constante a costo fijo',
      'Conservación del poder adquisitivo',
      'Tarifas preferenciales',
    ],
  },
  {
    id: 'segubeca',
    title: 'SeguBeca',
    description: 'Forma y administra un capital para la educación universitaria de tu hijo, al mismo tiempo que proteges tu vida.',
    iconName: 'GraduationCap',
    color: '#FF5722',
    benefits: [
      'Ahorro para educación universitaria',
      'Protección por fallecimiento',
      'Administración profesional del ahorro',
      'Beneficios por invalidez',
    ],
  },
  {
    id: 'vida-mujer',
    title: 'Vida Mujer',
    description: 'Seguro que brinda protección especializada para mujeres, con beneficios por cáncer femenino y generación de ahorros periódicos.',
    iconName: 'Flower2',
    color: '#E91E63',
    benefits: [
      'Protección por cáncer femenino',
      'Ahorro con entregas periódicas',
      'Protección por fallecimiento',
      'Apoyo por complicaciones en embarazo',
    ],
  },
  {
    id: 'adapta',
    title: 'Adapta',
    description: 'Beneficio adicional que proporciona protección por fallecimiento a un menor costo, con opción de convertirlo en un seguro con mayores beneficios.',
    iconName: 'Layers',
    color: '#2196F3',
    benefits: [
      'Protección por fallecimiento adicional',
      'Convertible a un seguro con mayores beneficios',
      'Sin requisitos de suscripción al convertir',
      'Descuento en prima del primer año al convertir',
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
        className="hero-gradient text-text-dark pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden"
      >
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-[#212121]">
              Protegemos lo que más valoras. <span className="text-primary">¿Tu tranquilidad?</span> Es nuestra prioridad.
            </h1>
            <p className="text-xl md:text-2xl text-[#333333] mb-8">
              En Blindando Sueños, no solo ofrecemos pólizas: creamos <span className="text-primary">protección personalizada</span> para que puedas vivir plenamente, sin preocupaciones.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="#seguros" variant="heroYellow">
                Nuestros Seguros
              </Button>
              <Button href="#contacto" variant="heroOutline">
                Contactar Asesor
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden z-10" style={{ height: "70px", transform: "translateY(1px)" }}>
          <svg 
            className="absolute bottom-0 w-full h-full" 
            viewBox="0 0 1440 100" 
            preserveAspectRatio="none" 
            fill="#F0F7FF" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0,0 C240,95 480,100 720,80 C960,60 1200,40 1440,80 L1440,100 L0,100 Z"></path>
          </svg>
        </div>
      </section>
      
      {/* Insurance Products Section */}
      <section id="seguros" className="py-20" style={{ backgroundColor: "#F0F7FF" }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Nuestros Seguros
            </h2>
            <p className="text-text-dark">
              Ofrecemos una amplia gama de seguros diseñados para proteger lo que más te importa. Cada plan puede <span className="text-primary">personalizarse</span> según tus necesidades específicas.
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
                  iconName={product.iconName}
                  benefits={product.benefits}
                  color={product.color}
                />
              ))}
            </div>
          </Suspense>
        </div>
      </section>
      
      {/* About Us Section */}
      <section id="nosotros" className="py-20" style={{ backgroundColor: "#F1F5F9" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
              Quiénes Somos
            </h2>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 md:p-12">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-[#333333] mb-8">
                Acerca de Blindando Sueños
              </h3>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 items-center mb-10">
              <div className="lg:w-2/3">
                <p className="text-gray-700 mb-6 text-lg font-bold">
                  En <span className="text-blue-600">Blindando Sueños</span>, nos dedicamos a proteger lo que más valoras.
                </p>
                <p className="text-gray-700 mb-6 text-lg">
                  Somos una empresa comprometida con brindar soluciones personalizadas que se adaptan a las
                  necesidades cambiantes de nuestros clientes en el sector de seguros.
                </p>
                <p className="text-gray-700 text-lg">
                  Trabajamos cada día para que nuestros clientes sientan la seguridad de contar con un aliado 
                  que responderá cuando más lo necesiten, construyendo relaciones de confianza a largo plazo.
                </p>
              </div>

              <div className="lg:w-1/3 flex justify-center">
                <div className="relative w-64 h-64 group cursor-pointer">
                  <div 
                    className="absolute inset-0 rounded-full border-[6px] border-blue-500 transition-all duration-500 group-hover:scale-110 group-hover:border-[8px]"
                    style={{
                      transformOrigin: 'center',
                    }}
                  ></div>
                  <div 
                    className="absolute inset-0 rounded-full border-[6px] border-transparent border-t-yellow-400 border-r-yellow-400 transition-all duration-700 group-hover:scale-110 group-hover:border-[8px]"
                    style={{
                      transformOrigin: 'center',
                      animation: 'none',
                      transition: 'all 0.7s cubic-bezier(0.2, 0.8, 0.2, 1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.animation = 'spinAndSlow 1.5s cubic-bezier(0.5, 0, 0.1, 1) forwards';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.animation = 'spinBack 0.8s cubic-bezier(0.3, 0.1, 0.3, 1) forwards';
                    }}
                  ></div>
                  <style jsx global>{`
                    @keyframes spinAndSlow {
                      0% { transform: scale(1.1) rotate(0deg); }
                      40% { transform: scale(1.1) rotate(300deg); }
                      85% { transform: scale(1.1) rotate(355deg); }
                      100% { transform: scale(1.1) rotate(360deg); }
                    }
                    @keyframes spinBack {
                      0% { transform: scale(1.1) rotate(360deg); }
                      100% { transform: scale(1) rotate(0deg); }
                    }
                  `}</style>
                  <div className="absolute inset-[6px] overflow-hidden rounded-full transition-all duration-500 group-hover:inset-[8px]">
                    <Image 
                      src="/circle_profile_picture.jpg"
                      alt="Ejecutivo de Blindando Sueños"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <CardInfo 
                title="Nuestra Visión"
                content="Ser reconocidos como la compañía aseguradora más confiable y cercana del mercado, destacándonos por nuestro excelente servicio, soluciones innovadoras y compromiso genuino con el bienestar de nuestros clientes."
              />
              
              <CardInfo 
                title="Nuestra Misión"
                content="Brindar protección financiera integral que permita a nuestros clientes vivir con tranquilidad, sabiendo que sus seres queridos, bienes y patrimonio están resguardados ante cualquier imprevisto."
              />
              
              <CardInfo 
                title="Nuestro Compromiso"
                content="Nos comprometemos a ofrecer un servicio honesto, transparente y de calidad. Trabajamos cada día para que nuestros clientes sientan la seguridad de contar con un aliado que responderá cuando más lo necesiten."
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contacto" className="py-20" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-4">
              Contáctanos
            </h2>
            <p className="text-[#475569] text-lg">
              Estamos aquí para responder todas tus dudas. Comunícate con nosotros y un asesor especializado te ayudará a encontrar la mejor opción para ti.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CardContact 
              icon={{ 
                component: <PhoneCall size={24} />, 
                color: "#2563eb" 
              }} 
              title="Teléfonos"
            >
              <ContactItem 
                title="Línea principal" 
                content="+52 55 1234 5678" 
                isLink={true} 
                href="tel:+525512345678" 
              />
              <ContactItem 
                title="Atención a clientes" 
                content="+52 55 8765 4321" 
                isLink={true} 
                href="tel:+525587654321" 
              />
              <ContactItem 
                title="Emergencias" 
                content="+52 55 5555 5555" 
                isLink={true} 
                href="tel:+525555555555" 
              />
              <ContactItem 
                title="Horario de atención" 
                content="Lun - Vie: 9:00 AM - 6:00 PM" 
                isLink={false} 
              />
            </CardContact>
            
            <CardContact 
              icon={{ 
                component: <Mail size={24} />, 
                color: "#0891b2" 
              }} 
              title="Correo Electrónico"
            >
              <ContactItem 
                title="Información general" 
                content="info@blindandosuenos.com" 
                isLink={true} 
                href="mailto:info@blindandosuenos.com" 
              />
              <ContactItem 
                title="Atención a clientes" 
                content="clientes@blindandosuenos.com" 
                isLink={true} 
                href="mailto:clientes@blindandosuenos.com" 
              />
              <ContactItem 
                title="Cotizaciones" 
                content="cotiza@blindandosuenos.com" 
                isLink={true} 
                href="mailto:cotiza@blindandosuenos.com" 
              />
              <ContactItem 
                title="Tiempo de respuesta" 
                content="En menos de 24 horas" 
                isLink={false} 
              />
            </CardContact>
            
            <CardContact 
              icon={{ 
                component: <MapPin size={24} />, 
                color: "#e11d48" 
              }} 
              title="Oficinas"
            >
              <ContactItem 
                title="Oficina Principal" 
                content="Av. Insurgentes Sur 1234, Col. Del Valle, CDMX" 
                isLink={false} 
              />
              <ContactItem 
                title="Sucursal Polanco" 
                content="Av. Presidente Masaryk 123, Polanco, CDMX" 
                isLink={false} 
              />
              <ContactItem 
                title="Sucursal Guadalajara" 
                content="Av. México 3370, Vallarta Norte, Guadalajara" 
                isLink={false} 
              />
              <ContactItem 
                title="Horario de oficinas" 
                content="Lun - Vie: 9:00 AM - 6:00 PM" 
                isLink={false} 
              />
            </CardContact>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <CardContact 
              icon={{ 
                component: <Clock size={24} />, 
                color: "#0d9488" 
              }} 
              title="Horarios de Atención"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ContactItem 
                  title="Oficinas" 
                  content="Lun - Vie: 9:00 AM - 6:00 PM" 
                  isLink={false} 
                />
                <ContactItem 
                  title="Call Center" 
                  content="Lun - Sáb: 8:00 AM - 8:00 PM" 
                  isLink={false} 
                />
                <ContactItem 
                  title="Chat en línea" 
                  content="Lun - Dom: 8:00 AM - 10:00 PM" 
                  isLink={false} 
                />
                <ContactItem 
                  title="Emergencias" 
                  content="24/7 - Todo el año" 
                  isLink={false} 
                />
              </div>
            </CardContact>
            
            <CardContact 
              icon={{ 
                component: <Zap size={24} />, 
                color: "#ca8a04" 
              }} 
              title="Atención Rápida"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ContactItem 
                  title="Cotiza ahora" 
                  content="Solicitar Cotización" 
                  isLink={true} 
                  href="#" 
                />
                <ContactItem 
                  title="WhatsApp" 
                  content="+52 55 1234 5678" 
                  isLink={true} 
                  href="https://wa.me/525512345678" 
                />
                <ContactItem 
                  title="Chat en vivo" 
                  content="Iniciar conversación" 
                  isLink={true} 
                  href="#" 
                />
                <ContactItem 
                  title="Agendar cita" 
                  content="Reservar espacio" 
                  isLink={true} 
                  href="#" 
                />
              </div>
            </CardContact>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12" style={{ backgroundColor: "#1E293B", color: "#CBD5E1" }}>
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
                  Blindando <span style={{ color: "#F59E0B" }}>Sueños</span>
                </span>
              </div>
              <p className="mb-6 opacity-80">
                Protegiendo lo que más valoras con seguros personalizados y atención de calidad.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.503 14-14v-.617c.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Enlaces</h4>
              <ul className="space-y-4">
                <li><Link href="/#inicio" className="opacity-80 hover:opacity-100 transition-opacity">Inicio</Link></li>
                <li><Link href="/#seguros" className="opacity-80 hover:opacity-100 transition-opacity">Seguros</Link></li>
                <li><Link href="/#nosotros" className="opacity-80 hover:opacity-100 transition-opacity">Nosotros</Link></li>
                <li><Link href="/#contacto" className="opacity-80 hover:opacity-100 transition-opacity">Contacto</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Nuestros Seguros</h4>
              <ul className="space-y-4">
                <li><Link href="/seguros/seguro-de-vida" className="opacity-80 hover:opacity-100 transition-opacity">Seguro de Vida</Link></li>
                <li><Link href="/seguros/orvi" className="opacity-80 hover:opacity-100 transition-opacity">Orvi</Link></li>
                <li><Link href="/seguros/segubeca" className="opacity-80 hover:opacity-100 transition-opacity">SeguBeca</Link></li>
                <li><Link href="/seguros/vida-mujer" className="opacity-80 hover:opacity-100 transition-opacity">Vida Mujer</Link></li>
                <li><Link href="/seguros/adapta" className="opacity-80 hover:opacity-100 transition-opacity">Adapta</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Legal</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">Términos y Condiciones</Link></li>
                <li><Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">Política de Privacidad</Link></li>
                <li><Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">Aviso Legal</Link></li>
              </ul>
            </div>
          </div>
          
                      <div className="border-t border-white/20 mt-12 pt-8 text-center">
              <p className="opacity-70">
                © {new Date().getFullYear()} Blindando Sueños. Todos los derechos reservados.
              </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
