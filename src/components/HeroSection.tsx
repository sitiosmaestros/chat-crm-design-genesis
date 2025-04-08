
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10">
        <div className="absolute right-0 top-24 w-96 h-96 bg-gradient-to-bl from-crm-accent to-crm-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-section">
        <div className="max-w-5xl mx-auto">
          {/* Small badge/highlight */}
          <div className="inline-block px-4 py-1 mb-6 bg-crm-light rounded-full text-crm-primary text-sm font-medium animate-fade-in">
            <MessageCircle className="inline-block w-4 h-4 mr-1" /> 
            Diseñado para negocios en Ecuador
          </div>
          
          {/* Main headline */}
          <h1 className="text-center animate-fade-up">
            ¿Tu WhatsApp es un Caos que te Hace Perder Ventas Todos los Días?
          </h1>
          
          {/* Extended headline - highlight color for key parts */}
          <h2 className="text-lg md:text-xl text-center mt-4 mb-8 font-medium text-gray-700 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            ¡Descubre Cómo <span className="text-crm-primary font-semibold">Organizar tus Chats</span>, 
            <span className="text-crm-primary font-semibold"> Responder al Instante</span> y 
            <span className="text-crm-primary font-semibold"> Multiplicar tus Cierres</span> con el CRM 
            Diseñado para Negocios como el Tuyo!
          </h2>
          
          {/* Sub headline */}
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Deja de ahogarte en notificaciones y empieza a gestionar WhatsApp como un profesional...
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button 
              size="lg" 
              className="btn-primary text-base"
            >
              ¡ELIGE TU PLAN AHORA! <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="btn-secondary text-base"
            >
              SOLICITA TU DEMO GRATUITA
            </Button>
          </div>
          
          {/* Hero image/mockup - UPDATED WITH NEW IMAGE */}
          <div className="relative mx-auto max-w-4xl overflow-hidden animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <img 
              src="/lovable-uploads/10644dad-75ed-4c82-a0b3-2f5e073c7564.png" 
              alt="DeClientes CRM Dashboard y aplicación móvil" 
              className="w-full rounded-xl shadow-2xl"
            />
            
            {/* Overlaying highlight */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-crm-accent/10 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
