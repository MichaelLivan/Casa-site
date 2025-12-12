import React from 'react';
import HistoryTimeline from '../components/history/HistoryTimeline';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HistoryPage: React.FC = () => {
  const historyPhotos = [
    {
      url: "/dist/culto12-2018.jpg",
      caption: "O inicio - Primeiro templo"
    },
    {
      url: "/dist/culto01-2019.2.jpg",
      caption: "O ínicio - Primeiro templo"
    },
    {
      url: "/dist/culto06-2019.jpg",
      caption: "Mudança para o templo atual - reforma"
    },
    {
      url: "/dist/reforma.jpg",
      caption: "Mudança para o templo atual - reforma"
    },
    {
      url: "/dist/Culto2020.webp",
      caption: "Culto durante a pandemia (2020)"
    },
    {
      url: "/dist/Culto2020.2.webp",
      caption: "Culto durante a pandemia (2020)"
    },
    {
      url: "/dist/culto2024.webp",
      caption: "(2024)"
    },
    {
      url: "/dist/equipePastoral.webp",
      caption: "Toda equipe de oficiais (2024)"
    },
    {
      url: "/dist/Todos os oficiais.jpg",
      caption: "Todos os oficiais"
    },
    {
      url: "/dist/culto2025.jpg",
      caption: "(2025)"
    }
  ];

  return (
    <div>
      {/* Hero Section sem imagem de fundo */}
      <section className="pt-32 pb-20 bg-church-blue text-white text-center relative">
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">Nossa História</h1>
          <p className="max-w-2xl mx-auto">
            Uma jornada de fé, perseverança e conquistas ao longo dos anos. 
            Conheça como Deus tem escrito nossa história.
          </p>
        </div>
      </section>
      
      {/* Introdução */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="section-title text-center mx-auto after:mx-auto">Nossa Jornada</h2>
            <p className="text-gray-600">
              A CASA nasceu em fevereiro de 2019, no coração do bairro de Brotas, em Salvador. Surgimos do desejo sincero de viver o que significa ser igreja de verdade — uma comunidade guiada pelos princípios do Novo Testamento, com uma fé que alcança todas as áreas da vida.
              Nossa missão é clara: anunciar o evangelho com relevância, sabedoria e poder, usando todos os meios possíveis para que o Reino de Deus seja conhecido e vivido. Aqui, buscamos ser mais do que um lugar — queremos ser uma família que reflete o amor e a verdade de Cristo.
            </p>
          </div>
          
          {/* Timeline */}
          <HistoryTimeline />
        </div>
      </section>
      
      {/* Galeria de Fotos */}
      <section className="section bg-church-gray">
        <div className="container-custom">
          <h2 className="section-title text-center mx-auto after:mx-auto">Galeria de Memórias</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Momentos especiais que marcaram nossa história e demonstram o cuidado de Deus com a CASA ao longo dos anos.
          </p>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              className="h-full"
            >
              {historyPhotos.map((photo, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-[500px] bg-gray-900 flex items-center justify-center">
                    <img 
                      src={photo.url} 
                      alt={photo.caption || `Foto ${index + 1}`} 
                      className={`w-full h-full ${photo.url.includes('equipePastoral') ? 'object-contain' : 'object-cover'}`}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        // Tenta carregar da raiz se não encontrar em /dist/
                        if (target.src.includes('/dist/')) {
                          target.src = photo.url.replace('/dist/', '/');
                        }
                      }}
                    />
                    {photo.caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                        <p className="text-white text-xl">{photo.caption}</p>
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4 text-church-blue font-playfair">Nossa Visão para o Futuro</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Continuamos avançando com a visão de alcançar mais pessoas com o Evangelho, formar discípulos 
              comprometidos e impactar nossa sociedade através de projetos sociais e da palavra pura e genuina.
              Acreditamos que o melhor ainda está por vir, e somos gratos a Deus pela oportunidade de 
              fazer parte desta história.
            </p>
            <div className="mt-8">
              <a href="/contato" className="btn-primary">Faça Parte Desta História</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HistoryPage;
