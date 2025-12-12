import React from 'react';

interface CurriculumCardProps {
  title: string;
  description: string;
  modules: string[];
  icon: React.ReactNode;
}

const CurriculumCard: React.FC<CurriculumCardProps> = ({ title, description, modules, icon }) => {
  return (
    <div className="card h-full p-4 sm:p-6 flex flex-col">
      <div className="mb-3 sm:mb-4">
        <div className="w-8 h-8 sm:w-10 sm:h-10">
          {icon}
        </div>
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-2 text-church-blue">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{description}</p>
      <div className="mt-auto">
        <h4 className="text-sm sm:text-base font-semibold mb-2 text-church-red">Módulos:</h4>
        <ul className="space-y-1 text-sm sm:text-base text-gray-600">
          {modules.map((module, index) => (
            <li key={index} className="flex items-start">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-church-red rounded-full mr-2 mt-1.5 sm:mt-2 flex-shrink-0"></span>
              <span>{module}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CurriculumCard;