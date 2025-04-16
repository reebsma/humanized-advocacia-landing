
import React from 'react';

const LawyerSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-md mb-10 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="bg-lawLight p-1 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/666a07e0-a351-4613-9599-007b54a86e3b.png" 
                alt="Josias de Souza Lima Neto" 
                className="rounded-lg object-cover w-full aspect-[3/4] h-[300px]"
              />
            </div>
          </div>
          
          <div className="w-full animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            <h2 className="section-title text-center">Apresentação do Advogado</h2>
            
            <div className="space-y-4 text-gray-700">
              <p><strong>Josias de Souza Lima Neto</strong> é advogado militante no estado do Paraná desde 2019 sob a OAB/PR 96.411.</p>
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
