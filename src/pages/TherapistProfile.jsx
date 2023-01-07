import React from 'react';
import profileImg from '../images/profileImg.png';
import editProfile from '../images/editProfileImg.png';

export default function TherapistEdit() {
  return (
    <div>
      <div className="flex justify-center gap-[8rem] p-[8rem]">
        <div className="hidden md:flex">
          <div className=" relative left-0 bottom-0">
            <img
              src={profileImg}
              alt="prfileImage"
              className="w-56 h-56 m-0 pl-7 relative top-0 left-0 bottom-0 z-10"
            />
            <img
              src={editProfile}
              alt="editProfile"
              className="w-12 h-12 absolute bg-white rounded-3xl top-44 left-[6rem]  z-20"
            />
          </div>
        </div>

        <div className="inputDataField  p-4">
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-[4rem]">
              <h2 className="uppercase font-bold text-4xl ">
                therapist profile
              </h2>
              <div className="flex justify-between">
                <label htmlFor="fullName" className="w-[10rem]">
                  Full Name:
                </label>
                <input
                  className="border rounded-md focus:shadow-outline w-[20rem]"
                  name="name"
                  id="fullName"
                  type="text"
                />
              </div>
              <div className="flex justify-between">
                <label htmlFor="bio" className="w-[10rem]">
                  Bio:
                </label>
                <textarea
                  className="border rounded-md focus:shadow-outline w-[20rem] h-[12rem]"
                  name="bio"
                  id="bio"
                  type="text"
                />
              </div>

              <div className="flex justify-between">
                <label htmlFor="date" className="w-[10rem]">
                  Birthdate:
                </label>
                <input
                  className="border rounded-md focus:shadow-outline w-[20rem]"
                  name="date"
                  id="date"
                  type="date"
                />
              </div>
              <div className="flex justify-between">
                <label htmlFor="email" className="w-[10rem]">
                  Email:
                </label>
                <input
                  className="border rounded-md focus:shadow-outline w-[20rem]"
                  name="email"
                  id="email"
                  type="email"
                />
              </div>
              <div className="flex justify-between">
                <label htmlFor="phone" className="w-[10rem]">
                  Phone Number:
                </label>
                <input
                  className="border rounded-md focus:shadow-outline w-[20rem]"
                  name="phone"
                  id="phone"
                  type="number"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
