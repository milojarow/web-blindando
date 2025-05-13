'use client';

import { useEffect, useState, useRef } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layouts/Header';

// Insurance product data
const insuranceProducts = {
  'seguro-de-vida': {
    title: 'Seguro de Vida',
    tagline: 'Protección financiera para los que más amas',
    description: 'Nuestro seguro de vida está diseñado para proporcionar seguridad financiera a tus seres queridos cuando ya no estés con ellos. Con opciones flexibles y personalizables, puedes adaptar la cobertura a tus necesidades específicas.',
    icon: '/icons/life.svg',
    color: '#4a6fa5',
    coverageAmount: '$1,000,000 - $5,000,000',
    monthlyPayment: 'Desde $350 MXN',
    benefits: [
      'Cobertura por fallecimiento',
      'Beneficios por invalidez',
      'Protección para tu familia',
      'Planes personalizados',
      'Cobertura en caso de enfermedad terminal',
      'Opción de pago anticipado',
      'Servicios de asistencia funeraria',
      'Trámites simplificados para beneficiarios'
    ],
    features: [
      {
        title: 'Cobertura Flexible',
        description: 'Elige el monto de cobertura que mejor se adapte a tus necesidades y posibilidades económicas.'
      },
      {
        title: 'Beneficiarios a Tu Elección',
        description: 'Designa libremente a los beneficiarios de tu póliza y cambia esta designación cuando lo necesites.'
      },
      {
        title: 'Pago Anticipado',
        description: 'En caso de enfermedad terminal diagnosticada, podrás recibir un porcentaje de la suma asegurada en vida.'
      },
      {
        title: 'Cobertura Mundial',
        description: 'Estás protegido sin importar dónde te encuentres en el mundo.'
      }
    ],
    faqs: [
      {
        question: '¿Quién puede contratar un seguro de vida?',
        answer: 'Cualquier persona mayor de 18 años y menor de 65 años puede contratar nuestro seguro de vida, sujeto a una evaluación de riesgos básica.'
      },
      {
        question: '¿Qué sucede si dejo de pagar mi seguro?',
        answer: 'Existe un periodo de gracia para realizar el pago. Después de este periodo, la póliza puede ser cancelada o entrar en un estado de suspensión, dependiendo de las condiciones específicas de tu contrato.'
      },
      {
        question: '¿Cómo se cobra la indemnización?',
        answer: 'Los beneficiarios designados deben presentar la reclamación con los documentos requeridos. Nuestro equipo de atención simplifica este proceso para que reciban el pago en el menor tiempo posible.'
      },
      {
        question: '¿El seguro cubre el suicidio?',
        answer: 'La mayoría de nuestras pólizas cubren el suicidio después de un periodo de carencia de dos años desde la contratación o última rehabilitación de la póliza.'
      }
    ]
  },
  'seguro-medico': {
    title: 'Seguro Médico',
    tagline: 'Tu salud, nuestra prioridad',
    description: 'Nuestro seguro médico te ofrece acceso a la mejor atención médica sin preocuparte por los costos. Con cobertura amplia que incluye consultas, hospitalización, cirugías y más, puedes centrarte en lo que realmente importa: tu salud y la de tu familia.',
    icon: '/icons/health.svg',
    color: '#36d399',
    coverageAmount: 'Hasta $20,000,000 MXN',
    monthlyPayment: 'Desde $550 MXN',
    benefits: [
      'Consultas médicas',
      'Hospitalización',
      'Medicamentos',
      'Atención de emergencias',
      'Cirugías programadas',
      'Estudios de laboratorio',
      'Atención dental básica',
      'Segunda opinión médica'
    ],
    features: [
      {
        title: 'Red Médica Extensa',
        description: 'Accede a nuestra amplia red de hospitales, clínicas y especialistas en todo el país.'
      },
      {
        title: 'Cobertura Internacional',
        description: 'Opción de cobertura para atención médica en el extranjero en caso de emergencia o tratamientos especializados.'
      },
      {
        title: 'Telemedicina 24/7',
        description: 'Consultas médicas virtuales disponibles a cualquier hora desde la comodidad de tu hogar.'
      },
      {
        title: 'Programas de Prevención',
        description: 'Incluye chequeos preventivos y programas de bienestar para mantener tu salud en óptimas condiciones.'
      }
    ],
    faqs: [
      {
        question: '¿Existe un periodo de espera para ciertas condiciones?',
        answer: 'Sí, algunas condiciones preexistentes o ciertos procedimientos pueden tener periodos de espera específicos. Estos varían entre 30 días para enfermedades comunes y hasta 24 meses para condiciones más complejas.'
      },
      {
        question: '¿Puedo incluir a mi familia en la misma póliza?',
        answer: 'Sí, ofrecemos planes familiares que pueden incluir a cónyuge e hijos bajo la misma póliza, con tarifas preferenciales.'
      },
      {
        question: '¿Qué no cubre el seguro médico?',
        answer: 'Generalmente, no se cubren tratamientos estéticos, condiciones preexistentes no declaradas, autolesiones intencionales y ciertos tratamientos experimentales. Los detalles específicos dependen del plan contratado.'
      },
      {
        question: '¿Cómo funciona el reembolso de gastos médicos?',
        answer: 'Para servicios fuera de nuestra red, deberás pagar y luego solicitar un reembolso presentando facturas y recetas médicas. El proceso suele tardar entre 5 y 15 días hábiles una vez presentada toda la documentación.'
      }
    ]
  },
  'seguro-hogar': {
    title: 'Seguro de Hogar',
    tagline: 'Protege tu espacio más preciado',
    description: 'Tu hogar es mucho más que un edificio, es donde vives tus momentos más importantes. Nuestro seguro de hogar protege tanto la estructura como tus pertenencias contra daños, robos y otros imprevistos, para que puedas sentirte seguro en tu espacio.',
    icon: '/icons/home.svg',
    color: '#f5b35e',
    coverageAmount: 'Según el valor declarado de la propiedad',
    monthlyPayment: 'Desde $250 MXN',
    benefits: [
      'Cobertura contra incendios',
      'Protección contra robos',
      'Daños por fenómenos naturales',
      'Responsabilidad civil',
      'Asistencia domiciliaria 24/7',
      'Cobertura de bienes específicos',
      'Gastos extrarodinarios de vivienda',
      'Reparación de electrodomésticos'
    ],
    features: [
      {
        title: 'Protección Integral',
        description: 'Cobertura tanto para la estructura de tu casa como para tus pertenencias y contenidos.'
      },
      {
        title: 'Asistencia Inmediata',
        description: 'Servicio de asistencia domiciliaria para emergencias como plomería, electricidad, cerrajería y más.'
      },
      {
        title: 'Cobertura por Desastres Naturales',
        description: 'Protección contra daños causados por terremotos, inundaciones, tormentas y otros fenómenos naturales.'
      },
      {
        title: 'Responsabilidad Civil',
        description: 'Cobertura por daños que puedas causar involuntariamente a terceros dentro de tu propiedad.'
      }
    ],
    faqs: [
      {
        question: '¿Qué tipo de propiedades pueden asegurarse?',
        answer: 'Podemos asegurar casas particulares, departamentos, condominios y en algunos casos, propiedades en renta. Cada propiedad se evalúa individualmente.'
      },
      {
        question: '¿El seguro cubre objetos de valor como joyas o arte?',
        answer: 'Los objetos de valor especial como joyas, arte o colecciones pueden requerir una declaración específica y en algunos casos una cobertura adicional para estar plenamente protegidos.'
      },
      {
        question: '¿Qué debo hacer en caso de robo?',
        answer: 'En caso de robo, debes presentar una denuncia ante las autoridades y notificar a la aseguradora lo antes posible, con el inventario de los artículos robados.'
      },
      {
        question: '¿El seguro cubre daños causados por mascotas?',
        answer: 'Los daños causados por tus propias mascotas a la propiedad generalmente no están cubiertos, pero la responsabilidad civil por daños que tus mascotas puedan causar a terceros sí puede estar incluida en la cobertura.'
      }
    ]
  },
  'seguro-auto': {
    title: 'Seguro de Auto',
    tagline: 'Conduce con total tranquilidad',
    description: 'Nuestro seguro de auto te ofrece la tranquilidad de manejar sabiendo que estás protegido ante cualquier imprevisto. Con coberturas flexibles que se adaptan a tus necesidades y presupuesto, puedes elegir desde una protección básica hasta la más completa.',
    icon: '/icons/car.svg',
    color: '#f87272',
    coverageAmount: 'Según el valor del vehículo',
    monthlyPayment: 'Desde $400 MXN',
    benefits: [
      'Daños a terceros',
      'Cobertura amplia',
      'Asistencia vial',
      'Robo total',
      'Gastos médicos para ocupantes',
      'Auto sustituto',
      'Defensa legal',
      'Pérdida total por daños'
    ],
    features: [
      {
        title: 'Asistencia Vial 24/7',
        description: 'Servicio de asistencia en carretera las 24 horas, incluyendo grúa, cambio de llanta, paso de corriente y más.'
      },
      {
        title: 'Cobertura Personalizable',
        description: 'Elige entre diferentes niveles de cobertura según tus necesidades y presupuesto, desde responsabilidad civil hasta cobertura amplia.'
      },
      {
        title: 'Protección a Ocupantes',
        description: 'Gastos médicos para ti y los ocupantes de tu vehículo en caso de accidente.'
      },
      {
        title: 'App Móvil',
        description: 'Gestiona tu póliza, reporta siniestros y solicita asistencia directamente desde nuestra aplicación móvil.'
      }
    ],
    faqs: [
      {
        question: '¿Qué tipos de vehículos pueden asegurarse?',
        answer: 'Aseguramos automóviles particulares, SUVs, pickups, motocicletas y ciertos vehículos comerciales. La elegibilidad depende del año, modelo y estado del vehículo.'
      },
      {
        question: '¿Cómo funciona el deducible?',
        answer: 'El deducible es el monto que debes pagar antes de que la aseguradora cubra el resto del siniestro. Este porcentaje varía según el tipo de cobertura y se aplica sobre el valor del daño o del vehículo en caso de robo total.'
      },
      {
        question: '¿Qué debo hacer en caso de accidente?',
        answer: 'En caso de accidente, mantén la calma, verifica si hay heridos, notifica a las autoridades si es necesario y contacta inmediatamente a la aseguradora a través de la línea de emergencia o la app.'
      },
      {
        question: '¿El seguro cubre a otros conductores que manejen mi auto?',
        answer: 'Sí, generalmente la póliza cubre el vehículo independientemente de quién lo conduzca, siempre que tenga licencia válida y la autorización del asegurado.'
      }
    ]
  },
  'seguro-viaje': {
    title: 'Seguro de Viaje',
    tagline: 'Explora el mundo sin preocupaciones',
    description: 'Nuestro seguro de viaje te ofrece la tranquilidad de disfrutar tus aventuras con protección completa. Desde atención médica internacional hasta cobertura por cancelaciones y pérdida de equipaje, estamos contigo en cada paso de tu viaje.',
    icon: '/icons/travel.svg',
    color: '#3abff8',
    coverageAmount: 'Hasta $1,000,000 USD en gastos médicos',
    monthlyPayment: 'Desde $30 USD por viaje',
    benefits: [
      'Atención médica internacional',
      'Pérdida de equipaje',
      'Cancelación de viaje',
      'Asistencia 24/7',
      'Repatriación médica',
      'Responsabilidad civil en viaje',
      'Gastos por demora de vuelo',
      'Protección de dispositivos electrónicos'
    ],
    features: [
      {
        title: 'Cobertura Mundial',
        description: 'Protección en cualquier parte del mundo con atención en el idioma local.'
      },
      {
        title: 'Asistencia Médica',
        description: 'Cobertura para gastos médicos, hospitalización y medicamentos en caso de enfermedad o accidente durante el viaje.'
      },
      {
        title: 'Protección de Viaje',
        description: 'Reembolso por cancelación, interrupción de viaje o demoras significativas.'
      },
      {
        title: 'Soporte 24/7',
        description: 'Centro de asistencia disponible todo el día, todos los días, para ayudarte en cualquier emergencia durante tu viaje.'
      }
    ],
    faqs: [
      {
        question: '¿Cuándo debo contratar el seguro de viaje?',
        answer: 'Lo ideal es contratar el seguro de viaje inmediatamente después de reservar tu viaje, para obtener cobertura de cancelación desde el inicio. Sin embargo, puedes contratarlo hasta 24 horas antes de tu salida.'
      },
      {
        question: '¿Cubre condiciones médicas preexistentes?',
        answer: 'La cobertura de condiciones preexistentes varía según el plan. Algunas pólizas pueden ofrecer cobertura limitada para condiciones estables y controladas. Es importante declarar cualquier condición preexistente al contratar.'
      },
      {
        question: '¿Qué documentación necesito para hacer un reclamo?',
        answer: 'Generalmente necesitarás prueba del incidente (informe policial para robos, certificado médico para enfermedades), recibos originales de gastos, itinerario de viaje y formulario de reclamo completado. Recomendamos guardar toda la documentación durante el viaje.'
      },
      {
        question: '¿El seguro cubre deportes de aventura?',
        answer: 'Los planes estándar generalmente cubren actividades recreativas comunes, pero los deportes de aventura o actividades de alto riesgo pueden requerir una cobertura adicional específica que puede añadirse a la póliza.'
      }
    ]
  }
};

