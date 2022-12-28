import React from 'react';

export default function Team({img, name, title}){
    return (
        <div>          
                                  
            <div className="bg-cyan-100/75  rounded-md p-1 pb-[3rem] flex flex-col justify-center">
                <div>
                    <img src={img} alt={name} className='rounded-t-md w-44 h-48 object-cover' />      
                </div>
                <div className="bg-green-600 h-1">{}</div>
                <div className="flex justify-center items-center flex-col gap-2 mt-3">
                    <h4 className="text-lg font-bold text-gray-700">{name}</h4>
                    <p className="text-md text-gray-700">{title}</p>
                </div>
            </div>
            
        </div>
        
    );
}