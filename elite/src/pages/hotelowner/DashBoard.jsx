import React from 'react';
import Title from '../../components/Title';
import { assets, dashboardDummyData } from '../../assets/assets';

const DashBoard = () => {
  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
      <Title
        align="left"
        font="outfit"
        title="Dashboard"
        subTitle="Manage Bookings, Guests & Revenue — All in One Place"
      />

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
        {/* Card 1 */}
        <div className="flex items-center gap-4 bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100 rounded-xl p-5">
          <img src={assets.totalBookingIcon} alt="Total Bookings" className="h-12 hidden sm:block" />
          <div>
            <p className="text-blue-600 text-lg font-semibold">Total Bookings</p>
            <p className="text-gray-600 text-base">{dashboardDummyData.totalBookings}</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center gap-4 bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100 rounded-xl p-5">
          <img src={assets.totalRevenueIcon} alt="Total Revenue" className="h-12 hidden sm:block" />
          <div>
            <p className="text-blue-600 text-lg font-semibold">Total Revenue</p>
            <p className="text-gray-600 text-base">{dashboardDummyData.totalRevenue}</p>
          </div>
        </div>
      </div>

      {/* Recent Bookings */}
      <h2 className="text-2xl text-blue-800 font-semibold mb-5">Recent Bookings</h2>

      <div className="w-full overflow-x-auto bg-white rounded-xl shadow-md border border-gray-200">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-5 text-left text-gray-700 font-semibold">User Name</th>
              <th className="py-3 px-5 text-left text-gray-700 font-semibold hidden sm:table-cell">Room Name</th>
              <th className="py-3 px-5 text-center text-gray-700 font-semibold">Total Amount</th>
              <th className="py-3 px-5 text-center text-gray-700 font-semibold">Payment Status</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {dashboardDummyData.bookings.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition-colors border-t border-gray-200"
              >
                <td className="py-3 px-5">{item.user.username}</td>
                <td className="py-3 px-5 hidden sm:table-cell">{item.room.roomType}</td>
                <td className="py-3 px-5 text-center">${item.totalPrice}</td>
                <td className="py-3 px-5 text-center">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      item.isPaid
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {item.isPaid ? 'Completed' : 'Pending'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashBoard;
