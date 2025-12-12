import React, { useState } from 'react';
import CurriculumCard from '../components/ibb/CurriculumCard';
import { BookOpen, GraduationCap, Dribbble as Bible, Users, Heart, Globe, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Componente de Estrelas para Avaliação
const StarRating: React.FC<{ star: number; rating: number; onRatingChange: (rating: number) => void }> = ({ star, rating, onRatingChange }) => {
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <button
      type="button"
      onClick={() => onRatingChange(star)}
      onMouseEnter={() => setHoverRating(star)}
      onMouseLeave={() => setHoverRating(0)}
      className="focus:outline-none"
    >
      <Star
        size={28}
        className={`sm:w-8 sm:h-8 transition-colors ${
          star <= (hoverRating || rating)
            ? 'fill-yellow-400 text-yellow-400'
            : 'fill-gray-300 text-gray-300'
        }`}
      />
    </button>
  );
};

const IBBPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    year: '',
    rating: 0,
    testimonial: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o depoimento
    // Por exemplo, enviar para um backend ou Google Forms
    console.log('Depoimento enviado:', formData);
    alert('Depoimento enviado com sucesso! Obrigado por compartilhar sua experiência.');
    setFormData({ name: '', year: '', rating: 0, testimonial: '' });
  };

  const courses = [
    {
      title: "Fundamentos Bíblicos",
      description: "Curso introdutório para novos convertidos e pessoas que desejam aprofundar seus conhecimentos bíblicos.",
      modules: ["Panorama Bíblico", "Doutrinas Básicas", "Vida Cristã", "Evangelismo Pessoal"],
      icon: <BookOpen size={40} className="text-church-red" />
    },
    {
      title: "Formação de Líderes",
      description: "Preparação para liderança ministerial, com ênfase em desenvolvimento de habilidades práticas e caráter cristão.",
      modules: ["Princípios de Liderança", "Aconselhamento Básico", "Administração Ministerial", "Gestão de Equipes"],
      icon: <Users size={40} className="text-church-red" />
    },
    {
      title: "Teologia Básica",
      description: "Estudo sistemático das principais doutrinas cristãs com base nas Escrituras e na tradição evangélica.",
      modules: ["Teologia Sistemática", "História da Igreja", "Hermenêutica", "Apologética"],
      icon: <Bible size={40} className="text-church-red" />
    },
    {
      title: "Ministério Pastoral",
      description: "Formação para vocacionados ao ministério pastoral, com disciplinas teóricas e práticas.",
      modules: ["Homilética", "Aconselhamento Pastoral", "Administração Eclesiástica", "Ética Ministerial"],
      icon: <Heart size={40} className="text-church-red" />
    },
    {
      title: "Missões Transculturais",
      description: "Preparo para o campo missionário nacional e internacional, com ênfase em contextualização do evangelho.",
      modules: ["Missiologia", "Antropologia Cultural", "Estratégias Missionárias", "Plantação de Igrejas"],
      icon: <Globe size={40} className="text-church-red" />
    },
    {
      title: "Especialização Ministerial",
      description: "Cursos avançados para áreas específicas do ministério, com professores convidados e especialistas.",
      modules: ["Ministério com Jovens", "Ministério com Crianças", "Aconselhamento Familiar", "Capelania"],
      icon: <GraduationCap size={40} className="text-church-red" />
    }
  ];
  
  const graduationPhotos = [
    {
      url: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg",
      caption: "Formatura 2019 - Turma de Teologia Básica"
    },
    {
      url: "https://images.pexels.com/photos/2340567/pexels-photo-2340567.jpeg",
      caption: "Formatura 2020 - Turma de Liderança"
    },
    {
      url: "https://images.pexels.com/photos/8195872/pexels-photo-8195872.jpeg",
      caption: "Aula inaugural 2021"
    },
    {
      url: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg",
      caption: "Formatura 2022 - Turma de Missões"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-church-blue text-white">
        <div className="container-custom text-center px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 font-playfair">RadahCollege</h1>
          <p className="text-sm sm:text-base max-w-2xl mx-auto text-gray-300">
            Formando discípulos e líderes para a expansão do Reino de Deus através 
            de ensino bíblico de qualidade e formação integral.
          </p>
        </div>
      </section>
      
      {/* Sobre o RadahCollege */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div>
              <h2 className="section-title">Sobre o RadahCollege</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                O RadahCollege foi fundado em 2022 com o objetivo de oferecer formação 
                teológica e ministerial de qualidade, acessível e direta.
              </p>
              
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Nossa missão é formar discípulos maduros e líderes capacitados para servir a Deus na igreja 
                e na sociedade, através de um ensino bíblico sólido e uma metodologia prática e relevante.
              </p>
              
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-church-red bg-opacity-10 flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <BookOpen size={18} className="sm:w-5 sm:h-5 text-church-red" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-600">Ensino bíblico sólido e contextualizado</p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-church-red bg-opacity-10 flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <Users size={18} className="sm:w-5 sm:h-5 text-church-red" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-600">Professores qualificados e experientes</p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-church-red bg-opacity-10 flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <GraduationCap size={18} className="sm:w-5 sm:h-5 text-church-red" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-600">Formação teórica e prática</p>
                </div>
              </div>
              
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdOTZrUxCHriUQCnCAX03qGiurMZKJQ8KKivX0W5UpZ_V98DA/viewform" target="_blank" rel="noopener noreferrer" className="btn-primary">Inscreva-se</a>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg" 
                alt="Alunos do RadahCollege" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Grade Curricular */}
      <section className="section bg-church-gray">
        <div className="container-custom">
          <h2 className="section-title text-center mx-auto after:mx-auto">Grade Curricular</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Oferecemos diversos cursos e programas para atender às diferentes necessidades 
            e chamados ministeriais. Conheça nossas opções:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {courses.map((course, index) => (
              <CurriculumCard 
                key={index}
                title={course.title}
                description={course.description}
                modules={course.modules}
                icon={course.icon}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Formaturas */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mx-auto after:mx-auto">Formaturas Anteriores</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Celebramos com alegria a conclusão de cada curso e a formação de novos líderes e ministros para a obra de Deus.
          </p>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              className="h-full"
            >
              {graduationPhotos.map((photo, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
                    <img 
                      src={photo.url} 
                      alt={photo.caption} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 sm:p-6">
                      <p className="text-white text-sm sm:text-base md:text-xl">{photo.caption}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          
          <div className="mt-16">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-church-blue font-playfair text-center">Deixe Seu Depoimento</h3>
            <div className="max-w-3xl mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
              <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Seu Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-blue focus:border-transparent"
                    placeholder="Digite seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-2">
                    Ano da Formação
                  </label>
                  <input
                    type="number"
                    id="year"
                    name="year"
                    min="2019"
                    max={new Date().getFullYear()}
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-blue focus:border-transparent"
                    placeholder="Ex: 2024"
                  />
                </div>

                <div>
                  <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-2">
                    Avaliação
                  </label>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarRating
                        key={star}
                        star={star}
                        rating={formData.rating}
                        onRatingChange={(rating) => setFormData({ ...formData, rating })}
                      />
                    ))}
                    {formData.rating > 0 && (
                      <span className="text-xs sm:text-sm text-gray-600">
                        {formData.rating} {formData.rating === 1 ? 'estrela' : 'estrelas'}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700 mb-2">
                    Seu Depoimento
                  </label>
                  <textarea
                    id="testimonial"
                    name="testimonial"
                    rows={6}
                    value={formData.testimonial}
                    onChange={(e) => setFormData({ ...formData, testimonial: e.target.value })}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-church-blue focus:border-transparent resize-none"
                    placeholder="Compartilhe sua experiência no RadahCollege..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn-primary"
                  >
                    Enviar Depoimento
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IBBPage;