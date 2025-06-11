import React from 'react';
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import AllRooms from './pages/AllRooms';
import RoomDetails from './pages/RoomDetails';
import MyBookings from './pages/MyBookings';
import HotelReg from './components/HotelReg';
import Layout from './pages/hotelowner/Layout';

import DashBoard from './pages/hotelowner/DashBoard';
import ListRoom from './pages/hotelowner/ListRoom';
import AddRoom from './pages/hotelowner/AddRoom';



function App() {
  const location = useLocation();
  const isOwnerPath = location.pathname.includes("owner");

  return (
    <>
      {!isOwnerPath && <Navbar />}
     {/* {false && <HotelReg />} */}
      
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/my-bookings" element={<MyBookings />} />

          <Route path='/owner' element={<Layout/>}>
                <Route index element={<DashBoard/>}></Route>
                 <Route path="add-room"  element={<AddRoom/>}/>
                 <Route path="list-room" element={<ListRoom/>}/>
          </Route>
        </Routes>
      </div>
      
      {!isOwnerPath && <Footer />}
    </>
  );
}

export default App;
