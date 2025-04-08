
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQ } from '@/lib/types';

const FaqSection = () => {
  const faqs: FAQ[] = [
    {
      id: 1,
      question: "¿Será muy complicado para mi negocio implementar DeClientes CRM?",
      answer: "¡Para nada! DeClientes CRM fue diseñado pensando en personas ocupadas y sin conocimientos técnicos. La conexión con tu WhatsApp Business toma menos de 2 minutos y nuestra interfaz es tan intuitiva que estarás gestionando tus chats como un profesional el mismo día que comiences. Además, incluimos videos tutoriales paso a paso y soporte personalizado para ayudarte con cualquier duda."
    },
    {
      id: 2,
      question: "¿Cuál es el truco? ¿Por qué el precio es tan accesible?",
      answer: "No hay truco. Desarrollamos DeClientes CRM específicamente para el mercado ecuatoriano, entendiendo las necesidades y presupuestos de los negocios locales. Nuestros costos operativos son eficientes y preferimos tener muchos clientes satisfechos pagando un precio justo, que pocos clientes pagando de más. Nuestra misión es democratizar las herramientas de ventas profesionales."
    },
    {
      id: 3,
      question: "¿Y si no me gusta o no funciona para mi negocio?",
      answer: "Entendemos que cada negocio es único. Por eso ofrecemos una Garantía de Satisfacción de 15 días. Si por cualquier motivo DeClientes CRM no cumple con tus expectativas durante los primeros 15 días, te devolvemos el 100% de tu inversión, sin preguntas ni condiciones complicadas. ¡Queremos clientes felices!"
    },
    {
      id: 4,
      question: "¿Necesito cambiar mi número de WhatsApp o crear una cuenta nueva?",
      answer: "No. DeClientes CRM se conecta a tu número de WhatsApp Business actual. No necesitas crear nuevas cuentas ni cambiar tu número. Mantienes toda la base de contactos y conversaciones que ya tienes, simplemente las organizamos mejor para ti."
    },
    {
      id: 5,
      question: "¿Cómo funciona la asistencia por Inteligencia Artificial?",
      answer: "Nuestro asistente IA aprende de tus interacciones previas y puede responder preguntas frecuentes, horarios, disponibilidad y consultas básicas sin tu intervención. Tú configuras qué tipo de preguntas puede responder autónomamente y cuáles requieren tu aprobación. La IA evoluciona con el uso, mejorando progresivamente sus respuestas para reflejar tu estilo de comunicación."
    },
    {
      id: 6,
      question: "¿Puedo usarlo con varios vendedores o empleados?",
      answer: "¡Absolutamente! Puedes crear múltiples usuarios con diferentes niveles de acceso. Cada vendedor puede tener sus chats asignados, y tú como administrador puedes supervisar todas las conversaciones. El sistema evita que dos personas respondan al mismo cliente al mismo tiempo, evitando confusiones."
    }
  ];

  return (
    <section id="preguntas" className="py-16 md:py-24 bg-white">
      <div className="container-section">
        <div className="section-title">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
            Sabemos que puedes tener preguntas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aquí están las respuestas a las dudas más comunes
          </p>
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={`item-${faq.id}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-lg font-medium py-4 hover:text-crm-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-1 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500">
            ¿Tienes más preguntas? <a href="#" className="text-crm-primary font-medium hover:underline">Contáctanos directamente</a> y te responderemos lo antes posible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
