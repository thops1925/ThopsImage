import React, { useState } from 'react';
import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaRegWindowClose,
} from 'react-icons/fa';
import photo from '../Data/Data';

export default function Slider({ isphoto, slideToggle, slideOpen }) {
  //   const [islenght, setlength] = useState();
  const [isSlider, setSlider] = useState(0);

  const rightArrow = () => {
    setSlider(isSlider === photo.length - 1 ? 0 : isSlider + 1);
  };
  const leftArrow = () => {
    setSlider(isSlider === 0 ? photo.length - 1 : isSlider - 1);
  };
  return (
    <>
      <div
        className={slideOpen ? ' flex justify-center items-center' : 'hidden'}
      >
        <FaRegWindowClose onClick={slideToggle} />
        <FaArrowCircleRight onClick={rightArrow} />
        <FaArrowCircleLeft onClick={leftArrow} />
        <img src={isphoto} alt="" className="w-auto h-screen object-contain" />
      </div>
    </>
  );
}
