import React from 'react';

const HistoryTimeline: React.FC = () => {
  const timelineEvents = [
    {
      year: '2019',
      title: 'O início da visão',
      description: 'O Bispo Luciano Timóteo, que até então era pastor, passou a queimar em seu coração o profundo desejo de iniciar uma igreja, onde nela seria ensinado fortemente principios do novo testamento, fortalecendo sempre a necessidade de cumpri algo basilar que ele nomeou de 5 pilares: jejum, oração em linguas, confissão da palavra, adoração e meditação.'
    },
    {
      year: '2019.2',
      title: 'Mudança do templo',
      description: 'Iniciamos a congregação num lugar não muito grande. Crescemos rapidamente com a graça de Deus, e aquele local já não nos comportava. Foi então que mais uma vez o nosso líder decidiu tomar um passo de fé, incentivando a fé de toda a congregação: alugar um espaço muito maior e 3 vezes mais caro.'
    },
    {
      year: '2020',
      title: 'Pandemia',
      description: 'Mal nos alocamos, e um novo desafio nos aguardava. Infelizmente muitas igrejas fecharam e nós lutavamos em oração para que esse mal não nos alcançace. Mais uma vez Deus nos favoreceu, nos adaptamos com cultos online, depois presencial (com as devidas particularidades) e vencemos mais um desafio.'
    },
    {
      year: '2022',
      title: 'Fundação do RadahCollege',
      description: 'Com o objetivo de transmitir a palavra em tom de ensino, alançando um maior publico além da congregaçao local, nosso bispo fundou aquilo que Deus já havia colocado em seu coração há um tempo: o RadahCollege.'
    },
    {
      
      year: '2025',
      title: 'Visão para o futuro',
      description: 'Planejamento para expansão com novas igrejas filhas e ampliação dos projetos sociais, impactando ainda mais vidas na nossa cidade com o crescimento de De Casa em Casa. E tudo isso é apenas o começo'
    }
  ];

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Linha vertical central */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-church-red"></div>
      
      <div className="space-y-12">
        {timelineEvents.map((event, index) => (
          <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            {/* Marcador central para desktop */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-church-red text-white flex items-center justify-center font-bold z-10">
                {event.year}
              </div>
            </div>
            
            {/* Conteúdo */}
            <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
              {/* Marcador para mobile */}
              <div className="md:hidden w-12 h-12 rounded-full bg-church-red text-white flex items-center justify-center font-bold mb-4 mx-auto">
                {event.year}
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2 text-church-blue">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryTimeline;