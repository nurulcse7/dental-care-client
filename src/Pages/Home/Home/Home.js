import React from 'react';
import useTitle from '../../../hooks/useTitle';
import DisplayServices from '../../Appointment/DisplayServices/DisplayServices';
import Contact from '../../Contact/Contact';
import DentalCare from '../../DentalCare/DentalCare';
import Banner from '../Banner/Banner';
import Carousel from '../Carousel/Carousel';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import OurExperts from '../OurExperts/OurExperts';
import Testimonial from '../Testimonial/Testimonial';
import './Home.css';

const Home = () => {
  useTitle('Home');

  return (
    <div className='mx-5 '>
      <div className='marquee'>
      <p>Welcome to Dental Care! Need a expert? Go to Appointment</p>
      </div>

      <Carousel></Carousel>
      <InfoCards></InfoCards>
      <DisplayServices></DisplayServices>
      <Banner></Banner>
      <OurExperts></OurExperts>
      <DentalCare></DentalCare>
      <Testimonial></Testimonial>
      <MakeAppointment></MakeAppointment>
      <Contact></Contact>
    </div>
  );
};

export default Home;
