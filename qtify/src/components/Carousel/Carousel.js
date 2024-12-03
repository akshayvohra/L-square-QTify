// Carousel.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import LeftArrow from '../Arrows/LeftArrow';
import RightArrow from '../Arrows/RightArrow';
import SongCard from '../card/card';  

const Carousel = ({ items, isSongsSection }) => {  
  const swiperRef = React.useRef(null);

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  return (
    <div style={{ position: 'relative' }}>
      <Swiper
        ref={swiperRef}
        spaceBetween={10}
        slidesPerView={7}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 7 },
          1600: { slidesPerView: 7 },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <SongCard item={item} isSongsSection={isSongsSection} />
          </SwiperSlide>
        ))}
      </Swiper>

      <LeftArrow onClick={handlePrev} />
      <RightArrow onClick={handleNext} />
    </div>
  );
};

export default Carousel;




