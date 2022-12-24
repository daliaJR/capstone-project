import React from 'react';
import therapistImg from '../../images/therapist_.svg';

export default function AboutBody() {
  return (
    <div className="aboutBody bg-cyan-100 lg:flex lg:justify-center lg:align-middle h-88 w-full">
      <div className="imgView flex lg:justify-end lg:align-bottom sm:justify-center sm:align-top sm:w-full bg-red-200">
        <img src={therapistImg} alt="therapist" className='w-60	h-60' />
      </div>
      <div className="body">
        <h2>Our Funding</h2>
        <p>
          Healing was founded by Payam Abubakr in 2021. It was called Healing
          Online, and started as a blog and an online community where some of
          the world&lsquo;s therapists shared their research and ideas. We
          launched the Beginner&lsquo;s Guide to Therapy and our first study,
          and that hub of industry expertise transformed into a small consulting
          firm and led us to create the Online Therapist of today!
        </p>
      </div>
    </div>
  );
}
