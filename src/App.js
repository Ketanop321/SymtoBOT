import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import SymptomChecker from './Pages/SymptomChecker';
import Dashboard from './Pages/Dashboard';
import About from './Pages/About';
import Contact from './Pages/Contact';
import './App.css';
import Navbar from './components/Navbar';

const App = () => {
  const [images, setImages] = useState([]);

  const addImage = (image) => {
    setImages((prevImages) => [...prevImages, image]);
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* Wrap all Route components inside Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SymptomChecker" element={<SymptomChecker />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
