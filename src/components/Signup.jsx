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
    <div className=" max-w-7xl mx-auto flex flex-col space-x-10 px-2 xl:flex-row justify-around items-center py-16 font-poppins">
      {/* the div that contain SIGNUP NOW, SIGNUP CONTAINER, SOCIAL MADEA */}
      {/* image div */}
      <div className="object-left mb-12 xl:mb-0">
        <img className="relative  object-left" src={Simg} alt="signup" />
      </div>
      <div className="right ">
        <div>
          <h1 className="text-5xl font-simibold pb-6"> SIGN UP NOW</h1>
        </div>
        {/* input div */}
        <div className="flex flex-col gap-6 shadow-lg max-w-2xl pb-10 pt-16 sm:px-14  px-3">
          <div className="inline-flex space-x-5 items-center ">
            <div className=" ">
              <input
                type="text"
                placeholder="First Name"
                className="rounded-xl py-4 px-3 h-14 max-w-[12rem] md:max-w-[16rem]  text-xl border-black/30 border-2 shadow-lg focus:outline-none"
              />
            </div>
            <div className="">
              <input
                type="text"
                placeholder="Last Name"
                className="rounded-xl py-4 px-4 h-14 shadow-lg max-w-[12rem] md:max-w-[16rem]   text-xl border-black/30 border-2 focus:outline-none"
              />
            </div>
          </div>
          <input
            type="text"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-xl py-4 px-3 h-14  w-full text-xl border-black/30 border-2 shadow-lg focus:outline-none inline-flex justify-center items-center"
          />
          <input
            type="text"
            placeholder="Confirm Email"
            className="rounded-xl py-4 px-3  h-14 w-full  text-xl border-black/30 border-2 shadow-lg focus:outline-none"
          />
          <div className="flex space-x-5">
            <input
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-xl py-4 px-3  h-14  max-w-[12rem] md:max-w-[16rem] text-xl border-black/30 border-2 shadow-lg focus:outline-none"
            />
            <input
              type="text"
              placeholder="Confirm Password"
              className="rounded-xl py-4 px-3  h-14  max-w-[12rem] md:max-w-[16rem] text-xl border-black/30 border-2 shadow-lg  focus:outline-none"
            />
          </div>
          {/* birthday div */}
          <div className="flex justify-between items-center">
            <p className="pl-1 text-xl text-black/40">Birthday Date</p>
            <div className="flex space-x-10 justify-end">
              <input
                type="text"
                placeholder="DD"
                className="w-14 rounded-lg py-2 px-1 h-14 text-xl border-black/30 border-2 shadow-lg  focus:outline-none"
              />
              <input
                type="text"
                placeholder="MM"
                className="w-14 rounded-lg py-2 px-1  h-14 text-xl border-black/30 border-2 shadow-lg  focus:outline-none"
              />
              <input
                type="text"
                placeholder="YYYY"
                className="w-28 rounded-lg py-2 px-1 h-14 text-xl border-black/30 border-2 shadow-lg  focus:outline-none"
              />
            </div>
          </div>
          <div className=" buttons div flex flex-row justify-center space-x-10">
            <div className="">
              <button
                className="white_button"
                type="button"
                onClick={() => {
                  navigate('/login');
                }}
              >
                Login
              </button>
            </div>
            <div className="">
              <button className="blue_button" type="button" onClick={Signfun}>
                Signup
              </button>
            </div>
          </div>
        </div>
        <div className="justify-center items-center pt-3 px-16 mt-8">
          <div className="border-b-2 border-light-blue relative">
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-3 bg-white px-1">
              or
            </span>
          </div>
        </div>
        <div className="flex space-x-5 mx-auto mt-5 justify-center items-center ">
          <button type="button" onClick={signInWithFacebook}>
            <img
              className="facebook"
              src={fb}
              alt="facebook"
              style={{
                filter:
                  'invert(83%)  sepia(29%) saturate(2123%) hue-rotate(146deg) brightness(90%) contrast(99%)',
              }}
            />
          </button>
          <button type="button" onClick={signInWithGoogle}>
            <img
              className="google"
              src={google1}
              alt="google"
              style={{
                filter:
                  'invert(83%)  sepia(29%) saturate(2123%) hue-rotate(146deg) brightness(90%) contrast(99%)',
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
