import {
  getAuth,
  GoogleAuthProvider,
  sendPasswordResetEmail,
} from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import app from '../../firebase/firebase.config';
import useTitle from '../../hooks/useTitle';
import useToken from '../../hooks/useToken';

const auth = getAuth(app);

const Login = () => {
  useTitle('Login');

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { user, signIn, signInWithGoogle } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const [userEmail, setUserEmail] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginUserEmail, setLoginUserEmail] = useState('');
  const [token] = useToken(loginUserEmail); //75-7
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    console.log(data);
    setLoginError('');
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email);
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  // // to get email address for password reset 57-9 (start here)
  // const handleEmailBlur = (data) => {
  //   const email = data.email.target.value;
  //   setUserEmail(email);
  //   console.log(email);
  // };
  // const handleForgetPassword = () => {
  //   if (!userEmail) {
  //     toast('Please enter your email address.');
  //     return;
  //   }
  //   sendPasswordResetEmail(auth, userEmail)
  //     .then(() => {
  //       toast('Email sent for reset password, plz check inbox/spam folder.');
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };
  // //  password reset 57-9 (stop here)

  // Google sign 61-7
  const handleGoogleSignIn = () => {
    signInWithGoogle(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [navigate, user, from]);

  return (
    <div className='h-[800px] flex justify-center items-center shadow-2xl'>
      <div className='w-96 p-7'>
        <h2 className='text-3xl text-center font-bold'>Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              {' '}
              <span className='label-text text-lg'>Email</span>
            </label>
            <input
              
              type='email'
              name='email'
              {...register('email', {
                required: 'Email Address is required',
              })}
              placeholder='Registered email'
              className='input input-bordered w-full max-w-xs'
            />
            {errors.email && (
              <p className='text-red-600'>{errors.email?.message}</p>
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
                  message: 'Password must be 6 characters or longer',
                },
              })}
              placeholder='Your password'
              className='input input-bordered w-full max-w-xs mb-3'
            />
            
            {errors.password && (
              <p className='text-red-600'>{errors.password?.message}</p>
            )}
          </div>
          <input
            className='btn btn-accent w-full text-xl capitalize mt-2'
            value='Login'
            type='submit'
          />
          <div>
            {loginError && <p className='text-red-600'>{loginError}</p>}
          </div>
        </form>
        <p className='mt-2'>
          New to Dental Care{' '}
          <Link className='text-secondary' to='/signup'>
            Create new account
          </Link>
        </p>
        <div className='divider'>OR</div>
        <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;

// onBlur={handleEmailBlur}

// <label className='label'>
//               <Link to='' className='label-text text-lg'>
//                 <span className='text-red-400'>Forgot password?</span>{' '}
//                 <span
//                   onClick={handleForgetPassword}
//                   className='link link-hover capitalize text-green-500'
//                 >
//                   Reset Password
//                 </span>
//               </Link>
//             </label>