import React from 'react';
import logimg from '../images/logimg.png';

export default function Login() {
  return (
    <div>
      <div>
        <h1 className="text-lg font-semibold ">LOGIN</h1>
        <div className="input and login contain">
          <div className="input only">
            <input
              type="text"
              placeholder="Your Email"
              className="rounded-l-md py-3 px-4 h-14 max-w-xs text-xl border-light-gray border-2 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Your Password"
              className="rounded-l-md py-3 px-4 h-14 max-w-xs text-xl border-light-gray border-2 focus:outline-none"
            />
          </div>

          <div className="buttons only">
            <div>
              <button className="text-black opacity-50 " type="submit">
                Login
              </button>
            </div>
            <div>
              <button className="text-black opacity-50 " type="submit">
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-96 h-96 ">
        <img
          className="relative w-[674px] h-[320px] object-right"
          src={logimg}
          alt="login"
        />
      </div>
    </div>
  );
}
