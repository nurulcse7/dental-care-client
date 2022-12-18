import React from 'react'
import { Link } from 'react-router-dom'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton'

const OurExperts = () => {
  return (
    <div>
          <h1 className='text-4xl font-bold'>Our Specialized and Experienced Dentist</h1>
          <p className='py-6'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to='/appointment'>
            <PrimaryButton>Getting Started</PrimaryButton>
          </Link>
        </div>
  )
}

export default OurExperts