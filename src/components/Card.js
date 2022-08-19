import React from 'react';

function Card({ slideOpen, Data, setItem }) {
  const itemResult = (item) => {
    setItem(item);
  };

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-1 md:mx-20 mx-10 mb-10">
        {Data.map((item) => (
          <div>
            <div key={item.id} onClick={slideOpen} className="relative">
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
                alt="icons"
              />
            </div>
          </div>
        )
        )}
      </div>
    </div>
  );
}

export default Card;
