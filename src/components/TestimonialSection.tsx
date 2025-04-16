
import React from 'react';

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center animate-fade-in opacity-0">
          <h2 className="section-title text-center mx-auto mb-6">Nossa missão</h2>
          <div className="bg-lawLight p-8 rounded-lg shadow-md">
            <p className="text-xl mb-6">
              Com experiência e comprometimento, oferecemos atendimento ágil e estratégico.
              Nosso objetivo é entregar soluções jurídicas eficientes e personalizadas.
            </p>
            
            <div className="w-16 h-1 bg-lawGold mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
