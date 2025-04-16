
import React from 'react';
import { MessageSquare, Mail, Instagram } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-lawLight relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-lawDark opacity-85 -z-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1200&h=800')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      ></div>
      <div className="container mx-auto px-6 text-center">
        <h2 className="section-title text-center mx-auto mb-6 text-white">Fale conosco e tire suas dúvidas</h2>
        <p className="text-xl max-w-2xl mx-auto mb-10 text-lawLight">
          Com discrição e profissionalismo, estamos prontos para atender suas necessidades jurídicas.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center animate-fade-in opacity-0">
          <a 
            href="https://wa.me/5541988461270?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta."
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Agende uma consulta</span>
          </a>
          
          <a 
            href="mailto:josiaslima.live@hotmail.com"
            className="bg-lawDark text-white hover:bg-opacity-90 transition-all duration-300 px-6 py-3 rounded-md inline-flex items-center gap-2 hover-scale"
          >
            <Mail className="w-5 h-5" />
            <span>Enviar e-mail</span>
          </a>
          
          <a 
            href="https://www.instagram.com/josiaslima.adv/"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:bg-opacity-90 transition-all duration-300 px-6 py-3 rounded-md inline-flex items-center gap-2 hover-scale"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-5 h-5" />
            <span>Instagram: @josiaslima.adv</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
