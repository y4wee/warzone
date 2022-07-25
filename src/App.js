import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Stats from './pages/Stats';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/rebirth" element={<Stats />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
