import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import Tickets from '../components/Tickets';
import plus from '../images/plus.png';

export default function Payment() {
  const navigate = useNavigate();
  return (
    <div>
      <section className="font-poppins py-6">
        <div className="xl:max-w-6xl max-w-sm md:max-w-2xl px-5 mx-auto ">
          <h2 className="text-5xl uppercase leading-18 ">Your saved cards</h2>
          <p className="text-black opacity-50 text-lg font-normal mb-20">
            We only support cards as a payment method at the moment!
          </p>
          <Tickets />
          <button
            className="blue_button mb-8 mt-28 flex justify-center items-center"
            type="button"
            onClick={() => navigate(`/addnewcard`)}
          >
            <span className="">Add new card</span>
            <img src={plus} alt="" className="inline-block pb-0" />
          </button>
        </div>
      </section>
    </div>
  );
}
