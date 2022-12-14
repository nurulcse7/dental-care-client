import React from 'react';
import makeAppointment from '../../../assets/images/makeAppointment.jpg';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const MakeAppointment = () => {
  useTitle('Appointment');
  
  return (
    <section className='mt-32 shadow-2xl'>
      <div className='hero'>
        <div className='hero-content flex-col lg:flex-row'>
          <img
            src={makeAppointment}
            alt=''
            className='-mt-32 hidden md:block lg:w-1/2 rounded-lg shadow-2xl'
          />
          <div>
            <h4 className='text-lg text-primary font-bold'>Appointment</h4>
            <h1 className=' text-4xl font-bold'>Make an appointment Today</h1>
            <p className='py-6'>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <Link to='/appointment'>
              <PrimaryButton>Getting Started</PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
