import React from 'react';
import { assets, cities } from '../assets/assets';

const HotelReg = () => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black/70'>
      <form className='flex bg-white rounded-xl max-w-4xl max-md:mx-2 w-full'>
        <img
          src={assets.regImage}
          alt='reg-image'
          className='w-1/2 rounded-l-xl hidden md:block object-cover'
        />
        <div className='relative flex flex-col items-center md:w-1/2 p-8 md:p-10 w-full'>
          <img
            src={assets.closeIcon}
            alt='close-icon'
            className='absolute top-4 right-4 h-4 w-4 cursor-pointer'
          />

          <p className='text-2xl font-semibold mt-6 mb-2'>Register Your Hotel</p>

          {/* Hotel Name */}
          <div className='w-full mt-4'>
            <label htmlFor='name' className='font-medium text-gray-600'>
              Hotel Name
            </label>
            <input
              id='name'
              type='text'
              placeholder='Enter hotel name'
              className='border border-gray-300 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light'
              required
            />
          </div>

          {/* Contact */}
          <div className='w-full mt-4'>
            <label htmlFor='contact' className='font-medium text-gray-600'>
              Contact
            </label>
            <input
              id='contact'
              type='text'
              placeholder='Enter contact number'
              className='border border-gray-300 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light'
              required
            />
          </div>

          {/* Address */}
          <div className='w-full mt-4'>
            <label htmlFor='address' className='font-medium text-gray-600'>
              Address
            </label>
            <input
              id='address'
              type='text'
              placeholder='Enter full address'
              className='border border-gray-300 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light'
              required
            />
          </div>

          {/* City Dropdown */}
          <div className='w-full mt-4'>
            <label htmlFor='city' className='font-medium text-gray-600'>
              City
            </label>
            <select
              id='city'
              className='border border-gray-300 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light'
              required
            >
              <option value=''>Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <button
            type='submit'
            className='bg-indigo-500 hover:bg-indigo-600 transition-all text-white px-6 py-2 rounded cursor-pointer mt-6 self-start'
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default HotelReg;
