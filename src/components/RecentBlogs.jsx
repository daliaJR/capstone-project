import { React, useCallback, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import next from '../images/next.svg';
import prev from '../images/prev.svg';

export default function RecentBlogs() {
  const [swiperRef, setSwiperRef] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const blogsCollectionRef = collection(db, 'blogs');
  useEffect(() => {
    const getBlogs = async () => {
      const data = await getDocs(blogsCollectionRef);
      const allBlogs = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setBlogs(allBlogs);
    };
    getBlogs();
  }, []);
  const handleLeftClick = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slidePrev();
  }, [swiperRef]);

  const handleRightClick = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slideNext();
  }, [swiperRef]);
  return (
    <div className="relative">
      <button
        onClick={handleLeftClick}
        type="button"
        className="absolute z-10 -left-14 top-1/2 -translate-y-1/2"
      >
        <img src={prev} alt="" />
      </button>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={1}
        loop
        loopFillGroupWithBlank
        className="mySwiper "
        onSwiper={setSwiperRef}
        breakpoints={{
          768: {
            // width: 768,
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
          400: {
            slidesPerView: 1,
          },
        }}
      >
        {blogs.map((blog) => {
          return (
            <SwiperSlide>
              <Link to={`/blogs/${blog.id}`}>
                <img src={blog?.image} alt="" className="h-60" />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button
        onClick={handleRightClick}
        type="button"
        className="absolute z-10 -right-14 top-1/2 -translate-y-1/2"
      >
        <img src={next} alt="" />
      </button>
    </div>
  );
}
