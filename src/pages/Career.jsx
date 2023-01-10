import React from 'react';
import Button from '../components/Button';
import Position  from '../components/Position';

export default function CareerTest() { 
  
  return (
    <div className="w-screen">
      <MainSection />
      <PhilosophySection />
      <Position />
    </div>
  );
}

function MainSection() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-3/4">
        <h1 className="md:text-4xl text-2xl">CAREERS AT HEALING</h1>
        <p className="text-secondary">
          Be a part of making people feel better.
        </p>
      </div>

      <div className="w-3/4 my-24">
        <p className="text-dark-gray md:text-xl text-sm">
          Our SEO software cuts through mountains of data to surface critical
          insights. We build and maintain systems that process massive amounts
          of data (we&apos;re talking 36 trillion records per day and multiple
          petabytes of storage.) We model transparent and empathetic marketing
          for the world. We educate our community, making every effort to help
          them improve their skill. And we do it all by fostering a culture that
          encourages accountability, empathy, and transparency.
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

function PhilosophySection() {
  return (
    <div className="bg-light-yellow w-screen flex flex-col items-center py-4 text-dark-gray">
      <h1 className="md:text-4xl text-2xl w-3/4">OUR HIRING PHILOSOPHY</h1>
      <p className="w-3/4 md:text-xl text-sm">
        To build the very best SEO tools, we need a workforce that reflects the
        diversity of our communities and customers. We want Online Therapy to be
        a place where everyone feels welcome and engaged, bar none. It&apos;s
        our mission and promise to interview a diverse and representative slate
        of candidates before making an offer for our open roles.
      </p>
    </div>
  );
}

