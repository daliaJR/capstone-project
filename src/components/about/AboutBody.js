import React from 'react';
import therapistImg from '../../images/therapist_.svg';

export default function AboutBody() {
  return (
    <div className="aboutBody flex flex-col gap-3 justify-center items-center p-8 lg:h-[21rem] bg-cyan-100 lg:flex-row">
      <div className="imgView">
        <img src={therapistImg} alt="therapist" className="w-60	h-60" />
      </div>
      <div className="body flex flex-col justify-center items-center p-8 gap-4 lg:w-[36rem]">
        <h2 className="text-4xl lg:text-5xl lg:self-start">Our Funding</h2>
        <p className="">
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
