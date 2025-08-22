
import React from 'react';
import { MessageSquare, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-lawDark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Josias Lima Advocacia</h3>
            <p className="text-lawLight max-w-md mb-2">
              Advocacia humanizada, com atendimento personalizado e resultados eficientes.
            </p>
            <p className="text-lawGold font-semibold">
              OAB/PR 96.411 - Atuação em todo o Brasil
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-lawGold" />
                <a 
                  href="https://wa.me/5541988461270?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta."
                  className="hover:text-lawGold transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: (41) 98846-1270
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-lawGold" />
                <a href="mailto:josiaslima.live@hotmail.com" className="hover:text-lawGold transition-colors">
                  josiaslima.live@hotmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-5 h-5 text-lawGold" />
                <a 
                  href="https://www.instagram.com/josiaslima.adv/"
                  className="hover:text-lawGold transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @josiaslima.adv
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-lawLight">
            &copy; 2025 Josias Lima Advocacia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
