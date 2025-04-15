
import React from 'react';

const Header = () => {
  return (
    <header className="bg-lawDark text-white py-6">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-serif">Josias Lima Advocacia e Consultoria Jurídica</h1>
        <div className="hidden md:flex gap-4">
          <a 
            href="https://wa.me/5541988461270?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta."
            className="text-white hover:text-lawGold transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <a 
            href="mailto:josiaslima.live@hotmail.com"
            className="text-white hover:text-lawGold transition-colors"
          >
            Email
          </a>
          <a 
            href="https://www.instagram.com/josiaslima.adv/"
            className="text-white hover:text-lawGold transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
