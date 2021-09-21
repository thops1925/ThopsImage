import React, { useState } from 'react';
import Slider from './Slider';

export default function Album({ photo }) {
  const [isDataSlide, setDataSlide] = useState([]);
  const modal = (photo) => {
    setDataSlide(photo);
  };
  return (
    <>
      <div className="grid md:grid-cols-3 items-center justify-center md:px-16 ">
        {photo.map((item) => {
          return (
            <div key={item.id}>
              <img
                className="md:object-cover object-cover h-96 w-full md:p-2"
                src={item}
                alt=""
                onClick={() => modal(photo)}
              />
            </div>
          );
        })}
      </div>
      <Slider dataSlider={isDataSlide} />
    </>
  );
}
