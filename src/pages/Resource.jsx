import { React, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import twitter from '../images/twitter.png';

export default function Resource() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState({
    allBlogs: [],
    relatedBlogs: [],
  });
  const styles = {
    paragraph: 'text-xl font-light uppercase mb-14 max-w-6xl',
    heading2:
      'text-3xl md:text-4xl font-light uppercase leading-12 lg:leading-18 mb-2 ',
  };
  function getTwoRandomBlogs(arrayOfBlogs) {
    const array = arrayOfBlogs;
    const n = 2;
    const shuffledArray = array.sort(() => 0.5 - Math.random());
    const result = shuffledArray.slice(0, n);
    return result;
  }
  const blogsCollectionRef = collection(db, 'blogs');
  useEffect(() => {
    const getBlogs = async () => {
      const data = await getDocs(blogsCollectionRef);
      const allBlogs = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const currentBlog = allBlogs.filter((blog) => blog.id === id);
      const relatedBlogs = getTwoRandomBlogs(
        allBlogs.filter((blog) => blog.id !== id)
      );
      setBlogs({ currentBlog: currentBlog[0], relatedBlogs });
    };
    getBlogs();
  }, [id]);

  return (
    <div className="py-16 font-poppins">
      <section className=" ">
        <div className="max-w-7xl px-5 mx-auto">
          <div className="mb-20  mx-auto max-w-6xl">
            <img
              src={blogs.currentBlog?.image}
              alt=""
              className="w-full h-auto max-h-[30rem]"
            />
          </div>
          <div className="">
            <h2 className="text-4xl md:text-5xl uppercase leading-12 lg:leading-18 mb-8 ">
              {blogs.currentBlog?.title}
            </h2>
            <div>
              {blogs.currentBlog?.content.map((cont) => {
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
          <h2 className="text-2xl md:text-3xl font-light uppercase leading-12 lg:leading-18 mb-5 ">
            Recommended for you
          </h2>
          <div className="flex space-x-0 md:space-x-7 space-y-7 md:space-y-0  md:flex-row flex-col mx-auto md:mx-0">
            {blogs.relatedBlogs?.map((blog) => {
              return (
                <button
                  className="w-full md:w-1/2"
                  type="button"
                  onClick={() => {
                    navigate(`/blogs/${blog.id}`);
                    window.location.reload(false);
                  }}
                >
                  <img src={blog?.image} alt="" className="w-full h-full" />
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
