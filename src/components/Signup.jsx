import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, googleProvider, facebookProvider } from '../firebase';
import Simg from '../images/Simg.png';
import fb from '../images/fb.png';
import google1 from '../images/google.png';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  function signInWithGoogle() {
    signInWithPopup(auth, googleProvider)
      .then(() => {})
      .catch(() => {});
    navigate('/');
  }

  const Signfun = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password);
    // .then((userCredential) => {
    //   console.log(userCredential);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
    navigate('/');
  };

  function signInWithFacebook() {
    signInWithPopup(auth, facebookProvider)
      .then(() => {})
      .catch(() => {});
  }

  return (
    <div className="maindiv flex justify-around h-screen items-center pb-44">
      {/* the div that contain SIGNUP NOW, SIGNUP CONTAINER, SOCIAL MADEA */}
      {/* image div */}
      <div className="object-left">
        <img
          className="relative w-[674px] h-[320px] object-left"
          src={Simg}
          alt="signup"
        />
      </div>
      <div className="right div w-144 h-230 ">
        <div>
          <h1 className="text-3xl font-simibold pb-16"> SIGN UP NOW</h1>
        </div>
        {/* input div */}
        <div className="flex flex-col gap-6 shadow-2xl w[555px] h[493] py-10 px-14 pt-3 pb-2  ">
          <div className="inline-flex justify-between items-center ">
            <div className="firstname div w[233px] h[50] w-1/2">
              <input
                type="text"
                placeholder="First Name"
                className="rounded-xl py-2 px-3 pt-2 pb-3 h-14  text-xl border-light-gray border-2 shadow-lg focus:outline-none"
              />
            </div>
            <div className="last name div">
              <input
                type="text"
                placeholder="Last Name"
                className="rounded-xl py-3 px-4 h-14 shadow-lg  text-xl border-light-gray border-2 focus:outline-none"
              />
            </div>
          </div>
          <input
            type="text"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-xl py-2 px-3 pt-2 pb-3 h-14  w-full text-xl border-light-gray border-2 shadow-lg focus:outline-none inline-flex justify-center items-center"
          />
          <input
            type="text"
            placeholder="Confirm Email"
            className="rounded-xl py-2 px-3 pt-2 pb-3 h-14 w-full  text-xl border-light-gray border-2 shadow-lg focus:outline-none"
          />
          <div className="pass div flex justify-between">
            <input
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-xl py-2 px-3 pt-2 pb-3 h-14  max-w-xs text-xl border-light-gray border-2 shadow-lg focus:outline-none w-1/2"
            />
            <input
              type="text"
              placeholder="Confirm Password"
              className="rounded-xl py-2 px-3 pt-2 pb-3 h-14  max-w-xs text-xl border-light-gray border-2 shadow-lg w-1/2 focus:outline-none"
            />
          </div>
          {/* birthday div */}
          <div>
            <p>Birthday Date</p>
            <input type="text" placeholder="DD" />
            <input type="text" placeholder="MM" />
            <input type="text" placeholder="YYYY" />
          </div>

          <div className=" buttons div flex flex-row justify-between">
            <div className=" login button ml-12">
              <button
                className="text-black font-semibold opacity-50 inline-flex justify-center items-center w-16 h-14 rounded-xl bg-light-blue border-light-gray border-2"
                type="button"
                onClick={() => {
                  navigate('/login');
                }}
              >
                Login
              </button>
            </div>
            <div className="signup button">
              <button
                className="opacity-50 text-black font-semibold  inline-flex justify-center items-center w-16 h-14 rounded-xl bg-light-blue border-light-gray border-2 -ml-4 "
                type="button"
                onClick={Signfun}
              >
                Signup
              </button>
            </div>
          </div>
        </div>
        <div className="justify-center items-center pt-3 px-12">
          <p>_______________ Or _______________</p>
        </div>
        <div className="flex space-x-5 mx-auto mt-5 justify-between items-center px-16 ">
          <button type="button" onClick={signInWithFacebook}>
            <img className="facebook" src={fb} alt="facebook" />
          </button>
          <button type="button" onClick={signInWithGoogle}>
            <img className="google" src={google1} alt="google" />
          </button>
        </div>
      </div>
    </div>
  );
}
