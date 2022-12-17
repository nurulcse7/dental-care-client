import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
  return (
    <div className='mx-5'>
    <marquee className='text-xl text-primary' behavior='' direction='left'>
        Welcome to Dental Care! Need a expert? Go to Appointment
      </marquee>
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
