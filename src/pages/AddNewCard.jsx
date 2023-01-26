import React from 'react';
import { useNavigate } from 'react-router-dom';
import ca1 from '../images/ca1.png';
import ca2 from '../images/ca2.png';

export default function AddNewCard() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen lg:items-start items-center px-2 font-poppins max-w-7xl mx-auto py-20">
      <div className="px-5 mb-20">
        <h1 className="font-Poppins text-6xl mb-5">ADD CARD DETAILS</h1>
        <p className="text-stone-600 opacity: 50% text-2xl">
          Please make sure all of the info you enter are the same as your card
          registration info.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-around w-full items-center">
        <div className="flex flex-col xl:flex-row xl:space-x-20 space-y-10 xl:space-y-0">
          <div className=" flex flex-col py-0">
            <div className=" ">
              <h1 className="text-black/40 text-2xl mb-2">
                Supported card types
              </h1>
              <div className=" flex justify-around  xl:mb-5">
                <div className="box-content text-center h-8 w-[13.5rem] border-2 border-light-blue   ">
                  <p className="text-cyan-400 text-2xl mb-2">Visa</p>
                </div>
                <div className="box-content text-center h-8 w-[13.5rem] -ml-0.5 border-2 border-light-blue ">
                  <p className="text-cyan-400 text-2xl mb-2">Mastercard</p>
                </div>
              </div>
            </div>
            <p className="pt-8 text-black/40 text-2xl mb-2"> Card Number</p>
            <input
              type="text"
              placeholder="4287 8876 8699 3434"
              className="rounded-lg py-2 px-3 h-14   text-xl border-black/30 border-2 shadow-lg focus:outline-none"
            />

            <div className="inline-flex pt-8">
              <div className=" ">
                <p className="text-black/40 text-2xl mb-2">Expiry Date</p>
                <input
                  type="text"
                  placeholder="MM / YY"
                  className="rounded-lg py-2 px-3 h-14  max-w-[13rem] text-xl border-black/30 border-2 shadow-lg focus:outline-none"
                />
              </div>

              <div className="ml-5">
                <p className="text-black/40 text-2xl mb-2">CVV Code</p>
                <input
                  type="text"
                  placeholder="***"
                  className="rounded-lg py-3 px-4 h-14 shadow-lg max-w-[13rem] text-xl border-black/30 border-2 focus:outline-none"
                />
              </div>
            </div>

            <p className="pt-8 text-black/40 text-2xl mb-2">Name On Card</p>
            <input
              type="text"
              placeholder="Ayla Ronny"
              className="rounded-lg py-3 px-4 h-14 shadow-lg max-w-m text-xl border-black/30 border-2 focus:outline-none"
            />
          </div>

          <div className="flex flex-col ">
            <div>
              <p className="text-black/40 text-2xl mb-2"> Country</p>
              <select
                name=""
                id=""
                className="rounded-lg py-2 px-5 h-14 w-full text-black/40  max-w-xs text-xl bg-white border-black/30 border-2 shadow-lg focus:outline-none"
              >
                <option value="USA">united stated</option>
                <option value="IRAQ">Iraq</option>
                <option value="IRAN">Iran</option>
              </select>
            </div>
            <div>
              <p className="pt-8 text-black/40 text-2xl mb-2"> Zip Code</p>
              <input
                type="text"
                placeholder="12345-4567"
                className="rounded-lg py-2 px-3 h-14  max-w-xs text-xl border-black/30 border-2 shadow-lg focus:outline-none"
              />
            </div>
            <div>
              <p className="pt-8 text-black/40 text-2xl mb-2"> City</p>
              <select
                name=""
                id=""
                className="rounded-lg py-2 px-5 h-14 w-full text-black/40  max-w-xs text-xl bg-white border-black/30 border-2 shadow-lg focus:outline-none"
              >
                <option value="USA">Sulaimani</option>
                <option value="BAGDAD">Bagdad</option>
                <option value="BASRA">Basra</option>
              </select>
            </div>
            <div>
              <p className="pt-8 text-black/40 text-2xl mb-2"> Adress</p>
              <input
                type="text"
                placeholder="NewYork 430 ST."
                className="rounded-lg py-2 px-3 h-14  max-w-xs text-xl border-black/30 border-2 shadow-lg focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className=" flex-col justify-center hidden md:flex items-center md:pt-6 xl:pt-20 md:self-start">
          <img className="card1" src={ca1} alt="visa card" />
          <img className="card2" src={ca2} alt="visa card" />
        </div>
      </div>
      <button
        className="blue_button px-10 mt-14 xl:mt-0 lg:ml-20 xl:ml-3"
        type="button"
        onClick={() => navigate(`/thankyou/cardThanks`)}
      >
        ADD CARD
      </button>
    </div>
  );
}
