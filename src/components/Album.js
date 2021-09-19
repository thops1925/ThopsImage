import React from 'react';
// import Card from '../components/Card';
// import photo from '../Data/Data';

export default function Album({ photo, slideOpen, slideToggle }) {
  console.log(photo);
  return (
    <>
      {photo.map((item) => {
        return (
          <div
            className={
              slideOpen
                ? 'hidden'
                : 'flex flex-col items-center justify-center pt-4 text-center'
            }
          >
            <p
              className=" font-bold text-3xl text-gray-900 pb-4"
              key={item.id}
            ></p>

            <div className="flex flex-wrap overflow-hidden md:-mx-px xl:-mx-1 md:px-20 ">
              <img
                className="md:w-1/3 overflow-hidden md:my-px md:px-px xl:my-1 xl:px-1 object-cover"
                src={item}
                alt=""
                // onClick={() => modal(file)}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}
