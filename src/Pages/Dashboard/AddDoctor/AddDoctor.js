import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imageHostKey = process.env.REACT_APP_imgBB_key; //76-4
  // console.log(imageHostKey)
  const navigate = useNavigate();

  const { data: specialties, isLoading } = useQuery({
    queryKey: ['specialty'],
    queryFn: async () => {
      const res = await fetch(
        'https://dental-care-server-rho.vercel.app/appointmentSpecialty'
      );
      const data = await res.json();
      return data;
    },
  });

  const handleAddDoctor = (data) => {
    console.log(data);
    // 76-4
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url,
          };

          // save doctor information to the database 76-5
          fetch('https://dental-care-server-rho.vercel.app/doctors', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `bearer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is added successfully`);
              navigate('/dashboard/managedoctors');
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className='w-96 p-7 shadow-2xl rounded-3xl'>
      <h2 className='text-4xl'>Add A Doctor</h2>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            {' '}
            <span className='label-text text-lg mt-2'>Name</span>
          </label>
          <input
            type='text'
            {...register('name', {
              required: 'Name is Required',
            })}
            className='input input-bordered w-full max-w-xs'
          />
          {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            {' '}
            <span className='label-text text-lg mt-2'>Email</span>
          </label>
          <input
            type='email'
            {...register('email', {
              required: true,
            })}
            className='input input-bordered w-full max-w-xs'
          />
          {errors.email && (
            <p className='text-red-500'>{errors.email.message}</p>
          )}
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            {' '}
            <span className='label-text text-lg mt-2'>Specialty</span>
          </label>
          <select
            {...register('specialty')}
            className='select input-bordered w-full max-w-xs'
          >
            {specialties.map((specialty) => (
              <option key={specialty._id} value={specialty.name}>
                {specialty.name}
              </option>
            ))}
          </select>
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label'>
            {' '}
            <span className='label-text text-lg mt-2 '>Photo</span>
          </label>
          <input
            type='file'
            {...register('image', {
              required: 'Photo is Required',
            })}
            className='input input-bordered w-full max-w-xs p-2'
          />
          {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
        </div>

        <input
          className='btn bg-gradient-to-r from-accent to-secondary text-xl text-white capitalize w-full mt-4'
          value='Add Doctor'
          type='submit'
        />
      </form>
    </div>
  );
};
export default AddDoctor;
// 76-1, 2, 3, 4, 5.
/**
 * Three places to store images
 * 1. Third party image hosting server
 * 2. File system of your server
 * 3. mongodb (database)
 */
