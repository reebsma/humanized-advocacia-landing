
import React from 'react';

const LawyerSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/3 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="bg-lawLight p-1 rounded-lg overflow-hidden">
              <div 
                className="aspect-[3/4] rounded-lg bg-lawDark"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1551138927-b5aaaa7a92fe?auto=format&fit=crop&q=80&w=800&h=1200')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.9
                }}
              ></div>
            </div>
          </div>
          
          <div className="lg:w-2/3 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            <h2 className="section-title">Josias de Souza Lima Neto</h2>
            <p className="mb-4 text-lg">Advogado militante no Paraná desde 2019 (OAB/PR 96.411)</p>
            
            <div className="space-y-3 text-gray-700">
              <p>Especialista em Direito Penal e Processo Penal pela ABSConst.</p>
              <p>Ex-assessor jurídico na Procuradoria do MP/PR (2016–2019).</p>
              <p>Membro de comissões da OAB/PR: Advocacia Criminal, Iniciante, Inovação e Empreendedorismo.</p>
              <p>Atua nas áreas cível, criminal, trabalhista e de família com atendimento individualizado e humanizado.</p>
              <p className="mt-6"><strong>Achley Wzorek</strong> também compõe a equipe, com foco em defesa combativa de pessoas privadas de liberdade.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LawyerSection;
