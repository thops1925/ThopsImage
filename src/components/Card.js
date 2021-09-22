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
      <div className="grid md:grid-cols-3 gap-1">
        {Data.map((item) => {
          return (
            <div key={item.id} onClick={slidetoggle} className="relative">
              <div className="absolute inset-0 z-10 flex">
                <div className="absolute inset-0 opacity-70 bg-gray"></div>
                <div className="mx-auto text-white z-10 self-center uppercase">
                  {item.title}
                </div>
              </div>
              <img
                className="w-full h-98 rounded overflow-hidden shadow-lg my-10 p-2 object-cover"
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
