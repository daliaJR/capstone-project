import React from 'react';
import img from '../imgs/contact.png';

export default function contact() {
  return (
    <div className="main flex-col p-12 ">
      <section className="section1 mb-10">
        <h1 className="text-5xl mb-2 ">SEND US YOUR REQUEST!</h1>
        <p className="text-secondary text-2xl">
          Do you have a question, concern, idea, feedback, or problem? If you
          need assistance, please fill out the form below and we&apos;be happy
          to help!
        </p>
      </section>
      <section className="section2 flex justify-between mb-20">
        <div className="radioSelect">
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

        <div className="image w-1/2 flex justify-end">
          <img src={img} alt="img" className="object-cover w-1/2" />
        </div>
      </section>

      <section className="section3 flex mb-7">
        <div className="userInfo">

          <div className='mb-5'>
            <p className='mb-2 ml-1'>Full Name:</p>
            <input type="text" id="name" className='shadow appearance-none border rounded-md w-full py-1 px-3 text-gray-700 leading-8 focus:outline-none focus:shadow-outline'/>
          </div>

          <div className='mb-5'>
            <p className='mb-2 ml-1'>Email:</p>
            <input type="email" id="email" className='shadow appearance-none border rounded-md w-full py-1 px-3 text-gray-700 leading-8 focus:outline-none focus:shadow-outline'/>
          </div>

          <div className='mb-5'>
            <p className='mb-2 ml-1'>Details:</p>
            <input type="text" id="details" className=' shadow appearance-none border rounded-md w-full py-1 px-3 text-gray-700 leading-8 focus:outline-none focus:shadow-outline'/>
          </div>
        </div>
        <div className="findUs w-full flex justify-end">
          <div className='rounded-3xl bg-boxcolor box-content p-8 object-cover w-1/5 mr-5'>
            <p className='text-2xl mb-3 font-family-poppin'>Find Us At:</p>
            <p className='text-2xl text-secondary'>Nergiz plaza</p>
            <p className='text-2xl text-secondary'>3rd Floor</p>
            <p className='text-2xl text-secondary'>Bakhtiyari Street 40m</p>
            <p className='text-2xl text-secondary'>Erbil,Iraq</p>
            <p className='text-2xl text-secondary'>44001</p>
          </div>
        </div>
      </section>
      <button
        type="button"
        className="bg-buttoncolor text-black py-2 px-4 border rounded w-32 font-extralight"
      >
        SUBMIT
      </button>
    </div>
  );
}
