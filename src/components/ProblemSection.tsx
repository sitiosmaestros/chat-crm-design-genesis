
import React from 'react';
import { AlertTriangle, Clock, MessageSquareOff, UserX } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      id: 1,
      icon: <MessageSquareOff className="w-10 h-10 text-red-500" />,
      title: "Chats Perdidos",
      description: "Clientes que contactan pero sus mensajes se pierden entre decenas de conversaciones."
    },
    {
      id: 2,
      icon: <Clock className="w-10 h-10 text-amber-500" />,
      title: "Respuestas Lentas",
      description: "Responder tarde equivale a perder ventas. La competencia está a un clic de distancia."
    },
    {
      id: 3,
      icon: <AlertTriangle className="w-10 h-10 text-orange-500" />,
      title: "Falta de Seguimiento",
      description: "Clientes interesados que se olvidan porque no hay un sistema de seguimiento efectivo."
    },
    {
      id: 4,
      icon: <UserX className="w-10 h-10 text-rose-500" />,
      title: "Experiencia Frustrante",
      description: "Clientes insatisfechos por la falta de atención personalizada y organizada."
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-crm-muted">
      <div className="container-section">
        <div className="section-title">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
            Seamos honestos. Usas WhatsApp para vender porque tus clientes están ahí. Pero...
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Estás enfrentando estos problemas que te cuestan ventas diariamente?
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem) => (
            <div 
              key={problem.id} 
              className="card p-6 bg-white rounded-lg border-t-4 border-red-400 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                <p className="text-gray-600">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-white border border-red-200 rounded-xl max-w-3xl mx-auto">
          <p className="text-lg text-center italic">
            <span className="font-semibold">Cada día que pasa sin solucionar este problema</span>, estás dejando dinero sobre la mesa y oportunidades que van directo a la competencia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
