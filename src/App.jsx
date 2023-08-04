import React from 'react';
import { BrowserRouter as Router, Route, Routes, Route as Navigate } from 'react-router-dom';
import Home from './components/Home';
import Appointment from './components/Appointment';
import Blog from './components/Blog';
import ResponsiveAppBar from './components/ResponsiveAppBar';

function App() {
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Navigate path="/home" element={<Home />} />
        <Navigate path="/appointment" element={<Appointment />} />
        <Navigate path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
