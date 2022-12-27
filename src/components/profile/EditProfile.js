import React from "react";
import profileImg from '../../images/profileImg.png';

export default function EditProfile(){
    return(
        <div>
            <div className="flex justify-center self-center pt-8">
                <p className="text-red-500">Please fill all the fields with correct and valid details to complete your profile.</p>
            </div>
            <div className="flex justify-center gap-[8rem] p-[8rem]">
                <div>
                  <img src={profileImg} alt="prfileImage" className="w-56 h-56" />
                </div>
                <div className="inputData">
                    <div className="flex flex-col gap-[2rem]">
                        <h1 className="uppercase">profile info</h1>
                        <form className="flex flex-col gap-6">
                            <div>
                                <label htmlFor="fullName">Full Name:</label>
                                <input className="border rounded-md focus:shadow-outline" name="name" id="fullName" type="text" />
                            </div>
                            <div className="">
                                <label htmlFor="education">Educational Level:</label>
                                <input className="border rounded-md focus:shadow-outline" name="education" id="education" type="text" />
                            </div>
                            <div>
                                <label htmlFor="hobbies">Hobbies:</label>
                                <input className="border rounded-md focus:shadow-outline" name="hobbies" id="hobbies" type="text" />
                            </div>
                            <div>
                                <label htmlFor="familySize">Family Size:</label>
                                <input className="border rounded-md focus:shadow-outline" name="familySize" id="familySize" type="number" />
                                <span className="px-2">Member(s)</span>
                            </div>
                            <div>
                                <label htmlFor="gender">Gender:</label>
                                <input className="border rounded-md focus:shadow-outline" name="gender" id="gender" type="text" />
                            </div>
                            <div>
                                <label htmlFor="gender">Birthdate:</label>
                                <input className="border rounded-md focus:shadow-outline" name="gender" id="gender" type="date" />
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input className="border rounded-md focus:shadow-outline" name="email" id="email" type="email" />
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input className="border rounded-md focus:shadow-outline" name="email" id="email" type="email" />
                            </div>
                            <div>
                                <label htmlFor="phone">Phone Number:</label>
                                <input className="border rounded-md focus:shadow-outline" name="phone" id="phone" type="number" />
                            </div>
                            <div>
                                <label htmlFor="uploadId">Upload ID:</label>
                                <input className="border rounded-md focus:shadow-outline" name="uploadId" id="uploadId" type="text" />
                            </div>
                        </form>
                    </div>

                </div>

            </div>
            
        </div>
    )
} 