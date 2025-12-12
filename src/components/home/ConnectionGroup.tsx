import React from 'react';
import { Users, MapPin, Calendar } from 'lucide-react';

const ConnectionGroup: React.FC = () => {
  return (
    <section id="conheca" className="section bg-church-cream">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          
          {/* Texto */}
          <div className="text-center mb-12">
            <h2 className="section-title">De Casa em Casa</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              De Casa em Casa são pequenos grupos que se reúnem semanalmente em lares para compartilhar a boa palavra, 
              estudar e fortalecer relacionamentos. É o lugar ideal para crescer na fé e desenvolver relacionamentos genuínos.
            </p>
          </div>
            
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-church-blue bg-opacity-20 flex items-center justify-center mb-4 border-2 border-church-blue border-opacity-30">
                <Users size={24} className="sm:w-7 sm:h-7 text-church-blue" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">Comunidade Acolhedora</h3>
              <p className="text-sm sm:text-base text-gray-600">Um ambiente seguro e acolhedor para compartilhar experiências, orar uns pelos outros e crescer na fé.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-church-blue bg-opacity-20 flex items-center justify-center mb-4 border-2 border-church-blue border-opacity-30">
                <MapPin size={24} className="sm:w-7 sm:h-7 text-church-blue" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">Diversos Locais</h3>
              <p className="text-sm sm:text-base text-gray-600">Nosso objetivo é estar espalhado em toda cidade, facilitando a participação de todos os membros e visitantes.</p>
            </div>
            
            <div className="flex flex-col items-center text-center sm:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-church-blue bg-opacity-20 flex items-center justify-center mb-4 border-2 border-church-blue border-opacity-30">
                <Calendar size={24} className="sm:w-7 sm:h-7 text-church-blue" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">Encontros Semanais</h3>
              <p className="text-sm sm:text-base text-gray-600">Reuniões semanais com duração de aproximadamente 60 minutos, com estudo bíblico, oração e confraternização.</p>
            </div>
          </div>
          
          <div className="text-center">
            <a href="#" className="btn-primary">Encontre um Grupo Próximo</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectionGroup;