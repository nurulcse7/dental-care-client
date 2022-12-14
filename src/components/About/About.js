import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const About = () => {
  return (
    <div
      className='hero min-h-screen'
      style={{ backgroundImage: `url("https://i.ibb.co/87JD0fn/profile-pic-circle.png")` }}
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md text-5xl font-bold'>
        <Typewriter 
            options={{
              strings: [
                `<h1>Hello there,</h1>
                <h3>This page is under development...update soon, Thanks</h3>`
              ],
              autoStart: true,
              loop: true,
            }}
          />
          <Link to='/' className='btn btn-primary font-bold'> Back to Home Page</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
