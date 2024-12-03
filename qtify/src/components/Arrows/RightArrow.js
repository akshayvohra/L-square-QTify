import React from 'react';
import './Arrows.css';

const RightArrow = ({ onClick }) => {
    return (
      <button className="swiper-button-next" onClick={onClick} style={{ position: 'absolute', right: '10px', top: '50%', zIndex: 10 }}>
        <img src="path_to_right_arrow.svg" alt="Right Arrow" />
      </button>
    );
  };



export default RightArrow;
