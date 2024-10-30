import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './componets/About';
import Contact from './componets/Contact';
import Home from './componets/Home';
import Services from './componets/Services';
import Management from './componets/Management';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/management" element={<Management />} />
    </Routes>
  );
}

export default App;