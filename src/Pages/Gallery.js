import React, { useState } from 'react';
import Card from '../components/Card';
// import Slider from '../components/Slider';
// import data from '../Data/Data';

export default function Gallery() {
  const [isSlideOpen, setSlideOpen] = useState(true);

  const slideOpen = () => {
    setSlideOpen(!isSlideOpen);
  };
  // const [{ photo }] = data;

  // console.log(photo);

  return (
    <>
      <Card slidetoggle={slideOpen} state={isSlideOpen} />
    </>
  );
}
