import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import img from '../images/contact.png';
import { db } from '../firebase';

export default function contact() {
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('');
  const navigate = useNavigate();

  const handleOnChangeType = (event) => {
    const value1 = event.target.value;
    setType(value1);
  };
  const handleOnChangeName = (event) => {
    const value1 = event.target.value;
    setName(value1);
  };
  const handleOnChangeDetails = (event) => {
    const value1 = event.target.value;
    setDetails(value1);
  };
  const handleOnChangeEmail = (event) => {
    const value1 = event.target.value;
    setEmail(value1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    addDoc(collection(db, 'contacts'), {
      email,
      name,
      details,
      type,
    }).then(() => {
      setEmail('');
      setName('');
      setDetails('');
      navigate('/thankyou');
    });
  };

  return (
    <div className="main flex-col p-12 ">
      <section className="section1 mb-10">
        <h1 data-testid="headerText" className="md:text-5xl text-3xl mb-2 ">
          SEND US YOUR REQUEST!
        </h1>
        <p
          data-testid="paragraphText"
          className="text-secondary md:text-2xl text-xl"
        >
          Do you have a question, concern, idea, feedback, or problem? If you
          need assistance, please fill out the form below and we&apos;be happy
          to help!
        </p>
      </section>
      <form onSubmit={handleSubmit}>
        <section className="section2 flex justify-between mb-20">
          <div className="radioSelect w-full md:w-1/2 ">
            <div>
              <p className="text-2xl font-semibold mb-4">Type of contact</p>
              <input
                type="radio"
                value="I have a question about the service."
                name="contact"
                onChange={handleOnChangeType}
                className="mt-3 mb-3 text-xl"
                checked
              />{' '}
              I have a question about the service. <br />
              <input
                type="radio"
                value=" I am a registered client and I need support."
                name="contact"
                onChange={handleOnChangeType}
                className="mt-3 mb-3 text-xl"
              />{' '}
              I&apos;m a registered client and I need support. <br />
              <input
                type="radio"
                value="I am a counsellor interested in joining."
                name="contact"
                onChange={handleOnChangeType}
                className="mt-3 mb-3 text-xl"
              />{' '}
              I&apos;m a counsellor interested in joining. <br />
              <input
                type="radio"
                value=" I am a registered counselor and I need support."
                name="contact"
                onChange={handleOnChangeType}
                className="mt-3 mb-3 text-xl"
              />{' '}
              I&apos;m a registered counselor and I need support. <br />
              <input
                type="radio"
                value="I have a business-related inquiry."
                name="contact"
                onChange={handleOnChangeType}
                className="mt-3 mb-3 text-xl"
              />{' '}
              I have a business-related inquiry. <br />
              <input
                type="radio"
                value="I am interested in Healing Online for my organization. "
                name="contact"
                onChange={handleOnChangeType}
                className="mt-3 mb-3 text-xl"
              />{' '}
              I&apos;m interested in Healing Online for my organization. <br />
              <input
                type="radio"
                value="I have a billing related question."
                name="contact"
                onChange={handleOnChangeType}
                className="mt-3 mb-3 text-2xl"
              />{' '}
              I have a billing related question. <br />
            </div>
          </div>

          <div className="image w-1/2 md:flex hidden  justify-end ">
            <img src={img} alt="img" className="object-cover w-1/2" />
          </div>
        </section>

        <section className="section3 flex flex-col mb-7 justify-between md:flex-row">
          <div className="userInfo w-full md:w-1/2 flex flex-col items-center md:items-start justify-center">
            <div className="mb-5 w-full">
              <p className="mb-2 ml-1">Full Name:</p>
              <input
                type="text"
                id="name"
                onChange={handleOnChangeName}
                value={name}
                placeholder="En"
                className="placeholder-gray-500 shadoter your full name here...w appearance-none border rounded-md w-full py-1 px-3 text-gray-700 leading-8 focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-5 w-full">
              <p className="mb-2 ml-1">Email:</p>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleOnChangeEmail}
                placeholder="Enter your email address here..."
                className="placeholder-gray-500 shadow appearance-none border rounded-md w-full py-1 px-3 text-gray-700 leading-8 focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="mb-5 w-full">
              <p className="mb-2 ml-1">Details:</p>
              <textarea
                type="text"
                id="details"
                value={details}
                onChange={handleOnChangeDetails}
                placeholder="Enter your details here..."
                className="placeholder-gray-500 shadow appearance-none border rounded-md w-full py-1 px-3 text-gray-700 leading-8 focus:outline-none focus:shadow-outline resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-buttoncolor text-black py-2 px-4 border rounded w-32 font-extralight mb-7 md:mb-0"
            >
              SUBMIT
            </button>
          </div>
          <div className="findUs md:w-2/5 flex justify-center md:justify-end items-center w-full ">
            <div className="rounded-3xl bg-boxcolor w-3/4 box-content p-8 object-cover h-3/5 mr-5 ">
              <p className="lg:text-2xl text-xl mb-3 font-family-poppin">
                Find Us At:
              </p>
              <p className="lg:text-2xl text-xl text-secondary">Nergiz plaza</p>
              <p className="lg:text-2xl text-xl text-secondary">3rd Floor</p>
              <p className="lg:text-2xl text-xl text-secondary">
                Bakhtiyari Street 40m
              </p>
              <p className="lg:text-2xl text-xl text-secondary">Erbil,Iraq</p>
              <p className="lg:text-2xl text-xl text-secondary">44001</p>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}
