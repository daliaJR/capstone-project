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

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const { user } = userCredential;
        console.log(user, 'logged in');
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="flex justify-around h-screen items-center pb-44">
      <div>
        <h1 className="text-3xl font-simibold pb-16">LOG IN</h1>
        {/* input div */}
        <div>
          <form onSubmit={signIn}>
            <div className="flex flex-col gap-6 shadow-2xl w-96 h-[404px] py-10 px-10  ">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-xl py-2 px-3 pt-2 pb-3 h-14  max-w-xs text-xl border-light-gray border-2 shadow-lg focus:outline-none"
              />
              <input
                type="password"
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-xl py-3 px-4 h-14 shadow-lg max-w-xs text-xl border-light-gray border-2 focus:outline-none"
              />

              <div className="flex flex-row justify-between">
                <div className=" ml-12">
                  <button
                    className="text-black font-semibold opacity-50 inline-flex justify-center items-center w-16 h-14 rounded-xl bg-light-blue border-light-gray border-2"
                    type="submit"
                    // onClick={() => {
                    //   navigate('/');
                    // }}
                  >
                    Login
                  </button>
                </div>
                <div>
                  <button
                    className="opacity-50 text-black font-semibold  inline-flex justify-center items-center w-16 h-14 rounded-xl bg-light-blue border-light-gray border-2 -ml-4 "
                    type="submit"
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
          src={log}
          alt="login"
        />
      </div>
    </div>
  );
}
