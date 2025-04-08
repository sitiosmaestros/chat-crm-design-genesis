
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { PricingPlan } from '@/lib/types';

const PricingSection = () => {
  const plans: PricingPlan[] = [
    {
      id: 1,
      name: "Mensual",
      description: "Ideal para probar y comenzar",
      price: 18,
      period: "mes",
      features: [
        "1 número de WhatsApp",
        "Hasta 3 usuarios",
        "Respuestas IA básicas",
        "Etiquetas y organización",
        "Reportes simples",
        "Soporte vía email"
      ]
    },
    {
      id: 2,
      name: "Trimestral",
      description: "Nuestro plan más flexible",
      price: 45,
      period: "trimestre",
      features: [
        "1 número de WhatsApp",
        "Hasta 5 usuarios",
        "Respuestas IA avanzadas",
        "Etiquetas personalizables",
        "Reportes detallados",
        "Soporte prioritario",
        "Templates de mensajes"
      ],
      discount: "Ahorras $9"
    },
    {
      id: 3,
      name: "Anual",
      description: "Mejor valor a largo plazo",
      price: 144,
      period: "año",
      features: [
        "2 números de WhatsApp",
        "Usuarios ilimitados",
        "IA completamente personalizable",
        "Sistema avanzado de etiquetas",
        "Reportes avanzados y exportables",
        "Soporte VIP 24/7",
        "Templates personalizables",
        "Integración con tu sitio web"
      ],
      popular: true,
      discount: "¡Ahorras $72! Solo $12/mes"
    }
  ];

  return (
    <section id="precios" className="py-16 md:py-24 bg-crm-muted relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="container-section">
        <div className="section-title">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
            Elige el Plan Perfecto para tu Negocio
          </h2>
          <div className="bg-crm-accent/10 text-crm-accent text-lg font-semibold py-2 px-4 rounded-full inline-block mb-4 animate-pulse">
            ¡Oferta de Lanzamiento por Tiempo Limitado!
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Precios especiales para emprendedores y empresas en Ecuador
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`card bg-white rounded-lg border ${plan.popular ? 'border-crm-accent shadow-lg relative' : 'border-gray-200'}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 inset-x-0 flex justify-center">
                  <Badge className="bg-crm-accent text-white px-3 py-1">Más Popular</Badge>
                </div>
              )}
              
              <div className={`p-6 ${plan.popular ? 'pt-8' : ''}`}>
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-500">/{plan.period}</span>
                  
                  {plan.discount && (
                    <div className="mt-2">
                      <span className="text-crm-accent font-medium">{plan.discount}</span>
                    </div>
                  )}
                </div>
                
                <Button 
                  className={`w-full ${plan.popular ? 'bg-crm-accent hover:bg-crm-accent-hover' : 'bg-crm-primary hover:bg-crm-primary/90'} text-white`}
                >
                  Elegir Plan <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                
                <div className="mt-6 space-y-3">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className={`w-5 h-5 mr-2 flex-shrink-0 ${plan.popular ? 'text-crm-accent' : 'text-crm-primary'}`} />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Guarantee */}
        <div className="mt-12 text-center">
          <p className="flex items-center justify-center text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-crm-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Todos los planes incluyen <span className="font-semibold">Garantía de Satisfacción de 15 días</span>
          </p>
        </div>
        
        {/* Enterprise plan */}
        <div className="mt-16 bg-gradient-to-r from-crm-primary to-crm-primary/90 text-white rounded-xl overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 p-8">
              <h3 className="text-2xl font-bold mb-2">¿Necesitas una solución personalizada?</h3>
              <p className="text-white/90 mb-4">
                Para empresas más grandes o con necesidades específicas, ofrecemos planes personalizados con características adicionales.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-crm-accent" />
                  <span>Integración con sistemas existentes</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-crm-accent" />
                  <span>Personalización avanzada de la plataforma</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-crm-accent" />
                  <span>Capacitación para equipos grandes</span>
                </li>
              </ul>
              <Button className="bg-white text-crm-primary hover:bg-gray-100">
                Contactar para Plan Empresarial
              </Button>
            </div>
            <div className="md:w-1/3 bg-crm-primary/20 p-8 flex items-center justify-center">
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p className="font-medium">Soluciones Empresariales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
