
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
          
          {/* Hero image/mockup */}
          <div className="relative mx-auto max-w-4xl rounded-xl shadow-2xl overflow-hidden animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {/* Placeholder for app dashboard screenshot */}
            <div className="bg-gray-100 aspect-[16/9] rounded-xl overflow-hidden">
              <div className="bg-white h-10 w-full flex items-center px-4 border-b">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto px-16 py-1 bg-gray-100 rounded-full text-sm text-gray-500">
                  DeClientes CRM - Organiza tus chats de WhatsApp
                </div>
              </div>
              
              <div className="grid grid-cols-12 h-full">
                {/* Sidebar */}
                <div className="col-span-3 bg-white border-r p-4">
                  <div className="h-8 w-4/5 bg-gray-200 rounded mb-4"></div>
                  <div className="space-y-2">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                        <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Main content */}
                <div className="col-span-9 p-4 bg-gray-50">
                  <div className="h-10 flex items-center justify-between mb-4">
                    <div className="w-32 h-6 bg-gray-200 rounded"></div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded bg-gray-200"></div>
                      <div className="w-8 h-8 rounded bg-gray-200"></div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 h-[calc(100%-3.5rem)]">
                    <div className="w-2/3 bg-white rounded-lg shadow-sm p-3">
                      <div className="flex justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 rounded-full bg-crm-primary"></div>
                          <div>
                            <div className="w-24 h-4 bg-gray-200 rounded"></div>
                            <div className="w-16 h-3 bg-gray-100 rounded mt-1"></div>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          <div className="w-6 h-6 rounded bg-gray-200"></div>
                          <div className="w-6 h-6 rounded bg-gray-200"></div>
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-3">
                        <div className="w-3/4 ml-auto p-2 bg-crm-light rounded-lg rounded-tr-none">
                          <div className="w-full h-3 bg-gray-200 rounded mb-1"></div>
                          <div className="w-4/5 h-3 bg-gray-200 rounded"></div>
                        </div>
                        <div className="w-3/4 p-2 bg-gray-100 rounded-lg rounded-tl-none">
                          <div className="w-full h-3 bg-gray-200 rounded mb-1"></div>
                          <div className="w-2/3 h-3 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                      
                      <div className="mt-auto pt-3 border-t flex gap-2">
                        <div className="flex-1 h-8 bg-gray-100 rounded-full"></div>
                        <div className="w-8 h-8 bg-crm-accent rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="w-1/3 bg-white rounded-lg shadow-sm p-3">
                      <div className="w-full h-5 bg-gray-200 rounded mb-3"></div>
                      <div className="space-y-2">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="p-2 border rounded">
                            <div className="w-full h-3 bg-gray-200 rounded mb-1"></div>
                            <div className="w-2/3 h-3 bg-gray-200 rounded"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Overlaying highlight */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-crm-accent/20 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
