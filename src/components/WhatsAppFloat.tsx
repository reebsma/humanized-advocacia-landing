import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppFloat = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5541988461270?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-16 right-0 bg-white shadow-lg rounded-lg p-3 mb-2 w-64 border">
          <div className="flex justify-between items-start">
            <p className="text-sm text-gray-800 font-medium">
              Precisa de ajuda? Entre em contato agora!
            </p>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-gray-400 hover:text-gray-600 ml-2"
            >
              <X size={16} />
            </button>
          </div>
          <div className="absolute bottom-[-8px] right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 animate-pulse"
        aria-label="Entrar em contato via WhatsApp"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default WhatsAppFloat;