import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets';
import StarRating from '../components/StarRating';

const RoomDetails = () => {
    const { id } = useParams();
    const [room, setRoom] = useState(null);
    const [mainImage, setMainImage] = useState(null);

    useEffect(() => {
        const foundRoom = roomsDummyData.find((room) => room._id.toString() === id);
        if (foundRoom) {
            setRoom(foundRoom);
            setMainImage(foundRoom.images?.[0]);
        }
    }, [id]);

    if (!room) {
        return <div className="py-28 px-4 text-center">Loading room details...</div>;
    }

    return (
        <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
            {/* Room Details */}
            <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
                <h1 className='text-3xl md:text-4xl font-playfair'>
                    {room.hotel?.name} <span className='font-inter text-sm'> - {room.room?.type}</span>
                </h1>
                <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>20% OFF</p>
            </div>

            {/* Room Rating */}
            <div className='flex items-center gap-1 mt-2'>
                <StarRating rating={room.rating || 4} />
                <p className='ml-2'>200+ reviews</p>
            </div>

            {/* Room Address */}
            <div className='flex items-center gap-1 text-gray-500 mt-2'>
                <img src={assets.locationIcon} alt="Location" />
                <span>{room.hotel?.address}</span>
            </div>

            {/* Room Images */}
            <div className='flex flex-col lg:flex-row mt-6 gap-6'>
                <div className='lg:w-1/2 w-full'>
                    {mainImage && (
                        <img
                            src={mainImage}
                            alt="Room"
                            className='w-full rounded-xl shadow-lg object-cover'
                        />
                    )}
                </div>
                <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
                    {room.images?.length > 1 &&
                        room.images.map((image, index) => (
                            <img
                                onClick={() => setMainImage(image)}
                                key={index}
                                className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${
                                    mainImage === image ? 'outline outline-2 outline-orange-500' : ''
                                }`}
                                src={image}
                                alt='Room Thumbnail'
                            />
                        ))}
                </div>
            </div>

              {/* Room Highlights */}
               <div className='flex flex-col md:flex-row md:justify-between mt-10 gap-6'>
  {/* Left: Title & Amenities */}
  <div>
    <h1 className='text-3xl md:text-4xl font-playfair mb-4'>
      Experience Luxury Like Never Before
    </h1>
    
    <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
      {room.amenities.map((item, index) => (
        <div key={index} className='flex items-center gap-2'>
          <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
          <p className='text-sm font-inter'>{item}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Right: Price */}
  <div className='text-xl md:text-2xl font-semibold text-gray-800 md:text-right'>
    ${room.pricePerNight} <span className='text-sm text-gray-500 font-normal'>/ night</span>
  </div>
  
</div>
   {/* checkin checkout form */}
     <form className='flex flex-col md:flex-row items-start md:items-end justify-between gap-4 bg-white shadow-[0_0_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl'>

  {/* Check-in */}
  <div className='flex flex-col w-full md:w-auto'>
    <label htmlFor="checkInDate" className='font-medium mb-1'>Check-In</label>
    <input
      type="date"
      id="checkInDate"
      className='w-full rounded border border-gray-300 px-3 py-2 outline-none'
      required
    />
  </div>
 <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
  {/* Check-out */}
  <div className='flex flex-col w-full md:w-auto'>
    <label htmlFor="checkOutDate" className='font-medium mb-1'>Check-Out</label>
    <input
      type="date"
      id="checkOutDate"
      className='w-full rounded border border-gray-300 px-3 py-2 outline-none'
      required
    />
  </div>
  <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>

  {/* Guests */}
  <div className='flex flex-col w-full md:w-auto'>
    <label htmlFor="guests" className='font-medium mb-1'>Guests</label>
    <input
      type="number"
      id="guests"
      placeholder="1"
      min="1"
      className='w-full md:w-20 rounded border border-gray-300 px-3 py-2 outline-none'
      required
    />
  </div>

  {/* Submit Button */}
<button
  type="submit"
  className="bg-orange-500 hover:bg-orange-600 active:scale-95 transition-all text-white font-medium rounded-md w-full md:w-auto px-6 py-2 text-base mt-4 md:mt-0 focus:outline-none"
>
  Check Availability
</button>



</form>

{/* common specification */}

<div className='mt-25 space-y-4 '>
    {roomCommonData.map((spec,index)=>(
        <div key={index} className='flex items-start gap-2'>
           <img src={spec.icon} alt={`${spec.title}-icon`} className='w-6.5'></img>
           <div>
            <p className='text-base'>{spec.title}</p>
            <p className='text-gray-500'>{spec.description}</p>
           </div>
        </div>
    ))}
</div>

            {/* Room Description */}
            <div className='max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500'>
                <p>Plan your perfect getaway by selecting your check-in and check-out dates.
Choose the number of guests and reserve your stay in just one click.
Simple, fast, and secure hotel room booking at your fingertips.</p>
            </div>

            {/* Hosted By */}

            <div className='flex flex-col items-start gap-4 '>
                <div className='flex gap-4'>
                    <img src={room.hotel.owner.image} alt="Host" className='h-14 w-14 md:h-18 md:w-18 rounded-full' />
                    <div>
                        <p className='text-lg md:text-xl '>Hosted By {room.hotel.name}</p>
                        <div className='flex items-center mt-1'>
                            <StarRating/>
                            <p className='ml-2'>200+ reviews</p>
                        </div>
                    </div>
                </div>
            </div>
    <button className='px-6 py-2.5 mt-4 rounded text-white bg-blue-600 hover:bg-blue-700 transition-all cursor-pointer'>
  Contact Now
</button>


        </div>
        
    );
};

export default RoomDetails;
