import React, { useState } from 'react';
import Album from '../components/Album';
import Card from '../components/Card';
// import Slider from '../components/Slider';
// import data from '../Data/Data';

export default function Gallery() {
  const [isSlideOpen, setSlideOpen] = useState(false);
  const [isItem, setItem] = useState([]);

  const slideOpen = () => {
    setSlideOpen(!isSlideOpen);
  };
  // const [{ photo }] = data;

  // console.log(photo);

  return (
    <>
      <Card setItemResult={setItem} />
      <Album slideOpen={isSlideOpen} photo={isItem} slideToggle={slideOpen} />
      {/* <Slider
        slideOpen={isSlideOpen}
        isphoto={isphoto}
        slideToggle={slideOpen} */}
      {/* /> */}
    </>
  );
}
