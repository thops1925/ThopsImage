import { v4 as uuidv4 } from 'uuid';

const Data = [
  {
    id: uuidv4(),
    title: 'Thopshot',
    photo: [
      './images/beach/1.jpg',
      './images/beach/2.jpg',
      './images/beach/3.jpg',
      './images/beach/4.jpg',
      './images/beach/1.jpg',
      './images/beach/2.jpg',
    ],
  },
  {
    id: uuidv4(),
    title: 'beach',
    photo: [
      './images/ariane/1.jpg',
      './images/ariane/2.jpg',
      './images/ariane/3.jpg',
      './images/ariane/4.jpg',
      './images/ariane/5.jpg',
      './images/ariane/6.jpg',
      './images/ariane/7.jpg',
    ],
  },
  {
    id: uuidv4(),
    title: 'beach',
    photo: [
      './images/JP/1.jpg',
      './images/JP/2.jpg',
      './images/JP/3.jpg',
      './images/JP/4.jpg',
      './images/JP/5.jpg',
    ],
  },
];

export default Data;
