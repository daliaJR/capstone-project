import React from 'react';
import AboutHeader from './AboutHeader';
import AboutBody from './AboutBody';
import Team from "./Team";
import dalia from '../../images/dalia.jpg';
import noor from '../../images/noor.jpg';
import './style.css';

export default function About() {
  return (
    <div data-testid="about-page">
      <AboutHeader />
      <AboutBody />
      <div className='flex flex-col gap-3 px-[8rem] py-[4rem]'>
        <h3 className='text-3xl lg:text-5xl font-bold uppercase self-center lg:self-start'>we are healing, nice to meet you!</h3> 
        <p className='text-gray-700 py-8 text-2xl lg:text-3xl self-center lg:self-start'>Meet the Teem!</p>
        <div className='flex justify-start gap-2'>
          <Team img={dalia} name="Dalia Jaber" title="FE Developer"/>
          <Team img={noor} name="Noor Ridha" title="FE Developer"/>
        </div>
      </div>
    </div>
  );
}
