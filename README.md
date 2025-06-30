# RoomMitra.AI  
From Food to Mood, It's All Understood

RoomMitra.AI is a lifestyle and emotional wellness companion designed for students and professionals living away from home. It offers smart food recommendations, mood-aware support, environmental comfort control, and a friendly AI chatbot named RUMI. This project was built by Team TechMinds (Shanti Kumari Gautam and Sneha Kumari) from IGDTUW, and was presented at the Nagarro Hackathon 2025, held in Gurugram.

---

## Problem Statement

Living away from home often leads to unhealthy routines, missed meals, and emotional isolation. RoomMitra.AI was built to tackle this problem. It aims to act as a friend, guide, and support system for students and working professionals in shared accommodations, PGs, or hostels.

---

## Solution Overview

RoomMitra.AI provides:
- Personalized meal recommendations using Spoonacular API
- Mood and hydration reminders
- A dashboard to adjust room environment preferences
- An empathetic chatbot named RUMI that offers emotional support
- Long-term plans to integrate smart IoT features and community-based wellness features

---

## Key Features

1. **RUMI – AI Chat Companion**  
  **Deployed at**: [https://shantikumarigautam.github.io/RoomMitra.AI-Personalised-food-and-facility-management/](https://shantikumarigautam.github.io/RoomMitra.AI-Personalised-food-and-facility-management/)

   RUMI listens empathetically, sends check-ins, and acts as a non-judgmental digital companion for emotional well-being.

2. **Smart Meal Recommendation**  
   Based on user diet, cuisine, and goals (e.g., weight gain, calorie control). Powered by Spoonacular API.

3. **Comfort Automation Dashboard (Prototype)**  
   Allows users to adjust room temperature, lights, and fan preferences. Future integration with MQTT and IoT devices planned.

4. **Mood & Hydration Reminders**  
   Sends subtle and non-intrusive reminders to hydrate, rest, or breathe.

5. **User-Centric Interface**  
   Clean, minimal, responsive interface built using React.js and Firebase.

---

## Tech Stack

**Frontend**: React.js  
**Backend**: Flask (Python)  
**Authentication & DB**: Firebase  
**Food Intelligence**: Spoonacular API  
**Deployment**: GitHub Pages (for RUMI), Firebase (planned)  
**Future Additions**: MQTT for IoT, Google Fit API, voice integration

---


---

## Setup Instructions

### 1. Clone the repository
git clone https://github.com/your-username/RoomMitra.AI.git


### 2. Backend (Flask)
cd RoomMitra.AI/backend
python -m venv venv
source venv/bin/activate # or venv\Scripts\activate on Windows
pip install -r requirements.txt
python app.py


### 3. Frontend (React)
cd ../frontend
npm install
npm start


---

## API Reference – Spoonacular

Used for generating meal suggestions based on:
- Diet type: vegetarian / vegan / non-veg
- Cuisine: Indian, Chinese, etc.
- Fitness goals: calorie control, protein-rich meals

Example API Call:
GET https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&cuisine=indian&maxCalories=500&apiKey=your_api_key


---

## Future Features

- Voice Assistant Integration using Google Speech API or Whisper
- Multilingual Support with Indian regional languages (Hindi, Marathi, Gujarati, etc.)
- IoT-based automation using MQTT and NodeMCU
- Fitness Tracking via Google Fit or Fitbit APIs
- Gamified user engagement (badges, streaks)
- Parent Companion Dashboard
- Emergency health alerts and emotional anomaly detection
- Community features for peer support and safe anonymous chats

---

## Dataset Details

- Uses real-time emotional patterns collected from student surveys
- Nutrition data sourced through Spoonacular
- WHO and Healthline data used to link deficiencies (e.g., Vitamin D, Iron) with mood and food suggestions

---

## References

- Spoonacular Food API  
- Firebase Documentation  
- WHO Report on Vitamin Deficiency  
- Healthline articles on iron and mental health  
- OCD Mental Health Statistics (NOCD)  
- Oregon State University Vitamin D Study

---

## Team

**Team TechMinds – IGDTUW**

- **Shanti Kumari Gautam**  
 
- **Sneha Kumari**  
 
---

## License

This project is licensed under the MIT License.

---

## Closing Note

RUMI cares like a real friend would.  
From food to mood, it’s all understood.  
Not just smart, but kind and true —  
RoomMitra is here to care for you.


