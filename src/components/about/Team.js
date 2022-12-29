import React from 'react';

export default function Team({img, name, title}){
    return (
        <div>          
                                  
            <div className="bg-cyan-100/75  rounded-md p-1 pb-[3rem] flex flex-col justify-center lg:w-56">
                <div>
                    <img src={img} alt={name} className='rounded-t-md w-full lg:h-48 object-cover' />      
                </div>
                <div className="bg-green-400 h-2">{}</div>
                <div className="flex justify-center items-center flex-col gap-2 mt-3">
                    <h4 className="text-lg font-bold text-gray-700">{name}</h4>
                    <p className="text-md text-gray-700">{title}</p>
                </div>
            </div>
            
        </div>
        
    );
}