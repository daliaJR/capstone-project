import React from 'react';
import { data } from '../staticData/AboutPage';

export default function AboutHeader() {
  return (
    <div className="aboutHeader font-poppins">
      <div className="flex max-w-7xl mx-auto flex-col gap-3 justify-start items-start px-5 py-[4rem]">
        <div className="aboutTitle  py-[2rem]">
          <h1 className="text-4xl lg:text-6xl py-2 uppercase">Healing!</h1>
          <p className="text-stone-500	text-2xl">Some cool one liner!</p>
        </div>
        <div className="aboutContent">
          <p className="text-lg">{data.aboutHeader}</p>
        </div>
      </div>
    </div>
  );
}
