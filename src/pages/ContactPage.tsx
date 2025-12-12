import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-church-blue text-white">
        <div className="container-custom text-center px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 font-playfair">Contato</h1>
          <p className="text-sm sm:text-base max-w-2xl mx-auto text-gray-300">
            Estamos sempre disponíveis para atender você. Entre em contato conosco 
            através dos canais abaixo.
          </p>
        </div>
      </section>
      
      {/* Informações de Contato */}
      <section className="section bg-church-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div>
              <h2 className="section-title text-center mx-auto after:mx-auto">Informações de Contato</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-church-red bg-opacity-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin size={24} className="text-church-red" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Nosso Endereço</h3>
                    <p className="text-gray-600">
                      Av. Dom João VI - Brotas<br />
                      Salvador - BA
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-church-red bg-opacity-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone size={24} className="text-church-red" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Telefones</h3>
                    <p className="text-gray-600">
                      Secretaria: (71) 98319-8547
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-church-red bg-opacity-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail size={24} className="text-church-red" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">E-mail</h3>
                    <p className="text-gray-600">
                      igrejabetheladm@gmail.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-church-red bg-opacity-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock size={24} className="text-church-red" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Horário de Funcionamento</h3>
                    <p className="text-gray-600">
                      Quarta-Feira - 19h - 21h<br />
                      Sexta-feira - 19h - 21h<br />
                      Domingo - 10h - 12h e 18h - 20h
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Mapa */}
              <div className="rounded-lg overflow-hidden shadow-lg h-64 sm:h-72">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d485.96446239422!2d-38.482818!3d-12.990027!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b11a4cd03fd%3A0xf37f4e2583d06396!2sCASA!5e0!3m2!1spt-BR!2sbr!4v1747924185964!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  title="Mapa da CASA"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;