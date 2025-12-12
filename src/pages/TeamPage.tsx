import React from 'react';
import PastorCard from '../components/team/PastorCard';

const TeamPage: React.FC = () => {
  const pastors = [
    {
      name: "Luciano Timóteo",
      role: "Bispo e Líder Geral",
      // bio: "TEXTO SOBRE",
      imageUrl: "/dist/timoteo.webp"
    },
    {
      name: "Ebimael Santana",
      role: "Pastor",
      // bio: "TEXTO SOBRE",
      imageUrl: "/dist/ebima.webp"
    },
    {
      name: "Michael Livan",
      role: "Pastor",
      // bio: "TEXTO SOBRE",
      imageUrl: "/dist/michael.webp"
    },
    {
      name: "Alisson Batista",
      role: "Pastor",
      // bio: "TEXTO SOBRE",
      imageUrl: "/dist/alisson.webp"
    },
    {
      name: "Sandra Maria",
      role: "Pastora",
      // bio: "TEXTO SOBRE",
      imageUrl: "/dist/sandra.webp"
    },
    {
      name: "Natalia Timóteo",
      role: "Pastora",
      // bio: "TEXTO SOBRE",
      imageUrl: "/dist/natalia.webp"
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-church-blue text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">Quem Somos</h1>
          <p className="max-w-2xl mx-auto text-gray-300">
            Conheça nossa equipe pastoral e os ministérios da CASA.
          </p>
        </div>
      </section>

      {/* Pastores */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mx-auto after:mx-auto">Pastores</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Nossa equipe pastoral é composta por homens e mulheres chamados por Deus, 
            preparados teologicamente e comprometidos com o cuidado do rebanho.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastors.map((pastor, index) => (
              <PastorCard 
                key={index}
                name={pastor.name}
                role={pastor.role}
                // bio={pastor.bio}
                imageUrl={pastor.imageUrl}
                reversed={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Ministérios da Casa */}
      <section className="section bg-church-cream">
        <div className="container-custom">
          <h2 className="section-title text-center mx-auto after:mx-auto">Ministérios da Casa</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Conheça os ministérios que fazem parte da nossa casa e como cada um contribui para o crescimento do Reino de Deus.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* De Casa em Casa */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48">
                <img 
                  src="/dist/DeCasaemCasa.jpg" 
                  alt="De Casa em Casa" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.includes('/dist/')) {
                      target.src = '/DeCasaemCasa.jpg';
                    }
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-church-blue">De Casa em Casa</h3>
                <p className="text-sm text-gray-600">
                  Grupos de conexão que se reúnem nas casas para comunhão, estudo bíblico e crescimento espiritual.
                </p>
              </div>
            </div>

            {/* Casais */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48">
                <img 
                  src="/dist/casais.jpg" 
                  alt="Ministério de Casais" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.includes('/dist/')) {
                      target.src = '/casais.jpg';
                    }
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-church-blue">Casais</h3>
                <p className="text-sm text-gray-600">
                  Ministério voltado para casais, oferecendo orientação bíblica para fortalecer relacionamentos e famílias.
                </p>
              </div>
            </div>

            {/* Homens */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48">
                <img 
                  src="/dist/homens.jpg" 
                  alt="Ministério de Homens" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.includes('/dist/')) {
                      target.src = '/homens.jpg';
                    }
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-church-blue">Homens</h3>
                <p className="text-sm text-gray-600">
                  Ministério que reúne homens para discipulado, oração e fortalecimento do caráter cristão.
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48">
                <img 
                  src="/dist/social.jpg" 
                  alt="Ministério Social" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.includes('/dist/')) {
                      target.src = '/social.jpg';
                    }
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-church-blue">Social</h3>
                <p className="text-sm text-gray-600">
                  Ministério que desenvolve ações sociais e projetos de impacto na comunidade, demonstrando o amor de Cristo.
                </p>
              </div>
            </div>

            {/* Mulheres */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48">
                <img 
                  src="/dist/mulheres.jpg" 
                  alt="Ministério de Mulheres" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.includes('/dist/')) {
                      target.src = '/mulheres.jpg';
                    }
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-church-blue">Mulheres</h3>
                <p className="text-sm text-gray-600">
                  Ministério que reúne mulheres para comunhão, estudo da Palavra e fortalecimento mútuo na fé.
                </p>
              </div>
            </div>

            {/* Criativo */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48">
                <img 
                  src="/dist/criativo.jpg" 
                  alt="Ministério Criativo" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.includes('/dist/')) {
                      target.src = '/criativo.jpg';
                    }
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-church-blue">Criativo</h3>
                <p className="text-sm text-gray-600">
                  Ministério da mídia responsável pela produção de conteúdo audiovisual, transmissões ao vivo, design gráfico e toda comunicação digital da igreja.
                </p>
              </div>
            </div>

            {/* Consolidação */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48">
                <img 
                  src="/dist/consolidação.jpg" 
                  alt="Ministério de Consolidação" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.includes('/dist/')) {
                      target.src = '/consolidação.jpg';
                    }
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-church-blue">Consolidação</h3>
                <p className="text-sm text-gray-600">
                  Ministério que acompanha novos convertidos, ajudando-os a se firmarem na fé e na comunhão.
                </p>
              </div>
            </div>

            {/* Jovens */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48">
                <img 
                  src="/dist/jovens.jpg" 
                  alt="Ministério de Jovens" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.includes('/dist/')) {
                      target.src = '/jovens.jpg';
                    }
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-church-blue">Jovens</h3>
                <p className="text-sm text-gray-600">
                  Ministério voltado para jovens, oferecendo discipulado, comunhão e atividades que fortalecem a fé.
                </p>
              </div>
            </div>

            {/* Louvor */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48">
                <img 
                  src="/dist/louvor.jpg" 
                  alt="Ministério de Louvor" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.includes('/dist/')) {
                      target.src = '/louvor.jpg';
                    }
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-church-blue">Louvor</h3>
                <p className="text-sm text-gray-600">
                  Ministério responsável por conduzir a igreja em adoração através da música e do canto.
                </p>
              </div>
            </div>

            {/* Evangelismo */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48">
                <img 
                  src="/dist/evangelismo.jpg" 
                  alt="Ministério de Evangelismo" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.includes('/dist/')) {
                      target.src = '/evangelismo.jpg';
                    }
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-church-blue">Evangelismo</h3>
                <p className="text-sm text-gray-600">
                  Ministério dedicado a compartilhar o evangelho e alcançar pessoas com a mensagem de salvação.
                </p>
              </div>
            </div>

            {/* Diamantes (50+) */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48">
                <img 
                  src="/dist/diamantes.jpg" 
                  alt="Diamantes 50+" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.includes('/dist/')) {
                      target.src = '/diamantes.jpg';
                    }
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-church-blue">Diamantes (50+)</h3>
                <p className="text-sm text-gray-600">
                  Ministério para pessoas com 50 anos ou mais, promovendo comunhão, sabedoria e propósito na terceira idade.
                </p>
              </div>
            </div>

            {/* Kids */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48">
                <img 
                  src="/dist/kids.png" 
                  alt="Ministério Kids" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.includes('/dist/')) {
                      target.src = '/kids.png';
                    }
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-church-blue">Kids</h3>
                <p className="text-sm text-gray-600">
                  Ministério dedicado ao ensino bíblico e formação espiritual das crianças de forma criativa e envolvente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
