import React, { useState } from 'react';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

function UserProfileForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    foodPreference: '',
    roomTemperature: '',
    studySchedule: '',
    cleaningPreference: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'userProfiles'), formData);
      alert('Profile saved successfully!');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 max-w-md mx-auto bg-white shadow-md rounded"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 border my-2"
        required
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
        className="w-full p-2 border my-2"
        required
      />
      <input
        type="text"
        name="foodPreference"
        placeholder="Food Preference"
        value={formData.foodPreference}
        onChange={handleChange}
        className="w-full p-2 border my-2"
        required
      />
      <input
        type="number"
        name="roomTemperature"
        placeholder="Preferred Room Temperature (°C)"
        value={formData.roomTemperature}
        onChange={handleChange}
        className="w-full p-2 border my-2"
        required
      />
      <input
        type="text"
        name="studySchedule"
        placeholder="Study Schedule"
        value={formData.studySchedule}
        onChange={handleChange}
        className="w-full p-2 border my-2"
        required
      />
      <input
        type="text"
        name="cleaningPreference"
        placeholder="Cleaning Preference"
        value={formData.cleaningPreference}
        onChange={handleChange}
        className="w-full p-2 border my-2"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Save Profile
      </button>
    </form>
  );
}

export default UserProfileForm;
