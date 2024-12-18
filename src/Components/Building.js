import React, { useState, useEffect } from 'react';

const Building = () => {
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    // Fetch buildings data from your backend API
    fetch('/api/buildings')
      .then(response => response.json())
      .then(data => setBuildings(data))
      .catch(error => console.error('Error fetching buildings:', error));
  }, []);

  return (
    <div>
      <h1>Buildings</h1>
      <ul>
        {buildings.map(building => (
          <li key={`${building.EstateId}-${building.BuildingNo}`}>
            Building No: {building.BuildingNo}, Manager: {building.BuildingManager}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Building;
