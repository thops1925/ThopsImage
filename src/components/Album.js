import React from 'react';

export default function Album({ photo, slideOpen, slideToggle }) {
  console.log(photo);
  return (
    <>
      <div className="grid md:grid-cols-3 items-center justify-center px-16">
        {photo.map((item) => {
          return (
            <div key={item.id}>
              <img
                className="object-cover h-96 w-full p-2"
                src={item}
                alt=""
                // onClick={() => modal(file)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
