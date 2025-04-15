
import React from 'react';

const LawyerSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/4 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="bg-lawLight p-1 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/666a07e0-a351-4613-9599-007b54a86e3b.png" 
                alt="Josias de Souza Lima Neto" 
                className="rounded-lg object-cover w-full aspect-[3/4]"
              />
            </div>
          </div>
          
          <div className="lg:w-3/4 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            <h2 className="section-title">Josias de Souza Lima Neto</h2>
            <p className="mb-4 text-lg">Advogado militante no Paraná desde 2019 (OAB/PR 96.411)</p>
            
            <div className="space-y-3 text-gray-300">
              <p>Especialista em Direito Penal e Processo Penal pela ABSConst.</p>
              <p>Ex-assessor jurídico na Procuradoria do MP/PR (2016–2019).</p>
              <p>Membro de comissões da OAB/PR: Advocacia Criminal, Iniciante, Inovação e Empreendedorismo.</p>
              <p>Atua nas áreas cível, criminal, trabalhista e de família com atendimento individualizado e humanizado.</p>
              <p className="mt-6">Cada caso é analisado de acordo com suas peculiaridades, sendo ofertado o melhor serviço a cada cliente.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LawyerSection;