export default function InsuranceDetail() {
  const params = useParams();
  const { id } = params;
  const [activeTab, setActiveTab] = useState('beneficios');
  const [isVisible, setIsVisible] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (id && insuranceProducts[id]) {
      setProduct(insuranceProducts[id]);
      setIsLoading(false);
      
      // Store last viewed product in localStorage
      try {
        const recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
        const newRecentlyViewed = [
          { id, title: insuranceProducts[id].title },
          ...recentlyViewed.filter(item => item.id !== id)
        ].slice(0, 3);
        localStorage.setItem('recentlyViewed', JSON.stringify(newRecentlyViewed));
      } catch (error) {
        console.error('Error storing in localStorage:', error);
      }
    } else {
      setIsLoading(false);
    }
  }, [id]);

  const toggleFaq = (index) => {
    setIsVisible(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const scrollToEnquiry = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isLoading) {
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
        <p className="mt-4 text-primary font-medium">Cargando información del seguro...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-base-200 pt-20">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Seguro no encontrado</h1>
          <p className="text-gray-600 mb-8">El seguro que estás buscando no existe o ha sido eliminado.</p>
          <Link 
            href="/#seguros" 
            className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Ver todos los seguros
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      <Header />
      
      {/* Hero Banner */}
      <section className="pt-32 pb-16" style={{ backgroundColor: `${product.color}15` }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="flex items-center mb-6">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mr-4"
                  style={{ backgroundColor: `${product.color}30` }}
                >
                  <Image
                    src={product.icon}
                    alt={product.title}
                    width={32}
                    height={32}
                    style={{ color: product.color }}
                  />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold" style={{ color: product.color }}>
                    {product.title}
                  </h1>
                  <p className="text-gray-600 text-xl">{product.tagline}</p>
                </div>
              </div>
              
              <p className="text-gray-700 text-lg mb-8 max-w-2xl">
                {product.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: `${product.color}20` }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: product.color }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Cobertura hasta</p>
                    <p className="text-lg font-semibold">{product.coverageAmount}</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: `${product.color}20` }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: product.color }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Pago mensual</p>
                    <p className="text-lg font-semibold">{product.monthlyPayment}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={scrollToEnquiry}
                  className="px-6 py-3 rounded-md text-white font-medium shadow-md hover:shadow-lg transition-all"
                  style={{ backgroundColor: product.color }}
                >
                  Solicitar información
                </button>
                <Link 
                  href="/#seguros" 
                  className="px-6 py-3 rounded-md bg-white text-gray-700 font-medium shadow-md hover:shadow-lg transition-all"
                >
                  Ver otros seguros
                </Link>
              </div>
            </div>
            
            <div className="relative w-full md:w-2/5 h-64 md:h-96 rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="/circle_profile_picture.jpg"
                alt={product.title}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                style={{ objectFit: 'cover' }}
                className="rounded-xl"
                priority
              />
              <div 
                className="absolute inset-0 opacity-70"
                style={{ backgroundColor: product.color }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Details Tabs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="flex flex-wrap text-sm font-medium border-b border-gray-200">
              <button
                className={`px-6 py-4 transition-colors ${
                  activeTab === 'beneficios' 
                    ? `border-b-2 text-white` 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                style={{ 
                  borderColor: activeTab === 'beneficios' ? product.color : 'transparent',
                  backgroundColor: activeTab === 'beneficios' ? product.color : 'transparent',
                }}
                onClick={() => setActiveTab('beneficios')}
              >
                Beneficios
              </button>
              <button
                className={`px-6 py-4 transition-colors ${
                  activeTab === 'caracteristicas' 
                    ? `border-b-2 text-white` 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                style={{ 
                  borderColor: activeTab === 'caracteristicas' ? product.color : 'transparent',
                  backgroundColor: activeTab === 'caracteristicas' ? product.color : 'transparent',
                }}
                onClick={() => setActiveTab('caracteristicas')}
              >
                Características
              </button>
              <button
                className={`px-6 py-4 transition-colors ${
                  activeTab === 'preguntas' 
                    ? `border-b-2 text-white` 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                style={{ 
                  borderColor: activeTab === 'preguntas' ? product.color : 'transparent',
                  backgroundColor: activeTab === 'preguntas' ? product.color : 'transparent',
                }}
                onClick={() => setActiveTab('preguntas')}
              >
                Preguntas Frecuentes
              </button>
            </div>
            
            <div className="p-6">
              {activeTab === 'beneficios' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-start">
                        <svg
                          className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0"
                          style={{ color: product.color }}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {activeTab === 'caracteristicas' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                        style={{ backgroundColor: `${product.color}20` }}
                      >
                        <span className="text-xl font-bold" style={{ color: product.color }}>
                          {index + 1}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {activeTab === 'preguntas' && (
                <div className="space-y-4">
                  {product.faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        className="flex justify-between items-center w-full p-4 text-left font-medium"
                        onClick={() => toggleFaq(index)}
                      >
                        <span className="text-gray-800">{faq.question}</span>
                        <svg
                          className={`h-5 w-5 transition-transform ${isVisible[index] ? 'transform rotate-180' : ''}`}
                          style={{ color: product.color }}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isVisible[index] && (
                        <div className="p-4 pt-0 border-t border-gray-200">
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section ref={sectionRef} className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: product.color }}>
                Solicita más información sobre {product.title}
              </h2>
              <p className="text-gray-600 mb-8 text-center">
                Completa el formulario y uno de nuestros asesores te contactará para resolver todas tus dudas.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:border-transparent"
                      style={{ focusRing: product.color, focusBorderColor: product.color }}
                      placeholder="Ingresa tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:border-transparent"
                      style={{ focusRing: product.color, focusBorderColor: product.color }}
                      placeholder="correo@ejemplo.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:border-transparent"
                      style={{ focusRing: product.color, focusBorderColor: product.color }}
                      placeholder="Ingresa tu teléfono"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-time" className="block text-sm font-medium text-gray-700 mb-1">
                      Mejor horario para contactarte
                    </label>
                    <select
                      id="contact-time"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:border-transparent"
                      style={{ focusRing: product.color, focusBorderColor: product.color }}
                    >
                      <option>Mañana (9 AM - 12 PM)</option>
                      <option>Tarde (12 PM - 5 PM)</option>
                      <option>Noche (5 PM - 8 PM)</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje (opcional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:border-transparent"
                    style={{ focusRing: product.color, focusBorderColor: product.color }}
                    placeholder="Escribe cualquier información adicional que quieras proporcionarnos"
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input
                    id="terms"
                    type="checkbox"
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    style={{ color: product.color }}
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                    Acepto la <a href="#" className="underline" style={{ color: product.color }}>política de privacidad</a> y el tratamiento de mis datos personales.
                  </label>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all"
                    style={{ backgroundColor: product.color }}
                  >
                    Solicitar información
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Image 
                src="/logo.png" 
                alt="Blindando Sueños Logo" 
                width={40} 
                height={40} 
                className="h-8 w-auto mr-2"
              />
              <span className="text-gray-700 font-medium">
                Blindando Sueños
              </span>
            </div>
            
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Blindando Sueños. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 