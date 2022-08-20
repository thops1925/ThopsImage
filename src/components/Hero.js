import React from 'react';
import Cover from '../Data/Cover';
import About from '../Data/About';

export default function Hero() {
  const [{ title, story }] = About;
  return (
    <div className="flex justify-center items-center flex-col md:flex-row mb-3 w-full px-10">
      <div className="flex-1 flex justify-center items-center flex-col md:flex-col  md:px-4">
        <p className=" flex justify-center items-center font-cursive font-thin border-b-2  border-gray-200 text-gray-800 text-6xl md:text-[54px]">
          {title}
        </p>
        <p className="flex-1 flex justify-center items-center font-poppins font-normal my-10  text-gray-600 text-sm px-6 md:px-0">
          {story}
        </p>
        {/* <p className="text-justify text-gray-600 mt-10 font-thops font-bold ">
            {/* {description} */}
        {/* </p> */}
      </div>

      <div className="flex-1 flex justify-center items-center flex-col md:flex-col mx-6 md:mx-0">
        <img
          className="w-[100px] h-[100px] object-cover"
          src={Cover}
          alt=""

        />
      </div>
    </div>
  );
}
