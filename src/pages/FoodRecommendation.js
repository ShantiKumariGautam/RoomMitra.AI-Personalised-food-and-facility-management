import React, { useState } from 'react';

function FoodRecommendation() {
  const [formData, setFormData] = useState({
    name: '',
    dietType: 'vegetarian',
    cuisine: '',
    goal: '',
  });

  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getFoodSuggestions = async (diet, cuisine, goal) => {
    try {
      const response = await fetch(
        'http://127.0.0.1:5000/api/food-recommendation',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            dietType: diet,
            cuisine: cuisine,
            goal: goal,
          }),
        }
      );

      const data = await response.json();
      return data.suggestions || [];
    } catch (error) {
      console.error('Error fetching food suggestions:', error);
      return [
        'Oopsie daisy! 🌸 Looks like the kitchen is taking a nap. Try a different combo or give us a moment to spice things up again!',
      ];
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const recommendedDishes = await getFoodSuggestions(
      formData.dietType,
      formData.cuisine,
      formData.goal
    );
    setSuggestions(recommendedDishes);
  };

  return (
    <div
      style={{
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f0f8ff, #a0d8ef)',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: '20px',
        color: '#333',
      }}
    >
      <h2 style={{ marginBottom: '20px', color: '#2a9d8f' }}>
        🍽️ Personalized Food Recommendation
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '400px',
          width: '100%',
          backgroundColor: '#ffffffcc',
          padding: '25px',
          borderRadius: '12px',
          boxShadow: '0 8px 20px rgba(42, 157, 143, 0.2)',
        }}
      >
        <label style={{ marginBottom: '6px', fontWeight: '600' }}>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your name"
          style={{
            padding: '10px',
            borderRadius: '8px',
            border: '1.5px solid rgb(67, 219, 243)',
            marginBottom: '15px',
            fontSize: '16px',
          }}
        />

        <label style={{ marginBottom: '6px', fontWeight: '600' }}>
          Diet Type:
        </label>
        <select
          name="dietType"
          value={formData.dietType}
          onChange={handleChange}
          required
          style={{
            padding: '10px',
            borderRadius: '8px',
            border: '1.5px solid rgb(86, 212, 234)',
            marginBottom: '15px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          <option value="vegetarian">🥦 Vegetarian</option>
          <option value="non-vegetarian">🍗 Non-Vegetarian</option>
          <option value="vegan">🌱 Vegan</option> {/* ✅ Vegan option */}
        </select>

        <label style={{ marginBottom: '6px', fontWeight: '600' }}>
          Preferred Cuisine:
        </label>
        <input
          type="text"
          name="cuisine"
          placeholder="e.g. Indian, Italian, Chinese, Mexican, Japanese"
          value={formData.cuisine}
          onChange={handleChange}
          required
          style={{
            padding: '10px',
            borderRadius: '8px',
            border: '1.5px solid rgb(80, 203, 228)',
            marginBottom: '15px',
            fontSize: '16px',
          }}
        />

        <label style={{ marginBottom: '6px', fontWeight: '600' }}>
          Dietary Goal:
        </label>
        <input
          type="text"
          name="goal"
          placeholder="e.g. , weight loss, weight gain, low calorie"
          value={formData.goal}
          onChange={handleChange}
          required
          style={{
            padding: '10px',
            borderRadius: '8px',
            border: '1.5px solid rgb(103, 203, 240)',
            marginBottom: '20px',
            fontSize: '16px',
          }}
        />

        <button
          type="submit"
          style={{
            backgroundColor: '#2a9d8f',
            color: 'white',
            padding: '12px',
            fontSize: '18px',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontWeight: '700',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#21867a')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#2a9d8f')}
        >
          🍴 Get Suggestions
        </button>
      </form>

      {suggestions.length > 0 && (
        <div
          style={{
            marginTop: '30px',
            backgroundColor: '#ffffffcc',
            padding: '20px 30px',
            borderRadius: '12px',
            boxShadow: '0 6px 15px rgba(42, 157, 143, 0.15)',
            maxWidth: '400px',
            width: '100%',
          }}
        >
          <h3 style={{ color: '#264653' }}>
            Hi {formData.name}! Based on your preferences, we suggest:
          </h3>
          <ul
            style={{
              listStyleType: 'none',
              paddingLeft: '0',
              marginTop: '15px',
            }}
          >
            {suggestions.map((dish, index) => (
              <li
                key={index}
                style={{
                  backgroundColor: '#e0f7f5',
                  marginBottom: '10px',
                  padding: '10px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  fontSize: '16px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                }}
              >
                {dish}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FoodRecommendation;
