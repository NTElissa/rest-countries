import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AllCountires } from './components/AllCountries/AllCountires';
import { CountryInfo } from './components/CountryInfo/CountryInfo';

import './App.css';

function App() {
  return (
    <>
      <div className="header">
        <div className="container">
          <h5>Where in the Words?</h5>
        </div>
      </div>

      <div className="content-container">
        <Routes>
          <Route path="/" element={<AllCountires />} />
          <Route path="/country/:countryName" element={<CountryInfo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
