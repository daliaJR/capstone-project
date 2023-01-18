import React from 'react';
import img from '../imgs/contact.png';

export default function contact() {
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
      <section className="section2 flex justify-between mb-20">
        <div className="radioSelect w-full md:w-1/2 ">
          <form action="/action_page.php">
            <p className="text-2xl font-semibold mb-4">Type of contact</p>
            <input
              type="radio"
              value="service"
              name="contact"
              className="mt-3 mb-3 text-xl"
            />{' '}
            I have a question about the service. <br />
            <input
              type="radio"
              value="clientSupport"
              name="contact"
              className="mt-3 mb-3 text-xl"
            />{' '}
            I&apos;m a registered client and I need support. <br />
            <input
              type="radio"
              value="counselorInterested"
              name="contact"
              className="mt-3 mb-3 text-xl"
            />{' '}
            I&apos;m a counsellor interested in joining. <br />
            <input
              type="radio"
              value="registeredCounselor"
              name="contact"
              className="mt-3 mb-3 text-xl"
            />{' '}
            I&apos;m a registered counselor and I need support. <br />
            <input
              type="radio"
              value="businessRelated"
              name="contact"
              className="mt-3 mb-3 text-xl"
            />{' '}
            I have a business-related inquiry. <br />
            <input
              type="radio"
              value="interestedInHealing"
              name="contact"
              className="mt-3 mb-3 text-xl"
            />{' '}
            I&apos;m interested in Healing Online for my organization. <br />
            <input
              type="radio"
              value="BillingRelated"
              name="contact"
              className="mt-3 mb-3 text-2xl"
            />{' '}
            I have a billing related question. <br />
          </form>
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
              role="textbox"
              id="name"
              placeholder="Enter your full name here..."
              className="placeholder-gray-500 shadow appearance-none border rounded-md w-full py-1 px-3 text-gray-700 leading-8 focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-5 w-full">
            <p className="mb-2 ml-1">Email:</p>
            <input
              type="email"
              role="textbox"
              id="email"
              placeholder="Enter your email address here..."
              className="placeholder-gray-500 shadow appearance-none border rounded-md w-full py-1 px-3 text-gray-700 leading-8 focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-5 w-full">
            <p className="mb-2 ml-1">Details:</p>
            <textarea
              type="text"
              role="textbox"
              id="details"
              placeholder="Enter your details here..."
              className="placeholder-gray-500 shadow appearance-none border rounded-md w-full py-1 px-3 text-gray-700 leading-8 focus:outline-none focus:shadow-outline resize-none"
            />
          </div>
          <button
            type="button"
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
    </div>
  );
}
