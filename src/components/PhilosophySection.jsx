import React from "react";

export default function PhilosophySection() {
    return (
      <div data-testid="div-wrapper" className="bg-light-yellow w-screen flex flex-col items-center py-4 text-dark-gray">
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