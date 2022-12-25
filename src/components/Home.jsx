import { React } from 'react';
import image1 from '../images/image 1.svg';
import image5 from '../images/image 5.svg';
import imageMembers from '../images/image 8.png';
import phone from '../images/phone.png';
import video from '../images/video.png';
import msg from '../images/msg.png';
import rec1 from '../images/Rectangle 40.svg';
import rec2 from '../images/Rectangle 41.svg';
import next from '../images/next.svg';
import prev from '../images/prev.svg';

/* 
position: absolute;
width: 1440px;
height: 745px;
left: 0px;
top: 106px;

*/
export default function Home() {
  function moveRight() {
    const carousel = document.querySelector('.hide_scrollbar');
    carousel.scrollBy(380, 0);
  }
  function moveLeft() {
    const carousel = document.querySelector('.hide_scrollbar');
    carousel.scrollBy(-380, 0);
  }
  return (
    <div>
      <section className="relative min-h-[90vh] ">
        <div className="h-[106px] bg-sky-blue">f</div>
        <div className="max-w-7xl relative mx-auto flex flex-col py-6 px-5">
          <div className="relative lg:absolute flex flex-col  lg:left-3 lg:top-40 z-20 mb-10">
            <h2 className="text-[2.2rem] uppercase mx-auto -mb-1">
              We are here to
            </h2>
            <h1 className="uppercase text-[8rem] leading-[8rem] mx-auto mb-6 lg:mb-16">
              Help
            </h1>
            <button className="blue_button mx-auto min-w-min" type="button">
              Book an appointment
            </button>
          </div>
          <img
            src={image1}
            alt=""
            className="relative lg:absolute w-[709px] h-[425px] mx-auto lg:right-3 lg:top-28 z-10"
          />
        </div>
        <img
          src={image5}
          alt=""
          className="absolute  w-full top-[106px] left-0 -z-10"
        />
      </section>
      <section className="bg-light-yellow">
        <div className="font-poppins py-20 max-w-6xl mx-auto px-7">
          <h2 className="text-4xl md:text-5xl uppercase leading-12 lg:leading-18 mb-7 ">
            Professional, licensed, and vetted
            <br className="hidden lg:block" /> therapists that you can trust
          </h2>
          <div className="flex space-x-4 mb-12">
            <img src={imageMembers} alt="" className="" />
            {/* <img src={imageGirl} alt="" className="h-32 rounded-full border border-blue-500" /> */}
          </div>
          <p className="text-xl font-light lowercase mb-28">
            Tap into the worlds largest network of licensed, accredited, and
            experienced therapists who can help you with a range of issues
            including depression, anxiety, relationships, trauma, grief, and
            more. with our therapists, you get the same professionalism and
            quality you would expect from an in-office therapist, but with the
            ability to communicate whenever and however you want.
          </p>
          <button className="blue_button mb-8" type="button">
            Book an appointment
          </button>
        </div>
      </section>
      <section className=" bg-white">
        <div className="font-poppins py-24 max-w-6xl mx-auto px-7">
          <h2 className="text-5xl uppercase leading-18 mb-20 mt-5 ">
            we can communicate through
          </h2>
          <div className="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 gap-6">
            <div className="card">
              <img src={phone} alt="" className="mx-auto mb-7" />
              <h2 className="text-5xl mb-7">Voice Call</h2>
              <p className="mx-8 leading-6 font-light text-dark opacity-50">
                Feeling ready to start a conversation? Give your therapist a
                voice call and talk your heart out!
              </p>
            </div>
            <div className="card">
              <img src={msg} alt="" className="mx-auto mb-7" />
              <h2 className="text-5xl mb-7 ">Chat</h2>
              <p className="mx-8 leading-6 font-light text-dark opacity-50">
                Need to talk to someone? <br className="hidden lg:block" /> Come
                have a chat with your
                <br className="hidden lg:block" /> therapist!
              </p>
            </div>
            <div className="card">
              <img src={video} alt="" className="mx-auto mb-7" />
              <h2 className="text-5xl mb-7 ">Video Call</h2>
              <p className="mx-8 leading-6 font-light text-dark opacity-50">
                For better experience therapists recommend video calls, but
                always remember that its a choice!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-sky-blue">
        <div className="py-16 max-w-sm md:max-w-xl lg:max-w-4xl xl:max-w-6xl mx-auto relative">
          <h2 className="text-5xl uppercase font-medium leading-18 mx-7">
            Recent BLOGs
          </h2>
          <div
            className="flex space-x-3 overflow-x-scroll px-3 hide_scrollbar "
            id="iid"
          >
            <button
              className="absolute z-10 -left-14 top-1/2 "
              type="button"
              onClick={moveLeft}
            >
              <img src={prev} alt="" />
            </button>
            <button
              type="button"
              className="absolute z-10 -right-14 top-1/2 "
              onClick={moveRight}
            >
              <img src={next} alt="" />
            </button>
            <div className="w-90 flex-shrink-0">
              <img src={rec1} alt="" className="w-full" />
            </div>
            <div className="w-90 flex-shrink-0">
              <img src={rec2} alt="" className="w-full" />
            </div>
            <div className="w-90 flex-shrink-0">
              <img src={rec1} alt="" className="w-full" />
            </div>
            <div className="w-90 flex-shrink-0">
              <img src={rec2} alt="" className="w-full" />
            </div>
            <div className="w-90 flex-shrink-0">
              <img src={rec1} alt="" className="w-full" />
            </div>
            <div className="w-90 flex-shrink-0">
              <img src={rec2} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="font-poppins py-16 max-w-6xl mx-auto px-7">
          <h2 className="text-5xl uppercase leading-18">Purchase tickets</h2>
          <h3 className="text-2xl uppercase  mb-7">
            purchase tickets that can be used to book appointments!
          </h3>
          <div className="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3  gap-6 mb-20">
            <div className="card flex flex-col py-20">
              <h2 className="text-5xl mb-7 uppercase">5 tickets</h2>
              <span className="text-4xl leading-3 mb-7 font-light text-dark opacity-50">
                10$
              </span>
              <button className="blue_button mx-auto" type="button">
                Purchase
              </button>
            </div>
            <div className="card flex flex-col py-20">
              <h2 className="text-5xl mb-7 uppercase">25 tickets</h2>
              <span className="text-4xl leading-3 mb-7 font-light text-dark opacity-50">
                40$
              </span>
              <button className="blue_button mx-auto" type="button">
                Purchase
              </button>
            </div>
            <div className="card flex flex-col py-20">
              <h2 className="text-5xl mb-7 uppercase">50 tickets</h2>
              <span className="text-4xl leading-3 mb-7 font-light text-dark opacity-50">
                70$
              </span>
              <button className="blue_button mx-auto" type="button">
                Purchase
              </button>
            </div>
          </div>
          <div className="card px-6 mb-5">
            <h2 className="text-5xl mb-7 uppercase">Are you a counselor?</h2>
            <p className="text-xl font-light lowercase mb-7">
              Interested in joining our mental health platform? You decide your
              schedule and how much you want to work, we’ll take care of the
              client referrals and billing details!
            </p>
            <button className="blue_button mx-auto" type="button">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
