import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import { data } from '../staticData/thankYouPage';

export default function ThankYou() {
  const texts = data;
  const navigate = useNavigate();
  return (
    <div data-testid="thank-you-page">
      <section className="font-poppins min-h-[70vh]">
        <div className="max-w-6xl px-5 mx-auto pt-10 ">
          <h2 className="text-5xl uppercase leading-18 ">THANK YOU!</h2>
          <p
            className="text-black opacity-50 text-lg font-normal mb-8"
            data-testid="paragraph"
          >
            {texts.cardThanks}
          </p>
          <button
            onClick={() => navigate('/')}
            className="blue_button "
            type="button"
          >
            Go back to home
          </button>
        </div>
      </section>
    </div>
  );
}
