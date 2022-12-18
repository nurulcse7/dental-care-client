import React from 'react';
import { Link } from 'react-router-dom';
import Exceptional from '../../assets/images/Exceptional.jpg';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';

const DentalCare = () => {
  return (
    <div className='hero my-36 shadow-2xl'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <img
          src={Exceptional}
          className='rounded-lg lg:w-1/2 shadow-2xl'
          alt=''
        />
        <div>
          <h1 className='text-4xl font-bold'>Exceptional Dental</h1>
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

export default DentalCare;

// <div className='hero '>
//       <div className='hero-content flex-col lg:flex-row p-28'>
//         <img
//           src={Treatment}
//           className='max-w-sm rounded-lg shadow-2xl' alt='DentalCarePhoto'
//         />
//         <div className='p-16'>
//           <h1 className='text-5xl font-bold'>Exceptional Dental <br /> Care, on Your Terms</h1>
//           <p className='py-6'>
//             Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
//             excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
//             a id nisi.
//           </p>
//           <button className='btn btn-primary'>Get Started</button>
//         </div>
//       </div>
//     </div>
