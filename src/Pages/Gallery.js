import React, { useState } from 'react';
import Album from '../components/Album';
import Card from '../components/Card';
import Data from '../Data/Data';

export default function Gallery() {
  const [isSlideOpen, setSlideOpen] = useState(true);
  const [isItem, setItem] = useState([]);

  const slideOpen = () => {
    setSlideOpen(!isSlideOpen);
  };
  return (
    <div>
      {isSlideOpen ? (
        <Card slideOpen={slideOpen} Data={Data} setItem={setItem} />
      ) : (
        <Album photo={isItem} />
      )}
    </div>
  );
}
