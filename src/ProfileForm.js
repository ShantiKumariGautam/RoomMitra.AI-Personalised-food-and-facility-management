import './ProfileForm.css';
import React, { useState } from 'react';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

function ProfileForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    foodPreference: '',
    roomTemperature: '',
    brightness: '',
    cuisine: '',
    studySchedule: '',
    cleaningPreference: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      await addDoc(collection(db, 'profiles'), formData);
      setMessage('🎉 Profile saved successfully!');
      setFormData({
        name: '',
        age: '',
        foodPreference: '',
        roomTemperature: '',
        brightness: '',
        cuisine: '',
        studySchedule: '',
        cleaningPreference: '',
      });
    } catch (error) {
      setMessage('❌ Failed to save profile. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h2 className="form-heading">📝 Personalize Your Experience</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Age:</label>
        <input
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <label>Food Preference:</label>
        <select
          name="foodPreference"
          value={formData.foodPreference}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="non-veg">Non-Vegetarian</option>
          <option value="vegan">Vegan</option>
        </select>

        <label>Preferred Room Temperature (°C):</label>
        <input
          name="roomTemperature"
          type="number"
          value={formData.roomTemperature}
          onChange={handleChange}
        />

        <label>Preferred Light Brightness (%):</label>
        <input
          name="brightness"
          type="number"
          value={formData.brightness}
          onChange={handleChange}
        />

        <label>Preferred Cuisine:</label>
        <input
          name="cuisine"
          value={formData.cuisine}
          onChange={handleChange}
        />

        <label>Study Schedule:</label>
        <select
          name="studySchedule"
          value={formData.studySchedule}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="morning">Morning</option>
          <option value="night">Night</option>
        </select>

        <label>Cleaning Preference:</label>
        <input
          name="cleaningPreference"
          value={formData.cleaningPreference}
          onChange={handleChange}
        />

        <button
          type="submit"
          disabled={loading}
        >
          {loading ? 'Saving...' : '💾 Save Profile'}
        </button>

        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}

export default ProfileForm;
