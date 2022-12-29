import React from 'react';
import logimg from '../images/logimg.png';
import fb from '../images/fb.png';
import google1 from '../images/google.png';

export default function Login() {
  return (
    <div className="flex justify-around h-screen items-center pb-44">
      <div>
        <h1 className="text-3xl font-simibold pb-16">LOG IN</h1>
        {/* input div */}
        <div>
          <div className="flex flex-col gap-6 shadow-2xl w-96 h-[404px] py-10 px-10  ">
            <input
              type="text"
              placeholder="Your Email"
              className="rounded-xl py-2 px-3 pt-2 pb-3 h-14  max-w-xs text-xl border-light-gray border-2 shadow-lg focus:outline-none"
            />
            <input
              type="text"
              placeholder="Your Password"
              className="rounded-xl py-3 px-4 h-14 shadow-lg max-w-xs text-xl border-light-gray border-2 focus:outline-none"
            />

            <div className="flex flex-row justify-between">
              <div className=" ml-12">
                <button
                  className="text-black font-semibold opacity-50 inline-flex justify-center items-center w-16 h-14 rounded-xl bg-light-blue border-light-gray border-2"
                  type="submit"
                >
                  Login
                </button>
              </div>
              <div>
                <button
                  className="opacity-50 text-black font-semibold  inline-flex justify-center items-center w-16 h-14 rounded-xl bg-light-blue border-light-gray border-2 -ml-4 "
                  type="submit"
                >
                  Signup
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center items-center pt-3 px-16">
          <p>_______________ Or _______________</p>
        </div>
        <div className="flex space-x-5 mx-auto mt-5 justify-center items-center px-16 ">
          <button type="submit">
            <img className="facebook" src={fb} alt="facebook" />
          </button>
          <button type="submit">
            <img className="google" src={google1} alt="google" />
          </button>
        </div>
      </div>

      <div className="pt-16">
        <img
          className="relative w-[600px] h-[400px] object-right "
          src={logimg}
          alt="login"
        />
      </div>
    </div>
  );
}
