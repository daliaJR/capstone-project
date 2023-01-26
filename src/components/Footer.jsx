import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { addDoc } from 'firebase/firestore';
import fb from '../images/fb.png';
import google1 from '../images/google.png';
import tele from '../images/tele.png';
import twitter from '../images/twitter.png';
import { colRefSub } from '../firebase';

function FooterSection() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleOnChange = (event) => {
    // const keyName = event.target.name;
    const value1 = event.target.value;
    setEmail(value1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addDoc(colRefSub, {
      email,
    });
    setEmail('');
    navigate(`/thankyou/subscribeThanks`);
  };

  return (
    <div className="bg-light-yellow py-8 font-poppins">
      <div className=" flex max-w-7xl mx-auto flex-col md:flex-row">
        <div className="w-3/4 md:w-1/2 mx-auto md:mx-0 text-center md:text-start mb-5 md:mb-0 pl-0 md:pl-10">
          <h1 className="text-2xl font-semibold">Subscribe</h1>
          <p className="text-lg text-black opacity-50 font-medium mb-1">
            We will never to spam you or share your email
          </p>
          <form
            className="flex items-center max-w-fit mx-auto md:mx-0"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter your e-mail"
              className="rounded-l-md py-3 px-4 h-14 max-w-xs text-xl border-light-gray border-2 focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex justify-center items-center w-16 h-14 rounded-r-md bg-light-blue border-light-gray border-2 -ml-2"
            >
              <img src={tele} alt="" />
            </button>
          </form>
        </div>

        <div className="w-3/4 lg:w-1/2 mx-auto md:mx-0 flex flex-col justify-center">
          <div className="flex space-x-10 mx-auto">
            <button className="text-black opacity-50 " type="submit">
              <Link to="/">Home</Link>
            </button>
            <button className="text-black opacity-50" type="submit">
              <Link to={`/blogs/${'KpOg9FnStfRokLpIh2dW'}`}>Blogs</Link>
            </button>
            <button className="text-black opacity-50" type="submit">
              <Link to="/about">About</Link>
            </button>
            <button className="text-black opacity-50" type="submit">
              <Link to="/contact">Contact</Link>
            </button>
          </div>
          <div className="flex space-x-10 mx-auto mt-5 ">
            <img className="facebook" src={fb} alt="facebook" />
            <img className="google" src={google1} alt="google" />
            <img className="twitter" src={twitter} alt="google" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default FooterSection;

// const handleChange =  (event)=>{
//   event.preventDefault();
//   const {name ,value} = event.target;
//   setEmail(() => {
//     return {[name] : value};
//   })

//   const handleOnChange = (event) => {
//     const keyName = event.target.name;
//     const value = event.target.value;
//     setNewMovieInput((prev) => {
//       // Copy the previous object (state) and only change the keyName that I want
//       // prev is aka newMovieInput
//       return { ...prev, [keyName]: value };
//     });
//   };
// const handleSubmit = async (event) => {
//   event.preventDefault();
//   // instead of saving new items to our state
//   // we will create a post request to add items to our database
//   await addDoc(colRefSub, {
//     email,
//   });
//   // Clear the form
//   setEmail(() =>{
//     return email = "";
//   })
// };

//  // const docRef =  addDoc(colRefSub, {
//   //   email: ""
//   // })
// }
// // const addDoc = (event) => {
// //   event.preventDefault();
// //   colRefSub.add({
// //     email: event.target,
// //   }).then(() => {

// //   }).catch(() =>{

// //   })
// // }
