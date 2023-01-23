import { React } from 'react';
import { data } from '../staticData/careerPage';
import Button from './Button';

export default function MainSection() {
  return (
    <div className="flex flex-col justify-center max-w-7xl mx-auto font-poppins px-5">
      <div className="text-start pt-12">
        <h1 className="md:text-5xl text-4xl">CAREERS AT HEALING</h1>
        <p className="text-secondary">
          Be a part of making people feel better.
        </p>
      </div>

      <div className=" my-24">
        <p className="text-dark-gray md:text-xl text-sm">
          {data.mainSectionText}
        </p>
      </div>

      <div className="w-3/4 mb-10">
        <p className="mb-6 text-dark-gray md:text-xl text-sm">
          What role will you play?
        </p>
        <Button text="SEE OUR OPEN LIST" onClick={() => {}} />
      </div>
    </div>
  );
}
