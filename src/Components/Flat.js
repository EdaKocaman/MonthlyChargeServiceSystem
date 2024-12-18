import React, { useState, useEffect } from 'react';

const Flat = () => {
  const [flats, setFlats] = useState([]);

  useEffect(() => {
    // Fetch flats data from your backend API
    fetch('/api/flats')
      .then(response => response.json())
      .then(data => setFlats(data))
      .catch(error => console.error('Error fetching flats:', error));
  }, []);

  return (
    <div>
      <h1>Flats</h1>
      <ul>
        {flats.map(flat => (
          <li key={`${flat.EstateId}-${flat.BuildingNo}-${flat.FlatNo}`}>
            Flat No: {flat.FlatNo}, Building: {flat.BuildingNo}, Estate: {flat.EstateId}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Flat;
