
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const ClosingSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-crm-accent/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-crm-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container-section">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Imagina esto: Mañana te despiertas...
          </h2>
          
          <div className="space-y-6 text-lg mb-12">
            <p>
              Y todos tus mensajes de WhatsApp están <span className="text-crm-primary font-semibold">perfectamente organizados</span>. Ya no más estrés buscando conversaciones importantes o preguntando "¿quién era ese cliente interesado de ayer?".
            </p>
            
            <p>
              Tus <span className="text-crm-primary font-semibold">clientes reciben respuestas inmediatas</span>, incluso cuando estás ocupado con otras tareas. El seguimiento es automático, las ventas aumentan y tu competencia se pregunta cómo lo estás haciendo.
            </p>
            
            <p>
              <span className="text-crm-primary font-semibold">Tu equipo trabaja en armonía</span>, sin pisarse entre ellos, cada uno con sus responsabilidades claras. Y al final del día, tienes datos concretos sobre tu desempeño para tomar mejores decisiones.
            </p>
            
            <p>
              Todo esto <span className="text-crm-primary font-semibold">por menos de lo que cuesta un almuerzo diario</span>. ¿No es momento de dar el salto y profesionalizar tu atención en WhatsApp?
            </p>
          </div>
          
          <div className="bg-crm-light border border-crm-primary/20 rounded-xl p-6 md:p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-3/4">
                <h3 className="text-xl md:text-2xl font-semibold mb-3">
                  Tu inversión está 100% protegida
                </h3>
                <p className="text-gray-700">
                  Prueba DeClientes CRM sin riesgo con nuestra garantía de satisfacción de 15 días. Si no estás completamente satisfecho, te devolvemos tu dinero sin preguntas.
                </p>
                
                <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4">
                  <div className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-crm-accent mr-2" />
                    <span>Sin contratos a largo plazo</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-crm-accent mr-2" />
                    <span>Configuración sencilla</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-crm-accent mr-2" />
                    <span>Soporte incluido</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/4 flex justify-center">
                <div className="w-28 h-28 rounded-full bg-crm-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-crm-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Final CTA */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              ¡Es tu momento de destacar!
            </h3>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
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
            
            {/* P.S. Note */}
            <p className="text-gray-600 italic">
              <span className="font-medium">P.S.:</span> Recuerda que la oferta de lanzamiento es por tiempo limitado. Los precios aumentarán pronto, pero si te registras ahora, mantendrás la tarifa promocional permanentemente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
