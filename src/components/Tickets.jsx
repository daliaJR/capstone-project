import { React, useCallback, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import card1 from '../images/card 01.png';
import card2 from '../images/card 02.png';
import card3 from '../images/card 03.png';
import next from '../images/next.svg';
import prev from '../images/prev.svg';

export default function Tickets() {
  const [swiperRef, setSwiperRef] = useState(true);

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
        <SwiperSlide>
          <img src={card1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={card2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={card3} alt="" />
        </SwiperSlide>
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
