import React from "react";
import profileImg from '../../images/profileImg.png';

export default function EditProfile(){
    return(
        <div>
            <div className="flex justify-center self-center px-8 pt-8">
                <p className="text-red-500">Please fill all the fields with correct and valid details to complete your profile.</p>
            </div>
            <div className="flex justify-center gap-[8rem] p-[8rem]">
                <div className="hidden md:flex">
                  <img src={profileImg} alt="prfileImage" className="w-56 h-56" />
                </div>
                <div className="inputDataField  p-4">
                    <form className="flex flex-col gap-6">
                        <div className="flex flex-col gap-[2rem]">
                            <h2 className="uppercase font-bold text-xl">profile info</h2>
                            <div className="flex justify-between">
                                <label htmlFor="fullName" className="w-[10rem]">Full Name:</label>
                                <input className="border rounded-md focus:shadow-outline" name="name" id="fullName" type="text" />
                            </div>
                            <div className="flex justify-between">
                                <label htmlFor="education" className="w-[10rem]">Educational Level:</label>
                                <input className="border rounded-md focus:shadow-outline" name="education" id="education" type="text" />
                            </div>
                            <div className="flex justify-between">
                                <label htmlFor="hobbies" className="w-[10rem]">Hobbies:</label>
                                <input className="border rounded-md focus:shadow-outline" name="hobbies" id="hobbies" type="text" />
                            </div>
                            <div className="flex justify-between">
                                <label htmlFor="familySize" className="w-[10rem]">Family Size:</label>
                                <input className="border rounded-md focus:shadow-outline w-10 self-end" name="familySize" id="familySize" type="number" />
                                <span className="px-2">Member(s)</span>
                            </div>
                            <div className="flex justify-between">
                                <label htmlFor="gender" className="w-[10rem]">Gender:</label>
                                <input className="border rounded-md focus:shadow-outline" name="gender" id="gender" type="text" />
                            </div>
                            <div className="flex justify-between">
                                <label htmlFor="date" className="w-[10rem]">Birthdate:</label>
                                <input className="border rounded-md focus:shadow-outline" name="date" id="date" type="date" />
                            </div>
                            <div className="flex justify-between">
                                <label htmlFor="email" className="w-[10rem]">Email:</label>
                                <input className="border rounded-md focus:shadow-outline" name="email" id="email" type="email" />
                            </div>
                            <div className="flex justify-between">
                                <label htmlFor="phone" className="w-[10rem]">Phone Number:</label>
                                <input className="border rounded-md focus:shadow-outline" name="phone" id="phone" type="number" />
                            </div>
                            <div className="flex justify-between">
                                <label htmlFor="uploadId">Upload ID:</label>
                                <input className="border rounded-md focus:shadow-outline" name="uploadId" id="uploadId" type="text" />
                            </div>
                                                        
                        </div>
                        <div className="flex flex-col gap-[2rem] pt-10">
                            <h2 className="uppercase font-bold text-xl">Security</h2>
                            <div className="flex justify-between">
                                <label htmlFor="password" className="w-[10rem]">Password:</label>
                                <input className="border rounded-md focus:shadow-outline" name="password" id="password" type="password" />
                            </div>        
                            <div className="flex justify-between">
                                <label htmlFor="confirmPassword" className="w-[10rem]">Confirm Password:</label>
                                <input className="border rounded-md focus:shadow-outline" name="confirmPassword" id="confirmPassword" type="password" />
                            </div>                   
                            
                        </div>
                        <div className="flex flex-col lg:flex-row gap-2">
                            <button className="blue_button mx-2 text-sm " type="button"> 
                                save changes
                            </button>
                            <button className="blue_button mx-2 text-sm " type="button"> 
                                delete account
                            </button>
                            <button className="blue_button mx-2 text-sm " type="button"> 
                                cancel
                            </button>
                        </div>
                    </form>
                    <div>
                         <h2 className="uppercase font-bold py-8 text-xl">payment methods & tickets</h2>
                         <div className="flex justify-between">
                            <div className="flex flex-col gap-2">
                                <span className="text-sm px-2">
                                    3 Cards Added
                                </span>
                                <button className="blue_button mx-2 text-sm " type="button"> 
                                    show cards
                                 </button>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-sm px-2">
                                    10 Tickets Remaining
                                </span>
                                <button className="blue_button mx-2 text-sm " type="button"> 
                                    buy tickets
                                 </button>
                            </div>
                         </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
} 