import React from 'react';
import Position  from '../components/Position';
import MainSection  from '../components/MainSection';
import PhilosophySection  from '../components/PhilosophySection';


export default function CareerTest() { 
  
  return (
    <div data-testid="div-wrapper" className="w-screen">
      <MainSection />
      <PhilosophySection />
      <Position />
    </div>
  );
}



