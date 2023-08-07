import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Appointment from './components/Appointment';
import Blog from './components/Blog';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Login from './components/Login';
import NewAccount from './components/NewAccount';
import ReservationPage from './components/ReservationPage';
import Profile from './components/Profile';
import DocProfile from './components/DocProfile';
import Demand from './components/Demand';

function App() {
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        {/* Set the default route to the Home component */}
        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newAccount" element={<NewAccount />} />
        <Route path="/logout" element={<Home />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/DocProfile" element={<DocProfile />} />
        <Route path="/Demand" element={<Demand />} />

       
     
      </Routes>
    </Router>
  );
}

export default App;
