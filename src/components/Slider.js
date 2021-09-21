import React, { useEffect, useState } from 'react';
import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaRegWindowClose,
} from 'react-icons/fa';

export default function Slider({ dataSlider, data }) {
  const [isSlider, setSlider] = useState('');
  useEffect(() => {
    setSlider();
  }, []);
  console.log(isSlider);

  const rightArrow = () => {
    setSlider(dataSlider + 1);
  };
  const leftArrow = () => {
    setSlider(dataSlider - 1);
  };

  return (
    <>
      <div className=" flex justify-center items-center">
        <FaRegWindowClose />
        <FaArrowCircleRight onClick={rightArrow} />
        <FaArrowCircleLeft onClick={leftArrow} />
        <img
          src={data[dataSlider]}
          alt=""
          className="w-auto h-screen object-contain"
        />
      </div>
    </>
  );
}
