import React from "react";
import Cover from "../Data/Cover";
import About from "../Data/About";

export default function Hero() {
  const [{ title, description, story }] = About;
  return (
    <div className="min-h-screen w-screen flex justify-center pt-10 flex-col md:flex-row bg-gray-100 md:px-32 md:py-8">
      <div className="md:px-32 md:py-32 font-sans">
        <p className="flex border-gray-200 text-gray-600 pb-8 border-b-2  text-2xl justify-center font-bold">
          {title}
        </p>
        <p className=" text-gray-600  justify-center p-10  ">{story}</p>
        <p className=" text-gray-600  justify-center px-10 pb-10">
          {description}
        </p>
      </div>

      <img className="md:pr-32 rounded " src={Cover} alt="" />
    </div>
  );
}
