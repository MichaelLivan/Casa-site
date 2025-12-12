import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';

const MissionVisionValues: React.FC = () => {
  return (
    <section id="missao-visao-valores" className="section bg-church-cream">
      <div className="container-custom">
        <h2 className="section-title text-center mx-auto after:mx-auto">Missão, Visão e Valores</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Conheça os princípios que norteiam nosso ministério e definem nosso propósito.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Missão */}
          <div className="card p-6 sm:p-8 flex flex-col items-center text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-church-red-dark bg-opacity-20 flex items-center justify-center mb-4 border-2 border-church-red-dark border-opacity-30">
              <Target size={24} className="sm:w-7 sm:h-7 text-church-red-dark" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-church-blue">Nossa Missão</h3>
            <p className="text-sm sm:text-base text-gray-600">
              Proclamar o evangelho pleno a todos.
            </p>
          </div>
          
          {/* Visão */}
          <div className="card p-6 sm:p-8 flex flex-col items-center text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-church-blue bg-opacity-20 flex items-center justify-center mb-4 border-2 border-church-blue border-opacity-30">
              <Eye size={24} className="sm:w-7 sm:h-7 text-church-blue" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-church-blue">Nossa Visão</h3>
            <p className="text-sm sm:text-base text-gray-600">
             Praticando os pilares e alcançando os lares.
            </p>
          </div>
          
          {/* Valores */}
          <div className="card p-6 sm:p-8 flex flex-col items-center text-center sm:col-span-2 lg:col-span-1">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-church-red-dark bg-opacity-20 flex items-center justify-center mb-4 border-2 border-church-red-dark border-opacity-30">
              <Heart size={24} className="sm:w-7 sm:h-7 text-church-red-dark" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-church-blue">Nossos Valores</h3>
            <ul className="text-sm sm:text-base text-gray-600 list-disc text-left pl-5 sm:pl-6">
              <li>Espiritualmente Vibrante</li>
              <li>Profeticamente Significante</li>
              <li>Evangelísticamente Potente</li>
              <li>Socialmente Relevante</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;