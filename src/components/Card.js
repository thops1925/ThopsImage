import React, { useState } from 'react';
import Data from '../Data/Data';
import Album from './Album';

function Card({ slidetoggle, state }) {
  const [isItem, setItem] = useState([]);

  const itemResult = (item) => {
    setItem(item);
  };
  return state ? (
    <>
      <div className="grid md:grid-cols-3 gap-1 md:mx-20 mx-10">
        {Data.map((item) => {
          return (
            <div key={item.id} onClick={slidetoggle} className="relative">
              <div
                onClick={() => itemResult(item.photo)}
                className="absolute inset-0 z-10 flex"
              >
                <div className="absolute inset-0 opacity-0 bg-black hover:opacity-0 "></div>
                <div className="mx-auto text-white z-10 self-center uppercase  text-lg">
                  {item.title}
                </div>
              </div>
              <img
                className="w-full h-98 rounded overflow-hidden object-cover"
                src={item.photo[2]}
                onClick={() => itemResult(item.photo)}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </>
  ) : (
    <Album photo={isItem} />
  );
}

export default Card;
