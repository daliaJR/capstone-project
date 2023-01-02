import React, { useState } from 'react';
import Button from '../Button';

function Steps({ steps }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [enteredData, setEnteredData] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div className="main min-h-screen">
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
      {isCompleted && (
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

      <div style={{ height: '60vh' }} className="flex justify-center min-h-fit">
        <div
          className="w-3/5 justify-between p-16 shadow-lg flex flex-col my-5 h-full"
          style={{ borderRadius: 6 }}
        >
          <div className="flex h-full justify-center">
            {isCompleted ? (
              <div className="w-3/4">
                <p className="text-3xl font-poppins text-center my-16">
                  Submit Appointment?
                </p>
                <p className="text-2xl font-poppins text-center ">
                  Please be aware that this action will cost you a ticket!
                </p>
              </div>
            ) : (
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
                                  type="radio"
                                  name={question.title}
                                  value={option}
                                  onClick={(event) => {
                                    setEnteredData({
                                      ...enteredData,
                                      [question.title]: event.target.value,
                                    });
                                  }}
                                  checked={
                                    enteredData[question.title] === option
                                  }
                                />
                                <label
                                  className="text-2xl ml-4 font-poppins"
                                  htmlFor={question.title}
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
                              [question.title]: event.target.value,
                            });
                          }}
                        />
                      )}
                    </div>
                  ) : null;
                })}
              </div>
            )}
          </div>

          <div className="flex flex-row justify-around">
            {isCompleted ? (
              <Button text="SUBMIT" onClick={() => {}} />
            ) : (
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
                    if (currentStep !== steps.length - 1) {
                      setCurrentStep(currentStep + 1);
                    }
                    if (currentStep === steps.length - 1) {
                      setIsCompleted(true);
                    }
                  }}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const steps = [
  {
    title: 'What type of coumseling are you looking for?',
    type: 'select',
    options: ['Individual counseling', 'Teen counseling (for my child)'],
  },
  {
    title: 'What is your relationship status?',
    type: 'select',
    options: ['Single', 'Married', 'Divorced'],
  },
  {
    title: 'Have you ever been in therspy before?',
    type: 'select',
    options: ['Yes', 'No'],
  },
  {
    title: "Are there any specific qualities that you'd like in a counselor?",
    type: 'select',
    options: [
      'I prefer a male counselor',
      'I prefer a female counselor',
      'I prefer an older counselor (45+)',
      'I prefer a non-religious counselor',
      'I prefer an older counselor (45+)',
    ],
  },
  {
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
  },
  { title: '', type: 'text' },
];

export default function Booking() {
  return (
    <divi>
      <Steps steps={steps} />
    </divi>
  );
}
