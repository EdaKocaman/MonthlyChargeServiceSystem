import React, { useState, useEffect } from 'react';

const Payment = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    // Fetch payment data from your backend API
    fetch('/api/payments')
      .then(response => response.json())
      .then(data => setPayments(data))
      .catch(error => console.error('Error fetching payments:', error));
  }, []);

  return (
    <div>
      <h1>Payments</h1>
      <ul>
        {payments.map(payment => (
          <li key={`${payment.EstateId}-${payment.BuildingNo}-${payment.FlatNo}`}>
            Flat: {payment.FlatNo}, Building: {payment.BuildingNo}, Estate: {payment.EstateId}, Amount: ${payment.PaidAmount}, Status: {payment.PaymentStatus}, Date: {payment.PaymentDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Payment;
