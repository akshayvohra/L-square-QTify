import React from 'react';
import styles from './Arrows.css';

const RightArrow = () => {
  return (
    <button className="swiper-button-next" style={{ position: 'absolute', right: 0, zIndex: 10 }}>
        
      {/* Import your SVG here */}
      <img src="path_to_right_arrow.svg" alt="Right Arrow" />
    </button>
  );
};

export default RightArrow;
