import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import useToken from '../../hooks/useToken';

const SignUp = () => {
  useTitle('SignUp');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser, verifyEmail } = useContext(AuthContext);
  const [signUpError, setSignUPError] = useState('');
  const [createdUserEmail, setCreatedUserEmail] = useState('');
  const [agree, setAgree] = useState(false);

  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  if (token) {
    navigate('/');
  }

  const handleSignUp = (data) => {
    setSignUPError('');

    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success('User Created Successfully.');
        handleEmailVerification();
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        setSignUPError(error.message);
      });
  };
  // 75
  const saveUser = (name, email) => {
    const user = { name, email };
    fetch('https://dental-care-server-rho.vercel.app/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
  };

  // Without verify email user can't login and access private route 62-4
  const handleEmailVerification = () => {
    verifyEmail()
      .then(() => {
        toast.success(
          'Please check your inbox/spam folder and verify your email address'
        );
      })
      .catch((error) => console.error(error));
  };

  // Agree to terms and conditions (checkbox and para) 62-3
  const handleAgreed = (event) => {
    setAgree(event.target.checked);
  };

  return (
    <div className='h-[800px] flex justify-center items-center shadow-2xl'>
      <div className='w-96 p-7'>
        <h2 className='text-2xl text-center font-bold'>Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              {' '}
              <span className='label-text text-lg'>Name</span>
            </label>
            <input
              type='text'
              {...register('name', {
                required: 'Name is Required',
              })}
              placeholder='Your Full Name'
              className='input input-bordered w-full max-w-xs'
            />
            {errors.name && (
              <p className='text-red-500'>{errors.name.message}</p>
            )}
          </div>

          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <span className='label-text text-lg'>Email</span>
            </label>
            <input
              type='email'
              {...register('email', {
                required: 'Email is required',
              })}
              placeholder='email address'
              className='input input-bordered w-full max-w-xs'
            />
            {errors.email && (
              <p className='text-red-500'>{errors.email.message}</p>
            )}
          </div>

          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <span className='label-text text-lg'>Address</span>
            </label>
            <input
              type='text'
              {...register('address', {
                required: false,
              })}
              placeholder='address'
              className='input input-bordered w-full max-w-xs'
            />
            {errors.address && (
              <p className='text-red-500'>{errors.address.message}</p>
            )}
          </div>

          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <span className='label-text text-lg'>Phone Number</span>
            </label>
            <input
              type='text'
              {...register('phone', {
                required: 'Phone required',
              })}
              placeholder='mobile'
              className='input input-bordered w-full max-w-xs'
            />
            {errors.phone && (
              <p className='text-red-500'>{errors.phone.message}</p>
            )}
          </div>

          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <span className='label-text text-lg'>Photo URL</span>
            </label>
            <input
              type='text'
              {...register('photo', {
                required: false,
              })}
              placeholder='photo url'
              className='input input-bordered w-full max-w-xs'
            />
            {errors.photo && (
              <p className='text-red-500'>{errors.photo.message}</p>
            )}
          </div>

          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              {' '}
              <span className='label-text text-lg'>Password</span>
            </label>
            <input
              type='password'
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be 6 characters long',
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    'Password must have uppercase, number and special characters',
                },
              })}
              placeholder='min 6 digit, 1 sp, 1 Uppercase'
              className='input input-bordered w-full max-w-xs'
            />
            {errors.password && (
              <p className='text-red-500'>{errors.password.message}</p>
            )}
          </div>

          <label className='cursor-pointer flex mt-3'>
            <input
              onClick={handleAgreed}
              type='checkbox'
              className='checkbox checkbox-info bg-success'
            />
            <span className='label-text ml-1'>
              Agree
              <Link to='/terms' className='underline hover:text-green-500'>
                {' '}
                to terms and conditions
              </Link>
            </span>
          </label>

          <input
            className='btn bg-gradient-to-r from-accent to-secondary text-xl text-white capitalize w-full mt-4'
            value='Sign Up'
            type='submit'
            disabled={!agree}
          />
          {signUpError && <p className='text-red-600'>{signUpError}</p>}
        </form>
        <p className='mt-1'>
          Already have an account{' '}
          <Link className='text-secondary' to='/login'>
            Please Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
// <div className='divider'>OR</div>
//         <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
