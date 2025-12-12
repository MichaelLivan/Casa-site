import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      video.currentTime = 6;
      video.play().catch((error) => {
        // Ignora erros de autoplay bloqueado pelo navegador
        console.log('Autoplay bloqueado:', error);
      });
    };

    const handleTimeUpdate = () => {
      if (video.currentTime >= 26) {
        video.currentTime = 6;
        video.play().catch((error) => {
          // Ignora erros de play
          console.log('Erro ao reproduzir vídeo:', error);
        });
      }
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <section className="relative h-screen w-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover scale-150 sm:scale-140 md:scale-125 lg:scale-110"
          style={{ objectPosition: 'center top' }}
          autoPlay
          muted
          playsInline
        >
          <source src="/video-topo.mp4" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
        <div className="absolute inset-0 bg-church-blue bg-opacity-60" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4 sm:px-6">
        <div className="mb-6 sm:mb-8">
          <img 
            src="/Logo Casa 396.png" 
            alt="Logo CASA" 
            className={`h-16 sm:h-24 md:h-32 lg:h-40 mx-auto object-contain filter drop-shadow-2xl transition-opacity duration-300 ${logoLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setLogoLoaded(true)}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/Logo Casa 396.png';
              setLogoLoaded(true);
            }}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-up w-full sm:w-auto px-4 sm:px-0">
          <a href="/ibb" className="btn-primary text-center">
            Nossa Escola
          </a>
          <a
            href="/historia"
            className="btn-outline border-white text-white hover:bg-white hover:text-church-blue text-center"
          >
            Conheça Nossa Igreja
          </a>
        </div>

        <Link
          to="missao-visao-valores"
          smooth={true}
          duration={500}
          className="absolute bottom-4 sm:bottom-8 cursor-pointer animate-bounce"
          aria-label="Rolar para baixo"
        >
          <ChevronDown size={28} className="sm:w-9 sm:h-9 text-white" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
