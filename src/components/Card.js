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
      <div className="grid md:grid-cols-3 items-center justify-center px-16">
        {Data.map((item) => {
          return (
            <div key={item.id} onClick={slidetoggle}>
              <img
                className="w-full h-98 rounded overflow-hidden shadow-lg my-10 p-2 object-cover"
                src={item.photo[2]}
                onClick={() => itemResult(item.photo)}
                alt=""
              />
              {/* <div className="px-6 py-4">
                <div className="">
                  <p>{item.title}</p>
                </div>
              </div> */}
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
