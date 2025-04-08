
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed w-full top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container-section py-0">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="/lovable-uploads/7d34a90b-1c56-4f7f-819d-36e8b4df92ec.png" 
                alt="DeClientes Logo" 
                className="h-10 md:h-12" 
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#beneficios" className="text-gray-600 hover:text-crm-primary transition-colors">
              Beneficios
            </a>
            <a href="#testimonios" className="text-gray-600 hover:text-crm-primary transition-colors">
              Testimonios
            </a>
            <a href="#preguntas" className="text-gray-600 hover:text-crm-primary transition-colors">
              FAQ
            </a>
            <a href="#precios" className="text-gray-600 hover:text-crm-primary transition-colors">
              Precios
            </a>
            <Button
              variant="outline"
              className="text-crm-primary border-crm-primary hover:bg-crm-primary hover:text-white"
            >
              Iniciar Sesión
            </Button>
            <Button 
              className="bg-crm-accent hover:bg-crm-accent-hover text-white"
            >
              Demo Gratuita
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-4 space-y-4">
            <a 
              href="#beneficios" 
              className="block py-2 text-gray-600 hover:text-crm-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Beneficios
            </a>
            <a 
              href="#testimonios" 
              className="block py-2 text-gray-600 hover:text-crm-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonios
            </a>
            <a 
              href="#preguntas" 
              className="block py-2 text-gray-600 hover:text-crm-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#precios" 
              className="block py-2 text-gray-600 hover:text-crm-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Precios
            </a>
            <Button 
              variant="outline"
              className="w-full text-crm-primary border-crm-primary hover:bg-crm-primary hover:text-white"
            >
              Iniciar Sesión
            </Button>
            <Button 
              className="w-full bg-crm-accent hover:bg-crm-accent-hover text-white"
            >
              Demo Gratuita
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
