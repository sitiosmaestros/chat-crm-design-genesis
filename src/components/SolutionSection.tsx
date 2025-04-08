
import React from 'react';
import { MessageSquare, CheckCircle2, Zap } from 'lucide-react';

const SolutionSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute left-0 top-1/4 w-64 h-64 bg-crm-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-crm-accent/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container-section">
        <div className="section-title">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
            Te presentamos <span className="text-crm-primary">DeClientes CRM</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La Solución Definitiva para Gestionar tus Conversaciones de WhatsApp como un Profesional
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Solution description */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 rounded-full bg-crm-primary/10 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-crm-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Centraliza Todos tus Chats en una Sola Plataforma</h3>
                <p className="text-gray-600">
                  DeClientes CRM se conecta directamente con tu WhatsApp Business y organiza todas tus conversaciones en una interfaz clara y profesional. Nunca más perderás un mensaje importante.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 rounded-full bg-crm-accent/10 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-crm-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Organiza y Prioriza tus Conversaciones</h3>
                <p className="text-gray-600">
                  Etiqueta clientes, asigna prioridades y crea listas de seguimiento. Mantén un registro claro de cada interacción y nunca pierdas una oportunidad de venta por desorganización.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 rounded-full bg-crm-secondary/10 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-crm-secondary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Inteligencia Artificial a tu Servicio</h3>
                <p className="text-gray-600">
                  Nuestro asistente IA te ayuda a responder preguntas frecuentes, sugerir respuestas y mantener conversaciones fluidas incluso cuando estás ocupado. Respuestas instantáneas que mantienen a tus clientes satisfechos.
                </p>
              </div>
            </div>
            
            <div className="p-4 bg-crm-light border border-crm-primary/20 rounded-lg mt-8">
              <p className="font-medium text-crm-primary">
                <span className="font-bold">¡La mejor parte!</span> Se conecta a tu WhatsApp en segundos, sin complicaciones técnicas y sin necesidad de cambiar tu número o cuenta.
              </p>
            </div>
          </div>
          
          {/* Right: Screenshot/mockup of the solution */}
          <div className="relative mt-8 lg:mt-0 lg:pl-8">
            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gray-200">
              {/* Placeholder for app dashboard screenshot - more detailed version */}
              <div className="bg-white">
                <div className="bg-crm-primary text-white py-3 px-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <span className="font-medium">DeClientes CRM Dashboard</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-white/20"></div>
                    <div className="w-6 h-6 rounded-full bg-white/20"></div>
                  </div>
                </div>
                
                <div className="flex">
                  {/* Left sidebar with conversations */}
                  <div className="w-1/3 border-r bg-gray-50 h-[460px] overflow-y-auto">
                    <div className="p-3">
                      <div className="bg-white border rounded-md p-2 mb-3 flex items-center">
                        <div className="w-4 h-4 text-gray-400 mr-2">🔍</div>
                        <div className="text-sm text-gray-400">Buscar chats...</div>
                      </div>
                      
                      {/* Chat list */}
                      <div className="space-y-2">
                        {[
                          { name: 'Juan Pérez', active: true, unread: 3, priority: 'high' },
                          { name: 'María Gómez', active: false, unread: 0, priority: 'medium' },
                          { name: 'Carlos Ruiz', active: false, unread: 1, priority: 'low' },
                          { name: 'Andrea López', active: false, unread: 0, priority: 'medium' },
                          { name: 'Roberto Torres', active: false, unread: 5, priority: 'high' },
                        ].map((chat, i) => (
                          <div 
                            key={i} 
                            className={`p-2 rounded-md flex gap-2 items-center cursor-pointer ${
                              chat.active ? 'bg-crm-primary/10 border border-crm-primary/30' : 'hover:bg-gray-100'
                            }`}
                          >
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center text-lg">
                              {chat.name.charAt(0)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-center">
                                <span className="font-medium truncate">{chat.name}</span>
                                <span className="text-xs text-gray-500">12:30</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm text-gray-500 truncate">Último mensaje...</span>
                                {chat.unread > 0 && (
                                  <span className="w-5 h-5 rounded-full bg-crm-accent text-white text-xs flex items-center justify-center">
                                    {chat.unread}
                                  </span>
                                )}
                              </div>
                            </div>
                            
                            {/* Priority indicator */}
                            <div 
                              className={`w-2 h-2 rounded-full flex-shrink-0 ${
                                chat.priority === 'high' 
                                  ? 'bg-red-500' 
                                  : chat.priority === 'medium' 
                                    ? 'bg-amber-500' 
                                    : 'bg-green-500'
                              }`}
                            ></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Right content area with chat */}
                  <div className="w-2/3 flex flex-col h-[460px]">
                    {/* Chat header */}
                    <div className="border-b p-3 flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-crm-primary/20 flex items-center justify-center text-lg text-crm-primary">
                          J
                        </div>
                        <div>
                          <div className="font-medium">Juan Pérez</div>
                          <div className="text-xs text-green-600 flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            En línea
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500">📞</div>
                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500">⋯</div>
                      </div>
                    </div>
                    
                    {/* Chat messages */}
                    <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-3">
                      <div className="flex justify-start">
                        <div className="bg-white rounded-lg rounded-tl-none py-2 px-3 shadow-sm max-w-[70%]">
                          <p className="text-sm">Hola, estoy interesado en el producto que vi en su página web. ¿Tiene disponibilidad?</p>
                          <span className="text-xs text-gray-500 mt-1 block">10:24</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <div className="bg-crm-light rounded-lg rounded-tr-none py-2 px-3 shadow-sm max-w-[70%] border-crm-primary/10 border">
                          <p className="text-sm">¡Hola Juan! Gracias por tu interés. Sí, tenemos disponibilidad. ¿Qué modelo te interesa?</p>
                          <span className="text-xs text-gray-500 mt-1 block">10:26 ✓✓</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-start">
                        <div className="bg-white rounded-lg rounded-tl-none py-2 px-3 shadow-sm max-w-[70%]">
                          <p className="text-sm">Me interesa el modelo XYZ que está en oferta. ¿Cuál es el precio final con envío a Quito?</p>
                          <span className="text-xs text-gray-500 mt-1 block">10:28</span>
                        </div>
                      </div>
                      
                      <div className="mx-auto my-2 bg-gray-100 text-xs text-gray-500 px-2 py-1 rounded-full">
                        CRM sugiere: Enviar información de precios + descuentos
                      </div>
                      
                      <div className="flex justify-end">
                        <div className="bg-crm-light rounded-lg rounded-tr-none py-2 px-3 shadow-sm max-w-[70%] border-crm-primary/10 border">
                          <p className="text-sm">¡Por supuesto! El modelo XYZ tiene un valor de $45 y el envío a Quito es gratuito por compras mayores a $30. ¿Te gustaría proceder con la compra?</p>
                          <span className="text-xs text-gray-500 mt-1 block">10:30 ✓</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Chat input */}
                    <div className="border-t p-3">
                      <div className="flex items-center gap-2">
                        <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded-full">
                          😀
                        </button>
                        <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-600">
                          Escribe un mensaje...
                        </div>
                        <button className="w-8 h-8 bg-crm-accent text-white rounded-full flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-crm-primary/10 rounded-full blur-xl -z-10"></div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-crm-accent/10 rounded-full blur-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
