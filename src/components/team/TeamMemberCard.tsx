import React from 'react';

interface TeamMemberCardProps {
  name: string;
  role: string;
  imageUrl: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, imageUrl }) => {
  return (
    <div className="card overflow-hidden group">
      <div className="relative h-80 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1 text-church-blue">{name}</h3>
        <p className="text-church-red">{role}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;