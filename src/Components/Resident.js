import React, { useState, useEffect } from 'react';

const Resident = () => {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    // Fetch residents data from your backend API
    fetch('/api/residents')
      .then(response => response.json())
      .then(data => setResidents(data))
      .catch(error => console.error('Error fetching residents:', error));
  }, []);

  return (
    <div>
      <h1>Residents</h1>
      <ul>
        {residents.map(resident => (
          <li key={resident.TCID}>
            {resident.FirstName} {resident.LastName} - Phone: {resident.Phone}, Flat: {resident.FlatNo}, Building: {resident.BuildingNo}, Estate: {resident.EstateId}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resident;
