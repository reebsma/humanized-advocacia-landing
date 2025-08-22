
import React from 'react';
import { MessageCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-lawDark opacity-5 -z-10"></div>
      <div 
        className="absolute inset-0 -z-10" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1200&h=800')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1
        }}
      ></div>
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          Advocacia Humanizada em todo o Brasil.
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-10 text-gray-700 italic animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
          Defesa estratégica e personalizada para você.
        </p>
        <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
          <a
            href="https://wa.me/5541988461270?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <MessageCircle className="w-6 h-6" />
            Agende sua consulta agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
