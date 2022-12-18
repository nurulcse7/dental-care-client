import React from 'react';
import img1 from '../../../assets/banner/banner01.jpg';
import img2 from '../../../assets/banner/banner02.jpg';
import img3 from '../../../assets/banner/banner03.jpg';
import img4 from '../../../assets/banner/banner04.jpg';
import img5 from '../../../assets/banner/banner05.jpg';
import img6 from '../../../assets/banner/banner06.jpg';
import CarouselItem from './CarouselItem';

const carouselData = [
  {
    image: img1,
    prev: 6,
    id: 1,
    next: 2,
  },
  {
    image: img2,
    prev: 1,
    id: 2,
    next: 3,
  },
  {
    image: img3,
    prev: 2,
    id: 3,
    next: 4,
  },
  {
    image: img4,
    prev: 3,
    id: 4,
    next: 5,
  },
  {
    image: img5,
    prev: 4,
    id: 5,
    next: 6,
  },
  {
    image: img6,
    prev: 5,
    id: 6,
    next: 1,
  },
];

const Carousel = () => {
  return (
    <div className='carousel w-full py-10'>
      {carouselData.map((slide) => (
        <CarouselItem key={slide.id} slide={slide}></CarouselItem>
      ))}
    </div>
  );
};

export default Carousel;
