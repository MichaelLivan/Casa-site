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
          className="w-full h-full object-cover scale-125 md:scale-120 lg:scale-110"
          style={{ objectPosition: 'center top' }}
          autoPlay
          muted
          playsInline
        >
          <source src="/dist/video-topo.mp4" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
        <div className="absolute inset-0 bg-church-blue bg-opacity-60" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
        <div className="mb-8">
          <img 
            src="/Logo Casa 396.png" 
            alt="Logo CASA" 
            className={`h-20 md:h-38 mx-auto object-contain filter drop-shadow-2xl transition-opacity duration-300 ${logoLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setLogoLoaded(true)}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/dist/Logo Casa 396.png';
              setLogoLoaded(true);
            }}
          />
        </div>
        {/* <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-slide-up font-light tracking-wide">
          Centro Apostólico Salvador
        </p> */}
        <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
          <a href="/ibb" className="btn-primary">
            Nossa Escola
          </a>
          <a
            href="/historia"
            className="btn-outline border-white text-white hover:bg-white hover:text-church-blue"
          >
            Conheça Nossa Igreja
          </a>
        </div>

        <Link
          to="missao-visao-valores"
          smooth={true}
          duration={500}
          className="absolute bottom-8 cursor-pointer animate-bounce"
          aria-label="Rolar para baixo"
        >
          <ChevronDown size={36} className="text-white" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
