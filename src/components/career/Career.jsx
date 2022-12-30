import React from 'react';
import Button from '../Button';

export default function Career() {
  return (
    <div>
      <MainSection />
    </div>
  );
}

function MainSection() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-3/4">
        <h1 className="md:text-4xl text-xl">CAREERS AT HEALING</h1>
        <p className="text-secondary">
          Be a part of making people feel better.
        </p>
      </div>

      <div className="w-3/4 my-32">
        <p>
          Our SEO software cuts through mountains of data to surface critical
          insights. We build and maintain systems that process massive amounts
          of data (we&apos;re talking 36 trillion records per day and multiple
          petabytes of storage.) We model transparent and empathetic marketing
          for the world. We educate our community, making every effort to help
          them improve their skill. And we do it all by fostering a culture that
          encourages accountability, empathy, and transparency.
        </p>
      </div>

      <div className="w-3/4">
        <p className="mb-6">What role will you play?</p>
        <Button text="SEE OUR OPEN LIST" />
      </div>
    </div>
  );
}
