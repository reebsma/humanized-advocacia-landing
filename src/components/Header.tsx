
import React from 'react';

const Header = () => {
  return (
    <header className="bg-lawDark text-white py-6">
      <div className="container mx-auto px-6 flex justify-center items-center">
        <img 
          src="/lovable-uploads/8b460992-ac9c-48d3-97d2-4fd45eced02b.png" 
          alt="Josias Lima Advocacia" 
          className="h-64" // Aumentado para 40x do tamanho original
        />
      </div>
    </header>
  );
};

export default Header;
