import React, { useContext, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Typewriter from 'typewriter-effect';

const Profile = () => {
  useTitle('Profile');
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user.displayName);
  const photoURLRef = useRef(user.photoURL);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(name);
    const form = event.target;
    const photoURL = form.photoURL.value;
    console.log(photoURLRef.current.value);
    handleUpdateUserProfile(name, photoURL);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // Update profile only name and photoURL // Firebase - manage user 62-3 : 05.25
  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {
        toast.success('Updated your profile successfully');
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left ml-6'>
          <h1 className='text-3xl font-bold'>This page under developing</h1>
          <Typewriter
            options={{
              strings: ['update will soon', '. . . . . . .'],
              autoStart: true,
              loop: true,
            }}
          />
          <p className='py-6'>
            If you want to update information of your profile
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <div className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  readOnly
                  defaultValue={user?.email}
                  type='text'
                  name='email'
                  placeholder='email'
                  className='input input-bordered'
                />
              </div>

              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Your Name</span>
                </label>
                <input
                  onChange={handleNameChange}
                  defaultValue={name}
                  type='text'
                  name='name'
                  placeholder='name'
                  className='input input-bordered'
                />
              </div>

              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Photo URL</span>
                </label>
                <input
                  ref={photoURLRef}
                  defaultValue={user?.photoURL}
                  type='text'
                  name='photoURL'
                  placeholder='photo url'
                  className='input input-bordered'
                />
              </div>

              <label className='cursor-pointer flex mt-2'>
                <input
                  type='checkbox'
                  className='checkbox checkbox-info bg-success'
                />
                <span className='label-text ml-2'>Check me out</span>
              </label>

              <div className='form-control mt-6'>
                <input
                  type='submit'
                  value='Submit'
                  className='btn btn-accent'
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;

// profile file 62.6
