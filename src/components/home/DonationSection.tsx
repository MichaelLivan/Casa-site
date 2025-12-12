import React from 'react';
import { Banknote, Smartphone } from 'lucide-react';

const DonationSection: React.FC = () => {
  return (
    <section className="section bg-church-blue text-white">
      <div className="container-custom">
        <h2 className="section-title text-white text-center mx-auto after:mx-auto after:bg-white">
          Contribua com esta Obra
        </h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
          Sua contribuição nos ajuda a continuar compartilhando o Evangelho e realizando projetos 
          sociais que impactam nossa cidade. Cada oferta é uma semente no Reino de Deus.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          {/* Opção 1 - PIX */}
          <div className="bg-white bg-opacity-10 rounded-lg p-6 md:p-8 text-center hover:bg-opacity-15 transition-all">
            <div className="w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center mx-auto mb-6">
              <Smartphone size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">PIX</h3>
            <p className="text-gray-300 mb-6">
              Contribua de forma rápida e segura utilizando nossa chave PIX.
            </p>
            <div className="bg-white p-4 rounded-lg mb-4 mx-auto max-w-[200px]">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" 
                alt="QR Code PIX" 
                className="w-full"
              />
            </div>
            <p className="font-medium">Chave: amobetheligreja@gmail.com</p>
          </div>
          
          {/* Opção 2 - Transferência */}
          <div className="bg-white bg-opacity-10 rounded-lg p-6 md:p-8 text-center hover:bg-opacity-15 transition-all">
            <div className="w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center mx-auto mb-6">
              <Banknote size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Transferência Bancária</h3>
            <p className="text-gray-300 mb-6">
              Realize uma transferência ou depósito em nossa conta bancária.
            </p>
            <div className="space-y-2 text-left bg-white bg-opacity-10 p-4 rounded-lg">
              <p><span className="font-medium">Banco:</span> Banco Bradesco</p>
              <p><span className="font-medium">Agência:</span> 3679 </p>
              <p><span className="font-medium">Conta:</span> 47849-0 </p>
              <p><span className="font-medium">CNPJ:</span>  33.026.598/0001-47</p>
              <p><span className="font-medium">Titular:</span> CASA</p>
            </div>
          </div>
          
        </div>
        
        <div className="text-center">
          <p className="italic text-gray-300 max-w-3xl mx-auto">
            "Cada um contribua segundo propôs no seu coração, não com tristeza ou por necessidade; 
            porque Deus ama a quem dá com alegria." — 2 Coríntios 9:7
          </p>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;