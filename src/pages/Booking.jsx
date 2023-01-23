import React from 'react';
import { steps } from '../staticData/bookingPage';
import Steps from '../components/Steps';

export default function Booking() {
  return (
    <div>
      <Steps steps={steps} />
    </div>
  );
}
