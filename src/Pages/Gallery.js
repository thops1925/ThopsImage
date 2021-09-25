import React, { useState } from 'react';
import Card from '../components/Card';

export default function Gallery() {
  const [isSlideOpen, setSlideOpen] = useState(true);

  const slideOpen = () => {
    setSlideOpen(!isSlideOpen);
  };

  return <Card slidetoggle={slideOpen} state={isSlideOpen} />;
}
