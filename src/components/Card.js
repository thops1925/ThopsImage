import React from 'react';
import Data from '../Data/Data';

function Card({ setItemResult }) {
  const itemResult = (item) => {
    setItemResult(item);
  };
  return (
    <>
      <div className="flex justify-center items-center px-10">
        {Data.map((item, id) => {
          return (
            <>
              <div
                key={item.id}
                className="max-w-sm rounded overflow-hidden shadow-lg my-10"
              >
                <img
                  src={item.photo[3]}
                  onClick={() => itemResult(item.photo)}
                  alt=""
                  className="w-full"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-gray-800 text-xl mb-2">
                    <p>{item.title}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Card;
