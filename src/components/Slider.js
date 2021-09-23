import React, { useEffect, useState } from 'react';

import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

export default function Slider({ dataSlider, data, close }) {
  const [isSlider, setSlider] = useState(0);
  console.log(isSlider);

  useEffect(() => {
    setSlider(dataSlider);
  }, [dataSlider]);

  const rightArrow = () => {
    setSlider(isSlider + 1);
  };
  const leftArrow = () => {
    setSlider(isSlider - 1);
  };

  return (
    <>
      <div className="container mx-auto flex justify-center items-center ">
        <div className="relative">
          <AiOutlineClose
            onClick={close}
            className="absolute w-8 h-8 bg-white hover:opacity-100  z-10 opacity-40 top-0 right-0 "
          />

          <img
            src={data[isSlider]}
            alt=""
            className="w-auto h-screen object-contain relative "
          />
        </div>
        <div className="absolute flex justify-between bottom-0">
          <AiOutlineLeft
            onClick={leftArrow}
            className="w-12 h-12 z-10 hover:opacity-100 hover:bg-gray-600 opacity-40"
          />
          <AiOutlineRight
            onClick={rightArrow}
            className="w-12 h-12 z-10 hover:opacity-100 hover:bg-gray-600 opacity-40 "
          />
        </div>
      </div>
    </>
  );
}
