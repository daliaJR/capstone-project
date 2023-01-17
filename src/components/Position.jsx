// import React from 'react';
import React, {useState, useEffect} from 'react';
import { onSnapshot } from "firebase/firestore";
import {colRef} from '../firebase';

export default function Position() {


    const [position, setPositionList] = useState([]);

    useEffect(() => {
      onSnapshot(colRef, (snapshot) => {;
        snapshot.docChanges().forEach((docChange) => {
          if (docChange.type === "added") {
            setPositionList((prevPositionList) => [
              ...prevPositionList,
              docChange.doc.data(),
            ]);
          }
           else if (docChange.type === "removed") {
            setPositionList(
                position.filter((pos) => pos.id !== docChange.doc.id)
            );
          }
        });
      });    
    }, []);
   
    return (
      <section data-testid="section-wrapper" className="flex justify-center flex-col items-center">
        <div className="w-4/5 mt-10">
          <h1 className="md:text-4xl text-2xl text-dark-gray">
            CURRENT OPEN POSITIONS
          </h1>
          <p className="text-secondary">
            Please send us an email with the application title as the subject with
            an attached CV in PDF format!
          </p>
        </div>
  
        <div className="w-4/5 my-10">
          {position.map((vacancy) => {
            return (
              <div key={vacancy.id} className="md:flex justify-between border-b  border-black my-3 ">
                <div className="w-4/5 md:my-0 my-3 md:mb-2">
                  <h1 className="text-light-blue md:text-2xl text-xl">
                    {vacancy.title}
                  </h1>
                  <p className="text-dark-gray md:text-xl text-sm">
                    {vacancy.description}
                  </p>
                </div>
                <div className="w-1/6 md:my-0 my-3 md:mb-2">
                  <h1 className="text-light-blue md:text-2xl text-xl">
                    {vacancy.major}
                  </h1>
                  <p className="text-dark-gray md:text-xl text-sm">
                    {vacancy.position}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
  