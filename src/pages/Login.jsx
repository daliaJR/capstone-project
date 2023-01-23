import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import log from '../images/log.png';
import fb from '../images/fb.png';
import google1 from '../images/google.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password);
    // .then((userCredential) => {
    // Signed in
    // const { user } = userCredential;
    //  console.log(user, 'logged in');
    // navigate('/');
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;

    // console.log(errorCode, errorMessage);
    // });
  };

  return (
    <div className=" font-poppins max-w-7xl mx-auto">
      <div className="flex flex-col xl:flex-row justify-around min-h-screen items-center pb-44 pt-10">
        <div>
          <h1 className="text-5xl font-simibold pb-10">LOG IN</h1>
          {/* input div */}
          <div>
            <form onSubmit={signIn}>
              <div className="flex flex-col space-y-8 shadow-lg w-96  pt-10 pb-20 px-10  ">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-lg py-4 px-3 h-14  max-w-xs text-xl border-black/30 border-2 shadow-lg focus:outline-none"
                />
                <input
                  type="password"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="rounded-lg py-4 px-4 h-14 shadow-lg max-w-xs text-xl border-black/30 border-2 focus:outline-none"
                />

                <div className="flex flex-row justify-between">
                  <div className=" space-x-10 flex ">
                    <button className="blue_button" type="submit">
                      Login
                    </button>
                  </div>
                  <div>
                    <button
                      className="white_button"
                      type="button"
                      onClick={() => {
                        navigate('/signup');
                      }}
                    >
                      Signup
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="justify-center items-center pt-3 px-16 mt-8">
            <div className="border-b-2 border-light-blue relative">
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-3 bg-white px-1">
                or
              </span>
            </div>
          </div>
          <div className="flex space-x-5 mx-auto mt-5 justify-center items-center px-16 ">
            <button type="submit">
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
            <button type="submit">
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

        <div className="pt-16">
          <img
            className="relative w-[600px] h-[400px] object-right "
            src={log}
            alt="login"
          />
        </div>
      </div>
    </div>
  );
}
