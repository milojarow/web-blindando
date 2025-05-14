'use client';

import { useEffect, useState, useRef } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/layouts/Header';
import * as LucideIcons from 'lucide-react';

// Insurance product data
const insuranceProducts = {
  'seguro-de-vida': {
    title: 'Seguro de Vida',
    tagline: 'Protección financiera para los que más amas',
    description: 'Nuestro seguro de vida está diseñado para proporcionar seguridad financiera a tus seres queridos cuando ya no estés con ellos. Con opciones flexibles y personalizables, puedes adaptar la cobertura a tus necesidades específicas.',
    iconName: 'HeartPulse',
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
  'orvi': {
    title: 'Orvi',
    tagline: 'Protección vitalicia con solidez financiera',
    description: 'Orvi es un Seguro de Vida diseñado especialmente para personas responsables que se preocupan por proteger a su familia. Te proporciona protección vitalicia a un costo que permanecerá constante, brindándote la tranquilidad de saber que tu familia estará protegida cuando más lo necesite.',
    iconName: 'ShieldCheck',
    color: '#9C27B0',
    coverageAmount: 'Desde $30,000 USD o 90,000 UDI',
    monthlyPayment: 'Adaptable a tu presupuesto',
    benefits: [
      'Protección por fallecimiento vitalicia',
      'Prima Nivelada que permanece constante',
      'Conservación del poder adquisitivo (en USD o UDI)',
      'Tarifas preferenciales para no fumadores',
      'Beneficios por invalidez total y permanente',
      'Apoyo en Vida (AV) por enfermedad terminal',
      'Asistencia Médica en los Estados Unidos (BAM)',
      'Opción de cobertura por accidentes'
    ],
    features: [
      {
        title: 'Protección Vitalicia',
        description: 'Garantiza una protección por fallecimiento durante toda tu vida, sin importar cuándo ocurra.'
      },
      {
        title: 'Plazo de Pago Flexible',
        description: 'Opciones de pago de 6, 10, 15, 20 años, hasta los 60 años o durante toda la vida, adaptándose a tu etapa productiva.'
      },
      {
        title: 'Conservación del Poder Adquisitivo',
        description: 'Disponible en UDI (actualizable con la inflación) o en dólares para mantener el valor de tu protección.'
      },
      {
        title: 'Descuentos Especiales',
        description: 'Tarifas preferenciales para mujeres (3 años) y no fumadores (2 años), reconociendo tu mejor expectativa de vida.'
      }
    ],
    faqs: [
      {
        question: '¿Qué significa contratar Orvi?',
        answer: 'Contratar Orvi significa tener garantizada una protección por fallecimiento durante toda tu vida, aprovechar tu etapa productiva para el pago del seguro, y conservar el poder adquisitivo de tu protección gracias a la posibilidad de contratarlo en dólares o UDI.'
      },
      {
        question: '¿Qué plazo de pago me conviene más?',
        answer: 'El plazo ideal depende de tu situación financiera actual y tus metas. Los plazos más cortos (6-10 años) tienen una prima más alta pero terminas de pagar antes. Los plazos más largos (15-20 años o hasta edad 60) ofrecen primas más accesibles distribuidas en más tiempo.'
      },
      {
        question: '¿Qué son los valores garantizados?',
        answer: 'Orvi genera valores garantizados como el valor en efectivo (disponible en caso de rescate), seguro prorrogado (conserva la suma asegurada por un tiempo limitado) y seguro saldado (reduce la suma asegurada conservando el plazo), que representan el valor de tu póliza a lo largo del tiempo.'
      },
      {
        question: '¿Qué beneficios adicionales puedo agregar a mi Orvi?',
        answer: 'Puedes agregar Beneficio por Muerte Accidental (BMA), Doble Indemnización (DI), Beneficio por Invalidez Total y Permanente (BAIT/BITAE), y el beneficio Adapta para incrementar tu protección. También puedes añadir Aumento de Valor en Efectivo (AVE) para generar un ahorro adicional.'
      }
    ]
  },
  'segubeca': {
    title: 'SeguBeca',
    tagline: 'El futuro educativo de tus hijos, garantizado',
    description: 'SeguBeca está diseñado para que, durante el tiempo en que estés protegido, puedas acumular el capital necesario para el pago de la educación universitaria de tu hijo. Además, garantiza que tu hijo reciba este capital aún cuando llegues a faltar o sufras una invalidez.',
    iconName: 'GraduationCap',
    color: '#FF5722',
    coverageAmount: 'Adaptable a la universidad deseada',
    monthlyPayment: 'Desde $350 USD',
    benefits: [
      'Ahorro programado para educación universitaria',
      'Exención de pago de primas por invalidez o fallecimiento',
      'Protección por fallecimiento del contratante',
      'Administración profesional del ahorro acumulado',
      'Apoyo en Vida (AV) por enfermedad terminal',
      'Asistencia Médica en EUA (BAM)',
      'Protección Patrimonial SeguBeca (PPS)',
      'Certificado de Garantía de Contratación (CGC)'
    ],
    features: [
      {
        title: 'Ahorro Programado',
        description: 'Acumula de forma constante y programada el capital necesario para la educación universitaria de tu hijo.'
      },
      {
        title: 'Garantía de Educación',
        description: 'Si llegas a faltar o sufres una invalidez, SeguBeca cubre los pagos restantes, garantizando que tu hijo reciba el capital planeado.'
      },
      {
        title: 'Administración Profesional',
        description: 'El capital acumulado se entrega en pagos mensuales durante cuatro años con rendimientos adicionales, facilitando el uso eficiente del dinero.'
      },
      {
        title: 'Opciones de Protección',
        description: 'Flexibilidad para elegir protección por fallecimiento durante la vigencia del plan, de forma vitalicia, o por periodos de cinco años renovables.'
      }
    ],
    faqs: [
      {
        question: '¿Cómo funciona SeguBeca?',
        answer: 'Con SeguBeca defines el monto que necesitas para la educación de tu hijo considerando el costo de la universidad y gastos adicionales. Realizas pagos programados hasta que tu hijo cumpla 18 años. Al final, recibe el ahorro acumulado más rendimientos en pagos mensuales durante cuatro años o en una sola exhibición.'
      },
      {
        question: '¿Qué sucede si fallezco o sufro una invalidez durante el periodo de pago?',
        answer: 'Si llegas a faltar o sufres una invalidez total y permanente durante el periodo de pagos, SeguBeca cubre los pagos restantes y tu hijo recibirá el ahorro planeado al cumplir 18 años. Además, tu familia recibirá la suma asegurada por fallecimiento.'
      },
      {
        question: '¿Mi hijo puede seguir protegido después de terminar el plan?',
        answer: 'Sí, con el Certificado de Garantía de Contratación (CGC), tu hijo podrá adquirir su propio seguro de vida a los 22, 24, 26, 28 o 30 años, o en momentos especiales (matrimonio, nacimiento de un hijo, compra de casa, etc.) sin requisitos de suscripción.'
      },
      {
        question: '¿Cómo se entrega el dinero al final del plan?',
        answer: 'Al final del plan, tienes dos opciones: recibir pagos mensuales más rendimientos durante cuatro años (recomendado para administrar mejor el capital durante la carrera), o recibir el ahorro completo en una sola exhibición al cumplir 18 años.'
      }
    ]
  },
  'vida-mujer': {
    title: 'Vida Mujer',
    tagline: 'Protección especializada para mujeres',
    description: 'Vida Mujer es el seguro que brinda un apoyo real a la mujer, dándole la oportunidad de proteger lo más valioso: su salud y a su familia. Disfruta de un ahorro en vida y al mismo tiempo cuenta con apoyo en caso de presentarse alguna enfermedad propia de la mujer. Sus beneficiarios cuentan con un respaldo económico en caso de fallecimiento.',
    iconName: 'Flower2',
    color: '#E91E63',
    coverageAmount: 'Desde $10,000 USD o 35,000 UDI',
    monthlyPayment: 'Desde $350 USD',
    benefits: [
      'Protección por fallecimiento',
      'Protección por cáncer femenino',
      'Generación de ahorros periódicos',
      'Apoyo económico por matrimonio o nacimiento',
      'Protección por complicaciones del embarazo',
      'Apoyo en Vida (AV) por enfermedad terminal',
      'Asistencia Médica en EUA (BAM)',
      'Cuidados a Largo Plazo (CLP)'
    ],
    features: [
      {
        title: 'Entrega Periódica de Ahorros',
        description: 'A partir del 5º año se entrega el 5% de la suma asegurada cada 2 años, y el 80% en el año 20, para un total del 115% de la suma asegurada.'
      },
      {
        title: 'Protección por Cáncer Femenino',
        description: 'Indemnización en caso de diagnóstico de cáncer en órganos femeninos como mama, ovario, útero y otros, con pagos según la gravedad del caso.'
      },
      {
        title: 'Anticipo por Momentos Especiales',
        description: 'Si entre el 4° y 5° año de vigencia te casas o tienes un hijo, puedes adelantar el 5% de la suma asegurada contratada.'
      },
      {
        title: 'Cobertura por Complicaciones del Embarazo',
        description: 'Protección opcional para complicaciones como parto prematuro, embarazo ectópico, síndrome de Hellp y problemas del recién nacido.'
      }
    ],
    faqs: [
      {
        question: '¿Qué es la Protección por Cáncer Femenino?',
        answer: 'Es una cobertura obligatoria que paga un porcentaje de la suma asegurada si se diagnostica cáncer en órganos femeninos. El pago varía según el tipo de tumor: 100% para tumor maligno de mama con metástasis, 47% para tumor maligno de mama localizado, 38% para tumor maligno del ovario, y otros porcentajes para diferentes condiciones.'
      },
      {
        question: '¿Cómo funciona el ahorro en Vida Mujer?',
        answer: 'El plan tiene una vigencia de 20 años. A partir del 5º año, recibirás cada 2 años el 5% de la suma asegurada contratada (años 5, 7, 9, 11, 13, 15 y 17), y al finalizar el plan (año 20) recibirás el 80% restante, sumando un total del 115% de la suma asegurada.'
      },
      {
        question: '¿Qué coberturas adicionales puedo contratar?',
        answer: 'Puedes agregar protección por complicaciones del embarazo (PEP), pérdida de ingreso por invalidez (PII), cuidados a largo plazo (CLP), protección por viudez para tu cónyuge (CPV), y coberturas por invalidez y accidentes, entre otras opciones.'
      },
      {
        question: '¿Qué es la cláusula de Protección por Viudez?',
        answer: 'Es una cobertura opcional que protege a tu cónyuge, pagando una suma asegurada independiente en caso de su fallecimiento durante la vigencia de la póliza. En caso de que tú fallezcas, tu cónyuge puede convertir esta cláusula en un seguro temporal por 20 años sin perder antigüedad.'
      }
    ]
  },
  'adapta': {
    title: 'Adapta',
    tagline: 'Protección flexible con visión de futuro',
    description: 'Adapta es un beneficio adicional que proporciona protección por fallecimiento a un menor costo. Después de dos años, tienes la opción de convertirlo en un seguro de vida con mayores beneficios, sin presentar requisitos de suscripción y con un descuento en la prima del primer año.',
    iconName: 'Layers',
    color: '#2196F3',
    coverageAmount: 'Desde $30,000 USD o 100,000 UDI',
    monthlyPayment: 'Tarifa preferencial',
    benefits: [
      'Protección por fallecimiento adicional',
      'Convertible a un seguro con mayores beneficios',
      'Sin requisitos de suscripción al convertir',
      'Descuento en prima del primer año al convertir',
      'Se puede contratar para familiares directos',
      'Renovable cada 5 años',
      'Compatible con otros beneficios adicionales',
      'Opción de conversión parcial'
    ],
    features: [
      {
        title: 'Garantía de Conversión',
        description: 'Después de dos años de vigencia, puedes convertir tu Adapta a un seguro de vida con mayores beneficios sin presentar requisitos de suscripción, incluso si tu estado de salud ha cambiado.'
      },
      {
        title: 'Descuento al Convertir',
        description: 'Al convertir tu Adapta, recibes un descuento en la prima del primer año del nuevo seguro: por cada 1,000 unidades de suma asegurada se descontarán 3 unidades.'
      },
      {
        title: 'Flexibilidad de Conversión',
        description: 'Puedes convertir tu Adapta a diferentes planes como Imagina Ser, Realiza, Orvi, Star Dotal, Objetivo Vida, Vida Mujer o Nuevo Plenitud.'
      },
      {
        title: 'Protección para Familiares',
        description: 'Puedes contratar Adapta para tus familiares directos (padres, cónyuge, hermanos e hijos) con sumas aseguradas independientes.'
      }
    ],
    faqs: [
      {
        question: '¿Cuándo puedo convertir mi Adapta?',
        answer: 'Puedes solicitar la conversión una vez concluido el segundo año de vigencia de tu Adapta y hasta finalizar tu segundo periodo de 5 años, sin presentar requisitos de asegurabilidad.'
      },
      {
        question: '¿Puedo convertir solo una parte de mi Adapta?',
        answer: 'Sí, puedes realizar una conversión parcial. La suma asegurada no convertida puede quedar vigente en la póliza original (si cumple con los mínimos establecidos) o ser cancelada si así lo solicitas o no cumple con los mínimos requeridos.'
      },
      {
        question: '¿Qué sucede si fallezco o me invalido antes de convertir?',
        answer: 'Si el asegurado principal fallece o se invalida, los familiares directos que contrataron Adapta tendrán el derecho de convertir sin requisitos de suscripción a un nuevo seguro de vida. Tendrán 30 días para solicitar la conversión a partir del siniestro.'
      },
      {
        question: '¿Cómo funciona el BIT Adapta?',
        answer: 'El BIT Adapta es un beneficio que exenta del pago de primas de la cobertura Adapta si el asegurado principal queda en invalidez total y permanente. Solo se puede contratar si el asegurado principal tiene el BIT del plan básico y se incluye al inicio de vigencia del Adapta.'
      }
    ]
  }
};

export default function InsuranceDetail() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('beneficios');
  const [isVisible, setIsVisible] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const sectionRef = useRef(null);
  
  // Get the current product ID from params
  const id = params?.id;
  
  // Get icon component from Lucide
  const IconComponent = product ? LucideIcons[product.iconName] : null;

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
    <main className="min-h-screen bg-base-100">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-3/5">
              <div className="flex items-center mb-4">
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center mr-4"
                  style={{ background: `${product.color}40` }}
                >
                  {IconComponent && (
                    <IconComponent 
                      size={28} 
                      color={product.color}
                  />
                  )}
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
                    {LucideIcons.BadgeCheck && (
                      <LucideIcons.BadgeCheck
                        size={24} 
                        color={product.color}
                      />
                    )}
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
                    {LucideIcons.Calendar && (
                      <LucideIcons.Calendar
                        size={24} 
                        color={product.color}
                      />
                    )}
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
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                      <LucideIcons.User size={16} className="mr-2" />
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
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                      <LucideIcons.Mail size={16} className="mr-2" />
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
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                      <LucideIcons.Phone size={16} className="mr-2" />
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
                    <label htmlFor="contact-time" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                      <LucideIcons.Clock size={16} className="mr-2" />
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
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                    <LucideIcons.MessageSquare size={16} className="mr-2" />
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
    </main>
  );
} 