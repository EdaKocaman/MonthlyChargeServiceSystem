import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/estate">Estate</Link>
      <Link to="/building">Building</Link>
      <Link to="/flat">Flat</Link>
      <Link to="/resident">Resident</Link>
      <Link to="/monthly-charge-service">Monthly Charge Service</Link>
      <Link to="/payment">Payment</Link>
    </nav>
  );
};

export default NavBar;
