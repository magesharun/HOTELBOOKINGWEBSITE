import React, { useState } from 'react';
import Title from '../components/Title';
import { assets, userBookingsDummyData } from '../assets/assets';

const MyBookings = () => {
  const [bookings, setBookings] = useState(userBookingsDummyData);

  return (
    <div className='py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32'>
      <Title
        title='My Bookings'
        subTitle='Discover a perfect blend of comfort and elegance in our thoughtfully designed rooms'
        align='left'
      />

      <div className='max-w-6xl mt-8 w-full text-gray-800'>
        <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3'>
          <div>Hotels</div>
          <div>Date & Timings</div>
          <div>Payment</div>
        </div>

        {bookings.map((booking) => (
          <div
            key={booking._id}
            className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full py-6 border-b border-gray-300 first:border-t gap-6'
          >
            {/* Hotel Details */}
            <div className='flex flex-col md:flex-row gap-4'>
              <img
                src={booking.room.images[0]}
                alt='hotel-img'
                className='w-full md:w-44 rounded shadow object-cover'
              />
              <div className='space-y-2'>
                <p className='font-playfair text-2xl'>
                  {booking.hotel.name}{' '}
                  <span className='font-inter text-sm text-gray-600'>
                    ({booking.room.roomType})
                  </span>
                </p>
                <div className='flex items-center gap-2 text-sm text-gray-500'>
                  <img src={assets.locationIcon} alt='location-icon' className='w-4 h-4' />
                  <span>{booking.hotel.address}</span>
                </div>
                <div className='flex items-center gap-2 text-sm text-gray-500'>
                  <img src={assets.guestsIcon} alt='guest-icon' className='w-4 h-4' />
                  <span>Guests: {booking.guests}</span>
                </div>
                <p className='text-base font-semibold'>Total: ${booking.totalPrice}</p>
              </div>
            </div>

            {/* Date & Timings */}
            <div className='flex md:flex-col justify-between text-sm text-gray-700'>
              <div>
                <p>Check-In:</p>
                <p className='text-gray-500 text-sm'>
                  {new Date(booking.checkInDate).toDateString()}
                </p>
              </div>
              <div>
                <p>Check-Out:</p>
                <p className='text-gray-500 text-sm'>
                  {new Date(booking.checkOutDate).toDateString()}
                </p>
              </div>
            </div>

            {/* Payment Status */}
            <div className='flex flex-col items-start justify-center gap-2'>
              <div className='flex items-center gap-2'>
                <div
                  className={`h-3 w-3 rounded-full ${
                    booking.isPaid ? 'bg-green-500' : 'bg-red-500'
                  }`}
                ></div>
                <p className='text-sm'>
                  {booking.isPaid ? 'Paid' : 'Unpaid'}
                </p>
              </div>
              {!booking.isPaid && (
                <button className='mt-2 px-4 py-1.5 bg-orange-500 text-white text-sm rounded hover:bg-orange-600 transition'>
                  Pay Now
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
