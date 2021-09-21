import React from 'react';
// import {
//   FaArrowCircleLeft,
//   FaArrowCircleRight,
//   FaRegWindowClose,
// } from 'react-icons/fa';

export default function Slider({ dataSlider }) {
  //   const [islenght, setlength] = useState();
  // const [isSlide, setSlide] = useState();

  // console.log(isSlide);
  //   const [isSlider, setSlider] = useState(0);

  //   const rightArrow = () => {
  //     setSlider(isSlider === slide.length - 1 ? 0 : isSlider + 1);
  //   };
  //   const leftArrow = () => {
  //     setSlider(isSlider === 0 ? slide.length - 1 : isSlider - 1);
  //   };

  return (
    <>
      <div className=" flex justify-center items-center">
        {/* <FaRegWindowClose />
        <FaArrowCircleRight onClick={rightArrow} />
        <FaArrowCircleLeft onClick={leftArrow} /> */}
        {dataSlider.map((item) => {
          return (
            <img src={item} alt="" className="w-auto h-screen object-contain" />
          );
        })}
      </div>
    </>
  );
}
