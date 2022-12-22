import React from 'react';
import therapistImg from '../../images/therapist_.svg';

export default function AboutBody() {
  return (
    <div className="aboutBody bg-cyan-100 flex justify-center align-middle min- h-96">
      <div className="imgView">
        <img src={therapistImg} alt="therapist" />
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
