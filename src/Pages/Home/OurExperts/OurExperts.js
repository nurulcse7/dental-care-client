import React from 'react';
import OurExpert from './OurExpert';

const OurExperts = () => {
  const servicesData = [
    {
      img: 'https://i.ibb.co/Q8R4hkf/doctor-1.jpg',
      title: 'General Dentistry',
      name: 'Dr. Johnson Melbourne',
      mail: 'john@gmail.com',
    },
    {
      img: 'https://i.ibb.co/YNWVgjt/doctor-2.jpg',
      title: 'Cosmetic Dentistry',
      name: 'Dr. Ena jolly',
      mail: 'ena@gmail.com',
    },
    {
      img: 'https://i.ibb.co/W5gNpM6/doctor-3.jpg',
      title: 'Dental Implants',
      name: 'Dr. Addison Smith',
      mail: 'addion@gmail.com',
    },
    {
      img: 'https://i.ibb.co/pQNyhcM/doctor-4.jpg',
      title: 'Orthodontics',
      name: 'Dr. Daisy Gabriela',
      mail: 'daisy@gmail.com',
    },
    {
      img: 'https://i.ibb.co/VpxdqGG/doctor-5.jpg',
      title: 'Teeth Whitening',
      name: 'Dr. Ronnie Aaron',
      mail: 'ronnie@gmail.com',
    },
    {
      img: 'https://i.ibb.co/Dfgj2Fs/doctor-6.jpg',
      title: 'Teeth Cleaning',
      name: 'Dr. Ede Dee',
      mail: 'ede@gmail.com',
    },
  ];
  return (
    <div className='mt-16'>
      <div className='text-center'>
        <h3 className='text-xl font-bold text-primary uppercase'>
          Our Dentists
        </h3>
        <h2 className='text-3xl mb-4'>
          Our Specialized and Experienced Dentist
        </h2>        
      </div>
      <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {servicesData.map((service) => (
          <OurExpert key={service.id} service={service}></OurExpert>
        ))}
      </div>
    </div>
  );
};

export default OurExperts;

// <div>
//       <h1 className='text-4xl font-bold'>
//         Our Specialized and Experienced Dentist
//       </h1>
//       <p className='py-6'>
//         Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
//         excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
//         id nisi.
//       </p>
//       <Link to='/appointment'>
//         <PrimaryButton>Getting Started</PrimaryButton>
//       </Link>
//     </div>
