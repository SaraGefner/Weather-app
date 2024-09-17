import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Weather from '../pages/WeatherPage';

const Router = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </BrowserRouter>

    
   );
};

export default Router;