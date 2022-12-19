import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import DisplayService from './DisplayService';

const DisplayServices = () => {
  const servicesData = [
    {
      img: 'https://i.ibb.co/RNgNR9z/services-1.jpg',
      price: '50',
      name: 'General Dentistry',
      des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quam voluptatem ipsum obcaecati ab perferendis officiis, et esse! Est, odit?',
    },
    {
      img: 'https://i.ibb.co/svy4BWt/services-2.jpg',
      price: '60',
      name: 'Cosmetic Dentistry',
      des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quam voluptatem ipsum obcaecati ab perferendis officiis, et esse! Est, odit?',
    },
    {
      img: 'https://i.ibb.co/XtZ3BD7/services-3.jpg',
      price: '70',
      name: 'Dental Implants',
      des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quam voluptatem ipsum obcaecati ab perferendis officiis, et esse! Est, odit?',
    },
    {
      img: 'https://i.ibb.co/W2Tn5Df/services-4.jpg',
      price: '90',
      name: 'Orthodontics',
      des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quam voluptatem ipsum obcaecati ab perferendis officiis, et esse! Est, odit?',
    },
    {
      img: 'https://i.ibb.co/J2ZYkft/services-5.jpg',
      price: '80',
      name: 'Teeth Whitening',
      des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quam voluptatem ipsum obcaecati ab perferendis officiis, et esse! Est, odit?',
    },
    {
      img: 'https://i.ibb.co/3r79Q5b/services-6.jpg',
      price: '99',
      name: 'Teeth Cleaning',
      des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quam voluptatem ipsum obcaecati ab perferendis officiis, et esse! Est, odit?',
    },
  ];

  return (
    <div className='mt-16'>
      <div className='text-center'>
        <h3 className='text-2xl font-bold text-primary uppercase'>
          Our Best Dental Services
        </h3>
        <h2 className='text-xl mb-4'>
          Enjoy Specialized Care Through Precision, Artistry, and Experience
        </h2>

        <Link to='/appointment'><PrimaryButton>Make Appointment</PrimaryButton></Link>
      </div>
      <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {servicesData.map((service) => (
          <DisplayService key={service.id} service={service}></DisplayService>
        ))}
      </div>
    </div>
  );
};

export default DisplayServices;
