import React from 'react';

interface PastorCardProps {
  name: string;
  role: string;
  bio?: string;
  imageUrl: string;
  reversed?: boolean;
}

const PastorCard: React.FC<PastorCardProps> = ({ name, role, bio, imageUrl, reversed = false }) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white rounded-lg shadow-lg overflow-hidden`}>
      <div className="md:w-1/2 relative bg-gray-100 min-h-[300px] md:min-h-[400px] flex items-center justify-center">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-church-blue border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <img 
          src={imageUrl} 
          alt={`Pastor ${name}`} 
          className={`w-full h-full min-h-[300px] md:min-h-[400px] object-contain md:object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            // Tenta carregar da raiz se não encontrar em /dist/
            if (target.src.includes('/dist/')) {
              target.src = imageUrl.replace('/dist/', '/');
            }
            setImageLoaded(true);
          }}
        />
      </div>
      <div className="md:w-1/2 p-8 flex flex-col justify-center">
        <h3 className="text-2xl font-bold mb-2 text-church-blue">{name}</h3>
        <p className="text-church-red font-medium mb-4">{role}</p>
        {bio && (
          <div className="prose max-w-none text-gray-600">
            <p>{bio}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PastorCard;
