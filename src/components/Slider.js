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
      <div className=" flex justify-center items-center  ">
        <div className="relative">
          <AiOutlineClose
            onClick={close}
            className="absolute top-90 right-0  w-8 h-8  hover:opacity-100 opacity-40"
          />
          <img
            src={data[isSlider]}
            alt=""
            className="w-auto h-screen object-contain "
          />
        </div>
      </div>
      <div className="flex justify-center absolute inset-x-0 bottom-5">
        <AiOutlineLeft
          onClick={leftArrow}
          className="w-12 h-12  hover:opacity-100 opacity-40"
        />
        <AiOutlineRight
          onClick={rightArrow}
          className="w-12 h-12  hover:opacity-100 opacity-40 "
        />
      </div>
    </>
  );
}
