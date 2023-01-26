import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import Tickets from '../components/Tickets';

export default function BuyTicket() {
  const navigate = useNavigate();
  return (
    <div>
      <section className="font-poppins py-6">
        <div className="xl:max-w-6xl max-w-sm md:max-w-2xl px-5 mx-auto ">
          <h2 className="text-5xl uppercase leading-18 ">select card</h2>
          <p className="text-black opacity-50 text-lg font-normal mb-20">
            Please select the card you want to buy the tickets with
          </p>
          <Tickets />
          <div className="flex flex-col mt-20">
            <h2 className="text-3xl uppercase mb-16">
              Click confirm to use the selected card to purchase 5 tickets for
              10$
            </h2>
            <button
              className="blue_button mb-16 mx-auto"
              type="button"
              onClick={() => navigate(`/thankyou/ticketThanks`)}
            >
              CONFIRM PURCHASE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
