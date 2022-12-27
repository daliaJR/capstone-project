import { React } from 'react';

export default function ThankYou() {
  const texts = {
    emailAdd: 'You email has been added to the mailing list successfully!',
    contactRequest:
      'Your request has been sent, a member of the support team will get in contact with you through the email you provided as soon as possible.',
    signUpRequest:
      'Your Sign Up request has been received, you will soon receive a confirmation email.Please follow the steps in the email to complete and activate your account.',
    purchase:
      'You purchase has been submitted, you should receive an email with the receipt soon.',
    warkingWithHealing:
      'Thank you for your interest in working with Healing, we have recieved your application.You will receive an email guiding you for the next steps soon after your information is reviewed.',
    changingRequest:
      'Request submitted, you will soon receive an email confirming your changes after they are reviewed.',
    cardConfirmed:
      'Your new payment method is under review, you will receive an email soon when your card is confirmed.Otherwise you will get a notification telling you what went wrong and how to add a new card.',
  };
  return (
    <div>
      <section className="font-poppins">
        <div className="max-w-6xl px-5 mx-auto">
          <h2 className="text-5xl uppercase leading-18 ">THANK YOU!</h2>
          <p className="text-black opacity-50 text-lg font-normal mb-8">
            {texts.changingRequest}
          </p>
          <button className="blue_button" type="button">
            Go back to home
          </button>
        </div>
      </section>
    </div>
  );
}
