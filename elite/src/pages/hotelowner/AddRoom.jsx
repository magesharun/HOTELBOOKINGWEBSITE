import React, { useState } from 'react';
import Title from '../../components/Title';
import { assets } from '../../assets/assets';
import { FaPlus } from 'react-icons/fa';

const AddRoom = () => {
  const [images, setImages] = useState({
    1: null, 2: null, 3: null, 4: null
  });

  const [inputs, setInputs] = useState({
    roomType: '',
    pricePerNight: '',
    amenities: {
      'Free Wifi': false,
      'Free BreakFast': false,
      'Free RoomService': false,
      'Mountain View': false,
      'Pool Access': false
    }
  });

  return (
    <form className="bg-white p-6 sm:p-10 rounded-xl shadow-xl max-w-4xl mx-auto mt-6">
      <Title
        align="left"
        font="Outfit"
        Title="Add Room"
        subTitle="Fill in Room Details to Make It Available for Booking"
      />

      {/* Upload Images */}
      <p className="text-gray-800 font-semibold mt-10 mb-2">Upload Room Images</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(images).map((key) => (
          <label htmlFor={`roomImage${key}`} key={key} className="cursor-pointer">
            <img
              className="h-32 w-full object-cover rounded-lg border-2 border-dashed border-blue-300 hover:border-blue-500 transition duration-200"
              src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea}
              alt="Room Upload"
            />
            <input
              type="file"
              accept="image/*"
              id={`roomImage${key}`}
              hidden
              onChange={(e) =>
                setImages({ ...images, [key]: e.target.files[0] })
              }
            />
          </label>
        ))}
      </div>

      {/* Room Type and Price */}
      <div className="flex flex-col sm:flex-row gap-6 mt-8">
        <div className="flex-1">
          <label className="block text-gray-800 font-semibold mb-1">Room Type</label>
          <select
            value={inputs.roomType}
            onChange={(e) =>
              setInputs({ ...inputs, roomType: e.target.value })
            }
            className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Room Type</option>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Luxury Room">Luxury Room</option>
            <option value="Family Suite">Family Suite</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-800 font-semibold mb-1">
            Price <span className="text-xs text-gray-500">/night</span>
          </label>
          <input
            type="number"
            placeholder="0"
            className="border border-gray-300 rounded-lg p-3 w-36 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={inputs.pricePerNight}
            onChange={(e) =>
              setInputs({ ...inputs, pricePerNight: e.target.value })
            }
          />
        </div>
      </div>

      {/* Amenities */}
      <p className="text-gray-800 font-semibold mt-8 mb-2">Select Amenities</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-700">
        {Object.keys(inputs.amenities).map((amenity, index) => (
          <label
            key={index}
            className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg border border-gray-200 hover:bg-blue-50 transition"
          >
            <input
              type="checkbox"
              checked={inputs.amenities[amenity]}
              onChange={() =>
                setInputs({
                  ...inputs,
                  amenities: {
                    ...inputs.amenities,
                    [amenity]: !inputs.amenities[amenity],
                  },
                })
              }
              className="accent-blue-500"
            />
            <span className="text-sm">{amenity}</span>
          </label>
        ))}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-10 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-md"
      >
        <FaPlus /> Add Room
      </button>
    </form>
  );
};

export default AddRoom;
