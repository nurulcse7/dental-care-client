import React from 'react';
import useTitle from '../../hooks/useTitle';

const About = () => {
  useTitle('About');

  return (
    <div className='my-12 shadow-2xl'>
      <h1 className='text-center text-2xl'>About us</h1>
      <div className='m-5 p-5'>
        <div className='m-2 p-2'>
          <h2 className='text-xl'>Family-friendly Practice At Dental Care</h2>
          <p className='mt-3'>
            Canley Heights Dental Care is a sister practice to our popular
            Cabramatta Dental Care practice. <br />
            We’ve proudly looked after Cabramatta families for the past 20
            years, and we’re excited to offer the same high standard of care and
            meticulous approach in Canley Heights. <br />
            The team at Canley Heights is here to make every visit to the
            dentist affordable and as easy as possible for every patient.
          </p>
        </div>
        <div className='m-2 p-2'>
          <h2 className='text-xl'>Individual Care</h2>
          <p className='mt-3'>
            We are a family-friendly practice, welcoming patients of all ages in
            Canley Heights and the surrounding areas. <br />
            You’ll see that we always take the time to explain the treatment
            options available, and why we recommend them. <br />
            That’s because we want our patients to feel confident in their
            choice of treatment and the expected results.
          </p>
        </div>
        <div className='m-2 p-2'>
          <h2 className='text-xl'>Always Available When You Need Us</h2>
          <p className='mt-3'>
            Our practice is open seven days a week, which means that you’ll
            always be able to find a time that is convenient for you and your
            family for your treatments and check-ups. <br />
            You’ll also have the comfort of knowing that we’ll be able to see
            you quickly to have you pain-free again if you have any problems
            with your teeth.
          </p>
        </div>
        <div className='m-2 p-2'>
          <h2 className='text-xl'>Reasonably Priced Treatments</h2>
          <p className='mt-3'>
            A trip to the dentist should be affordable for the whole family. Our
            dental treatments are competitively priced, and we have a range of
            no-gap general dental treatments available. <br />
            We’ll let you know exactly how much a treatment will cost. There
            won’t be any surprise costs hidden in a treatment plan. <br />
            <span className='text-lg font-bold'>
              Our approach to pricing
            </span>{' '}
            <br />
            ✔ If you have private health cover (with any Australian health fund
            that includes dental cover) you can take advantage of our no-gap
            general dental treatments. <br />
            ✔ Children who are eligible under the Child Dental Benefits Scheme
            (CDBS) are bulk billed. If you’re not sure if your child is
            eligible, please call us and our friendly team will check for you.{' '}
            <br />✔ Tailored repayment plans are also available if you don’t
            have private health cover.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
