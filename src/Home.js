import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="overlay">
        <header
          className="hero-section"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '15px',
          }}
        >
          <img
            src="/logo512.png"
            alt="RoomMitra Logo"
            className="logo"
          />
          <h1 className="main-title">RoomMitra.AI</h1>

          {/* Updated button to use React Router Link */}
          <Link
            to="/rumi"
            className="get-started-btn"
          >
            Chat with RUMI
          </Link>
        </header>

        <section className="features">
          <div className="feature-card">
            <img
              src="https://img.icons8.com/color/96/meal.png"
              alt="Food"
            />
            <h3>Smart Food Suggestions</h3>
            <p>Personalized meal plans based on your taste and lifestyle.</p>
          </div>

          <div className="feature-card">
            <img
              src="https://img.icons8.com/fluency/96/air-conditioner.png"
              alt="Room"
            />
            <h3>Room Environment Control</h3>
            <p>
              Auto-adjust temperature & comfort settings based on your profile.
            </p>
          </div>

          <div className="feature-card">
            <img
              src="https://img.icons8.com/fluency/96/chatbot.png"
              alt="RUMI Chatbot"
            />
            <h3>RUMI Chatbot</h3>
            <p>
              Get instant help and personalized assistance anytime you need.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
