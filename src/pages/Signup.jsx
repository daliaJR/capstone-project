import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, googleProvider, facebookProvider, db } from '../firebase';
import Simg from '../images/Simg.png';
import fb from '../images/fb.png';
import google1 from '../images/google.png';

export default function Signup() {
  const [email1, setEmail1] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [birthD, setBirthD] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [emailMatch, setEmailMatch] = useState(true);

  function signInWithGoogle() {
    signInWithPopup(auth, googleProvider)
      .then((userCredential) => {
        const userId = userCredential.user.uid;
        const collection = 'users';

        setDoc(doc(db, collection, userId), {}).then(() => {
          navigate('/');
        });
      })
      .catch(() => {});
  }

  function isConfirmed() {
    if (password !== confirmPassword) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
    if (email1 !== confirmEmail) {
      setEmailMatch(false);
    } else {
      setEmailMatch(true);
    }
  }

  useEffect(() => {
    isConfirmed();
  }, [email1, password, confirmEmail, confirmPassword]);
  const Signfun = (e) => {
    e.preventDefault();
    if (passwordMatch && emailMatch) {
      createUserWithEmailAndPassword(auth, email1, password)
        .then((userCredential) => {
          const userId = userCredential.user.uid;
          const collection = 'users';
          setDoc(doc(db, collection, userId), {
            fullname: firstName + lastName,
            date: birthD,
            email: email1,
          }).then(() => {
            dispatch(changeSignedToTrue());
            localStorage.setItem('isauthenticated', true);
            navigate('/');
          });
        })
        .catch(() => {});
    }
  };

  function signInWithFacebook() {
    signInWithPopup(auth, facebookProvider)
      .then((userCredential) => {
        const userId = userCredential.user.uid;
        const collection = 'users';

        setDoc(doc(db, collection, userId), {}).then(() => {
          navigate('/');
        });
      })
      .catch(() => {});
  }

  return (
    <div className=" max-w-7xl mx-auto flex flex-col space-x-10 px-2 xl:flex-row justify-around items-center py-16 font-poppins">
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
                className="rounded-xl py-4 px-3 h-14 max-w-[12rem] md:max-w-[16rem]  text-xl border-light-gray border-2 shadow-lg focus:outline-none"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="">
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="rounded-xl py-4 px-4 h-14 shadow-lg max-w-[12rem] md:max-w-[16rem]   text-xl border-light-gray border-2 focus:outline-none"
              />
            </div>
          </div>
          <input
            type="text"
            placeholder="Your Email"
            value={email1}
            onChange={(e) => setEmail1(e.target.value)}
            className="rounded-xl py-4 px-3 h-14  w-full text-xl border-light-gray border-2 shadow-lg focus:outline-none inline-flex justify-center items-center"
          />
          <input
            key={emailMatch}
            type="text"
            value={confirmEmail}
            placeholder="Confirm Email"
            onChange={(e) => setConfirmEmail(e.target.value)}
            style={{
              borderColor: emailMatch ? '#878787' : 'red',
            }}
            className="rounded-xl py-4 px-3  h-14 w-full  text-xl border-light-gray border-2 shadow-lg focus:outline-none "
          />
          <div className="flex space-x-5">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-xl py-4 px-3  h-14  max-w-[12rem] md:max-w-[16rem] text-xl border-light-gray border-2 shadow-lg focus:outline-none"
            />
            <input
              key={passwordMatch}
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{
                borderColor: passwordMatch ? '#878787' : 'red',
              }}
              className="rounded-xl py-4 px-3  h-14  max-w-[12rem] md:max-w-[16rem] text-xl border-light-gray border-2 shadow-lg  focus:outline-none "
            />
          </div>
          <p className="text-sm text-red-700 text-opacity-50">
            Password should be equal or more than 6 digits
          </p>

          <div>
            <input
              className="rounded-xl py-4 px-3  h-14  max-w-[12rem] md:max-w-[16rem] text-xl border-light-gray border-2 shadow-lg  focus:outline-none "
              name="date"
              id="date"
              type="date"
              value={birthD}
              onChange={(e) => setBirthD(e.target.value)}
            />
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
