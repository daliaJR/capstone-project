import React from 'react';
import ca1 from '../images/ca1.png';
import ca2 from '../images/ca2.png';

export default function AddNewCard() {
  return (
    <div className="main div h-screen items-center px-2">
      <div className="px-5">
        <h1 className=" font-Poppins text-4xl ">ADD CARD DETAILS</h1>
        <p className="text-stone-600 opacity: 50% ">
          Please make sure all of the info you enter are the same as your card
          registration info.
        </p>
      </div>

      <div className="flex justify-around h-screen w-full items-center">
        <div className="flex flex-row w-full justify-around">
          <div className="main form div flex flex-col w-2/6">
            <div className="firstname div w[233px] h[50] w-1/2">
              <h1 className="text-stone-600 ">Supported card types</h1>
              <div className=" flex justify-around  ">
                <div className="box-content text-center h-8 w-full color-cyan-400 border-2 justify-items-stretch   ">
                  <p className="text-cyan-400">Visa</p>
                </div>
                <div className="box-content text-center h-8 w-full border-2 justify-items-stretch">
                  <p className="text-cyan-400">Mastercard</p>
                </div>
              </div>
            </div>
            <p className="pt-8 text-stone-600 "> Card Number</p>
            <input
              type="text"
              placeholder="4287 8876 8699 3434"
              className="rounded-xl py-2 px-3 pt-2 pb-3 h-14  max-w-m text-xl border-light-gray border-2 shadow-lg focus:outline-none"
            />

            <div className="inline-flex pt-8">
              <div className=" max-w-m h[50] w-1/2">
                <p className="">Expiry Date</p>
                <input
                  type="text"
                  placeholder="MM / YY"
                  className="rounded-xl py-2 px-3 pt-2 pb-3 h-14  max-w-xs text-xl border-light-gray border-2 shadow-lg focus:outline-none"
                />
              </div>

              <div>
                <p>CVV Code</p>
                <input
                  type="text"
                  placeholder="***"
                  className="rounded-xl py-3 px-4 h-14 shadow-lg max-w-xs text-xl border-light-gray border-2 focus:outline-none"
                />
              </div>
            </div>

            <p className="pt-8 text-stone-600">Name On Card</p>
            <input
              type="text"
              placeholder="Ayla Ronny"
              className="rounded-xl py-3 px-4 h-14 shadow-lg max-w-m text-xl border-light-gray border-2 focus:outline-none"
            />

            <button
              className="text-black font-semibold opacity-50 inline-flex justify-center items-center w-48 h-14 mt-4 rounded-xl bg-light-blue border-light-gray border-2"
              type="submit"
            >
              ADD CARD
            </button>
          </div>

          <div className="flex flex-col w-2/6">
            <div>
              <p className="text-stone-600 "> Country</p>
              <input
                type="text"
                placeholder="US"
                className="rounded-xl py-2 px-3 pt-2 pb-3 h-14  max-w-xs text-xl border-light-gray border-2 shadow-lg focus:outline-none"
              />
            </div>
            <div>
              <p className="pt-8 text-stone-600 "> Zip Code</p>
              <input
                type="text"
                placeholder="12345-4567"
                className="rounded-xl py-2 px-3 pt-2 pb-3 h-14  max-w-xs text-xl border-light-gray border-2 shadow-lg focus:outline-none"
              />
            </div>
            <div>
              <p className="pt-8 text-stone-600 "> City</p>
              <input
                type="text"
                placeholder="SF"
                className="rounded-xl py-2 px-3 pt-2 pb-3 h-14  max-w-xs text-xl border-light-gray border-2 shadow-lg focus:outline-none"
              />
            </div>
            <div>
              <p className="pt-8 text-stone-600 "> Adress</p>
              <input
                type="text"
                placeholder="NewYork 430 ST."
                className="rounded-xl py-2 px-3 pt-2 pb-3 h-14  max-w-xs text-xl border-light-gray border-2 shadow-lg focus:outline-none"
              />
            </div>
          </div>

          {/* <div className="w-2/6">
        <img className="card1" src={card1} alt="visa card" />
        <img className="card2" src={card2} alt="visa card" />
      </div> */}
        </div>

        <div className="w-2/6">
          <img className="card1" src={ca1} alt="visa card" />
          <img className="card2" src={ca2} alt="visa card" />
        </div>
      </div>

      {/* <div className="">
        <img className="card1" src={card1} alt="visa card" />
        <img className="card2" src={card2} alt="visa card" />
      </div> */}
    </div>
  );
}
