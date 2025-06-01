import React, { useState } from 'react';

const userData = {
  name: 'Shanti',
  history: ['maggi', 'momos', 'pasta'],
  preferences: ['healthy', 'low oil', 'high protein'],
};

const healthySuggestions = [
  'Quinoa Salad',
  'Grilled Paneer',
  'Sprouts Chaat',
  'Vegetable Soup',
];

function FoodRecommendation() {
  const [suggestions, setSuggestions] = useState([]);

  const getRecommendations = () => {
   
    const result = healthySuggestions.filter((item, index) => index < 3);
    setSuggestions(result);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Hello {userData.name} 👋</h2>
      <p>
        Your eating goal: <strong>{userData.preferences.join(', ')}</strong>
      </p>

      <button onClick={getRecommendations}>Get Food Suggestions 🍽️</button>

      {suggestions.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h3>Recommended for you:</h3>
          <ul>
            {suggestions.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FoodRecommendation;
