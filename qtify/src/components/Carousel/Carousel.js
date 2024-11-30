import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
import 'swiper/css';
import LeftArrow from '../Arrows/LeftArrow'; 
import RightArrow from '../Arrows/RightArrow';


const Carousel = ({ albums }) => {
  return (
    <div style={{ position: 'relative'}}>
    <Swiper
      spaceBetween={10}
      slidesPerView={'auto'}
      pagination={{ clickable: true }}
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 5,
        },
      }}
    >
      {albums.map((album) => (
        <SwiperSlide key={album.id}>
          <card album={album} />
        </SwiperSlide>
      ))}
    </Swiper>

    <LeftArrow />
    <RightArrow />
    </div>
  );
};

export default Carousel;
