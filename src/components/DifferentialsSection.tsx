
import React from 'react';
import { UserCircle, Clock, LockKeyhole, Heart } from 'lucide-react';

const DifferentialsSection = () => {
  const differentials = [
    {
      title: "Defesa personalizada",
      description: "Estratégias jurídicas sob medida para cada caso.",
      icon: <UserCircle className="w-10 h-10" style={{ color: '#e3c072' }} />
    },
    {
      title: "Plantão 24h para prisões e urgências",
      description: "Atendimento imediato em casos de prisão em flagrante e situações urgentes.",
      icon: <Clock className="w-10 h-10" style={{ color: '#e3c072' }} />
    },
    {
      title: "Sigilo absoluto",
      description: "Confiança e respeito com total discrição.",
      icon: <LockKeyhole className="w-10 h-10" style={{ color: '#e3c072' }} />
    },
    {
      title: "Humanização",
      description: "Atendimento acolhedor com escuta ativa.",
      icon: <Heart className="w-10 h-10" style={{ color: '#e3c072' }} />
    }
  ];

  return (
    <section className="py-20 bg-lawDark text-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mx-auto mb-16 text-white after:bg-lawGold">Nossos Diferenciais</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentials.map((item, index) => (
            <div 
              key={index} 
              className="flex gap-6 items-start p-6 rounded-lg bg-opacity-10 bg-white animate-fade-in opacity-0"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-xl font-serif font-bold mb-2">{item.title}</h3>
                <p className="text-lawLight">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
