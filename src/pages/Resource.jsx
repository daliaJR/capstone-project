import { React, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import rec2 from '../images/Rectangle 42.png';
import rec3 from '../images/Rectangle 41.svg';
import twitter from '../images/twitter.png';

export default function Resource() {
  // const { id } = useParams();
  const id = 0;
  const [blogs, setBlogs] = useState([]);
  const styles = {
    paragraph: 'text-xl font-light uppercase mb-14 max-w-5xl pr-5',
    heading2:
      'text-3xl md:text-4xl font-light uppercase leading-12 lg:leading-18 mb-2 ',
  };
  useEffect(() => {
    async function waitForData() {
      const data = await getDocs(collection(db, 'blogs'));
      setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    waitForData();
    // console.log(blogs);
  }, []);

  return (
    <div className="py-16 font-poppins">
      <section className=" ">
        <div className="max-w-6xl px-5 mx-auto">
          <div className="mb-20">
            <img
              src={blogs[id].image}
              alt=""
              className="w-full h-auto max-h-[20rem]"
            />
          </div>
          <div className="">
            <h2 className="text-4xl md:text-5xl uppercase leading-12 lg:leading-18 mb-8 ">
              {blogs[id].title}
            </h2>
            <div>
              {blogs[id].content.map((cont) => {
                return <div className={styles[cont.type]}>{cont.data}</div>;
              })}
            </div>
          </div>
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-light uppercase leading-12 lg:leading-18 -mb-1 ">
              Sign up for The Healing blog
            </h2>
            <h4 className="text-xl font-normal uppercase mb-8 max-w-5xl pr-5">
              A weekly, ad-free Blog that helps you stay in the know.
            </h4>
            <div className="flex items-center max-w-fit">
              <input
                type="text"
                placeholder="Enter your e-mail"
                className="rounded-l-md py-3 px-4 h-14 max-w-xs text-xl border-light-gray border-2 focus:outline-none"
              />
              <button
                type="button"
                className="inline-flex justify-center items-center w-16 h-14 rounded-r-md bg-light-blue border-light-gray border-2 -ml-2"
              >
                <img src={twitter} alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-6xl px-5 mx-auto">
          <h2 className="text-3xl md:text-4xl font-light uppercase leading-12 lg:leading-18 mb-5 ">
            Sign up for The Healing blog
          </h2>
          <div className="flex space-x-0 md:space-x-7 space-y-7 md:space-y-0  md:flex-row flex-col">
            <img src={rec2} alt="" className="w-full md:w-1/2" />
            <img src={rec3} alt="" className="w-full md:w-1/2" />
          </div>
        </div>
      </section>
    </div>
  );
}
