// Carousel.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import LeftArrow from '../Arrows/LeftArrow';
import RightArrow from '../Arrows/RightArrow';
import SongCard from '../card/card';  // Reuse Card component for both Albums and Songs

const Carousel = ({ items, isSongsSection }) => {  // Rename albums to items
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




// // import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// // import 'swiper/swiper-bundle.min.css';

// import LeftArrow from '../Arrows/LeftArrow'; 
// import RightArrow from '../Arrows/RightArrow';
// import AlbumCard from '../card/card';
// import React, { useRef, useEffect } from 'react';



// const Carousel = ({ albums }) => {
//     const swiperRef = useRef(null); // Use a reference to control the Swiper instance.
  
//     useEffect(() => {
//       if (swiperRef.current) {
//         // Ensure that swiper is initialized correctly if custom arrows are used.
//         swiperRef.current.swiper.update(); 
//       }
//     }, [albums]); // Update Swiper when albums change


//     const handlePrev = () => {
//         swiperRef.current.swiper.slidePrev();
//       };
  
//       const handleNext = () => {
//         swiperRef.current.swiper.slideNext();
//       };

  
//     return (
//       <div style={{ position: 'relative' }}>
//         <Swiper
//           ref={swiperRef}
//           spaceBetween={10}
//           slidesPerView={7}
//           pagination={{ clickable: true }}
//           navigation={{
//             prevEl: '.swiper-button-prev',
//             nextEl: '.swiper-button-next',
//           }}
//           breakpoints={{
//             640: {
//               slidesPerView: 1,
//             },
//             768: {
//               slidesPerView: 2,
//             },
//             1024: {
//               slidesPerView: 3,
//             },
//             1280: {
//               slidesPerView: 7,
//             },
//             1600: {
//                 slidesPerView: 7, 
//               },
//           }}
//         >
          
//           {albums.map((album) => (
//             <SwiperSlide key={album.id}>
//               <AlbumCard album={album} />
//             </SwiperSlide>
//           ))}
//         </Swiper>
  
//         <LeftArrow onClick={handlePrev} />
//         <RightArrow onClick={handleNext} />
//       </div>
//     );
//   };



// export default Carousel;
