import React from 'react';

export default function AboutHeader() {
  return (
    <div className="aboutHeader flex flex-col gap-3 justify-start items-start px-[8rem] py-[4rem]">
      <div className="aboutTitle  py-[2rem]">
        <h1 className="text-4xl lg:text-6xl py-2">Healing</h1>
        <p className="text-stone-500	">Some cool one liner!</p>
      </div>
      <div className="aboutContent">
        <p>
          At Healing, we believe there is a better way to do things. A more
          valuable way where customers are earned rather than bought.
          We&lsquo;re obsessively passionate about it, and our mission is to
          help people achieve it. We focus on search engine optimization.
          It&lsquo;s one of the least understood and least transparent aspects
          of great marketing, and we see that as an opportunity. We&lsquo;re
          excited to simplify SEO for everyone through our software, education,
          and community.&lsquo;
        </p>
      </div>
    </div>
  );
}
