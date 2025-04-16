
import React from 'react';

const LawyerSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="w-full md:w-1/3 animate-fade-in opacity-0 mb-8 md:mb-0" style={{ animationDelay: '0.2s' }}>
            <div className="bg-lawLight p-1 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/66ef30dc-1a44-449c-8940-c9b205acc27a.png" 
                alt="Josias de Souza Lima Neto" 
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>
          </div>
          
          <div className="w-full md:w-2/3 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            <h2 className="section-title">Josias de Souza Lima Neto</h2>
            <p className="mb-4 text-lg">Advogado militante no Paraná desde 2019 (OAB/PR 96.411)</p>
            
            <div className="space-y-3 text-gray-700">
              <p>Especialista em direito penal e processo penal pela Academia Brasileira de Direito Constitucional - ABSConst.</p>
              <p>Assessor jurídico na Procuradoria do Ministério Público do Paraná (2016–2019).</p>
              <p>Membro da Comissão da Advocacia Criminal do Paraná.</p>
              <p>Membro consultor da Comissão da Advocacia Iniciante do Paraná.</p>
              <p>Membro da Comissão de Inovação, Gestão e Empreendedorismo do Paraná.</p>
              <p>Atua nas áreas cível, criminal e família com atendimento individualizado e humanizado.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LawyerSection;
