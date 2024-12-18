import React, { useState, useEffect } from 'react';

const MonthlyChargeService = () => {
  const [charges, setCharges] = useState([]);

  useEffect(() => {
    // Fetch monthly charge service data from your backend API
    fetch('/api/monthlycharges')
      .then(response => response.json())
      .then(data => setCharges(data))
      .catch(error => console.error('Error fetching monthly charges:', error));
  }, []);

  return (
    <div>
      <h1>Monthly Charge Service</h1>
      <ul>
        {charges.map(charge => (
          <li key={charge.MonthlyChargeId}>
            Charge ID: {charge.MonthlyChargeId}, Flat: {charge.FlatNo}, Building: {charge.BuildingNo}, Estate: {charge.EstateId}, Amount: ${charge.ChargeAmount}, Paid: ${charge.PaidAmount}, Status: {charge.PaymentStatus}, Date: {charge.PaymentDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MonthlyChargeService;
