import React from 'react';

interface CurriculumCardProps {
  title: string;
  description: string;
  modules: string[];
  icon: React.ReactNode;
}

const CurriculumCard: React.FC<CurriculumCardProps> = ({ title, description, modules, icon }) => {
  return (
    <div className="card h-full p-6 flex flex-col">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-church-blue">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mt-auto">
        <h4 className="font-semibold mb-2 text-church-red">Módulos:</h4>
        <ul className="space-y-1 text-gray-600">
          {modules.map((module, index) => (
            <li key={index} className="flex items-center">
              <span className="w-2 h-2 bg-church-red rounded-full mr-2"></span>
              {module}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CurriculumCard;