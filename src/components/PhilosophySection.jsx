import { React } from 'react';
import { data } from '../staticData/careerPage';

export default function PhilosophySection() {
  return (
    <div className="bg-light-yellow text-dark-gray ">
      <div className="max-w-7xl mx-auto flex flex-col  py-4 px-5">
        <h1 className="md:text-4xl text-2xl ">OUR HIRING PHILOSOPHY</h1>
        <p className="md:text-xl text-sm">{data.philosophySectionText}</p>
      </div>
    </div>
  );
}