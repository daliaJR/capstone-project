import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { data } from '../staticData/buyTicketPage';
import Tickets from '../components/Tickets';
import { AuthContext } from './Authentic';

export default function BuyTicket() {
  const navigate = useNavigate();
  const { type } = useParams();
  const user = useContext(AuthContext);
  const { userId } = user;
  const collRef = doc(db, 'users', userId);
  const buySomeTicket = async () => {
    const docSnap = await getDoc(collRef);

    if (docSnap.exists()) {
      let prevAmount =
        docSnap.data().cardAmount !== undefined ? docSnap.data().cardAmount : 0;
      await updateDoc(collRef, {
        cardAmount: (prevAmount += data[type].amount),
      });
    }
    navigate(`/thankyou/ticketThanks`);
  };
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
              Click confirm to use the selected card to purchase{' '}
              {data[type].amount} tickets for {data[type].price}$
            </h2>
            <button
              className="blue_button mb-16 mx-auto"
              type="button"
              onClick={buySomeTicket}
            >
              CONFIRM PURCHASE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
