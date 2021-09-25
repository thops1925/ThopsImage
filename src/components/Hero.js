import React from 'react';
import Cover from '../Data/Cover';
import About from '../Data/About';

export default function Hero() {
  const [{ title, description, story }] = About;
  return (
    <>
      <div
        className="min-h-screen w-screen flex justify-center 
                  -center flex-col lg:flex-row lg:justify-around select-none"
      >
        <div className="my-5 flex justify-center items-center flex-col lg:max-w-xl w-screen">
          <p
            className="mb-10 border-gray-200 text-gray-600 
                      text-6xl justify-center items-start font-cursive font-thin"
          >
            {title}
          </p>

          <p className="  text-justify  text-gray-600  flex justify-center items-center font-thops ">
            {story}
          </p>
          <p className="text-justify text-gray-600 flex justify-center items-center">
            {description}
          </p>
        </div>

        <img
          className="lg:max-w-xl w-screen my-5 rounded-sm"
          src={Cover}
          alt=""
        />
      </div>
    </>
  );
}
