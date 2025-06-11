import React, { useState } from 'react'
import { assets, facilityIcons, roomsDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import StarRating from '../components/StarRating'

const AllRooms = () => {
  const navigate = useNavigate();

  const [openFilters, setOpenFilters] = useState(false);
  const [selectedRoomTypes, setSelectedRoomTypes] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [selectedSortOption, setSelectedSortOption] = useState('');

  const roomTypes = ["Single Bed", "Double Bed", "Family Suite", "Luxury Room"];
  const priceRanges = ["0-500", "500-1000", "1000-2000", "2000-3000"];
  const sortOptions = ["Price: Low to High", "Price: High to Low", "Newest First"];

  const handleCheckBoxChange = (checked, label, type) => {
    if (type === 'room') {
      setSelectedRoomTypes(prev =>
        checked ? [...prev, label] : prev.filter(item => item !== label)
      );
    } else if (type === 'price') {
      setSelectedPriceRanges(prev =>
        checked ? [...prev, label] : prev.filter(item => item !== label)
      );
    }
  };

  const handleSortChange = (label) => {
    setSelectedSortOption(label);
  };

  const CheckBox = ({ label, selected = false, onchange = () => { } }) => (
    <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
      <input type="checkbox" checked={selected} onChange={(e) => onchange(e.target.checked, label)} />
      <span className='font-light select-none'>{label}</span>
    </label>
  );

  const RadioButton = ({ label, selected = false, onchange = () => { } }) => (
    <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
      <input type="radio" name='sortOption' checked={selected} onChange={() => onchange(label)} />
      <span className='font-light select-none'>{label}</span>
    </label>
  );

  return (
    <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32'>

      {/* Room List */}
      <div className='w-full lg:w-2/3'>
        <div className='flex flex-col items-start text-left'>
          <h1 className='font-playfair text-4xl md:text-[40px]'>Hotel Rooms</h1>
          <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-174'>
            Unwind in our cozy Standard Room, featuring a plush queen-sized bed, high-speed Wi-Fi, and a modern ensuite bathroom — perfect for solo travelers or couples.
          </p>
        </div>

        {roomsDummyData.map((room) => (
          <div key={room._id} className='flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0'>
            <img
              onClick={() => { navigate(`/rooms/${room._id}`); scrollTo(0, 0); }}
              src={room.images[0]}
              alt="hotel-img"
              title='View Room Details'
              className='max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer'
            />
            <div>
              <p className='text-gray-500'>{room.hotel.city}</p>
              <p onClick={() => { navigate(`/rooms/${room._id}`); scrollTo(0, 0); }} className='text-gray-800 text-3xl font-playfair cursor-pointer'>{room.hotel.name}</p>
              <div className='flex items-center gap-2'>
                <StarRating />
                <p className='ml-2'>200+ reviews</p>
              </div>
              <div className='flex items-center gap-1 text-gray-500 mt-2 text-sm'>
                <img src={assets.locationIcon} alt="location-icon" />
                <span>{room.hotel.address}</span>
              </div>

              {/* Room Amenities */}
              <div className='flex items-center gap-4 mt-4 mb-6 flex-wrap'>
                {room.amenities.map((item, index) => (
                  <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5F5]/70'>
                    <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                    <p className='text-xs'>{item}</p>
                  </div>
                ))}
              </div>

              {/* Price */}
              <p className='text-xl font-medium text-gray-700'>${room.pricePerNight}/night</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filter Section */}
      <div className='bg-white w-full lg:w-80 border border-gray-300 text-gray-600 mb-8 lg:mb-0 lg:mt-16'>
        <div className={`flex items-center justify-between px-5 py-2.5 border-b border-gray-300`}>
          <p className='text-base font-medium text-gray-800'>FILTERS</p>
          <div className='text-xs cursor-pointer'>
            <span onClick={() => setOpenFilters(!openFilters)} className='lg:hidden'>
              {openFilters ? 'Hide' : 'Show'}
            </span>
            <span onClick={() => {
              setSelectedRoomTypes([]);
              setSelectedPriceRanges([]);
              setSelectedSortOption('');
            }} className='hidden lg:block'>CLEAR</span>
          </div>
        </div>

        <div className={`${openFilters ? 'h-auto' : 'h-0 lg:h-auto'} overflow-hidden transition-all duration-700`}>
          <div className='px-5 pt-5'>
            <p className='font-medium text-gray-800 pb-2'>Popular Filters</p>
            {roomTypes.map((room, index) => (
              <CheckBox
                key={index}
                label={room}
                selected={selectedRoomTypes.includes(room)}
                onchange={(checked, label) => handleCheckBoxChange(checked, label, 'room')}
              />
            ))}
          </div>

          <div className='px-5 pt-5'>
            <p className='font-medium text-gray-800 pb-2'>Price Range</p>
            {priceRanges.map((range, index) => (
              <CheckBox
                key={index}
                label={`$${range}`}
                selected={selectedPriceRanges.includes(`$${range}`)}
                onchange={(checked, label) => handleCheckBoxChange(checked, label, 'price')}
              />
            ))}
          </div>

          <div className='px-5 pt-5 pb-5'>
            <p className='font-medium text-gray-800 pb-2'>Sort By</p>
            {sortOptions.map((option, index) => (
              <RadioButton
                key={index}
                label={option}
                selected={selectedSortOption === option}
                onchange={handleSortChange}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
