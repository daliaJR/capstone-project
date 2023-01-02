import React from "react";
import profileImg from '../../images/profileImg.png';
import lock from '../../images/lock.svg';
import plus from '../../images/plus.svg';
import editProfile from '../../images/editProfileImg.png';



export default function EditProfile(){
    return(
        <div>
            <div className="flex justify-center self-center px-8 pt-8">
                <p className="text-red-500">Please fill all the fields with correct and valid details to complete your profile.</p>
            </div>
            <div className="flex justify-center gap-[8rem] p-[8rem]">
                <div className="hidden lg:flex">
                  <div className=" relative left-0 bottom-0 m-0 p-0">
                        <img src={profileImg} alt="prfileImage" className="w-56 h-56 m-0 pl-7 relative top-0 left-0 bottom-0 z-10" />
                        <img src={editProfile} alt="editProfile" className="w-12 h-12 absolute bg-white rounded-3xl top-44 left-[6rem]  z-20" />
                  </div>
                  {/* <div className="relative p-0 m-0">
                        <div className="hidden lg:flex relative p-0 m-0">
                            
                            <img src={profileImg} alt="prfileImage" className=" w-56 h-56 pl-7 m-0 z-10" />
                            <img src={editProfile} alt="editProfile" className="absolute right-12 bottom-1 w-12 h-12 z-50" />
                        </div>
                    </div>  */}

                </div>
                <div className="inputDataField  p-4">
                    <form className="flex flex-col gap-6">
                        <div className="flex flex-col gap-[2rem]">
                            <h2 className="uppercase font-bold text-4xl">profile info</h2>
                            <div className="flex justify-between">
                                <label htmlFor="fullName" className="w-[10rem]">Full Name:</label>
                                <input className="border rounded-md focus:shadow-outline w-[20rem]" name="name" id="fullName" type="text" />
                            </div>
                            <div className="flex justify-between">
                                <label htmlFor="education" className="w-[10rem]">Educational Level:</label>
                                <select className="form-select border rounded-md focus:shadow-outline w-[20rem]"name="education" id="education">
                                    <option value="educational-level">{}</option>
                                    <option value="high-school">High school graduate or equivalent</option>
                                    <option value="bachelor">Bachelor degree</option>
                                    <option value="master">Master degree</option>
                                    <option value="doctorate">Doctorate degree</option>

                                </select>
                            </div>
                            <div className="flex justify-between">
                                <label htmlFor="hobbies" className="w-[10rem]">Hobbies:</label>
                                <input className="border rounded-md focus:shadow-outline w-[20rem]" name="hobbies" id="hobbies" type="text" />
                            </div>
                            <div className="flex justify-between">
                                <label htmlFor="familySize" className="w-[10rem]">Family Size:</label>
                                <div className="flex justify-start w-[20rem]  gap-3">
                                    <input className="border rounded-md focus:shadow-outline w-10" name="familySize" id="familySize" type="number" />
                                    <span className="px-2">Member(s)</span>
                                </div>
                            </div>
                           
                            <div className="flex justify-between">
                                <label htmlFor="gender" className="w-[10rem]">Gender:</label>
                                <select className="form-select border rounded-md focus:shadow-outline w-[20rem]" name="gender" id="gender">
                                    <option value="gender">{}</option>
                                    <option value="male">male</option>
                                    <option value="femail">female</option>
                                </select>
                            </div>
                            <div className="flex justify-between">
                                <label htmlFor="date" className="w-[10rem]">Birthdate:</label>
                                <input className="border rounded-md focus:shadow-outline w-[20rem]" name="date" id="date" type="date" />
                            </div>
                            <div className="flex justify-between">
                                <label htmlFor="email" className="w-[10rem]">Email:</label>
                                <input className="border rounded-md focus:shadow-outline w-[20rem]" name="email" id="email" type="email" />
                            </div>
                            <div className="flex justify-between">
                                <label htmlFor="phone" className="w-[10rem]">Phone Number:</label>
                                <input className="border rounded-md focus:shadow-outline w-[20rem]" name="phone" id="phone" type="number" />
                            </div>
                            <div className="flex justify-between">
                                <label htmlFor="uploadId">Upload ID:</label>
                                <div className="relative p-0 m-0">
                                    <input className="border rounded-md focus:shadow-outline w-[20rem] pl-7 m-0 h-6" name="uploadId" id="uploadId" type="text" />
                                    <img src={plus} alt="add file" className="absolute right-2 bottom-1 w-4 h-4"/>
                                </div>
                            </div>
                                                        
                        </div>
                        <div className="flex flex-col gap-[2rem] pt-10">
                            <h2 className="uppercase font-bold text-xl">Security</h2>
                            <div className="flex justify-between">
                                <label htmlFor="password" className="w-[10rem]">Password:</label>
                                <div className="relative p-0 m-0">
                                    <input className="border rounded-md focus:shadow-outline w-[20rem] pl-7 m-0 h-6" name="password" id="password" type="password" />
                                    <img src={lock} alt="lock" className="absolute right-2 bottom-1 w-4 h-4"/>
                                </div>
                            </div>        

                            <div className="flex justify-between">
                                <label htmlFor="confirmPassword" className="w-[10rem]">Confirm Password:</label>
                                <div className="relative p-0 m-0">
                                    <input className="border rounded-md focus:shadow-outline w-[20rem] pl-7 m-0 h-6" name="confirmPassword" id="confirmPassword" type="password" />
                                    <img src={lock} alt="lock" className="absolute right-2 bottom-1 w-4 h-4"/>
                                </div>
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
                         <div className="flex justify-around lg:justify-between">
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