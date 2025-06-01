// src/pages/RoomControl.js
import React, { useState } from 'react';
import './RoomControl.css';

function RoomControl() {
  const [ac, setAc] = useState(false);
  const [lights, setLights] = useState(false);
  const [fan, setFan] = useState(false);
  const [temp, setTemp] = useState(24);
  const [cleaning, setCleaning] = useState('Morning');

  const handleSave = () => {
    alert(
      `🛏️ Room Settings Saved!\n\nAC: ${ac ? 'On' : 'Off'}\nLights: ${
        lights ? 'On' : 'Off'
      }\nFan: ${
        fan ? 'On' : 'Off'
      }\nTemperature: ${temp}°C\nCleaning Time: ${cleaning}`
    );
  };

  return (
    <div className="room-control">
      <h2>🛋️ Room Comfort Settings</h2>
      <div className="toggle-group">
        <label>
          <input
            type="checkbox"
            checked={ac}
            onChange={() => setAc(!ac)}
          />
          AC
        </label>
        <label>
          <input
            type="checkbox"
            checked={lights}
            onChange={() => setLights(!lights)}
          />
          Lights
        </label>
        <label>
          <input
            type="checkbox"
            checked={fan}
            onChange={() => setFan(!fan)}
          />
          Fan
        </label>
      </div>

      <div className="slider-section">
        <label>🌡️ Temperature: {temp}°C</label>
        <input
          type="range"
          min="16"
          max="30"
          value={temp}
          onChange={(e) => setTemp(e.target.value)}
        />
      </div>

      <div className="dropdown-section">
        <label>🧹 Cleaning Schedule:</label>
        <select
          value={cleaning}
          onChange={(e) => setCleaning(e.target.value)}
        >
          <option>Morning</option>
          <option>Afternoon</option>
          <option>Evening</option>
        </select>
      </div>

      <button
        className="save-button"
        onClick={handleSave}
      >
        ✅ Save Preferences
      </button>
    </div>
  );
}

export default RoomControl;
