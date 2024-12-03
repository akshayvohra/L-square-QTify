import React from 'react';
import './Arrows.css';


const LeftArrow = ({ onClick }) => {
  return (
    <button className="swiper-button-prev" onClick={onClick} style={{ position: 'absolute', left: '10px', top: '50%', zIndex: 10 }}>
      <img src="path_to_left_arrow.svg" alt="Left Arrow" />
    </button>
  );
};



export default LeftArrow;
