import React from 'react';
import therapistImg from '../images/therapist_.svg';
import { data } from '../staticData/AboutPage';

export default function AboutBody() {
  return (
    <div className="aboutBody bg-cyan-100">
      <div className="flex  max-w-7xl mx-auto flex-col gap-3 justify-center items-center p-5 lg:h-[21rem] lg:flex-row">
        <div className="imgView flex-shrink-0">
          <img src={therapistImg} alt="therapist" className="w-60	h-60" />
        </div>
        <div className="body flex flex-col justify-center items-center gap-4 ">
          <h2 className="text-4xl lg:text-5xl lg:self-start">Our Funding</h2>
          <p className="text-lg">{data.aboutBody}</p>
        </div>
      </div>
    </div>
  );
}
