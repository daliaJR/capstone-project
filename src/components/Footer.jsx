import React from 'react';
import fb from '../images/fb.png';
import google1 from '../images/google.png';
import tele from '../images/tele.png';
import twitter from '../images/twitter.png';

function FooterSection() {
  return (
    <div className="bg-light-yellow py-8 font-poppins">
      <div className=" flex max-w-6xl mx-auto flex-col md:flex-row">
        <div className="w-3/4 md:w-1/2 mx-auto md:mx-0 text-center md:text-start mb-5 md:mb-0 pl-0 md:pl-10">
          <h1 className="text-2xl font-semibold">Subscribe</h1>
          <p className="text-lg text-black opacity-50 font-medium mb-1">
            We will never to spam you or share your email
          </p>
          <div className="flex items-center max-w-fit mx-auto md:mx-0">
            <input
              type="text"
              placeholder="Enter your e-mail"
              className="rounded-l-md py-3 px-4 h-14 max-w-xs text-xl border-light-gray border-2 focus:outline-none"
            />
            <button
              type="button"
              className="inline-flex justify-center items-center w-16 h-14 rounded-r-md bg-light-blue border-light-gray border-2 -ml-2"
            >
              <img src={tele} alt="" />
            </button>
          </div>
        </div>

        <div className="w-3/4 lg:w-1/2 mx-auto md:mx-0 flex flex-col justify-center">
          <div className="flex space-x-10 mx-auto">
            <button className="text-black opacity-50 " type="submit">
              Home
            </button>
            <button className="text-black opacity-50" type="submit">
              Blogs
            </button>
            <button className="text-black opacity-50" type="submit">
              About
            </button>
            <button className="text-black opacity-50" type="submit">
              Contact
            </button>
          </div>
          <div className="flex space-x-10 mx-auto mt-5 ">
            <img className="facebook" src={fb} alt="facebook" />
            <img className="google" src={google1} alt="google" />
            <img className="twitter" src={twitter} alt="google" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default FooterSection;
