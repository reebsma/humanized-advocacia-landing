
import React from 'react';

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-lawLight p-10 rounded-lg text-center relative animate-fade-in opacity-0">
          <div className="text-6xl text-lawGold font-serif absolute top-4 left-6 opacity-30">"</div>
          <div className="text-6xl text-lawGold font-serif absolute bottom-4 right-6 opacity-30">"</div>
          
          <p className="text-xl italic mb-6 relative z-10">
            Com experiência e comprometimento, oferecemos atendimento ágil e estratégico.
            Nosso objetivo é entregar soluções jurídicas eficientes e personalizadas.
          </p>
          
          <div className="w-16 h-1 bg-lawGold mx-auto mb-4"></div>
          
          <p className="font-serif font-bold">Josias Lima Advocacia</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
