import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './about';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;
