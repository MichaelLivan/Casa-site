import React from 'react';
import HeroSection from '../components/home/HeroSection';
import MissionVisionValues from '../components/home/MissionVisionValues';
import ConnectionGroup from '../components/home/ConnectionGroup';
import DonationSection from '../components/home/DonationSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <MissionVisionValues />
      <ConnectionGroup />
      <DonationSection />
    </div>
  );
};

export default HomePage;