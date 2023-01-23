import React from 'react';
import Position from '../components/Position';
import MainSection from '../components/CareerMainSection';
import PhilosophySection from '../components/PhilosophySection';

export default function CareerTest() {
  return (
    <div className="w-screen font-poppins">
      <MainSection />
      <PhilosophySection />
      <Position />
    </div>
  );
}
