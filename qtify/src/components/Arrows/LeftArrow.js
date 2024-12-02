import React from 'react';
import styles from './Arrows.css';

const LeftArrow = () => {
  return (
    // <button className="swiper-button-prev" style={{ position: 'absolute', left: 0, zIndex: 10 }}>
    <button className="swiper-button-prev" style={{ position: 'absolute', left: 0, zIndex: 10 }}>
      {/* Import your SVG here */}
      <img src="path_to_left_arrow.svg" alt="Left Arrow" />
    </button>
  );
};

export default LeftArrow;
