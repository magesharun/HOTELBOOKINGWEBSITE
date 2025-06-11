import React, { useState } from 'react';
import Title from '../../components/Title';
import { roomsDummyData } from '../../assets/assets';

const ListRoom = () => {
  const [rooms, setRooms] = useState(roomsDummyData);

  const handleAvailabilityToggle = (index) => {
    const updatedRooms = [...rooms];
    updatedRooms[index].isAvailable = !updatedRooms[index].isAvailable;
    setRooms(updatedRooms);
  };

  return (
    <div className="px-4 sm:px-10 py-6">
      <Title
        align="left"
        font="Outfit"
        Title="Room Listings"
        subTitle="View, edit, or manage all listed rooms. Keep the information up-to-date to provide the best experience for users."
      />

      <p className="text-gray-700 mt-10 text-lg font-semibold">All Rooms</p>

      <div className="w-full overflow-x-auto bg-white rounded-xl shadow-lg border border-gray-200 mt-4">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-4 px-6 text-left text-gray-700 font-bold">Room Type</th>
              <th className="py-4 px-6 text-left text-gray-700 font-bold hidden sm:table-cell">Amenities</th>
              <th className="py-4 px-6 text-center text-gray-700 font-bold">Price/Night</th>
              <th className="py-4 px-6 text-center text-gray-700 font-bold">Availability</th>
            </tr>
          </thead>
          <tbody className="bg-white text-gray-800">
            {rooms.map((item, index) => (
              <tr key={index} className="border-t border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-6">{item.roomType}</td>
                <td className="py-4 px-6 hidden sm:table-cell">
                  {item.amenities.join(', ')}
                </td>
                <td className="py-4 px-6 text-center font-medium text-blue-600">
                  ₹{item.pricePerNight}
                </td>
                <td className="py-4 px-6 text-center">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={item.isAvailable}
                      onChange={() => handleAvailabilityToggle(index)}
                    />
                    <div className="w-12 h-7 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 transition duration-300"></div>
                    <span className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ease-in-out peer-checked:translate-x-5"></span>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListRoom;
