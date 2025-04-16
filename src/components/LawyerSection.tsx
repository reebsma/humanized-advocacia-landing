
import React from 'react';

const LawyerSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/4 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="bg-lawLight p-1 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/666a07e0-a351-4613-9599-007b54a86e3b.png" 
                alt="Josias de Souza Lima Neto" 
                className="rounded-lg object-cover w-full aspect-[3/4] h-[300px]"
              />
            </div>
          </div>
          
          <div className="lg:w-3/4 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            <h2 className="section-title">Apresentação do Advogado</h2>
            
            <div className="space-y-4 text-gray-700">
              <p><strong>Josias de Souza Lima Neto</strong> é advogado militante no estado do Paraná desde 2019 sob a OAB/PR 96.411.</p>
              <p>Especialista em direito penal e processo penal pela Academia Brasileira de Direito Constitucional - ABSConst.</p>
              <p>Assessor jurídico na Procuradoria do Ministério Público do Paraná de 2016 a 2019.</p>
              <p>Membro da Comissão da Advocacia Criminal do Paraná, da Comissão da Advocacia Iniciante e da Comissão de Inovação, Gestão e Empreendedorismo do Paraná.</p>
              <p>Atuante na advocacia cível, criminal, trabalhista e de família, se destaca pelo atendimento individualizado e humanizado. Cada caso é analisado de forma única para oferecer o melhor serviço a cada cliente.</p>
              <p><strong>Achley Wzorek</strong> é combativa e busca a liberdade e a garantia dos direitos daqueles que estão encarcerados, dando voz a quem está privado de liberdade ou respondendo a processos criminais.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LawyerSection;
