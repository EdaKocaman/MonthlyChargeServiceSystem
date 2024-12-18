import React from 'react';
import './App.css'; // Import the CSS file
import NavBar from './Components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Estate from './Components/Estate';
import Building from './Components/Building';
import Flat from './Components/Flat';
import Resident from './Components/Resident';
import MonthlyChargeService from './Components/MonthlyChargeService';
import Payment from './Components/Payment';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/estate" element={<Estate />} />
        <Route path="/building" element={<Building />} />
        <Route path="/flat" element={<Flat />} />
        <Route path="/resident" element={<Resident />} />
        <Route path="/monthly-charge-service" element={<MonthlyChargeService />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
