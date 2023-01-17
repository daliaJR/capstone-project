import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';

import Button from '../Button';

function Steps({ steps }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [enteredData, setEnteredData] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const navigate = useNavigate();
  function removeItemFromArray(arr, value) {
    if (arr) {
      const index = arr.indexOf(value);
      if (index > -1) {
        arr.splice(index, index + 1);
      }
      return arr;
    }
    return [];
  }

  return (
    <div className="mainPage min-h-screen">
      {currentStep <= 4 && (
        <div className="w-3/4 flex flex-col mx-16 my-8 ">
          <h1 className="md:text-5xl text-2xl font-poppins mb-3">
            let&apos;s match you with the right therapist
          </h1>
          <p className="text-light-gray md:text-xl text-sm mb-1 font-poppins">
            Please fill out this short questionnaire to provide some general and
            anonymous background about you and the issues you&apos;d like to
            deal with in online therapy. It would help us match you with the
            most suitable therapist for you.
          </p>
        </div>
      )}
      {currentStep > 4 && !isCompleted && (
        <div className="w-4/5 flex flex-col mx-16 my-8 mb-3 font-poppins">
          <h1 className="md:text-5xl text-2xl mb-3"> What brings you here? </h1>
          <p className="text-light-gray md:text-xl text-sm mb-1 font-poppins">
            Please specify (in a few sentences) why you&apos;d like counseling.
          </p>
          <p className="text-light-gray md:text-xl text-sm mb-1 font-poppins">
            This will give your counselor a good understanding of where to
            start.
          </p>
        </div>
      )}
      {isCompleted && !isSubmited && (
        <div className="w-3/4 flex flex-col mx-16 my-8 ">
          <h1 className="md:text-5xl text-2xl mb-3">
            {' '}
            Submit your appointment{' '}
          </h1>
          <p className="text-light-gray md:text-xl text-sm mb-1 font-poppins">
            Click Submit if you are sure of all your choices.
          </p>
        </div>
      )}
      {isSubmited && (
        <div className="w-3/4 flex flex-col mx-16 my-8 ">
          <h1 className="md:text-5xl text-2xl mb-3">
            {' '}
            your request has been submitted!{' '}
          </h1>
          <p className="text-light-gray md:text-xl text-sm mb-1 font-poppins">
            You will receive an email guiding you to book a date and time soon.
          </p>
        </div>
      )}

      <div style={{ height: '60vh' }} className="flex justify-center min-h-fit">
        <div
          className="w-3/5 justify-between p-16 shadow-lg flex flex-col my-5 h-full"
          style={{ borderRadius: 6 }}
        >
          <div className="flex h-full justify-center">
            {isSubmited && (
              <div className="w-3/4">
                <p className="text-3xl font-poppins text-center my-16">
                  request submitted{' '}
                </p>
                <p className="text-2xl font-poppins text-center ">
                  you will receive a confirmation email soon
                </p>
                <p className="text-2xl font-poppins text-center ">
                  please keep an eye on your mail.
                </p>
              </div>
            )}
            {isCompleted && !isSubmited ? (
              <div className="w-3/4">
                <p className="text-3xl font-poppins text-center my-16">
                  Submit Appointment?
                </p>
                <p className="text-2xl font-poppins text-center ">
                  Please be aware that this action will cost you a ticket!
                </p>
              </div>
            ) : (
              !isSubmited && (
                <div className="w-full">
                  {steps.map((question, index) => {
                    return currentStep === index ? (
                      <div className=" h-full ">
                        <h1 className="text-3xl font-poppins">
                          {question.title}
                        </h1>
                        {question.type === 'select' ? (
                          <div>
                            {question.options.map((option) => {
                              return (
                                <div className="my-5">
                                  <input
                                    key={enteredData}
                                    type={
                                      question.isMultiple ? 'checkbox' : 'radio'
                                    }
                                    name={question.name}
                                    value={option}
                                    onChange={(event) => {
                                      if (!event.target.checked) {
                                        const newData = {
                                          ...enteredData,
                                          [question.name]: removeItemFromArray(
                                            enteredData[question.name],
                                            option
                                          ),
                                        };
                                        setEnteredData(newData);
                                      }
                                      if (
                                        enteredData[question.name] !== undefined
                                      ) {
                                        setEnteredData({
                                          ...enteredData,
                                          [question.name]: question.isMultiple
                                            ? [
                                                ...enteredData[question.name],
                                                event.target.value,
                                              ]
                                            : event.target.value,
                                        });
                                      } else {
                                        setEnteredData({
                                          ...enteredData,
                                          [question.name]: question.isMultiple
                                            ? [event.target.value]
                                            : event.target.value,
                                        });
                                      }
                                    }}
                                    checked={
                                      enteredData[question.name]
                                        ? enteredData[question.name].includes(
                                            option
                                          )
                                        : false
                                    }
                                  />
                                  <label
                                    className="text-2xl ml-4 font-poppins"
                                    htmlFor={question.name}
                                  >
                                    {option}
                                  </label>
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <input
                            className="h-1/2 border w-full font-poppins "
                            type="text"
                            value={enteredData[question.title]}
                            onChange={(event) => {
                              setEnteredData({
                                ...enteredData,
                                [question.name]: event.target.value,
                              });
                            }}
                          />
                        )}
                      </div>
                    ) : null;
                  })}
                </div>
              )
            )}
          </div>

          <div className="flex flex-row justify-around">
            {isSubmited && (
              <Button
                text="BACK TO HOME"
                onClick={async () => {
                  navigate('/');
                }}
              />
            )}
            {isCompleted && !isSubmited ? (
              <Button
                data-testid="nextBtn"
                text="SUBMIT"
                onClick={async () => {
                  await addDoc(collection(db, 'meetings'), enteredData);
                  setIsSubmited(true);
                }}
              />
            ) : (
              !isSubmited && (
                <>
                  <Button
                    text="PREVIOUS"
                    onClick={() => {
                      if (currentStep !== 0) {
                        setCurrentStep(currentStep - 1);
                        setIsCompleted(false);
                      }
                    }}
                  />
                  <Button
                    text="NEXT"
                    onClick={() => {
                      if (
                        steps[currentStep].required &&
                        enteredData[steps[currentStep].name] !== undefined
                      ) {
                        if (currentStep !== steps.length - 1) {
                          setCurrentStep(currentStep + 1);
                        }
                        if (currentStep === steps.length - 1) {
                          setIsCompleted(true);
                        }
                      } else if (!steps[currentStep].required) {
                        if (currentStep !== steps.length - 1) {
                          setCurrentStep(currentStep + 1);
                        }
                        if (currentStep === steps.length - 1) {
                          setIsCompleted(true);
                        }
                      }
                    }}
                  />
                </>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const steps = [
  {
    name: 'counselingType',
    title: 'What type of counseling are you looking for?',
    type: 'select',
    options: ['Individual counseling', 'Teen counseling (for my child)'],
    required: true,
    isMultiple: false,
  },
  {
    name: 'userRelationshipStatus',
    title: 'What is your relationship status?',
    type: 'select',
    options: ['Single', 'Married', 'Divorced'],
    isMultiple: false,
    required: true,
  },
  {
    name: 'haveWentBefore',
    title: 'Have you ever been in therapy before?',
    type: 'select',
    options: ['Yes', 'No'],
    required: true,
    isMultiple: false,
  },
  {
    name: 'counselorProperties',
    title: "Are there any specific qualities that you'd like in a counselor?",
    type: 'select',
    options: [
      'I prefer a male counselor',
      'I prefer a female counselor',

      'I prefer a non-religious counselor',
      'I prefer an older counselor (45+)',
    ],
    required: true,
    isMultiple: true,
  },
  {
    name: 'mainIssues',
    title: "Are there any issues you'd like to focus on?",
    type: 'select',
    options: [
      'Depression',
      'Stress and Anxiety',
      'Relationship issues',
      'Family conflicts',
      'Trauma and abuse',
      'Eating disorders',
    ],
    required: true,
  },
  { name: 'notes', title: '', type: 'text' },
];

export default function Booking() {
  return (
    <div>
      <Steps steps={steps} />
    </div>
  );
}
