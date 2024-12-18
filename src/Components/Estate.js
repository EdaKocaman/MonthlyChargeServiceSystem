import React, { useState, useEffect } from 'react';

const Estate = () => {
  const [estates, setEstates] = useState([]);

  useEffect(() => {
    // Fetch estates data from your backend API
    fetch('/api/estates')
      .then(response => response.json())
      .then(data => setEstates(data))
      .catch(error => console.error('Error fetching estates:', error));
  }, []);

  return (
    <div>
      <h1>Estates</h1>
      <ul>
        {estates.map(estate => (
          <li key={estate.EstateID}>
            {estate.EstateName} - Janitor: {estate.EstateJanitor}, Charge: ${estate.ChargeAmount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Estate;
