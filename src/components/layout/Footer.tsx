import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube as YouTube, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container-custom py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          {/* Coluna 1 - Informações */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4 flex justify-center">
              <img 
                src="/Logo Casa 524.png" 
                alt="Logo CASA" 
                className="h-12 md:h-13 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/Logo Casa 524.png';
                }}
              />
            </div>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-church-red transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/centroapostolicosalvador/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-church-red transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.youtube.com/lucianotimoteo" target="_blank" rel="noopener noreferrer" className="text-white hover:text-church-red transition-colors" aria-label="YouTube">
                <YouTube size={20} />
              </a>
            </div>
          </div>
          
          {/* Coluna 2 - Links Rápidos */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-playfair">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="footer-link">Início</Link>
              </li>
              <li>
                <Link to="/historia" className="footer-link">Nossa História</Link>
              </li>
              <li>
                <Link to="/quem-somos" className="footer-link">Quem Somos</Link>
              </li>
              <li>
                <Link to="/ibb" className="footer-link">RadahCollege</Link>
              </li>
              <li>
                <Link to="/contato" className="footer-link">Contato</Link>
              </li>
            </ul>
          </div>
          
          {/* Coluna 3 - Cultos */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-playfair">Horários de Culto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Clock className="mr-2 flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="font-medium">Quarta da Vitória</p>
                  <p className="text-gray-300">Quarta-Feira - 19h - 21h</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="font-medium">Culto de Oração</p>
                  <p className="text-gray-300">Sexta-feira - 19h - 21h</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="font-medium">Culto de Celebração</p>
                  <p className="text-gray-300">Domingo - 10h - 12h e 18h - 20h</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Coluna 4 - Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-playfair">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 flex-shrink-0 mt-1" size={18} />
                <p>Av. Dom João VI - Brotas<br />Salvador - BA</p>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 flex-shrink-0" size={18} />
                <p>(71) 98319-8547</p>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 flex-shrink-0" size={18} />
                <p>igrejabetheladm@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Mapa */}
        <div className="mt-6 sm:mt-8 md:mt-10 h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d485.96446239422!2d-38.482818!3d-12.990027!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b11a4cd03fd%3A0xf37f4e2583d06396!2sCASA!5e0!3m2!1spt-BR!2sbr!4v1747924185964!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy"
            title="Localização da CASA"
          ></iframe>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} CASA. Todos os direitos reservados.</p>
          <p>Desenvolvido por <a href="https://portfolio-5dc28.web.app/" target="_blank">Michael Livan</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;