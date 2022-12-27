import React from "react";
import profileImg from '../../images/profileImg.png';

export default function EditProfile(){
    return(
        <div>
            <div className="flex justify-center self-center pt-8">
                <p className="text-red-500">Please fill all the fields with correct and valid details to complete your profile.</p>
            </div>
            <div>
                <div>
                  <img src={profileImg} alt="prfileImage" className="w-56 h-56" />
                </div>
                <div className="inputData">
                    <div>
                        <h1 className="uppercase">profile info</h1>
                        <form>
                            <label htmlFor="fullName">Full Name:</label>
                            <input className="border rounded" name="name" id="fullName" type="text" placeholder="test" />
                            <input type="text" id="name" placeholder="Enter your full name here..."  className="placeholder-gray-500 shadow appearance-none border rounded-md w-full py-1 px-3 text-gray-700 leading-8 focus:outline-none focus:shadow-outline"
            />
                        </form>
                    </div>

                </div>

            </div>
            
        </div>
    )
} 