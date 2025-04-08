
import React from 'react';
import { 
  DollarSign, 
  Clock, 
  MessageCircleHeart, 
  PieChart, 
  Users, 
  Shield 
} from 'lucide-react';
import type { Benefit } from '@/lib/types';

const BenefitsSection = () => {
  const benefits: Benefit[] = [
    {
      id: 1,
      title: "No Pierdas Ventas",
      description: "Todos los mensajes organizados en un solo lugar. Responde a tiempo y aumenta tus conversiones hasta un 35%.",
      icon: "DollarSign"
    },
    {
      id: 2,
      title: "Respuestas Instantáneas 24/7",
      description: "Nuestro asistente IA responde preguntas básicas y mantiene a tus clientes interesados incluso cuando no estás disponible.",
      icon: "Clock"
    },
    {
      id: 3,
      title: "Experiencia Superior para tus Clientes",
      description: "Seguimiento personalizado, atención rápida y profesional que crea clientes felices que regresan y te recomiendan.",
      icon: "MessageCircleHeart"
    },
    {
      id: 4,
      title: "Datos para Decidir Mejor",
      description: "Reportes claros de conversiones, tiempos de respuesta y rendimiento. Conoce exactamente qué funciona y qué no.",
      icon: "PieChart"
    },
    {
      id: 5,
      title: "Trabaja en Equipo sin Confusiones",
      description: "Asigna conversaciones a distintos miembros de tu equipo sin cruzarse o duplicar respuestas.",
      icon: "Users"
    },
    {
      id: 6,
      title: "Seguridad y Respaldo Total",
      description: "Todas tus conversaciones respaldadas y seguras. Accede a tu historial cuando lo necesites.",
      icon: "Shield"
    }
  ];

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "DollarSign":
        return <DollarSign className="w-7 h-7" />;
      case "Clock":
        return <Clock className="w-7 h-7" />;
      case "MessageCircleHeart":
        return <MessageCircleHeart className="w-7 h-7" />;
      case "PieChart":
        return <PieChart className="w-7 h-7" />;
      case "Users":
        return <Users className="w-7 h-7" />;
      case "Shield":
        return <Shield className="w-7 h-7" />;
      default:
        return null;
    }
  };

  return (
    <section id="beneficios" className="py-16 md:py-24 bg-gradient-to-b from-white to-crm-muted">
      <div className="container-section">
        <div className="section-title">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
            Con DeClientes CRM, tú y tu negocio <span className="text-crm-primary">GANAN</span>:
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beneficios reales y medibles desde el primer día de uso
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="card p-6 rounded-lg border border-gray-100 bg-white hover:border-crm-accent/30 transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-crm-accent/10 text-crm-accent flex items-center justify-center mb-4">
                {renderIcon(benefit.icon)}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-crm-primary/10 border border-crm-primary/20 rounded-xl p-6 md:p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-xl md:text-2xl font-semibold text-crm-primary mb-4">
            Resultados Probados
          </h3>
          <p className="text-gray-700 text-lg mb-6">
            Nuestros clientes reportan un <span className="font-bold">aumento promedio del 27% en ventas</span> y una <span className="font-bold">reducción del 64% en tiempo de respuesta</span> después de 30 días usando DeClientes CRM.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="flex-1 bg-white rounded-lg p-4 border border-gray-200">
              <p className="text-4xl font-bold text-crm-accent">+27%</p>
              <p className="text-gray-600">Aumento en ventas</p>
            </div>
            <div className="flex-1 bg-white rounded-lg p-4 border border-gray-200">
              <p className="text-4xl font-bold text-crm-accent">-64%</p>
              <p className="text-gray-600">Tiempo de respuesta</p>
            </div>
            <div className="flex-1 bg-white rounded-lg p-4 border border-gray-200">
              <p className="text-4xl font-bold text-crm-accent">95%</p>
              <p className="text-gray-600">Satisfacción clientes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
