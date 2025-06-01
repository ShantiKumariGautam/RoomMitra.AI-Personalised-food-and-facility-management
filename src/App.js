import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';

import ProfileForm from './ProfileForm';
import ProfileDisplay from './ProfileDisplay';
import FoodRecommendation from './pages/FoodRecommendation';
import RoomControl from './pages/RoomControl';
import Home from './Home';
import About from './About';
import Rumi from './pages/Rumi'; // Ensure correct path

import './App.css';

function App() {
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    '💧 Have you drunk water today?',
    '🍽️ Did you eat something nourishing?',
    '🧘 Take 3 deep breaths, now… better?',
    '😴 It’s time to wind down for sleep.',
    '💖 Rumi says: You are loved and supported.',
  ];

  return (
    <Router>
      <div className="app-container">
        {/* Navbar */}
        <nav className="navbar">
          <div className="nav-left">
            <Link to="/">Home</Link> | <Link to="/about">About</Link> |{' '}
            <Link to="/profile">Profile</Link> |{' '}
            <Link to="/profiles">View Profiles</Link> |{' '}
            <Link to="/food">Food</Link> | <Link to="/room">Room Control</Link>{' '}
            | <Link to="/rumi">RUMI</Link>
          </div>

          <div className="nav-right">
            <div className="notification-wrapper">
              <FaBell
                className="notification-icon"
                onClick={() => setShowNotifications(!showNotifications)}
              />
              {showNotifications && (
                <div className="notification-dropdown">
                  {notifications.map((note, index) => (
                    <div
                      key={index}
                      className="notification-item"
                    >
                      {note}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Page Routes */}
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/profile"
            element={<ProfileForm />}
          />
          <Route
            path="/profiles"
            element={<ProfileDisplay />}
          />
          <Route
            path="/food"
            element={<FoodRecommendation />}
          />
          <Route
            path="/room"
            element={<RoomControl />}
          />
          <Route
            path="/rumi"
            element={<Rumi />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

