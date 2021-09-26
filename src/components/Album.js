import React, { useState } from 'react';
import Slider from './Slider';

export default function Album({ photo }) {
  const [isDataSlide, setDataSlide] = useState();
  const modal = (index) => {
    setDataSlide(index);
  };
  const hideSlide = () => {
    sethide(!hide);
  };
  const [hide, sethide] = useState(true);
  return hide ? (
    <div>
      <div className="grid md:grid-cols-3 items-center justify-center md:px-16 mb-10">
        {photo.map((item, index) => {
          return (
            <div key={item.id} onClick={hideSlide}>
              <img
                key={index}
                className="md:object-cover object-cover h-96 w-full md:p-2"
                src={item}
                alt=""
                onClick={() => modal(index)}
              />
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <Slider dataSlider={isDataSlide} data={photo} close={hideSlide} />
  );
}
