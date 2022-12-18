import React from 'react';
import Contact from '../../Contact/Contact';
import DentalCare from '../../DentalCare/DentalCare';
import Banner from '../Banner/Banner';
import Carousel from '../Carousel/Carousel';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import OurExperts from '../OurExperts/OurExperts';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
  return (
    <div className='mx-5'>
    <marquee className='text-xl text-primary' behavior='' direction='left'>
        Welcome to Dental Care! Need a expert? Go to Appointment
      </marquee>
      <Carousel></Carousel>
      <InfoCards></InfoCards>
      <Services></Services>
      <Banner></Banner>
      <OurExperts></OurExperts>
      <MakeAppointment></MakeAppointment>
      <DentalCare></DentalCare>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
};

export default Home;
