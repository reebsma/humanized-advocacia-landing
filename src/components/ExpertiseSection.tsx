
import React from 'react';
import { Briefcase, Shield, FileText, Users } from 'lucide-react';

const ExpertiseSection = () => {
  const areas = [
    {
      title: "Aconselhamento Jurídico",
      description: "Orientação segura para decisões importantes na vida pessoal e profissional.",
      icon: <Briefcase className="w-12 h-12 text-lawGold mb-4" />
    },
    {
      title: "Direito Criminal",
      description: "Defesa estratégica em investigações, processos e casos de urgência, com foco na liberdade e na justiça.",
      icon: <Shield className="w-12 h-12 text-lawGold mb-4" />
    },
    {
      title: "Direito Civil e Contratual",
      description: "Soluções em disputas civis, revisão e elaboração de contratos com segurança jurídica.",
      icon: <FileText className="w-12 h-12 text-lawGold mb-4" />
    },
    {
      title: "Direito de Família e Sucessões",
      description: "Atuação sensível e eficaz em divórcios, guarda, pensão e inventários.",
      icon: <Users className="w-12 h-12 text-lawGold mb-4" />
    }
  ];

  return (
    <section id="areas" className="py-20 bg-lawLight">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mx-auto mb-16">Nossa ampla área de atuação</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in opacity-0" 
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {area.icon}
              <h3 className="text-xl font-serif font-bold mb-3">{area.title}</h3>
              <p className="text-gray-700">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
