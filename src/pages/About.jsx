import React from 'react';
import AboutHeader from '../components/AboutHeader';
import AboutBody from '../components/AboutBody';
import Team from '../components/Team';
import dalia from '../images/dalia.jpg';
import noor from '../images/noor.jpg';
import mhamad from '../images/mhamad.jpg';
import darya from '../images/darya.jpg';
import sara from '../images/sara.jpg';

export default function About() {
  return (
    <div data-testid="about-page">
      <AboutHeader />
      <AboutBody />
      <div className="flex max-w-7xl mx-auto flex-col gap-3 px-5 py-[4rem] font-poppins">
        <h3 className="text-3xl lg:text-5xl font-bold uppercase self-center lg:self-start">
          we are healing, nice to meet you!
        </h3>
        <p className="text-gray-700 py-8 text-2xl lg:text-3xl self-center lg:self-start">
          Meet the Teem!
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-wrap sm:flex-row sm:gap-2">
          <Team img={dalia} name="Dalia Jaber" title="FE Developer" />
          <Team img={noor} name="Noor Ridha" title="FE Developer" />
          <Team img={mhamad} name="Mhamad Othman" title="FE Developer" />
          <Team img={darya} name="Darya Naji" title="FE Developer" />
          <Team img={sara} name="Sara Bakr" title="FE Developer" />
        </div>
      </div>
    </div>
  );
}
