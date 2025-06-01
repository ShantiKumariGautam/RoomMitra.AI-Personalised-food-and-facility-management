import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>Why Choose RoomMitra.AI?</h1>
        <p>
          Your friendly buddy away from home! 🏠💙 RoomMitra.AI understands your
          needs — from personalized food suggestions 🍲 to a comfy room
          environment 🌬️. We’re here to make your day smoother and happier,
          because you deserve a little extra care, every day. 😊❤️
        </p>
        <p>
          Smart, simple, and made just for you — that’s RoomMitra.AI. Experience
          comfort and care like never before!
        </p>
        <div className="footer">
          All rights reserved © 2025 &nbsp;
          <span
            role="img"
            aria-label="heart"
          >
            💖
          </span>
          &nbsp;
          <span
            role="img"
            aria-label="sparkles"
          >
            ✨
          </span>
          &nbsp;
          <span
            role="img"
            aria-label="smile"
          >
            😊
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
