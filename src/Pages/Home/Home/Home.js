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

// <a href="#" id="scroll-to-top" style="display: block;"><span>↑ Scroll to top</span></a>

// html {
//   scroll-behavior: smooth;
// }
// @media (prefers-reduced-motion: reduce) {
//   html {
//     scroll-behavior: auto;
//   }
// }

// #scroll-to-top {
//   font-size: 1rem;
//   color: #fff;
//   background-color: #43853d;
//   border: 1px solid #43853d;
//   border-radius: 4px;
//   position: fixed;
//   bottom: 10%;
//   right: 0;
//   min-width: 20px;
//   text-align: center;
//   padding: 0 5px 1px;
//   margin-right: 15px;
//   opacity: 0;
//   animation: button-fade 0.5s 1s 1 forwards;
// }
// #scroll-to-top span {
//   display: -ms-flexbox;
//   display: flex;
//   -ms-flex-direction: row;
//       flex-direction: row;
//   padding: 5px;
// }
// @keyframes button-fade {
//   0% {
//     opacity: 0;
//   }
//   100% {
//     opacity: 1;
//   }
// }
// @media (max-width: 600px) {
//   #scroll-to-top span {
//     display: none;
//   }
// }

// .anchor {
//   color: #ccc;
//   background: none;
//   padding: 0 0.25em;
// }
// .anchor:link, .anchor:active, .anchor:hover {
//   color: #ccc;
//   background: inherit;
// }
// .anchor:focus::before {
//   content: "#";
// }
