import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from './firebase';

const db = getFirestore(app);

function ProfileDisplay() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    async function fetchProfiles() {
      const querySnapshot = await getDocs(collection(db, 'profiles'));
      const profilesList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProfiles(profilesList);
    }
    fetchProfiles();
  }, []);

  return (
    <div>
      <h2>Saved Profiles</h2>
      {profiles.length === 0 && <p>No profiles found.</p>}
      {profiles.map((profile) => (
        <div
          key={profile.id}
          className="profile-card"
        >
          <p>
            <b>Name:</b> {profile.name}
          </p>
          <p>
            <b>Age:</b> {profile.age}
          </p>
          <p>
            <b>Food Preference:</b> {profile.foodPreference}
          </p>
          <p>
            <b>Room Temperature:</b> {profile.roomTemperature} °C
          </p>
          <p>
            <b>Study Schedule:</b> {profile.studySchedule}
          </p>
          <p>
            <b>Cleaning Preference:</b> {profile.cleaningPreference}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ProfileDisplay;
