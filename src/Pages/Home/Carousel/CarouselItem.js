import React from 'react';
import { Link } from 'react-router-dom';
import './CarouselItem.css';

const CarouselItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className='carousel-item relative w-full py-24'>
      <div className='carousel-img'>
        <img src={image} alt='' className='w-full rounded-xl' />
      </div>
      <div className='absolute flex justify-end transform -translate-y-1/2 left-8 top-1/3'>
        <h1 className='text-6xl font-bold'>
          Personalized Dental Care
          <br />
          <span className='text-primary'>Where,</span>
          <br />
          Your Health is Our
          <br/>
          <span className='text-accent'>Top Priority</span>
        </h1>
      </div>

      <div className='absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4'>
        <Link to='/appointment'>
          <button className='btn btn-primary btn-lg font-bold'>Book Now</button>
        </Link>
      </div>
      <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0'>
        <a href={`#slide${prev}`} className='btn btn-circle mr-5 '>
          <span
            className='tooltip tooltip-left capitalize'
            data-tip='Left Scroll'
          >
            {' '}
            ❮
          </span>
        </a>
        <a href={`#slide${next}`} className='btn btn-circle'>
          <span
            className='tooltip tooltip-left capitalize'
            data-tip='Right Scroll'
          >
            ❯
          </span>
        </a>
      </div>
    </div>
  );
};

export default CarouselItem;
