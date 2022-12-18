import React from 'react';
import { Link } from 'react-router-dom';
import smile from '../../../assets/images/smile.jpg';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
  return (
    <div className='hero my-36 shadow-2xl'>
      <div className='hero-content flex-col lg:flex-row'>
        <img src={smile} className='rounded-lg lg:w-1/2 shadow-2xl' alt='' />
        <div>
          <h1 className='text-4xl font-bold'>Start Your New Smile </h1>
          <p className='py-6'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to='/appointment'>
            <PrimaryButton>Getting Started</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
