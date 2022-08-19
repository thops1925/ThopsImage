import React from 'react';
import Cover from '../Data/Cover';
import About from '../Data/About';

export default function Hero() {
  const [{ title, story }] = About;
  return (
    <div>
      <div
        className="min-h-screen flex justify-center md:mx-56 
                  -center flex-col lg:flex-row lg:justify-around"
      >
        <div className=" md:flex md:items-center my-5  md:flex-col md:max-w-lg md:w-screen">
          <p
            className="mb-10 border-gray-200 text-gray-600 
                      text-6xl flex justify-center items-center font-cursive font-thin mt-32 border-b-2 mx-10"
          >
            {title}
          </p>
          <p className="flex justify-center items-center font-thops mx-10 text-justify  text-gray-600  text-sm">
            {story}
          </p>
          {/* <p className="text-justify text-gray-600 mt-10 font-thops font-bold ">
            {/* {description} */}
          {/* </p> */}
        </div>

        <img
          className="md:max-w-lg md:w-screen my-5 rounded-sm"
          src={Cover}
          alt=""
          width="1920"
          height="1080"
        />
      </div>
    </div>
  );
}
