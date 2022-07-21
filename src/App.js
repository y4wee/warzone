import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Matches from './pages/Matches';
import Stats from './pages/Stats';
import Profil from './pages/Profil';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/matches" element={<Matches />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
