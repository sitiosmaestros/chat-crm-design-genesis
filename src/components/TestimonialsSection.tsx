
import React from 'react';
import { Star, Quote } from 'lucide-react';
import type { Testimonial } from '@/lib/types';

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Juan Pérez",
      business: "Mi Tiendita Online",
      location: "Quito",
      text: "Antes de DeClientes CRM me perdía al menos 5 ventas semanales por no responder a tiempo. Ahora no solo respondo más rápido, sino que vendo un 30% más sin esfuerzo extra.",
      avatar: "JP"
    },
    {
      id: 2,
      name: "María González",
      business: "Boutique María",
      location: "Guayaquil",
      text: "Lo mejor es que puedo atender a mis clientes incluso cuando estoy ocupada con los pedidos. El asistente IA maneja las preguntas básicas y yo me encargo de cerrar las ventas.",
      avatar: "MG"
    },
    {
      id: 3,
      name: "Roberto Ramírez",
      business: "Servicios Técnicos R&R",
      location: "Cuenca",
      text: "Trabajo con 3 técnicos y antes era un caos organizar quién respondía a cada cliente. Con DeClientes CRM cada uno tiene sus clientes asignados y nadie se pisa.",
      avatar: "RR"
    }
  ];

  const paymentLogos = [
    { name: "Visa", logo: "https://www.logo.wine/a/logo/Visa_Inc./Visa_Inc.-Logo.wine.svg" },
    { name: "Mastercard", logo: "https://www.logo.wine/a/logo/Mastercard/Mastercard-Logo.wine.svg" },
    { name: "PayPal", logo: "https://www.logo.wine/a/logo/PayPal/PayPal-Logo.wine.svg" },
    { name: "Transferencia Bancaria", logo: "https://cdn-icons-png.flaticon.com/512/2830/2830289.png" }
  ];

  return (
    <section id="testimonios" className="py-16 md:py-24 bg-crm-muted relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-crm-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-crm-accent/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container-section">
        <div className="section-title">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
            ¡No solo lo decimos nosotros!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mira lo que negocios reales están logrando con DeClientes CRM
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="card p-8 rounded-lg bg-white border border-gray-100 relative"
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-10 h-10" />
              </div>
              
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Testimonial text */}
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.text}"
              </p>
              
              {/* Person info */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-crm-primary/10 text-crm-primary flex items-center justify-center font-semibold text-lg mr-3">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.business}, {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Credibility logos */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500 mb-6">Pagos Seguros con:</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {paymentLogos.map((logo, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                <div className="bg-white h-16 px-6 rounded-lg shadow-sm flex items-center justify-center">
                  <img 
                    src={logo.logo} 
                    alt={`${logo.name} logo`} 
                    className="h-10 w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mid-page CTA */}
        <div className="mt-16 bg-gradient-to-r from-crm-primary to-crm-primary/90 text-white rounded-xl p-8 text-center shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Listo para Dejar Atrás el Caos en tu WhatsApp?
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
            Únete a cientos de negocios en Ecuador que ya multiplicaron sus ventas con DeClientes CRM
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#precios" 
              className="btn-primary bg-crm-accent hover:bg-crm-accent-hover"
            >
              ¡ELIGE TU PLAN AHORA!
            </a>
            <a 
              href="#" 
              className="btn-secondary bg-transparent text-white border-white hover:bg-white hover:text-crm-primary"
            >
              SOLICITA TU DEMO GRATUITA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
